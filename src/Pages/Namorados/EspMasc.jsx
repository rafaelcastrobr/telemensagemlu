import Player from "../../Components/Player";
import styled from "styled-components";
import ReplaceWord from "../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function EspMasc() {
  return (
    <div>
      <h3>Masculino Esposa</h3>
      <ContainerCss>
        <div>
          <label>COD: 112</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/Esposa/112.mp3')} />
        </div>
        <div>
          <label>COD: 113</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/Esposa/113.mp3')} />
        </div>
        <div>
          <label>COD: 114</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/Esposa/114.mp3')} />
        </div>
        <div>
          <label>COD: 115</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/Esposa/115.mp3')} />
        </div>
        <div>
          <label>COD: 116</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/Esposa/116.mp3')} />
        </div>
        <div>
          <label>COD: 117</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/Esposa/117.mp3')} />
        </div>
     

      </ContainerCss>
    </div>
  )
}