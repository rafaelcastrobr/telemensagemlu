import styled from 'styled-components'

import Player from '../components/Player'
import PlayerDrive from '../components/PlayerDrive'
import { linkDoAudio } from '../utils/audio'
import { idDoDrive } from '../utils/drive'
import pimenta from '../assets/icons/pimenta.png'

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

// Lista de mensagens (áudios) de uma página. Os dados ficam em src/data/mensagens
export default function Mensagens({ titulo, audios }) {
  return (
    <PaginaCss>
      <h3>{titulo}</h3>
      <ContainerCss>
        {audios.map((audio, i) => {
          const nome = `mensagem ${audio.cod}`
          const idDrive = idDoDrive(audio.link)
          const rotulo = (
            <>
              {audio.pimenta && <img src={pimenta} alt="" />}
              <label>COD: {audio.cod}</label>
            </>
          )

          // Áudio no Drive: player do próprio Drive. Áudio no S3: o Player normal.
          return idDrive
            ? <PlayerDrive key={`${audio.cod}-${i}`} id={idDrive} nome={nome}>{rotulo}</PlayerDrive>
            : <Player key={`${audio.cod}-${i}`} link={linkDoAudio(audio)} nome={nome}>{rotulo}</Player>
        })}
      </ContainerCss>
    </PaginaCss>
  )
}
