import styled from "styled-components";
import Player from "../../../../Components/Player";
import ReplaceWord from "../../../../function/replace";


//ReplaceWord
//Player

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivNetaMasc() {
  return (
    <div>
      <h3>Aniversário Neta | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 338</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Netos/Neta/M/338.mp3'} />
        </div>
        <div>
          <label>COD: 339</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Netos/Neta/M/339.mp3'} />
        </div>
        <div>
          <label>COD: 340</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Netos/Neta/M/340.mp3'} />
        </div>
        <div>
          <label>COD: 341</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Netos/Neta/M/341.mp3'} />
        </div>
        
      </ContainerCss>
    </div>
  )
}