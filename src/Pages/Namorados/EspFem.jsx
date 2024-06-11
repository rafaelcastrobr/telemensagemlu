import Player from "../../Components/Player";
import styled from "styled-components";
import ReplaceWord from "../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function EspFem() {
  return (
    <div>
      <h3>Feminino Esposo</h3>
      <ContainerCss>
        <div>
          <label>COD: 118</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/Esposo/118.mp3')} />
        </div>
        <div>
          <label>COD: 119</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/Esposo/119.mp3')} />
        </div>
        <div>
          <label>COD: 120</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/Esposo/120.mp3')} />
        </div>
        <div>
          <label>COD: 121</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/Esposo/121.mp3')} />
        </div>
        <div>
          <label>COD: 122</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/Esposo/122.mp3')} />
        </div>
      
      </ContainerCss>
    </div>
  )
}