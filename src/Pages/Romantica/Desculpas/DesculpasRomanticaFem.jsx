import styled from "styled-components";
import Player from "../../../Components/Player";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function DesculpasRomanticaFem() {
  return (
    <div>
      <h3>Romântica | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 362</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/RomanticaDesculpa/362.mp3'} />
        </div>
        <div>
          <label>COD: 361</label>
          <Player link={"https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/RomanticaDesculpa/361.mp3"} />
        </div>
        <div>
          <label>COD: 360</label>
          <Player link={"https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/RomanticaDesculpa/360.mp3"} />
        </div>
        <div>
          <label>COD: 359</label>
          <Player link={"https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/RomanticaDesculpa/359.mp3"} />
        </div>
        
        
      </ContainerCss>
    </div>
  )
}