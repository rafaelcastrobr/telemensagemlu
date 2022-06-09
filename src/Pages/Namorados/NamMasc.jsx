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
          <Player link={ReplaceWord('https://drive.google.com/file/d/1WbD6MLoTw4I9r7aV_dvK6EtDvJRpfC39/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 134</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1gN90aBYv6XOEsF30v769WHmXAuWDVEvE/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 135</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1k1snKLI7tqgalIUocNVsYs3GmLilS2oe/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 136</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1noi3F8qariArlrxQjMfE1oX4Nm-VwijY/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 137</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1vy84EGkgaorz84CbU5G2SnoWsqwR2p2B/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 138</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/15xJLOqXLvrYuMqD0W3Zsv0urYSpAz-xP/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 139</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1GJ9-WrjqdEI0rIXtRGtWaaL-l-CPZbZy/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 140</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1UmE2gIbpPmwsvj0XG4BcMmoMYuZSiXRO/view?usp=sharing')} />
        </div>
      
      </ContainerCss>
    </div>
  )
}