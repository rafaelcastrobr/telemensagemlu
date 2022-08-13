import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivIrmaMasc() {
  return (
    <div>
      <h3>Aniversário Irmã | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 285</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/16mzOVUrEs28MLMjh-qJqlSK7cz46lBJ5/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 286</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1am6SsCk-VTkm3-IHlsbMxQXRzETlxJPz/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 287</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1eRLgeRrSsRk-36fFrnFpcR7V1TzNvwu4/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 288</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/16DnjI5buFUgrAQ1yA8UX8L1qYyNt0F5M/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 289</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1CGnL4Wa_wNCKMVzjhiOKP2tvmBDMwTNH/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 290</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1g2hG0yKG5eZzVX_7P6zLbcqYXbmhf6vx/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}