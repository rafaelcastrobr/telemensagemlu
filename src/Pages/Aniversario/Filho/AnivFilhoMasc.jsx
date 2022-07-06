import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivFilhoMasc() {
  return (
    <div>
      <h3>Aniversário Filho | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 225</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1jBpF6_83cr_Jgudgu5FSEKglx3_2-Krg/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 226</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1MsKP6UrurnDmzULbcrNLn7zkHDZFcvZ1/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 227</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1pqmgc6NYKsuqqJ0TyXRSfyrsPtwWSn41/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 228</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1a3Jcgx8l389-uFKngm5N3Tr8XsnGNned/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 229</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1e8-QRjjvWstv0-OJWzK3jx7pd-ITiFiY/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 230</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/10kfozxA518SSWTSMa5nYI9y_5PXkPGqz/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}