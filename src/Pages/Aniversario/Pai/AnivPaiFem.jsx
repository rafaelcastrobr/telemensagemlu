import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivPaiFem() {
  return (
    <div>
      <h3>Aniversário Pai | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 168</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/PAI/168.mp3'} />
        </div>
        <div>
          <label>COD: 169</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/PAI/169.mp3'} />
        </div>
        <div>
          <label>COD: 170</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/PAI/170.mp3'} />
        </div>
        <div>
          <label>COD: 171</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/PAI/171.mp3'} />
        </div>
        <div>
          <label>COD: 172</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/PAI/172.mp3'} />
        </div>
        <div>
          <label>COD: 173</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/PAI/173.mp3'} />
        </div>
        <div>
          <label>COD: 174</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/PAI/174.mp3'} />
        </div>
        <div>
          <label>COD: 175</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/FEM/PAI/175.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}