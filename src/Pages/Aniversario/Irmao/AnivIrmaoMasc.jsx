import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivIrmaoMasc() {
  return (
    <div>
      <h3>Aniversário Irmão | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 297</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1lbS7nyStyGIUWtY-POwLH97fNPnkll0F/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 298</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1f-ihNPMFURXPJxg3qUskYTX5gvn9PL3v/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 299</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/19h_egKrM5HeyCvwMphH13TLZskHJPUVB/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 300</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1kZmrcG6HVq5IudXJHqAGXUJClyeXAIMa/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 301</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Xn2wIiNSSU6H9rSIDilNdzg_Z-ew-Hox/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 302</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1pm7ewwC_uCB1hQFeAjr_rSzOIuhHG3cX/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}