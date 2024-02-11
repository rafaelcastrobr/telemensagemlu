import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivIrmaoMasc() {
  return (
    <div>
      <h3>Aniversário Irmão | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 297</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Masc/297.mp3'} />
        </div>
        <div>
          <label>COD: 298</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Masc/298.mp3'} />
        </div>
        <div>
          <label>COD: 299</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Masc/299.mp3'} />
        </div>
        <div>
          <label>COD: 300</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Masc/300.mp3'} />
        </div>
        <div>
          <label>COD: 301</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Masc/301.mp3'} />
        </div>
        <div>
          <label>COD: 302</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/ANIVERSARIO/Irmao/Masc/302.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}