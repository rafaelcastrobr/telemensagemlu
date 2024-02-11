import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 100%;
`

export default function AnivAmigaFem() {
  return (
    <div>
      <h3>Aniversário Amiga Feminino</h3>
      <ContainerCss>
        <div>
          <label>COD: 141</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGA/AMIGA+FEM/141.mp3'} />
        </div>
        <div>
          <label>COD: 142</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGA/AMIGA+FEM/142.mp3'} />
        </div>
        <div>
          <label>COD: 143</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGA/AMIGA+FEM/143.mp3'} />
        </div>
        <div>
          <label>COD: 144</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGA/AMIGA+FEM/144.mp3'} />
        </div>
        <div>
          <label>COD: 151</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGA/AMIGA+FEM/151.mp3'} />
        </div>
        <div>
          <label>COD: 152</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/AMIGA/AMIGA+FEM/152.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}