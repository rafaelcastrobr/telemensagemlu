import Player from "../../Components/Player";
import styled from "styled-components";
import ReplaceWord from '../../function/replace'

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function NamFem() {
  return (
    <div>
      <h3>Feminino Namorado</h3>
      <ContainerCss>
        <div>
          <label>COD: 101</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/101.mp3')} />
        </div>
        <div>
          <label>COD: 102</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/102.mp3')} />
        </div>
        <div>
          <label>COD: 103</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/103.mp3')} />
        </div>
        <div>
          <label>COD: 104</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/104.mp3')} />
        </div>
        <div>
          <label>COD: 105</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/105.mp3')} />
        </div>
        <div>
          <label>COD: 106</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/106.mp3')} />
        </div>
        <div>
          <label>COD: 107</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/107.mp3')} />
        </div>
        <div>
          <label>COD: 108</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/108.mp3')} />
        </div>
        <div>
          <label>COD: 109</label>
          <Player link={ReplaceWord('https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Namorados/Fem/109.mp3')} />
        </div>

      </ContainerCss>
    </div>
  )
}