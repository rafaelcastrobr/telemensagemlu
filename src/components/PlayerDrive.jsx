import styled from 'styled-components'

import { playerDoDrive } from '../utils/drive'
import { CartaoCss, RotuloCss } from './cartao'

const PlayerCss = styled.iframe`
  display: block;
  width: 100%;
  height: 150px;
  margin-top: 8px;
  border: 0;
  border-radius: 10px;
  background: #1c1c1c;
`

// Cartão de uma mensagem que ainda está no Google Drive. O Google não deixa outros sites
// tocarem o arquivo direto, então aqui aparece o player do próprio Drive dentro do cartão.
// O ideal é mover o áudio para o S3 (campo "s3"), e aí ele usa o Player normal.
export default function PlayerDrive({ id, nome = 'mensagem', children }) {
  return (
    <CartaoCss>
      <RotuloCss>{children}</RotuloCss>
      <PlayerCss
        src={playerDoDrive(id)}
        title={`Player do Drive de ${nome}`}
        loading="lazy"
        allow="autoplay"
      />
    </CartaoCss>
  )
}
