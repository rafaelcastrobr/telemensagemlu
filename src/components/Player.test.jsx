import { render, screen, fireEvent, cleanup, act } from '@testing-library/react'

import Player from './Player'

// react-player falso: guarda as props recebidas e expõe o estado no DOM.
const propsPorUrl = {}
const chamadasDeSeek = []
jest.mock('react-player', () => {
  const React = require('react')
  return React.forwardRef(function ReactPlayerFalso(props, ref) {
    React.useImperativeHandle(ref, () => ({ seekTo: (...args) => chamadasDeSeek.push(args) }))
    propsPorUrl[props.url] = props
    return React.createElement('i', { 'data-testid': `audio-${props.url}`, 'data-playing': String(props.playing) })
  })
})

afterEach(cleanup)

const tocando = (url) => screen.getByTestId(`audio-${url}`).getAttribute('data-playing')
const barra = (nome) => screen.getByRole('progressbar', { name: `Progresso de ${nome}` })

describe('Player', () => {
  test('mostra o que vem em children no cartão', () => {
    render(<Player link="a.mp3" nome="A"><label>COD: 1</label></Player>)
    expect(screen.getByText('COD: 1')).toBeTruthy()
  })

  test('toca um áudio por vez', () => {
    render(
      <div>
        <Player link="a.mp3" nome="A" />
        <Player link="b.mp3" nome="B" />
      </div>
    )
    expect(tocando('a.mp3')).toBe('false')

    fireEvent.click(screen.getByLabelText('Tocar A'))
    expect(tocando('a.mp3')).toBe('true')
    expect(screen.getByLabelText('Pausar A')).toBeTruthy()

    fireEvent.click(screen.getByLabelText('Tocar B'))
    expect(tocando('b.mp3')).toBe('true')
    expect(tocando('a.mp3')).toBe('false')
    expect(screen.getByLabelText('Tocar A')).toBeTruthy()

    fireEvent.click(screen.getByLabelText('Pausar B'))
    expect(tocando('b.mp3')).toBe('false')
  })

  test('mostra o progresso e o tempo', () => {
    render(<Player link="c.mp3" nome="C" />)
    expect(barra('C').getAttribute('aria-valuenow')).toBe('0')
    expect(document.body.textContent).toContain('0:00 / --:--')

    act(() => propsPorUrl['c.mp3'].onDuration(75))
    expect(document.body.textContent).toContain('0:00 / 1:15')

    fireEvent.click(screen.getByLabelText('Tocar C'))
    act(() => propsPorUrl['c.mp3'].onProgress({ playedSeconds: 30 }))
    expect(document.body.textContent).toContain('0:30 / 1:15')
    expect(barra('C').getAttribute('aria-valuenow')).toBe('30')
    expect(barra('C').getAttribute('aria-valuemax')).toBe('75')
  })

  test('ao terminar, volta ao início e ao botão de tocar', () => {
    render(<Player link="d.mp3" nome="D" />)
    act(() => propsPorUrl['d.mp3'].onDuration(60))
    fireEvent.click(screen.getByLabelText('Tocar D'))
    act(() => propsPorUrl['d.mp3'].onProgress({ playedSeconds: 59 }))

    act(() => propsPorUrl['d.mp3'].onEnded())
    expect(tocando('d.mp3')).toBe('false')
    expect(document.body.textContent).toContain('0:00 / 1:00')
    expect(chamadasDeSeek[chamadasDeSeek.length - 1]).toEqual([0])
    expect(screen.getByLabelText('Tocar D')).toBeTruthy()
  })

  test('parar descarrega o áudio e zera o progresso', () => {
    render(<Player link="e.mp3" nome="E" />)
    fireEvent.click(screen.getByLabelText('Tocar E'))
    act(() => propsPorUrl['e.mp3'].onProgress({ playedSeconds: 10 }))

    fireEvent.click(screen.getByLabelText('Parar E'))
    expect(screen.getByTestId('audio-null')).toBeTruthy()
    expect(barra('E').getAttribute('aria-valuenow')).toBe('0')

    fireEvent.click(screen.getByLabelText('Tocar E'))
    expect(tocando('e.mp3')).toBe('true')
  })
})
