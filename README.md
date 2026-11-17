## WhatsMensagem da Lú

Site com mensagens em áudio por ocasião (aniversário, namorados, dia das mães, natal...).

### Colocando as músicas

Todas as páginas de mensagens ficam em **`src/data/mensagens.js`**. Cada página é um bloco:

```js
{
  rota: '/namorados/feminino',
  titulo: 'Feminino Namorado',
  audios: [
    { cod: '101', s3: 'Namorados/Fem/101.mp3' },
    { cod: '102', link: 'https://drive.google.com/file/d/ID_DO_ARQUIVO/view?usp=sharing' },
  ],
},
```

- **Nova mensagem em página que já existe:** acrescente uma linha em `audios`. Os áudios
  aparecem na mesma ordem em que estão na lista.
- **`s3`** é o caminho do arquivo no bucket (`S3_BASE` + caminho).
- **`link`** é uma URL completa. Para link do Google Drive use o link de compartilhamento
  (pode ficar sem som em alguns, normal). O `Player` converte o link sozinho.
- **`pimenta: true`** mostra o ícone de pimenta ao lado do código.
- **Página nova:** copie um bloco inteiro, troque `rota`, `titulo` e `audios`. A rota é criada
  sozinha, não precisa mexer no `App.jsx`.

Para a página aparecer no site, adicione também o botão na tela da ocasião
(ex.: `src/Pages/Namorados/Namorados.jsx`). Nos botões, defina a classe `fem` ou `masc`
para mudar a cor.

### Rodando

```
npm install
npm start
```
