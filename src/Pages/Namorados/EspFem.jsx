import Player from "../../Components/Player";
import styled from "styled-components";
import ReplaceWord from "../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function EspFem() {
  return (
    <div>
      <h3>Feminino Esposo</h3>
      <ContainerCss>
        <div>
          <label>COD: 118</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 119</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1zX0vOLOcjw5tqUKgGhLFuwhu5m4c0Et-/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 120</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1zX0vOLOcjw5tqUKgGhLFuwhu5m4c0Et-/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 121</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1U_Kvd_Gti8w_k5BtYvl5Ze2iov1tddic/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 122</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1JUuZ3KKcz2lbHNzmmJUqvsyu-p9mtTOF/view?usp=sharing')} />
        </div>
      
      </ContainerCss>
    </div>
  )
}