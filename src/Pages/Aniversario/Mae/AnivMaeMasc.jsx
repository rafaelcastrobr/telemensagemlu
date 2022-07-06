import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivMaeMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Mãe | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 161</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Mq6akBLE9dzZtBwngNSm0RjDIHHxxQyj/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 162</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/103wiS1jIhhwplxDCC3uvncycsYsOC540/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 163</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1RSbCuSchwDsSw2Gu6EnvpKwqi41_bLmJ/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 164</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/18xwmYXt-F40D67MISEnPT-u1oO8IavY8/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 165</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1lNoyK9IiQzvxrtnp7INatSvlvctw6opk/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 166</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1rWYqx4SRuAYKqJ830Obb0MUBKE-mW4IB/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 167</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/16CP-5-mF829VhIP9TRcxB9KxMbSX74O4/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}