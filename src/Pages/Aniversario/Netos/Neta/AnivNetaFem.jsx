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

export default function AnivNetaFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Neta | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 334</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Netos/Neta/F/334.mp3'} />
        </div>
        <div>
          <label>COD: 335</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Netos/Neta/F/335.mp3'} />
        </div>
        <div>
          <label>COD: 336</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Netos/Neta/F/336.mp3'} />
        </div>
        <div>
          <label>COD: 337</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Netos/Neta/F/337.mp3'} />
        </div>
        
      </ContainerCss>
    </div>
  )
}