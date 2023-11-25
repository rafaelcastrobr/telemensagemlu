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

export default function MaesMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Dia das Mães | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 326</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1CGJmifJPsd2m9TPvM0heIhDONQOmhd8p/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 327</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1gbPs9tAhUVcCIN_j10JPwCAwUISNrpec/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 328</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1bmeMskrWfhawliUl39L6yFg06b6-gCUx/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  329</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1V1eA0RS_xWUkzv5jC9UHglgS-eOGS9JB/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  330</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1zFZr9FS5shrG6fdIg9bGkWRKBlgLNKz2/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  331</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1efnlfxRQ9KRDN1TUWdNyIZj0zSWqNP7k/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  332</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1q9MTwVw7MxMwCyyCPy7fxCmB11cVqMl1/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  333</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1ERrvosT5OJRIet6MTT4rscja8eS43tW3/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}