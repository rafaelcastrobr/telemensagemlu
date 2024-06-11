import Player from "../../Components/Player";
import styled from "styled-components";
import ReplaceWord from "../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function NamMasc() {
  return (
    <div>
      <h3>Masculino</h3>
      <ContainerCss>
        <div>
          <label>COD: 133</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/133.mp3')} />
        </div>
        <div>
          <label>COD: 134</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/134.mp3')} />
        </div>
        <div>
          <label>COD: 135</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/135.mp3')} />
        </div>
        <div>
          <label>COD: 136</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/136.mp3')} />
        </div>
        <div>
          <label>COD: 137</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/137.mp3')} />
        </div>
        <div>
          <label>COD: 138</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/138.mp3')} />
        </div>
        <div>
          <label>COD: 139</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/139.mp3')} />
        </div>
        <div>
          <label>COD: 140</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/140.mp3')} />
        </div>
      
      </ContainerCss>
    </div>
  )
}