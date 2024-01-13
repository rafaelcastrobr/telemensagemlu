import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function DesculpasRomanticaFem() {
  return (
    <div>
      <h3>Romântica | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 362</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1LOzr9Mw1VeQfTcUEIYfO-QJgzq4KNzBp/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 361</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1F_pVSLL-k-SLkQXB8Vq2TZRtWyRfBLIa/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 360</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1_G9bNSN1Vxweh22sVe3Ww3SLlWQdFj1X/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 359</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1g9MH2AMNSe2T9FZ9N63RpQ7cEdsvZ6kI/view?usp=sharing')} />
        </div>
        
        
      </ContainerCss>
    </div>
  )
}