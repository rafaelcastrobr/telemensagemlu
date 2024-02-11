import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivEspFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Esposo</h3>
      <ContainerCss>
        <div>
          <label>COD: 199</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/ESPOSO/199.mp3'} />
        </div>
        <div>
          <label>COD: 200</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/ESPOSO/200.mp3'} />
        </div>
        <div>
          <label>COD: 201</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/ESPOSO/201.mp3'} />
        </div>
        <div>
          <label>COD: 202</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/ESPOSO/202.mp3'} />
        </div>
        <div>
          <label>COD: 203</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/ESPOSO/203.mp3'} />
        </div>
        <div>
          <label>COD: 204</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/ESPOSO/204.mp3'} />
        </div>
        <div>
          <label>COD: 205</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/ESPOSO/205.mp3'} />
        </div>
        <div>
          <label>COD: 206</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/ESPOSO/206.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}