import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivIrmaoFem() {
  return (
    <div>
      <h3>Aniversário Irmão | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 291</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Fem/291.mp3'} />
        </div>
        <div>
          <label>COD: 292</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Fem/292.mp3'} />
        </div>
        <div>
          <label>COD: 293</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Fem/293.mp3'} />
        </div>
        <div>
          <label>COD: 294</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Fem/294.mp3'} />
        </div>
        <div>
          <label>COD: 295</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Fem/295.mp3'} />
        </div>
        <div>
          <label>COD: 296</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Fem/296.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}