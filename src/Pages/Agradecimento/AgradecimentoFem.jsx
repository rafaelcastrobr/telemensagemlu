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

export default function AgradecimentoFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Agradecimento | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 345</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1o99LMuOlzYs-Eitt-zWUPIngR_YZ8_2Y/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 344</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1136_YAsVT6196fgcnfPZurq3Y3c6pXEF/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 343</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1VuFSx6kn7E7V8ZgVNf0MuNAV2C9XSH9-/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  342</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/16SjAzYmQxpORIm16K9n0PzI_wmavrpDO/view?usp=sharing')} />
        </div>
        
      </ContainerCss>
    </div>
  )
}