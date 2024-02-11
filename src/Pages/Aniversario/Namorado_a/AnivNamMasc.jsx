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

export default function AnivNamMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Namorada</h3>
      <ContainerCss>
        <div>
          <label>COD: 181</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/NAMORADA/181.mp3'} />
        </div>
        <div>
          <label>COD: 182</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/NAMORADA/182.mp3'} />
        </div>
        <div>
          <label>COD: 183</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/NAMORADA/183.mp3'} />
        </div>
        <div>
          <label>COD: 184</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/NAMORADA/184.mp3'} />
        </div>
        <div>
          <label>COD: 185</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/NAMORADA/185.mp3'} />
        </div>
        <div>
          <label>COD: 186</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/NAMORADA/186.mp3'} />
        </div>
        <div>
          <label>COD: 187</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/NAMORADA/187.mp3'} />
        </div>
        <div>
          <label>COD: 188</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/NAMORADA/188.mp3'} />
        </div>
        <div>
          <label>COD: 189</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/NAMORADA/189.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}