import styled from 'styled-components'

import Player from '../Components/Player'
import ReplaceWord from '../function/replace'
import { S3_BASE } from '../data/mensagens'
import pimenta from '../img/icons8-pimenta-chili-40.png'

// O .App centraliza os filhos e encolhe a página ao tamanho do conteúdo; aqui ela ocupa a largura toda
const PaginaCss = styled.div`
  width: 100%;
`

const ContainerCss = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding: 0 12px 96px; /* folga embaixo pro botão flutuante do WhatsApp não cobrir o último player */
`

// Monta o link do áudio: arquivo do S3 (s3) ou URL completa (link, ex.: Google Drive).
function linkDoAudio(audio) {
  const url = audio.s3 !== undefined ? S3_BASE + audio.s3 : audio.link
  return ReplaceWord(url)
}

// Página única usada por todas as listas de mensagens. Os dados ficam em src/data/mensagens.js
export default function PaginaMensagens({ titulo, audios }) {
  return (
    <PaginaCss>
      <h3>{titulo}</h3>
      <ContainerCss>
        {audios.map((audio, i) => (
          <Player
            key={`${audio.cod}-${i}`}
            link={linkDoAudio(audio)}
            nome={`mensagem ${audio.cod}`}
          >
            {audio.pimenta && <img src={pimenta} alt="" />}
            <label>COD: {audio.cod}</label>
          </Player>
        ))}
      </ContainerCss>
    </PaginaCss>
  )
}
