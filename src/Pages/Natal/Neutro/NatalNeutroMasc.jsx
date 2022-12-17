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

export default function NatalNeutroMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>NEUTRO NATAL | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 309</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1s_Nn46n22UC4anNAsoGti-KreTgPPXS8/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 310</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1vOkLhCmCcivy0VXng0m0YLsvWdk8ZQli/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 311</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1OvxUK0G9ngEBguB9vve9KhtX0jxbcnzZ/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 312</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1s-ck8pAazzBg16Cu_5JcbqTOf5ZgcjKI/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 313</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/16G3ds-giKY9IDPJTh5S2Xi_7ulSUmUCA/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 314</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/11BWU855lKryiJLritwx9oV4bhaJ2ASXe/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}