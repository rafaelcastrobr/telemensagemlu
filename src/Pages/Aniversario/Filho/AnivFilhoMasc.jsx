import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivFilhoMasc() {
  return (
    <div>
      <h3>Aniversário Filho | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 225</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/FILHO/225.mp3'} />
        </div>
        <div>
          <label>COD: 226</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/FILHO/226.mp3'} />
        </div>
        <div>
          <label>COD: 227</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/FILHO/227.mp3'} />
        </div>
        <div>
          <label>COD: 228</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/FILHO/228.mp3'}/>
        </div>
        <div>
          <label>COD: 229</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/FILHO/229.mp3'} />
        </div>
        <div>
          <label>COD: 230</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/FILHO/230.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}