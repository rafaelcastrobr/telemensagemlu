import styled from "styled-components";
import Player from "../../Components/Player";
import ReplaceWord from "../../function/replace";


//ReplaceWord
//Player

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AgradecimentoMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Agradecimento | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 349</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1KiZQvZ4aZigSN4Ebpi0OQQ95pF9aXzWP/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 348</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1NRjGYuDY-1KXF8dfZsfNG69EIctjahHK/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 347</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1elwpW-DfdufHTI9rGfyQn_j2zgDDULvW/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  346</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Fce_8lszPkg97Li6OGG37pmFLoR3m1Cr/view?usp=sharing')} />
        </div>
        
      </ContainerCss>
    </div>
  )
}