import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivFilhaFem() {
  return (
    <div>
      <h3>Aniversário Filha | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 145</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FILHA/FILHA+FEM/145.mp3'} />
        </div>
        <div>
          <label>COD: 146</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FILHA/FILHA+FEM/146.mp3'} />
        </div>
        <div>
          <label>COD: 147</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FILHA/FILHA+FEM/147.mp3'} />
        </div>
        <div>
          <label>COD: 148</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FILHA/FILHA+FEM/148.mp3'} />
        </div>
        <div>
          <label>COD: 149</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FILHA/FILHA+FEM/149.mp3'} />
        </div>
        <div>
          <label>COD: 150</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FILHA/FILHA+FEM/150.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}