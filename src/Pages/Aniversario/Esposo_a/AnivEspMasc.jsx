import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivEspMasc() {
  return (
    <div>
      <h3>Aniversário Esposa</h3>
      <ContainerCss>
        <div>
          <label>COD: 207</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/ESPOSA/207.mp3')} />
        </div>
        <div>
          <label>COD: 208</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/ESPOSA/208.mp3')} />
        </div>
        <div>
          <label>COD: 209</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/ESPOSA/209.mp3')} />
        </div>
        <div>
          <label>COD: 210</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/ESPOSA/210.mp3')} />
        </div>
        <div>
          <label>COD: 211</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/ESPOSA/211.mp3')} />
        </div>
        <div>
          <label>COD: 212</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/ESPOSA/212.mp3')} />
        </div>
        <div>
          <label>COD: 213</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/ESPOSA/213.mp3')} />
        </div>
      </ContainerCss>
    </div>
  )
}