import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivFilhaFem() {
  return (
    <div>
      <h3>Aniversário Filha Feminino</h3>
      <ContainerCss>
        <div>
          <label>COD: 145</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1IBOK8hBSvrMaANUYWa8dHcau7m0KSg2f/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 146</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/14Yqgh1vFZdqVjHi7lMveSejtccn99ujy/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 147</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1ygT6Y4Gn5dKFAWiDvi3_uitUTGt39w_C/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 148</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1U3Ekxrs1gxn7Tf8AQKB2ak6OZUCJhFkI/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 149</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/18DdF0LqmOtmXjIjjXojUxVHx11e4GcQ6/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 150</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1NVEwdRCPVDiRFaqPYmAHGm9NMTIjTBz9/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}