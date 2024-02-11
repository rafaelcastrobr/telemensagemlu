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

export default function AnivMaeFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Mãe | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 153</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/MAE/153.mp3'} />
        </div>
        <div>
          <label>COD: 154</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/MAE/154.mp3'} />
        </div>
        <div>
          <label>COD: 155</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/MAE/155.mp3'} />
        </div>
        <div>
          <label>COD:  156</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/MAE/156.mp3'} />
        </div>
        <div>
          <label>COD:  157</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/MAE/157.mp3'} />
        </div>
        <div>
          <label>COD: 158</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/MAE/158.mp3'} />
        </div>
        <div>
          <label>COD: 159</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/MAE/159.mp3'} />
        </div>
        <div>
          <label>COD: 160</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/MAE/160.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}