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
      <h3>Femino Esposo Evangélico</h3>
      <ContainerCss>
        <div>
          <label>COD: 128</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/Esposo/Evangelica/128.mp3')} />
        </div>
        <div>
          <label>COD: 129</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/Esposo/Evangelica/129.mp3')} />
        </div>
        <div>
          <label>COD: 130</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/Esposo/Evangelica/130.mp3')} />
        </div>
        <div>
          <label>COD: 131</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/Esposo/Evangelica/131.mp3')} />
        </div>
        <div>
          <label>COD: 132</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/Esposo/Evangelica/132.mp3')} />
        </div>
      
      </ContainerCss>
    </div>
  )
}