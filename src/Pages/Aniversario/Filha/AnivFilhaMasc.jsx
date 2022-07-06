import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivFilhaMasc() {
  return (
    <div>
      <h3>Aniversário Filha | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 214</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1kAp3aKviC6j0aBHPgMp5E70tdQFI5Og0/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 215</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/188Q58yNslm1bgj1qFQFx2ReADyyzCT-m/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 216</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1XIi_oK4VJH30YggkTJyjQPPXfqcgqFtO/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 217</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1PXwHwA7BHHvjcOfMUnyi55L084ls_zcp/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 218</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1bfWI3IJqvN4BsSWsTGKBgxv73MiiMKl5/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}