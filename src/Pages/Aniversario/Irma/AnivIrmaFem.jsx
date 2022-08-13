import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivIrmaFem() {
  return (
    <div>
      <h3>Aniversário Irmã | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 279</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1bgK2RYQ_ipXRfPZ3HwY8iwxkqagttOBt/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 280</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1V3z13rstOKveVflp-_HrjovkHh_dwMz3/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 281</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/10wOwD2tNyejSOy4eeZCirrL3Dtf4ro2s/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 282</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1i6JYskgq88edMTCkZ0RV9gSFgj1jGsls/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 283</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Tu-5C7Um_H0s29LTUWUKwx2JijG14Xwr/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 284</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/12DiALh5DrreEmL7QXTgbssl8iWS_bGWq/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}