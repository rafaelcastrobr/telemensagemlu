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

export default function PaisEspFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Dia dos pais | Esposa </h3>
      <ContainerCss>
        <div>
          <label>COD: 350</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1pXCL6eMGDK9rvODJMa43e7XmOi2G474m/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 351</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1oIhuDF1GyBMR91Xxqb1NRVW1s3uWQ3w5/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 352</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1OpNXFyq75vnkW8ro8k-h-d-0LlzYq0RB/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 353</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1eTz8338B1nzArIBEG0TOr0BDhJ26Mha5/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 354</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1rwA5Q6XAuL6SM3v_jv-xZOIK0QPR-SFJ/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}