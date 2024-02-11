import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivIrmaMasc() {
  return (
    <div>
      <h3>Aniversário Irmã | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 285</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Masc/285.mp3'} />
        </div>
        <div>
          <label>COD: 286</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Masc/286.mp3'} />
        </div>
        <div>
          <label>COD: 287</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Masc/287.mp3'} />
        </div>
        <div>
          <label>COD: 288</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Masc/288.mp3'} />
        </div>
        <div>
          <label>COD: 289</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Masc/289.mp3'} />
        </div>
        <div>
          <label>COD: 290</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Masc/290.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}