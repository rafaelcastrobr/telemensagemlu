import { render, screen, cleanup, within } from '@testing-library/react'

import App from './App'
import { PAGINAS } from './data/mensagens'
import { MODO_NATAL } from './data/config'
import { MENU_INICIAL, TELAS_DE_ESCOLHA, botoesDaTela } from './data/ocasioes'
import { linkDoAudio } from './utils/audio'
import { idDoDrive } from './utils/drive'

// O Player real toca áudio; nestes testes só importa o que a página entrega a ele.
jest.mock('./components/Player', () => {
  const React = require('react')
  return function PlayerFalso({ link, children }) {
    return React.createElement('div', { 'data-testid': 'player', 'data-link': link }, children)
  }
})
jest.mock('./components/PlayerDrive', () => {
  const React = require('react')
  return function PlayerDriveFalso({ id, children }) {
    return React.createElement('div', { 'data-testid': 'player', 'data-link': `drive:${id}` }, children)
  }
})

function abrir(rota) {
  window.location.hash = '#' + rota
  return render(<App />)
}

afterEach(cleanup)

describe('página inicial', () => {
  test('mostra só os itens ativos do menu, na ordem, cada um levando à sua tela', () => {
    abrir('/')
    const ativos = MENU_INICIAL.filter((item) => item.ativo)
    const links = within(screen.getByRole('navigation', { name: 'Ocasiões' })).getAllByRole('link')

    expect(links.map((link) => link.textContent.trim())).toEqual(ativos.map((item) => item.texto))
    expect(links.map((link) => link.getAttribute('href'))).toEqual(ativos.map((item) => '#' + item.rota))
  })

  test('o aviso "em breve" é só um aviso, não um botão, e o de reforma saiu', () => {
    abrir('/')
    expect(screen.getByText('EM BREVE, MAIS MENSAGENS')).toBeTruthy()
    expect(screen.queryByText(/reforma/i)).toBeNull()
    expect(screen.queryAllByRole('button')).toEqual([])
  })
})

describe('modo Natal (MODO_NATAL em data/config.js)', () => {
  test('liga e desliga juntos: tema, neve e botão de Natal na página inicial', () => {
    abrir('/')
    expect(document.body.classList.contains('tema-natal')).toBe(MODO_NATAL)
    expect(screen.queryByTestId('neve') !== null).toBe(MODO_NATAL)

    const itens = within(screen.getByRole('navigation', { name: 'Ocasiões' })).getAllByRole('link')
    expect(itens.some((link) => link.getAttribute('href') === '#/natal')).toBe(MODO_NATAL)
    // quando ligado, o Natal é o primeiro da lista
    expect(itens[0].getAttribute('href') === '#/natal').toBe(MODO_NATAL)
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
    // áudio do Drive usa o player do Drive (identificado pelo código do arquivo); os demais, o Player normal
    expect(players.map((player) => player.getAttribute('data-link')))
      .toEqual(pagina.audios.map((audio) => (idDoDrive(audio.link) ? `drive:${idDoDrive(audio.link)}` : linkDoAudio(audio))))
  })
})
