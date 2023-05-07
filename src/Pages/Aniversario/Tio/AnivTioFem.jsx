import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


//ReplaceWord
//Player

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivTioFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Tio | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 334</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1I5VjFoC8jemwH0jsUorYyNnbSts0bfwj/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 335</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1x8NgD4MPxkk7GU8gjPxaPlIj86zecc2R/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 336</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1-yTO58NrG_j-U8Nsto4Wv6x2JL2U0kT2/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}