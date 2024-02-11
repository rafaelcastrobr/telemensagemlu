import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivFilhaMasc() {
  return (
    <div>
      <h3>Aniversário Filha | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 214</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/FILHA/214.mp3'} />
        </div>
        <div>
          <label>COD: 215</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/FILHA/215.mp3'} />
        </div>
        <div>
          <label>COD: 216</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/FILHA/216.mp3'} />
        </div>
        <div>
          <label>COD: 217</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/FILHA/217.mp3'} />
        </div>
        <div>
          <label>COD: 218</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/FILHA/218.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}