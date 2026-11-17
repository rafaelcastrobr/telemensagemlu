// Agradecimento: uma página por item, na ordem em que os botões aparecem na tela de escolha.
// Como adicionar mensagens e páginas: veja o README.

export const agradecimento = [
  {
    rota: '/agradecimento/feminino',
    botao: 'FEMININO',
    genero: 'fem',
    titulo: 'Agradecimento | voz feminina',
    audios: [
      { cod: '345', s3: 'Agradecimento/F/345.mp3' },
      { cod: '344', s3: 'Agradecimento/F/344.mp3' },
      { cod: '343', s3: 'Agradecimento/F/343.mp3' },
      { cod: '342', s3: 'Agradecimento/F/342.mp3' },
    ],
  },
  {
    rota: '/agradecimento/masculino',
    botao: 'MASCULINO',
    genero: 'masc',
    titulo: 'Agradecimento | voz masculina',
    audios: [
      { cod: '349', s3: 'Agradecimento/M/349.mp3' },
      { cod: '348', s3: 'Agradecimento/M/348.mp3' },
      { cod: '347', s3: 'Agradecimento/M/347.mp3' },
      { cod: '346', s3: 'Agradecimento/F/342.mp3' },
    ],
  },
]
