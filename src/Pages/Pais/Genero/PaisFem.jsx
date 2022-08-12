import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function PaiFem() {
  return (
    <div>
      <h3>Dia dos País | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 261</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1OBjyn7UzBvg2d2k31uf0qZFE1wnBi48s/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 262</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1h_j1uCqzfClASVvEdIZbyi6-D6k3exRh/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 236</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1-IOK88irejLrnnIPK3SmKKzwF8BOhJes/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 264</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1dWd6x3kcQLmUggezKMRjg8lAx3Wc-lcy/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 265</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1SBdJCPAQlU3CzsBF45ePc-Ssi_RyWiaD/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 266</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/15LMq3QqWM-v6LNKbQb1iOAXbgWXkHIr7/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 267</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1rCU_vuKmQ58vD1L6-Dt2Zcu-h8PrSRjJ/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 268</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1UOuL3RFTpRkHglwB7P-i3dJc0LAFDwhv/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 269</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1II40TCdTs7AIEaO9c9Q0nTzXoCSKDPOe/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}