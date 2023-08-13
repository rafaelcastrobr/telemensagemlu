import styled from "styled-components";
import ReplaceWord from "../../../function/replace";
import Player from "../../../Components/Player";


//ReplaceWord
//Player

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function PaisHomenagemFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Homenagem | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 355</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1PvxZ9MWKxWfn5KDiujnxBk_DPLj6FjK7/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 356</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/11bZks48s3o4ISkyZ22DppqTdT3LQuGKG/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 357</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1HGQyQqVS2IFQfnEY6PIzTIFmvgVuIuZC/view?usp=sharing')} />
        </div>
        
      </ContainerCss>
    </div>
  )
}