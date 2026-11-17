// Todas as páginas de mensagens (áudios) do site.
//
// Para ADICIONAR uma mensagem: acrescente { cod: '123', s3: 'Pasta/123.mp3' } ao fim do
// array "audios" da página certa. Os áudios aparecem na MESMA ORDEM em que estão aqui.
//
// Para criar uma PÁGINA nova: copie um bloco { rota, titulo, audios } abaixo e ajuste.
// A rota é criada sozinha no App.jsx. Se a página for nova também precisa de um botão
// na tela de escolha da ocasião (ex.: Pages/Namorados/Namorados.jsx).
//
// Cada áudio aceita UM destes campos:
//   s3:   caminho do arquivo no bucket (S3_BASE + s3)
//   link: URL completa (ex.: link de compartilhamento do Google Drive; o Player converte)
// e, opcionalmente, pimenta: true (mostra o ícone de pimenta ao lado do código).

export const S3_BASE = 'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/'

export const PAGINAS = [
  // ===== ANIVERSÁRIO =====
  {
    rota: '/aniversario/mae/feminino',
    titulo: 'Aniversário Mãe | voz feminina',
    audios: [
      { cod: '153', s3: 'ANIVERSARIO/FEM/MAE/153.mp3' },
      { cod: '154', s3: 'ANIVERSARIO/FEM/MAE/154.mp3' },
      { cod: '155', s3: 'ANIVERSARIO/FEM/MAE/155.mp3' },
      { cod: '156', s3: 'ANIVERSARIO/FEM/MAE/156.mp3' },
      { cod: '157', s3: 'ANIVERSARIO/FEM/MAE/157.mp3' },
      { cod: '158', s3: 'ANIVERSARIO/FEM/MAE/158.mp3' },
      { cod: '159', s3: 'ANIVERSARIO/FEM/MAE/159.mp3' },
      { cod: '160', s3: 'ANIVERSARIO/FEM/MAE/160.mp3' },
    ],
  },
  {
    rota: '/aniversario/pai/feminino',
    titulo: 'Aniversário Pai | voz feminina',
    audios: [
      { cod: '168', s3: 'ANIVERSARIO/FEM/PAI/168.mp3' },
      { cod: '169', s3: 'ANIVERSARIO/FEM/PAI/169.mp3' },
      { cod: '170', s3: 'ANIVERSARIO/FEM/PAI/170.mp3' },
      { cod: '171', s3: 'ANIVERSARIO/FEM/PAI/171.mp3' },
      { cod: '172', s3: 'ANIVERSARIO/FEM/PAI/172.mp3' },
      { cod: '173', s3: 'ANIVERSARIO/FEM/PAI/173.mp3' },
      { cod: '174', s3: 'ANIVERSARIO/FEM/PAI/174.mp3' },
      { cod: '175', s3: 'ANIVERSARIO/FEM/PAI/175.mp3' },
    ],
  },
  {
    rota: '/aniversario/irma/feminino',
    titulo: 'Aniversário Irmã | voz feminina',
    audios: [
      { cod: '279', s3: 'ANIVERSARIO/Irma/Fem/279.mp3' },
      { cod: '280', s3: 'ANIVERSARIO/Irma/Fem/280.mp3' },
      { cod: '281', s3: 'ANIVERSARIO/Irma/Fem/281.mp3' },
      { cod: '282', s3: 'ANIVERSARIO/Irma/Fem/282.mp3' },
      { cod: '283', s3: 'ANIVERSARIO/Irma/Fem/283.mp3' },
      { cod: '284', s3: 'ANIVERSARIO/Irma/Fem/284.mp3' },
    ],
  },
  {
    rota: '/aniversario/irmao/feminino',
    titulo: 'Aniversário Irmão | voz feminina',
    audios: [
      { cod: '291', s3: 'ANIVERSARIO/Irmao/Fem/291.mp3' },
      { cod: '292', s3: 'ANIVERSARIO/Irmao/Fem/292.mp3' },
      { cod: '293', s3: 'ANIVERSARIO/Irmao/Fem/293.mp3' },
      { cod: '294', s3: 'ANIVERSARIO/Irmao/Fem/294.mp3' },
      { cod: '295', s3: 'ANIVERSARIO/Irmao/Fem/295.mp3' },
      { cod: '296', s3: 'ANIVERSARIO/Irmao/Fem/296.mp3' },
    ],
  },
  {
    rota: '/aniversario/amiga/feminino',
    titulo: 'Aniversário Amiga Feminino',
    audios: [
      { cod: '141', s3: 'ANIVERSARIO/AMIGA/AMIGA+FEM/141.mp3' },
      { cod: '142', s3: 'ANIVERSARIO/AMIGA/AMIGA+FEM/142.mp3' },
      { cod: '143', s3: 'ANIVERSARIO/AMIGA/AMIGA+FEM/143.mp3' },
      { cod: '144', s3: 'ANIVERSARIO/AMIGA/AMIGA+FEM/144.mp3' },
      { cod: '151', s3: 'ANIVERSARIO/AMIGA/AMIGA+FEM/151.mp3' },
      { cod: '152', s3: 'ANIVERSARIO/AMIGA/AMIGA+FEM/152.mp3' },
    ],
  },
  {
    rota: '/aniversario/amigo/feminino',
    titulo: 'Aniversário Amigo | voz feminina',
    audios: [
      { cod: '363', s3: 'ANIVERSARIO/AMIGO/F/363.mp3' },
      { cod: '364', s3: 'ANIVERSARIO/AMIGO/F/364.mp3' },
      { cod: '365', s3: 'ANIVERSARIO/AMIGO/F/365.mp3' },
      { cod: '366', s3: 'ANIVERSARIO/AMIGO/F/366.mp3' },
      { cod: '367', s3: 'ANIVERSARIO/AMIGO/F/367.mp3' },
      { cod: '368', s3: 'ANIVERSARIO/AMIGO/F/368.mp3' },
    ],
  },
  {
    rota: '/aniversario/filha/feminino',
    titulo: 'Aniversário Filha | voz feminina',
    audios: [
      { cod: '145', s3: 'ANIVERSARIO/FILHA/FILHA+FEM/145.mp3' },
      { cod: '146', s3: 'ANIVERSARIO/FILHA/FILHA+FEM/146.mp3' },
      { cod: '147', s3: 'ANIVERSARIO/FILHA/FILHA+FEM/147.mp3' },
      { cod: '148', s3: 'ANIVERSARIO/FILHA/FILHA+FEM/148.mp3' },
      { cod: '149', s3: 'ANIVERSARIO/FILHA/FILHA+FEM/149.mp3' },
      { cod: '150', s3: 'ANIVERSARIO/FILHA/FILHA+FEM/150.mp3' },
    ],
  },
  {
    rota: '/aniversario/filho/feminino',
    titulo: 'Aniversário Filho | voz femimina',
    audios: [
      { cod: '219', s3: 'ANIVERSARIO/FEM/FILHO/219.mp3' },
      { cod: '220', s3: 'ANIVERSARIO/FEM/FILHO/220.mp3' },
      { cod: '221', s3: 'ANIVERSARIO/FEM/FILHO/221.mp3' },
      { cod: '222', s3: 'ANIVERSARIO/FEM/FILHO/222.mp3' },
      { cod: '223', s3: 'ANIVERSARIO/FEM/FILHO/223.mp3' },
      { cod: '224', s3: 'ANIVERSARIO/FEM/FILHO/224.mp3' },
    ],
  },
  {
    rota: '/aniversario/namorado/feminino',
    titulo: 'Aniversário Namorado',
    audios: [
      { cod: '190', s3: 'ANIVERSARIO/FEM/NAMORADO/190.mp3' },
      { cod: '191', s3: 'ANIVERSARIO/FEM/NAMORADO/191.mp3' },
      { cod: '192', s3: 'ANIVERSARIO/FEM/NAMORADO/192.mp3' },
      { cod: '193', s3: 'ANIVERSARIO/FEM/NAMORADO/193.mp3' },
      { cod: '194', s3: 'ANIVERSARIO/FEM/NAMORADO/194.mp3' },
      { cod: '195', s3: 'ANIVERSARIO/FEM/NAMORADO/195.mp3' },
      { cod: '196', s3: 'ANIVERSARIO/FEM/NAMORADO/196.mp3' },
      { cod: '197', s3: 'ANIVERSARIO/FEM/NAMORADO/197.mp3' },
      { cod: '198', s3: 'ANIVERSARIO/FEM/NAMORADO/198.mp3' },
    ],
  },
  {
    rota: '/aniversario/esposo/feminino',
    titulo: 'Aniversário Esposo',
    audios: [
      { cod: '199', s3: 'ANIVERSARIO/FEM/ESPOSO/199.mp3' },
      { cod: '200', s3: 'ANIVERSARIO/FEM/ESPOSO/200.mp3' },
      { cod: '201', s3: 'ANIVERSARIO/FEM/ESPOSO/201.mp3' },
      { cod: '202', s3: 'ANIVERSARIO/FEM/ESPOSO/202.mp3' },
      { cod: '203', s3: 'ANIVERSARIO/FEM/ESPOSO/203.mp3' },
      { cod: '204', s3: 'ANIVERSARIO/FEM/ESPOSO/204.mp3' },
      { cod: '205', s3: 'ANIVERSARIO/FEM/ESPOSO/205.mp3' },
      { cod: '206', s3: 'ANIVERSARIO/FEM/ESPOSO/206.mp3' },
    ],
  },
  {
    rota: '/aniversario/tio/feminino',
    titulo: 'Aniversário Tio | voz feminina',
    audios: [
      { cod: '334', s3: 'ANIVERSARIO/TIO/Fem/334.mp3' },
      { cod: '335', s3: 'ANIVERSARIO/TIO/Fem/335.mp3' },
      { cod: '336', s3: 'ANIVERSARIO/TIO/Fem/336.mp3' },
    ],
  },
  {
    rota: '/aniversario/neta/feminino',
    titulo: 'Aniversário Neta | voz feminina',
    audios: [
      { cod: '334', s3: 'ANIVERSARIO/Netos/Neta/F/334.mp3' },
      { cod: '335', s3: 'ANIVERSARIO/Netos/Neta/F/335.mp3' },
      { cod: '336', s3: 'ANIVERSARIO/Netos/Neta/F/336.mp3' },
      { cod: '337', s3: 'ANIVERSARIO/Netos/Neta/F/337.mp3' },
    ],
  },
  {
    rota: '/aniversario/filho/masculino',
    titulo: 'Aniversário Filho | voz masculina',
    audios: [
      { cod: '225', s3: 'ANIVERSARIO/MASC/FILHO/225.mp3' },
      { cod: '226', s3: 'ANIVERSARIO/MASC/FILHO/226.mp3' },
      { cod: '227', s3: 'ANIVERSARIO/MASC/FILHO/227.mp3' },
      { cod: '228', s3: 'ANIVERSARIO/MASC/FILHO/228.mp3' },
      { cod: '229', s3: 'ANIVERSARIO/MASC/FILHO/229.mp3' },
      { cod: '230', s3: 'ANIVERSARIO/MASC/FILHO/230.mp3' },
    ],
  },
  {
    rota: '/aniversario/filha/masculino',
    titulo: 'Aniversário Filha | voz masculina',
    audios: [
      { cod: '214', s3: 'ANIVERSARIO/MASC/FILHA/214.mp3' },
      { cod: '215', s3: 'ANIVERSARIO/MASC/FILHA/215.mp3' },
      { cod: '216', s3: 'ANIVERSARIO/MASC/FILHA/216.mp3' },
      { cod: '217', s3: 'ANIVERSARIO/MASC/FILHA/217.mp3' },
      { cod: '218', s3: 'ANIVERSARIO/MASC/FILHA/218.mp3' },
    ],
  },
  {
    rota: '/aniversario/irma/masculino',
    titulo: 'Aniversário Irmã | voz masculina',
    audios: [
      { cod: '285', s3: 'ANIVERSARIO/Irma/Masc/285.mp3' },
      { cod: '286', s3: 'ANIVERSARIO/Irma/Masc/286.mp3' },
      { cod: '287', s3: 'ANIVERSARIO/Irma/Masc/287.mp3' },
      { cod: '288', s3: 'ANIVERSARIO/Irma/Masc/288.mp3' },
      { cod: '289', s3: 'ANIVERSARIO/Irma/Masc/289.mp3' },
      { cod: '290', s3: 'ANIVERSARIO/Irma/Masc/290.mp3' },
    ],
  },
  {
    rota: '/aniversario/irmao/masculino',
    titulo: 'Aniversário Irmão | voz masculina',
    audios: [
      { cod: '297', s3: 'ANIVERSARIO/Irmao/Masc/297.mp3' },
      { cod: '298', s3: 'ANIVERSARIO/Irmao/Masc/298.mp3' },
      { cod: '299', s3: 'ANIVERSARIO/Irmao/Masc/299.mp3' },
      { cod: '300', s3: 'ANIVERSARIO/Irmao/Masc/300.mp3' },
      { cod: '301', s3: 'ANIVERSARIO/Irmao/Masc/301.mp3' },
      { cod: '302', s3: 'ANIVERSARIO/Irmao/Masc/302.mp3' },
    ],
  },
  {
    rota: '/aniversario/mae/masculino',
    titulo: 'Aniversário Mãe | voz masculina',
    audios: [
      { cod: '161', s3: 'ANIVERSARIO/MASC/MAE/161.mp3' },
      { cod: '162', s3: 'ANIVERSARIO/MASC/MAE/162.mp3' },
      { cod: '163', s3: 'ANIVERSARIO/MASC/MAE/163.mp3' },
      { cod: '164', s3: 'ANIVERSARIO/MASC/MAE/164.mp3' },
      { cod: '165', s3: 'ANIVERSARIO/MASC/MAE/165.mp3' },
      { cod: '166', s3: 'ANIVERSARIO/MASC/MAE/166.mp3' },
      { cod: '167', s3: 'ANIVERSARIO/MASC/MAE/167.mp3' },
    ],
  },
  {
    rota: '/aniversario/esposa/masculino',
    titulo: 'Aniversário Esposa',
    audios: [
      { cod: '207', s3: 'ANIVERSARIO/MASC/ESPOSA/207.mp3' },
      { cod: '208', s3: 'ANIVERSARIO/MASC/ESPOSA/208.mp3' },
      { cod: '209', s3: 'ANIVERSARIO/MASC/ESPOSA/209.mp3' },
      { cod: '210', s3: 'ANIVERSARIO/MASC/ESPOSA/210.mp3' },
      { cod: '211', s3: 'ANIVERSARIO/MASC/ESPOSA/211.mp3' },
      { cod: '212', s3: 'ANIVERSARIO/MASC/ESPOSA/212.mp3' },
      { cod: '213', s3: 'ANIVERSARIO/MASC/ESPOSA/213.mp3' },
    ],
  },
  {
    rota: '/aniversario/pai/masculino',
    titulo: 'Aniversário Pai | voz masculina',
    audios: [
      { cod: '176', s3: 'ANIVERSARIO/MASC/PAI/176.mp3' },
      { cod: '177', s3: 'ANIVERSARIO/MASC/PAI/177.mp3' },
      { cod: '178', s3: 'ANIVERSARIO/MASC/PAI/178.mp3' },
      { cod: '179', s3: 'ANIVERSARIO/MASC/PAI/179.mp3' },
      { cod: '180', s3: 'ANIVERSARIO/MASC/PAI/180.mp3' },
    ],
  },
  {
    rota: '/aniversario/namorada/masculino',
    titulo: 'Aniversário Namorada',
    audios: [
      { cod: '181', s3: 'ANIVERSARIO/MASC/NAMORADA/181.mp3' },
      { cod: '182', s3: 'ANIVERSARIO/MASC/NAMORADA/182.mp3' },
      { cod: '183', s3: 'ANIVERSARIO/MASC/NAMORADA/183.mp3' },
      { cod: '184', s3: 'ANIVERSARIO/MASC/NAMORADA/184.mp3' },
      { cod: '185', s3: 'ANIVERSARIO/MASC/NAMORADA/185.mp3' },
      { cod: '186', s3: 'ANIVERSARIO/MASC/NAMORADA/186.mp3' },
      { cod: '187', s3: 'ANIVERSARIO/MASC/NAMORADA/187.mp3' },
      { cod: '188', s3: 'ANIVERSARIO/MASC/NAMORADA/188.mp3' },
      { cod: '189', s3: 'ANIVERSARIO/MASC/NAMORADA/189.mp3' },
    ],
  },
  {
    rota: '/aniversario/neta/masculino',
    titulo: 'Aniversário Neta | voz masculina',
    audios: [
      { cod: '338', s3: 'ANIVERSARIO/Netos/Neta/M/338.mp3' },
      { cod: '339', s3: 'ANIVERSARIO/Netos/Neta/M/339.mp3' },
      { cod: '340', s3: 'ANIVERSARIO/Netos/Neta/M/340.mp3' },
      { cod: '341', s3: 'ANIVERSARIO/Netos/Neta/M/341.mp3' },
    ],
  },

  // ===== DIA DAS MULHERES =====
  {
    rota: '/dia-das-mulheres/mae/feminino',
    titulo: 'Dia das Mulheres - Mae | voz feminina',
    audios: [
      { cod: '387', s3: 'DiaDasMulheres/F/Mae/387.mp3' },
      { cod: '388', s3: 'DiaDasMulheres/M/Mae/388.mp3' },
      { cod: '389', s3: 'DiaDasMulheres/M/Mae/389.mp3' },
      { cod: '390', s3: 'DiaDasMulheres/M/Mae/390.mp3' },
      { cod: '391', s3: 'DiaDasMulheres/M/Mae/391.mp3' },
      { cod: '392', s3: 'DiaDasMulheres/M/Mae/392.mp3' },
    ],
  },
  {
    rota: '/dia-das-mulheres/esposa',
    titulo: 'Dia das Mulheres - Esposa | voz masculina',
    audios: [
      { cod: '369', s3: 'DiaDasMulheres/M/Esposa/369.mp3' },
      { cod: '370', s3: 'DiaDasMulheres/M/Esposa/370.mp3' },
      { cod: '371', s3: 'DiaDasMulheres/M/Esposa/371.mp3' },
      { cod: '372', s3: 'DiaDasMulheres/M/Esposa/372.mp3' },
      { cod: '373', s3: 'DiaDasMulheres/M/Esposa/373.mp3' },
      { cod: '374', s3: 'DiaDasMulheres/M/Esposa/374.mp3' },
    ],
  },
  {
    rota: '/dia-das-mulheres/namorada',
    titulo: 'Dia das Mulheres - Namorada | voz masculina',
    audios: [
      { cod: '375', s3: 'DiaDasMulheres/M/Namorada/375.mp3' },
      { cod: '376', s3: 'DiaDasMulheres/M/Namorada/376.mp3' },
      { cod: '377', s3: 'DiaDasMulheres/M/Namorada/377.mp3' },
      { cod: '378', s3: 'DiaDasMulheres/M/Namorada/378.mp3' },
      { cod: '379', s3: 'DiaDasMulheres/M/Namorada/379.mp3' },
      { cod: '380', s3: 'DiaDasMulheres/M/Namorada/380.mp3' },
    ],
  },
  {
    rota: '/dia-das-mulheres/amiga',
    titulo: 'Dia das Mulheres - Amiga | voz masculina',
    audios: [
      { cod: '393', s3: 'DiaDasMulheres/M/Amiga/393.mp3' },
      { cod: '394', s3: 'DiaDasMulheres/M/Amiga/394.mp3' },
      { cod: '395', s3: 'DiaDasMulheres/M/Amiga/395.mp3' },
      { cod: '396', s3: 'DiaDasMulheres/M/Amiga/396.mp3' },
      { cod: '397', s3: 'DiaDasMulheres/M/Amiga/397.mp3' },
      { cod: '398', s3: 'DiaDasMulheres/M/Amiga/398.mp3' },
    ],
  },
  {
    rota: '/dia-das-mulheres/mae/masculino',
    titulo: 'Dia das Mulheres - Esposa | voz masculina',
    audios: [
      { cod: '381', s3: 'DiaDasMulheres/M/Mae/381.mp3' },
      { cod: '382', s3: 'DiaDasMulheres/M/Mae/382.mp3' },
      { cod: '383', s3: 'DiaDasMulheres/M/Mae/383.mp3' },
      { cod: '384', s3: 'DiaDasMulheres/M/Mae/384.mp3' },
      { cod: '385', s3: 'DiaDasMulheres/M/Mae/385.mp3' },
      { cod: '386', s3: 'DiaDasMulheres/M/Mae/386.mp3' },
    ],
  },

  // ===== ROMÂNTICAS =====
  {
    rota: '/romanticas/feminino',
    titulo: 'Romântica | voz feminina',
    audios: [
      { cod: '231', s3: 'romanticas/F+Neutra/231.mp3' },
      { cod: '232', s3: 'romanticas/F+Neutra/232.mp3' },
      { cod: '233', s3: 'romanticas/F+Neutra/233.mp3' },
      { cod: '234', s3: 'romanticas/F+Neutra/234.mp3' },
      { cod: '235', s3: 'romanticas/F+Neutra/235.mp3' },
      { cod: '236', s3: 'romanticas/F+Neutra/236.mp3' },
      { cod: '237', s3: 'romanticas/F+Neutra/237.mp3' },
      { cod: '238', s3: 'romanticas/F+Neutra/238.mp3' },
      { cod: '239', s3: 'romanticas/F+Neutra/239.mp3' },
      { cod: '240', s3: 'romanticas/F+Neutra/240p.mp3', pimenta: true },
      { cod: '241', s3: 'romanticas/F+Neutra/241p.mp3', pimenta: true },
      { cod: '242', s3: 'romanticas/F+Neutra/242p.mp3', pimenta: true },
      { cod: '243', s3: 'romanticas/F+Neutra/243p.mp3', pimenta: true },
      { cod: '244', s3: 'romanticas/F+Neutra/244p.mp3', pimenta: true },
      { cod: '245', s3: 'romanticas/F+Neutra/245p.mp3', pimenta: true },
    ],
  },
  {
    rota: '/romanticas/masculino',
    titulo: 'Romântica | voz masculina',
    audios: [
      { cod: '246', s3: 'romanticas/M+Neutra/246.mp3' },
      { cod: '247', s3: 'romanticas/M+Neutra/247.mp3' },
      { cod: '248', s3: 'romanticas/M+Neutra/248.mp3' },
      { cod: '249', s3: 'romanticas/M+Neutra/249.mp3' },
      { cod: '250', s3: 'romanticas/M+Neutra/250.mp3' },
      { cod: '251', s3: 'romanticas/M+Neutra/251.mp3' },
      { cod: '252', s3: 'romanticas/M+Neutra/252.mp3' },
      { cod: '253', s3: 'romanticas/M+Neutra/253.mp3' },
      { cod: '254', s3: 'romanticas/M+Neutra/254.mp3' },
      { cod: '255', s3: 'romanticas/M+Neutra/255p.mp3', pimenta: true },
      { cod: '256', s3: 'romanticas/M+Neutra/256p.mp3', pimenta: true },
      { cod: '257', s3: 'romanticas/M+Neutra/257p.mp3', pimenta: true },
      { cod: '258', s3: 'romanticas/M+Neutra/258p.mp3', pimenta: true },
      { cod: '259', s3: 'romanticas/M+Neutra/529p.mp3', pimenta: true },
      { cod: '260', s3: 'romanticas/M+Neutra/260p.mp3', pimenta: true },
    ],
  },

  // ===== DESCULPAS =====
  {
    rota: '/desculpas/feminino',
    titulo: 'Romântica | voz feminina',
    audios: [
      { cod: '362', s3: 'romanticas/RomanticaDesculpa/362.mp3' },
      { cod: '361', s3: 'romanticas/RomanticaDesculpa/361.mp3' },
      { cod: '360', s3: 'romanticas/RomanticaDesculpa/360.mp3' },
      { cod: '359', s3: 'romanticas/RomanticaDesculpa/359.mp3' },
    ],
  },

  // ===== NAMORADOS =====
  {
    rota: '/namorados/feminino',
    titulo: 'Feminino Namorado',
    audios: [
      { cod: '101', s3: 'Namorados/Fem/101.mp3' },
      { cod: '102', s3: 'Namorados/Fem/102.mp3' },
      { cod: '103', s3: 'Namorados/Fem/103.mp3' },
      { cod: '104', s3: 'Namorados/Fem/104.mp3' },
      { cod: '105', s3: 'Namorados/Fem/105.mp3' },
      { cod: '106', s3: 'Namorados/Fem/106.mp3' },
      { cod: '107', s3: 'Namorados/Fem/107.mp3' },
      { cod: '108', s3: 'Namorados/Fem/108.mp3' },
      { cod: '109', s3: 'Namorados/Fem/109.mp3' },
    ],
  },
  {
    rota: '/namorados/feminino/esposo',
    titulo: 'Feminino Esposo',
    audios: [
      { cod: '118', s3: 'Namorados/Fem/Esposo/118.mp3' },
      { cod: '119', s3: 'Namorados/Fem/Esposo/119.mp3' },
      { cod: '120', s3: 'Namorados/Fem/Esposo/120.mp3' },
      { cod: '121', s3: 'Namorados/Fem/Esposo/121.mp3' },
      { cod: '122', s3: 'Namorados/Fem/Esposo/122.mp3' },
    ],
  },
  {
    rota: '/namorados/feminino/esposo/evangelico',
    titulo: 'Femino Esposo Evangélico',
    audios: [
      { cod: '128', s3: 'Namorados/Fem/Esposo/Evangelica/128.mp3' },
      { cod: '129', s3: 'Namorados/Fem/Esposo/Evangelica/129.mp3' },
      { cod: '130', s3: 'Namorados/Fem/Esposo/Evangelica/130.mp3' },
      { cod: '131', s3: 'Namorados/Fem/Esposo/Evangelica/131.mp3' },
      { cod: '132', s3: 'Namorados/Fem/Esposo/Evangelica/132.mp3' },
    ],
  },
  {
    rota: '/namorados/masculino',
    titulo: 'Masculino',
    audios: [
      { cod: '133', s3: 'Namorados/Masc/133.mp3' },
      { cod: '134', s3: 'Namorados/Masc/134.mp3' },
      { cod: '135', s3: 'Namorados/Masc/135.mp3' },
      { cod: '136', s3: 'Namorados/Masc/136.mp3' },
      { cod: '137', s3: 'Namorados/Masc/137.mp3' },
      { cod: '138', s3: 'Namorados/Masc/138.mp3' },
      { cod: '139', s3: 'Namorados/Masc/139.mp3' },
      { cod: '140', s3: 'Namorados/Masc/140.mp3' },
    ],
  },
  {
    rota: '/namorados/masculino/esposa',
    titulo: 'Masculino Esposa',
    audios: [
      { cod: '112', s3: 'Namorados/Masc/Esposa/112.mp3' },
      { cod: '113', s3: 'Namorados/Masc/Esposa/113.mp3' },
      { cod: '114', s3: 'Namorados/Masc/Esposa/114.mp3' },
      { cod: '115', s3: 'Namorados/Masc/Esposa/115.mp3' },
      { cod: '116', s3: 'Namorados/Masc/Esposa/116.mp3' },
      { cod: '117', s3: 'Namorados/Masc/Esposa/117.mp3' },
    ],
  },
  {
    rota: '/namorados/masculino/esposa/evangelica',
    titulo: 'Masculino Esposa Evangélica',
    audios: [
      { cod: '123', s3: 'Namorados/Masc/Esposa/Evangelica/123.mp3' },
      { cod: '124', s3: 'Namorados/Masc/Esposa/Evangelica/124.mp3' },
      { cod: '125', s3: 'Namorados/Masc/Esposa/Evangelica/125.mp3' },
      { cod: '126', s3: 'Namorados/Masc/Esposa/Evangelica/126.mp3' },
      { cod: '127', s3: 'Namorados/Masc/Esposa/Evangelica/127.mp3' },
    ],
  },

  // ===== DIA DOS PAIS =====
  {
    rota: '/dia-dos-pais/filhos/feminino',
    titulo: 'Dia dos País | voz feminina',
    audios: [
      { cod: '261', link: 'https://drive.google.com/file/d/1OBjyn7UzBvg2d2k31uf0qZFE1wnBi48s/view?usp=sharing' },
      { cod: '262', link: 'https://drive.google.com/file/d/1h_j1uCqzfClASVvEdIZbyi6-D6k3exRh/view?usp=sharing' },
      { cod: '236', link: 'https://drive.google.com/file/d/1-IOK88irejLrnnIPK3SmKKzwF8BOhJes/view?usp=sharing' },
      { cod: '264', link: 'https://drive.google.com/file/d/1dWd6x3kcQLmUggezKMRjg8lAx3Wc-lcy/view?usp=sharing' },
      { cod: '265', link: 'https://drive.google.com/file/d/1SBdJCPAQlU3CzsBF45ePc-Ssi_RyWiaD/view?usp=sharing' },
      { cod: '266', link: 'https://drive.google.com/file/d/15LMq3QqWM-v6LNKbQb1iOAXbgWXkHIr7/view?usp=sharing' },
      { cod: '267', link: 'https://drive.google.com/file/d/1rCU_vuKmQ58vD1L6-Dt2Zcu-h8PrSRjJ/view?usp=sharing' },
      { cod: '268', link: 'https://drive.google.com/file/d/1UOuL3RFTpRkHglwB7P-i3dJc0LAFDwhv/view?usp=sharing' },
      { cod: '269', link: 'https://drive.google.com/file/d/1II40TCdTs7AIEaO9c9Q0nTzXoCSKDPOe/view?usp=sharing' },
    ],
  },
  {
    rota: '/dia-dos-pais/filhos/masculino',
    titulo: 'Dia dos Pais | voz masculina',
    audios: [
      { cod: '270', link: 'https://drive.google.com/file/d/1L4pECIQHHgi9LCX7FBQkgnkNyzvpqHif/view?usp=sharing' },
      { cod: '271', link: 'https://drive.google.com/file/d/1ws0G9FbfziqWFOfYBETCimYov9qoZn2C/view?usp=sharing' },
      { cod: '272', link: 'https://drive.google.com/file/d/1OtPGZDpM19bjR9gvZ0gIx_vzwwnBEO72/view?usp=sharing' },
      { cod: '273', link: 'https://drive.google.com/file/d/1ta5ytq_L8TwuCLzNZEOERPr1AT8Em5PC/view?usp=sharing' },
      { cod: '275', link: 'https://drive.google.com/file/d/1QRlkDk0BycyjQK8hEmW8g4ANHb-3ELC_/view?usp=sharing' },
      { cod: '276', link: 'https://drive.google.com/file/d/1OrEKSmN8-iTlodsitZRy-ECZUz0Lobz4/view?usp=sharing' },
      { cod: '277', link: 'https://drive.google.com/file/d/1UEDNkKkrK-dqL8iOecqzAl5grs9knqSM/view?usp=sharing' },
      { cod: '278', link: 'https://drive.google.com/file/d/10Rtjtu-98ZiXxdpFfo7I10wjZNREBbwN/view?usp=sharing' },
    ],
  },
  {
    rota: '/dia-dos-pais/esposa',
    titulo: 'Dia dos pais | Esposa',
    audios: [
      { cod: '350', link: 'https://drive.google.com/file/d/1pXCL6eMGDK9rvODJMa43e7XmOi2G474m/view?usp=sharing' },
      { cod: '351', link: 'https://drive.google.com/file/d/1oIhuDF1GyBMR91Xxqb1NRVW1s3uWQ3w5/view?usp=sharing' },
      { cod: '352', link: 'https://drive.google.com/file/d/1OpNXFyq75vnkW8ro8k-h-d-0LlzYq0RB/view?usp=sharing' },
      { cod: '353', link: 'https://drive.google.com/file/d/1eTz8338B1nzArIBEG0TOr0BDhJ26Mha5/view?usp=sharing' },
      { cod: '354', link: 'https://drive.google.com/file/d/1rwA5Q6XAuL6SM3v_jv-xZOIK0QPR-SFJ/view?usp=sharing' },
    ],
  },
  {
    rota: '/dia-dos-pais/homenagem',
    titulo: 'Homenagem | voz feminina',
    audios: [
      { cod: '355', link: 'https://drive.google.com/file/d/1PvxZ9MWKxWfn5KDiujnxBk_DPLj6FjK7/view?usp=sharing' },
      { cod: '356', link: 'https://drive.google.com/file/d/11bZks48s3o4ISkyZ22DppqTdT3LQuGKG/view?usp=sharing' },
      { cod: '357', link: 'https://drive.google.com/file/d/1HGQyQqVS2IFQfnEY6PIzTIFmvgVuIuZC/view?usp=sharing' },
    ],
  },

  // ===== DIA DAS MÃES =====
  {
    rota: '/dia-das-maes/neutro/feminino',
    titulo: 'Dia das Mães | voz feminina',
    audios: [
      { cod: '315', link: 'https://drive.google.com/file/d/1zXn3kkfs74sHyGGtbYzjZOJBaq4A1e_o/view?usp=sharing' },
      { cod: '316', link: 'https://drive.google.com/file/d/11odR9rXp5Bf4r09od7NrsfDbjTETsgPh/view?usp=sharing' },
      { cod: '317', link: 'https://drive.google.com/file/d/1YqLxtAjjZeWfGOMHY8zbym9gaYbtJ4Sh/view?usp=sharing' },
      { cod: '318', link: 'https://drive.google.com/file/d/1MkWA53G38B0IVPiplGhxhlHF1myoEF-q/view?usp=sharing' },
      { cod: '319', link: 'https://drive.google.com/file/d/1KLqHQ7QexmSr54Zlk8iM0uWhLlVpTpwW/view?usp=sharing' },
      { cod: '320', link: 'https://drive.google.com/file/d/1QHRVooJv3kTtbnQyuiI3vEb6A6sBwj-l/view?usp=sharing' },
      { cod: '321', link: 'https://drive.google.com/file/d/1MiywCFzjeYiUucZB52adNGYUGQf6fuP-/view?usp=sharing' },
      { cod: '322', link: 'https://drive.google.com/file/d/1IXk0sfipcBJsOiE5UTl0iwSV8YaSntij/view?usp=sharing' },
      { cod: '323', link: 'https://drive.google.com/file/d/1RcPBhUMOEJKMXZYQ66F8WKqFbLCEl3B0/view?usp=sharing' },
      { cod: '324', link: 'https://drive.google.com/file/d/1IoWpSFaXlqonczyu0eklWFD46l8DXMFB/view?usp=sharing' },
    ],
  },
  {
    rota: '/dia-das-maes/neutro/masculino',
    titulo: 'Dia das Mães | voz masculina',
    audios: [
      { cod: '326', link: 'https://drive.google.com/file/d/1CGJmifJPsd2m9TPvM0heIhDONQOmhd8p/view?usp=sharing' },
      { cod: '327', link: 'https://drive.google.com/file/d/1gbPs9tAhUVcCIN_j10JPwCAwUISNrpec/view?usp=sharing' },
      { cod: '328', link: 'https://drive.google.com/file/d/1bmeMskrWfhawliUl39L6yFg06b6-gCUx/view?usp=sharing' },
      { cod: '329', link: 'https://drive.google.com/file/d/1V1eA0RS_xWUkzv5jC9UHglgS-eOGS9JB/view?usp=sharing' },
      { cod: '330', link: 'https://drive.google.com/file/d/1zFZr9FS5shrG6fdIg9bGkWRKBlgLNKz2/view?usp=sharing' },
      { cod: '331', link: 'https://drive.google.com/file/d/1efnlfxRQ9KRDN1TUWdNyIZj0zSWqNP7k/view?usp=sharing' },
      { cod: '332', link: 'https://drive.google.com/file/d/1q9MTwVw7MxMwCyyCPy7fxCmB11cVqMl1/view?usp=sharing' },
      { cod: '333', link: 'https://drive.google.com/file/d/1ERrvosT5OJRIet6MTT4rscja8eS43tW3/view?usp=sharing' },
    ],
  },

  // ===== NATAL =====
  {
    rota: '/natal/neutro/feminino',
    titulo: 'NEUTRO NATAL | voz feminina',
    audios: [
      { cod: '303', link: 'https://drive.google.com/file/d/1k6G1wpTupU2yJICB7lHwr3EyfK6PlmQW/view?usp=sharing' },
      { cod: '304', link: 'https://drive.google.com/file/d/1Eke6nfpqdoMYBPosNtOvEnIg05Qa8yc5/view?usp=sharing' },
      { cod: '305', link: 'https://drive.google.com/file/d/1HWO8zl7KdEq3oiSoDYhkyd0j70fiVYAl/view?usp=sharing' },
      { cod: '306', link: 'https://drive.google.com/file/d/1Be10bYzRW7J3Kf_9EOb9mOg7SqmrVYD8/view?usp=sharing' },
      { cod: '307', link: 'https://drive.google.com/file/d/1Pn1HnlgfpuZmXZ6I9vdEMCwheh2R3B0M/view?usp=sharing' },
      { cod: '308', link: 'https://drive.google.com/file/d/109kH6fBxn04D6k_Vr0lMy9JOoDYcanS_/view?usp=sharing' },
    ],
  },
  {
    rota: '/natal/neutro/masculino',
    titulo: 'NEUTRO NATAL | voz masculina',
    audios: [
      { cod: '309', link: 'https://drive.google.com/file/d/1s_Nn46n22UC4anNAsoGti-KreTgPPXS8/view?usp=sharing' },
      { cod: '310', link: 'https://drive.google.com/file/d/1vOkLhCmCcivy0VXng0m0YLsvWdk8ZQli/view?usp=sharing' },
      { cod: '311', link: 'https://drive.google.com/file/d/1OvxUK0G9ngEBguB9vve9KhtX0jxbcnzZ/view?usp=sharing' },
      { cod: '312', link: 'https://drive.google.com/file/d/1s-ck8pAazzBg16Cu_5JcbqTOf5ZgcjKI/view?usp=sharing' },
      { cod: '313', link: 'https://drive.google.com/file/d/16G3ds-giKY9IDPJTh5S2Xi_7ulSUmUCA/view?usp=sharing' },
      { cod: '314', link: 'https://drive.google.com/file/d/11BWU855lKryiJLritwx9oV4bhaJ2ASXe/view?usp=sharing' },
    ],
  },

  // ===== AGRADECIMENTO =====
  {
    rota: '/agradecimento/feminino',
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
    titulo: 'Agradecimento | voz masculina',
    audios: [
      { cod: '349', s3: 'Agradecimento/M/349.mp3' },
      { cod: '348', s3: 'Agradecimento/M/348.mp3' },
      { cod: '347', s3: 'Agradecimento/M/347.mp3' },
      { cod: '346', s3: 'Agradecimento/F/342.mp3' },
    ],
  },
]
