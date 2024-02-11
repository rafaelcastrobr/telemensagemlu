import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivIrmaFem() {
  return (
    <div>
      <h3>Aniversário Irmã | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 279</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Fem/279.mp3'} />
        </div>
        <div>
          <label>COD: 280</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Fem/280.mp3'} />
        </div>
        <div>
          <label>COD: 281</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Fem/281.mp3'} />
        </div>
        <div>
          <label>COD: 282</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Fem/282.mp3'} />
        </div>
        <div>
          <label>COD: 283</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Fem/283.mp3'} />
        </div>
        <div>
          <label>COD: 284</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irma/Fem/284.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}