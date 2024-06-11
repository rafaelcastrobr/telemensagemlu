import Player from "../../Components/Player";
import styled from "styled-components";
import ReplaceWord from "../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function EspMascEvan() {
  return (
    <div>
      <h3>Masculino Esposa Evangélica</h3>
      <ContainerCss>
        <div>
          <label>COD: 123</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/Esposa/Evangelica/123.mp3')} />
        </div>
        <div>
          <label>COD: 124</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/Esposa/Evangelica/124.mp3')} />
        </div>
        <div>
          <label>COD: 125</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/Esposa/Evangelica/125.mp3')} />
        </div>
        <div>
          <label>COD: 126</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/Esposa/Evangelica/126.mp3')} />
        </div>
        <div>
          <label>COD: 127</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Masc/Esposa/Evangelica/127.mp3')} />
        </div>
    
      </ContainerCss>
    </div>
  )
}