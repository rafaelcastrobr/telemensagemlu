import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivPaiMasc() {
  return (
    <div>
      <h3>Aniversário Pai | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 176</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/PAI/176.mp3'} />
        </div>
        <div>
          <label>COD: 177</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/PAI/177.mp3'} />
        </div>
        <div>
          <label>COD: 178</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/PAI/178.mp3'} />
        </div>
        <div>
          <label>COD: 179</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/PAI/179.mp3'} />
        </div>
        <div>
          <label>COD: 180</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/MASC/PAI/180.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}