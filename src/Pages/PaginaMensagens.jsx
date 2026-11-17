import styled from 'styled-components'

import Player from '../Components/Player'
import ReplaceWord from '../function/replace'
import { S3_BASE } from '../data/mensagens'
import pimenta from '../img/icons8-pimenta-chili-40.png'

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

// Monta o link do áudio: arquivo do S3 (s3) ou URL completa (link, ex.: Google Drive).
function linkDoAudio(audio) {
  const url = audio.s3 !== undefined ? S3_BASE + audio.s3 : audio.link
  return ReplaceWord(url)
}

// Página única usada por todas as listas de mensagens. Os dados ficam em src/data/mensagens.js
export default function PaginaMensagens({ titulo, audios }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <ContainerCss>
        {audios.map((audio, i) => (
          <div key={`${audio.cod}-${i}`}>
            {audio.pimenta && <img src={pimenta} alt="" />}
            <label>COD: {audio.cod}</label>
            <Player link={linkDoAudio(audio)} nome={`mensagem ${audio.cod}`} />
          </div>
        ))}
      </ContainerCss>
    </div>
  )
}
