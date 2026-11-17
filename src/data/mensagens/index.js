// Junta as páginas de mensagens de todas as ocasiões. Para o passo a passo, veja o README.

import { aniversario } from './aniversario'
import { diaDasMulheres } from './dia-das-mulheres'
import { romanticas } from './romanticas'
import { desculpas } from './desculpas'
import { namorados } from './namorados'
import { diaDosPais } from './dia-dos-pais'
import { diaDasMaes } from './dia-das-maes'
import { natal } from './natal'
import { agradecimento } from './agradecimento'

export const PAGINAS = [
  ...aniversario,
  ...diaDasMulheres,
  ...romanticas,
  ...desculpas,
  ...namorados,
  ...diaDosPais,
  ...diaDasMaes,
  ...natal,
  ...agradecimento,
]
