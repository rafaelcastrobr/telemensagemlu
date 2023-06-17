import styled from "styled-components";
import Player from "../../../../Components/Player";
import ReplaceWord from "../../../../function/replace";


//ReplaceWord
//Player

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivNetaMasc() {
  return (
    <div>
      <h3>Aniversário Neta | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 338</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1426ngayg-EmwNLria5xOPxvbbwRDNL7n/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 339</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1lLxPRNKQM8nFYCUIa2XXqZH-CimbQVWm/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 340</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1jRjENz4rHQ7RhssRo1CveLH1R3DvjBY9/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 341</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1f4799bisAbciQ_qLaR1ffDTOhmszMXb3/view?usp=sharing')} />
        </div>
        
      </ContainerCss>
    </div>
  )
}