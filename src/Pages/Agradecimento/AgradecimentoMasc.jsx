import styled from "styled-components";
import Player from "../../Components/Player";
import ReplaceWord from "../../function/replace";


//ReplaceWord
//Player

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AgradecimentoMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Agradecimento | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 349</label>
          <Player link={"https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Agradecimento/M/349.mp3"} />
        </div>
        <div>
          <label>COD: 348</label>
          <Player link={"https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Agradecimento/M/348.mp3"} />
        </div>
        <div>
          <label>COD: 347</label>
          <Player link={"https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Agradecimento/M/347.mp3"} />
        </div>
        <div>
          <label>COD:  346</label>
          <Player link={"https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Agradecimento/F/342.mp3"} />
        </div>
        
      </ContainerCss>
    </div>
  )
}