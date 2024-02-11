import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


//ReplaceWord
//Player

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivNamFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Namorado</h3>
      <ContainerCss>
        <div>
          <label>COD: 190</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/NAMORADO/190.mp3'} />
        </div>
        <div>
          <label>COD: 191</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/NAMORADO/191.mp3'} />
        </div>
        <div>
          <label>COD: 192</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/NAMORADO/192.mp3'} />
        </div>
        <div>
          <label>COD:  193</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/NAMORADO/193.mp3'} />
        </div>
        <div>
          <label>COD: 194</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/NAMORADO/194.mp3'} />
        </div>
        <div>
          <label>COD: 195</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/NAMORADO/195.mp3'} />
        </div>
        <div>
          <label>COD: 196</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/NAMORADO/196.mp3'} />
        </div>
        <div>
          <label>COD: 197</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/NAMORADO/197.mp3'} />
        </div>
        <div>
          <label>COD: 198</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/NAMORADO/198.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}