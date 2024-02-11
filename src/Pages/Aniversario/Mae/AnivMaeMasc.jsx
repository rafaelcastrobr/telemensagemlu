import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivMaeMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Mãe | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 161</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/MAE/161.mp3'} />
        </div>
        <div>
          <label>COD: 162</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/MAE/162.mp3'} />
        </div>
        <div>
          <label>COD: 163</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/MAE/163.mp3'} />
        </div>
        <div>
          <label>COD: 164</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/MAE/164.mp3'} />
        </div>
        <div>
          <label>COD: 165</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/MAE/165.mp3'} />
        </div>
        <div>
          <label>COD: 166</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/MAE/166.mp3'} />
        </div>
        <div>
          <label>COD: 167</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/MAE/167.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}