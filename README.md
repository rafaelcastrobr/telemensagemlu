# WhatsMensagem da Lú

Site com mensagens em áudio para todas as ocasiões (aniversário, namorados, dia das mães, natal...).
Feito com React (Create React App), react-router (HashRouter) e styled-components.

No ar: https://whatsmensagemdalu.netlify.app

## Como rodar

```
npm install
npm start          # abre em http://localhost:3000
npm run test:ci    # roda os testes uma vez (npm test fica observando mudanças)
npm run lint       # confere o código
npm run build      # gera a pasta build/ para publicar
```

## Estrutura

```
src/
├── data/                    <- TUDO que muda no dia a dia fica aqui
│   ├── mensagens/           mensagens (áudios), um arquivo por ocasião
│   │   ├── aniversario.js
│   │   ├── namorados.js ... (um por ocasião)
│   │   └── index.js         junta todas
│   ├── ocasioes.js          botões da página inicial e telas de escolha
│   └── config.js            endereço do bucket S3 e a chave do modo Natal
├── pages/
│   ├── Home.jsx             página inicial
│   ├── Ocasiao.jsx          tela de escolha (gênero / tipo)
│   └── Mensagens.jsx        lista de áudios de uma página
├── components/
│   ├── Cabecalho.jsx        banner do topo
│   ├── Player.jsx           cartão de uma mensagem (tocar, parar, barra que se arrasta)
│   ├── Neve.jsx             neve do modo Natal
│   └── Duration.jsx         formata o tempo (m:ss)
├── utils/                   funções de apoio (links de áudio e do Google Drive)
├── styles/                  global.css (layout, fonte) e botoes.css
└── assets/                  fonts, icons e images
```

As telas e as rotas são geradas a partir de `src/data`. Não é preciso criar arquivo de página
nem mexer no `App.jsx` para adicionar mensagens.

## Como adicionar

### Nova mensagem em uma página que já existe

Acrescente uma linha no fim de `audios` da página (em `src/data/mensagens/<ocasiao>.js`).
Os áudios aparecem na mesma ordem em que estão na lista.

```js
{ cod: '399', s3: 'Namorados/Fem/399.mp3' },
```

- `s3`: caminho do arquivo no bucket (o endereço base está em `data/config.js`).
- `link`: URL completa, no lugar de `s3` (por exemplo, link de compartilhamento do Google
  Drive; ele é convertido sozinho, mas pode ficar sem som em alguns, normal).
- `pimenta: true`: mostra o ícone de pimenta ao lado do código.
- Use `s3` **ou** `link`, nunca os dois.

### Nova página (ex.: Aniversário Cunhado)

Copie um bloco inteiro dentro da ocasião e ajuste:

```js
{
  rota: '/aniversario/cunhado/feminino',   // endereço da página
  botao: 'FEMININO CUNHADO',               // texto do botão na tela de escolha
  genero: 'fem',                           // 'fem' (vinho) ou 'masc' (azul): cor do botão
  titulo: 'Aniversário Cunhado | voz feminina',
  audios: [
    { cod: '400', s3: 'ANIVERSARIO/FEM/CUNHADO/400.mp3' },
  ],
},
```

A rota e o botão aparecem sozinhos na tela de escolha da ocasião, na posição em que o bloco está.

### Nova ocasião

1. Crie `src/data/mensagens/<ocasiao>.js` (copie um existente) e importe em `mensagens/index.js`.
2. Em `src/data/ocasioes.js`, acrescente a tela em `TELAS_DE_ESCOLHA` e o botão em `MENU_INICIAL`.
3. Coloque o ícone (40x40) em `src/assets/icons`.

### Datas comemorativas

Em `MENU_INICIAL` (`src/data/ocasioes.js`), `ativo: true` mostra o botão na página inicial e
`ativo: false` esconde. Dia das Mães e Dia dos Pais ficam desativados fora de época.
O botão de Natal acompanha o modo Natal (abaixo).

### Modo Natal

Em `src/data/config.js`, `MODO_NATAL = true` liga tudo de uma vez: fundo azul, textos brancos
(as cores ficam nas variáveis do início de `src/styles/global.css`), neve leve (`Neve.jsx`) e o
botão de Natal no topo da página inicial. `MODO_NATAL = false` volta ao normal e esconde o botão.
A neve respeita quem desativou animações no celular/computador.

## Testes

Os testes (`npm run test:ci`) protegem os erros mais fáceis de cometer ao mexer nos dados:

- rotas repetidas, título/botão/gênero faltando, COD repetido na mesma página;
- áudio sem `s3` nem `link`, ou com os dois, link sem `https://`, caminho do S3 inválido;
- botão que aponta para uma rota que não existe e página que nenhum botão alcança;
- ordem dos áudios e títulos em todas as páginas, e o comportamento do Player.

## Publicação

O site está no Netlify com deploy automático: um push na branch `master` publica sozinho.
O build é `npm run build` e a pasta publicada é `build/`.

## Créditos

Ícones por [Icons8](https://icons8.com).
