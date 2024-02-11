import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivFilhoFem() {
  return (
    <div>
      <h3>Aniversário Filho | voz femimina</h3>
      <ContainerCss>
        <div>
          <label>COD: 219</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/FILHO/219.mp3'} />
        </div>
        <div>
          <label>COD: 220</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/FILHO/220.mp3'} />
        </div>
        <div>
          <label>COD: 221</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/FILHO/221.mp3'} />
        </div>
        <div>
          <label>COD: 222</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/FILHO/222.mp3'} />
        </div>
        <div>
          <label>COD: 223</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/FILHO/223.mp3'} />
        </div>
        <div>
          <label>COD: 224</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/FILHO/224.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}