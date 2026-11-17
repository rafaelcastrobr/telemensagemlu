import { render, screen, cleanup, within } from '@testing-library/react'

import App from './App'
import { PAGINAS } from './data/mensagens'
import { MENU_INICIAL, TELAS_DE_ESCOLHA, botoesDaTela } from './data/ocasioes'
import { linkDoAudio } from './utils/audio'

// O Player real toca áudio; nestes testes só importa o que a página entrega a ele.
jest.mock('./components/Player', () => {
  const React = require('react')
  return function PlayerFalso({ link, children }) {
    return React.createElement('div', { 'data-testid': 'player', 'data-link': link }, children)
  }
})

function abrir(rota) {
  window.location.hash = '#' + rota
  return render(<App />)
}

afterEach(cleanup)

describe('página inicial', () => {
  test('mostra só os botões ativos do menu, na ordem', () => {
    abrir('/')
    const ativos = MENU_INICIAL.filter((item) => item.ativo).map((item) => item.texto)
    const exibidos = screen.getAllByRole('button').map((botao) => botao.textContent.trim())
    expect(exibidos).toEqual([...ativos, 'SITE EM REFORMA'])
  })
})

describe('telas de escolha', () => {
  test.each(TELAS_DE_ESCOLHA.map((tela) => [tela.rota, tela]))('%s mostra os botões na ordem certa', (rota, tela) => {
    abrir(rota)
    const botoes = botoesDaTela(tela)

    // sem título configurado, a tela não mostra nenhum título
    const titulos = screen.queryAllByRole('heading', { level: 1 }).map((titulo) => titulo.textContent)
    expect(titulos).toEqual(tela.titulo ? [tela.titulo] : [])

    // links que contêm um botão (os dois links do banner do topo não contêm)
    const exibidos = screen
      .getAllByRole('link')
      .map((link) => ({ link, botao: within(link).queryByRole('button') }))
      .filter(({ botao }) => botao)
      .map(({ link, botao }) => ({
        texto: botao.textContent,
        destino: link.getAttribute('href'),
        classe: botao.className,
      }))

    expect(exibidos).toEqual(
      botoes.map((botao) => ({
        texto: botao.texto,
        destino: '#' + botao.rota,
        classe: `btn_entrar_appcss ${botao.genero}`,
      }))
    )
  })
})

describe('páginas de mensagens', () => {
  test.each(PAGINAS.map((pagina) => [pagina.rota, pagina]))('%s mostra título e todos os áudios na ordem', (rota, pagina) => {
    abrir(rota)

    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(pagina.titulo)

    const players = screen.getAllByTestId('player')
    expect(players.map((player) => within(player).getByText(/^COD:/).textContent))
      .toEqual(pagina.audios.map((audio) => `COD: ${audio.cod}`))
    expect(players.map((player) => player.getAttribute('data-link')))
      .toEqual(pagina.audios.map(linkDoAudio))
  })
})
