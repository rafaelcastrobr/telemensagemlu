import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 100%;
`

export default function AnivAmigoFem() {
  return (
    <div>
      <h3>Aniversário Amigo | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 363</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGO/F/363.mp3'} />
        </div>
        <div>
          <label>COD: 364</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGO/F/364.mp3'} />
        </div>
        <div>
          <label>COD: 365</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGO/F/365.mp3'} />
        </div>
        <div>
          <label>COD: 366</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGO/F/366.mp3'} />
        </div>
        <div>
          <label>COD: 367</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGO/F/367.mp3'} />
        </div>
        <div>
          <label>COD: 368</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGO/F/368.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}