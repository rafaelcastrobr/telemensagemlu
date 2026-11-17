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

beforeEach(() => { chamadasDeSeek.length = 0 })
afterEach(cleanup)

const tocando = (url) => screen.getByTestId(`audio-${url}`).getAttribute('data-playing')
const barra = (nome) => screen.getByRole('slider', { name: `Posição de ${nome}` })

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
    expect(barra('C').value).toBe('0')
    expect(document.body.textContent).toContain('0:00 / --:--')

    act(() => propsPorUrl['c.mp3'].onDuration(75))
    expect(document.body.textContent).toContain('0:00 / 1:15')

    fireEvent.click(screen.getByLabelText('Tocar C'))
    act(() => propsPorUrl['c.mp3'].onProgress({ playedSeconds: 30 }))
    expect(document.body.textContent).toContain('0:30 / 1:15')
    expect(barra('C').value).toBe('30')
    expect(barra('C').max).toBe('75')
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
    expect(barra('E').value).toBe('0')

    fireEvent.click(screen.getByLabelText('Tocar E'))
    expect(tocando('e.mp3')).toBe('true')
  })

  describe('barra de posição (arrastar)', () => {
    function comDuracao(link, nome, segundos) {
      render(<Player link={link} nome={nome} />)
      act(() => propsPorUrl[link].onDuration(segundos))
      return barra(nome)
    }

    test('fica desativada enquanto a duração não é conhecida e depois de parar', () => {
      render(<Player link="f.mp3" nome="F" />)
      expect(barra('F').disabled).toBe(true)

      act(() => propsPorUrl['f.mp3'].onDuration(60))
      expect(barra('F').disabled).toBe(false)

      fireEvent.click(screen.getByLabelText('Parar F'))
      expect(barra('F').disabled).toBe(true)
    })

    test('arrastar e soltar leva o áudio para a posição escolhida', () => {
      const slider = comDuracao('g.mp3', 'G', 100)
      fireEvent.click(screen.getByLabelText('Tocar G'))
      act(() => propsPorUrl['g.mp3'].onProgress({ playedSeconds: 10 }))

      fireEvent.pointerDown(slider)
      fireEvent.change(slider, { target: { value: '45' } })
      // durante o arraste a barra mostra o destino e não pula ainda
      expect(slider.value).toBe('45')
      expect(document.body.textContent).toContain('0:45 / 1:40')
      expect(chamadasDeSeek).toEqual([])

      fireEvent.pointerUp(window)
      expect(chamadasDeSeek).toEqual([[45, 'seconds']])
      expect(barra('G').value).toBe('45')
    })

    test('o progresso do áudio não puxa a barra enquanto arrasta', () => {
      const slider = comDuracao('h.mp3', 'H', 100)
      fireEvent.click(screen.getByLabelText('Tocar H'))

      fireEvent.pointerDown(slider)
      fireEvent.change(slider, { target: { value: '80' } })
      act(() => propsPorUrl['h.mp3'].onProgress({ playedSeconds: 12 }))
      expect(barra('H').value).toBe('80')

      fireEvent.pointerUp(window)
      act(() => propsPorUrl['h.mp3'].onProgress({ playedSeconds: 81 }))
      expect(barra('H').value).toBe('81')
    })

    test('segurar sem mexer não faz o áudio voltar', () => {
      const slider = comDuracao('i.mp3', 'I', 100)
      fireEvent.click(screen.getByLabelText('Tocar I'))
      act(() => propsPorUrl['i.mp3'].onProgress({ playedSeconds: 20 }))

      fireEvent.pointerDown(slider)
      fireEvent.pointerUp(window)
      expect(chamadasDeSeek).toEqual([])
    })

    test('pelo teclado, cada passo leva o áudio na hora', () => {
      const slider = comDuracao('j.mp3', 'J', 100)
      fireEvent.change(slider, { target: { value: '20' } })
      expect(chamadasDeSeek).toEqual([[20, 'seconds']])
      expect(slider.value).toBe('20')
    })

    test('funciona com o áudio pausado e mantém a posição ao tocar', () => {
      const slider = comDuracao('k.mp3', 'K', 100)
      fireEvent.pointerDown(slider)
      fireEvent.change(slider, { target: { value: '60' } })
      fireEvent.pointerUp(window)
      expect(chamadasDeSeek).toEqual([[60, 'seconds']])
      expect(tocando('k.mp3')).toBe('false')

      fireEvent.click(screen.getByLabelText('Tocar K'))
      expect(tocando('k.mp3')).toBe('true')
      expect(barra('K').value).toBe('60')
    })
  })
})
