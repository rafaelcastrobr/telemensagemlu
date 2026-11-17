import { PAGINAS } from './index'
import { MENU_INICIAL, TELAS_DE_ESCOLHA, botoesDaTela } from '../ocasioes'

const GENEROS = ['fem', 'masc']
const rotasDasPaginas = PAGINAS.map((pagina) => pagina.rota)
const rotasDasTelas = TELAS_DE_ESCOLHA.map((tela) => tela.rota)
const rotasExistentes = new Set(['/', ...rotasDasPaginas, ...rotasDasTelas])

const repetidos = (lista) => lista.filter((item, i) => lista.indexOf(item) !== i)

describe('páginas de mensagens', () => {
  test('as rotas são únicas e bem formadas', () => {
    expect(repetidos(rotasDasPaginas)).toEqual([])
    expect(rotasDasPaginas.filter((rota) => !/^\/[a-z0-9-]+(\/[a-z0-9-]+)*$/.test(rota))).toEqual([])
  })

  test('toda página tem título, botão e gênero válidos', () => {
    const problemas = []
    for (const pagina of PAGINAS) {
      if (!pagina.titulo?.trim()) problemas.push(`${pagina.rota}: sem título`)
      if (!pagina.botao?.trim()) problemas.push(`${pagina.rota}: sem texto de botão`)
      if (!GENEROS.includes(pagina.genero)) problemas.push(`${pagina.rota}: genero deve ser fem ou masc`)
    }
    expect(problemas).toEqual([])
  })

  test('toda página tem pelo menos um áudio e os COD não se repetem na página', () => {
    const problemas = []
    for (const pagina of PAGINAS) {
      if (!pagina.audios.length) problemas.push(`${pagina.rota}: sem áudios`)
      const codigos = pagina.audios.map((audio) => audio.cod)
      for (const cod of repetidos(codigos)) problemas.push(`${pagina.rota}: COD ${cod} repetido`)
    }
    expect(problemas).toEqual([])
  })

  test('cada áudio tem um COD e exatamente um destino válido (s3 ou link)', () => {
    const problemas = []
    for (const pagina of PAGINAS) {
      for (const audio of pagina.audios) {
        const onde = `${pagina.rota} COD ${audio.cod}`
        if (!audio.cod || /\s/.test(audio.cod)) problemas.push(`${onde}: COD vazio ou com espaço`)

        const temS3 = audio.s3 !== undefined
        const temLink = audio.link !== undefined
        if (temS3 === temLink) {
          problemas.push(`${onde}: use s3 OU link (nunca os dois, nunca nenhum)`)
          continue
        }
        if (temS3 && !/^[^/\s].*\.mp3$/.test(audio.s3)) {
          problemas.push(`${onde}: s3 deve ser um caminho sem "/" no início e terminar em .mp3`)
        }
        if (temLink && !/^https:\/\/\S+$/.test(audio.link)) {
          problemas.push(`${onde}: link deve começar com https://`)
        }
      }
    }
    expect(problemas).toEqual([])
  })
})

describe('telas de escolha', () => {
  test('as rotas são únicas e não colidem com páginas de mensagens', () => {
    expect(repetidos(rotasDasTelas)).toEqual([])
    expect(rotasDasTelas.filter((rota) => rotasDasPaginas.includes(rota))).toEqual([])
  })

  test('todo botão aponta para uma rota que existe', () => {
    const problemas = []
    for (const tela of TELAS_DE_ESCOLHA) {
      for (const botao of botoesDaTela(tela)) {
        if (!rotasExistentes.has(botao.rota)) problemas.push(`${tela.rota}: botão "${botao.texto}" vai para ${botao.rota}, que não existe`)
        if (!GENEROS.includes(botao.genero)) problemas.push(`${tela.rota}: botão "${botao.texto}" com gênero inválido`)
      }
    }
    expect(problemas).toEqual([])
  })

  test('toda página de mensagens é alcançável por algum botão', () => {
    const alcancaveis = new Set(TELAS_DE_ESCOLHA.flatMap((tela) => botoesDaTela(tela).map((botao) => botao.rota)))
    expect(rotasDasPaginas.filter((rota) => !alcancaveis.has(rota))).toEqual([])
  })

  test('toda tela de escolha tem pelo menos um botão', () => {
    expect(TELAS_DE_ESCOLHA.filter((tela) => botoesDaTela(tela).length === 0).map((tela) => tela.rota)).toEqual([])
  })
})

describe('menu inicial', () => {
  test('aponta para telas que existem e tem ícone', () => {
    const problemas = []
    for (const item of MENU_INICIAL) {
      if (!rotasExistentes.has(item.rota)) problemas.push(`${item.texto}: rota ${item.rota} não existe`)
      if (!item.icone) problemas.push(`${item.texto}: sem ícone`)
    }
    expect(problemas).toEqual([])
  })

  test('tem pelo menos um botão ativo', () => {
    expect(MENU_INICIAL.some((item) => item.ativo)).toBe(true)
  })
})
