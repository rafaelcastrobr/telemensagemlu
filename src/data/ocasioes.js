import { PAGINAS } from './mensagens'

import agradecimento from '../assets/icons/agradecimento.png'
import aniversario from '../assets/icons/aniversario.png'
import coracao from '../assets/icons/coracao.png'
import flecha from '../assets/icons/flecha.png'
import maes from '../assets/icons/maes.png'
import mulher from '../assets/icons/mulher.png'
import natal from '../assets/icons/natal.png'
import pai from '../assets/icons/pai.png'

// Botões da página inicial, na ordem em que aparecem.
// ativo: false esconde o botão (use nas datas comemorativas fora de época:
// troque para true quando chegar a época e para false quando passar).
export const MENU_INICIAL = [
  { rota: '/namorados', texto: 'DIA DOS NAMORADOS', icone: flecha, ativo: true },
  { rota: '/dia-das-mulheres', texto: 'DIA DAS MULHERES', icone: mulher, ativo: true },
  { rota: '/aniversario', texto: 'ANIVERSÁRIOS', icone: aniversario, ativo: true },
  { rota: '/romanticas-inicial', texto: 'ROMÂNTICAS', icone: coracao, ativo: true },
  { rota: '/agradecimento', texto: 'AGRADECIMENTOS', icone: agradecimento, ativo: true },
  { rota: '/dia-das-maes', texto: 'DIA DAS MÂES', icone: maes, ativo: false },
  { rota: '/dia-dos-pais', texto: 'DIA DOS PAÍS', icone: pai, ativo: false },
  { rota: '/natal', texto: 'NATAL', icone: natal, ativo: false },
]

// Telas de escolha (a tela que mostra os botões de uma ocasião).
// Os botões saem sozinhos das páginas de src/data/mensagens (campos "botao" e "genero"):
// toda página cuja rota começa com a rota da tela ganha um botão, na ordem em que está nos dados.
// Quando a tela só leva a outras telas, os botões são escritos aqui em "botoes".
export const TELAS_DE_ESCOLHA = [
  { rota: '/aniversario', titulo: 'Clique no gênero' },
  { rota: '/dia-das-mulheres', titulo: 'Escolha o tipo | DIA DAS MULHERES' },
  { rota: '/romanticas', titulo: 'Clique no gênero' },
  { rota: '/desculpas', titulo: '' },
  { rota: '/namorados', titulo: 'Clique no gênero' },
  { rota: '/dia-dos-pais', titulo: 'Clique no gênero' },
  { rota: '/dia-das-maes', titulo: 'Clique no gênero' },
  { rota: '/natal', titulo: 'Clique no gênero' },
  { rota: '/agradecimento', titulo: 'Clique no gênero' },
  {
    rota: '/romanticas-inicial',
    titulo: 'Escolha o tipo',
    botoes: [
      { rota: '/romanticas', texto: 'ROMANTICAS', genero: 'fem' },
      { rota: '/desculpas', texto: 'DESCULPAS', genero: 'masc' },
    ],
  },
]

// Botões de uma tela de escolha: os escritos à mão ou os derivados das páginas de mensagens.
export function botoesDaTela(tela) {
  if (tela.botoes) return tela.botoes

  return PAGINAS
    .filter((pagina) => pagina.rota.startsWith(tela.rota + '/'))
    .map((pagina) => ({ rota: pagina.rota, texto: pagina.botao, genero: pagina.genero }))
}
