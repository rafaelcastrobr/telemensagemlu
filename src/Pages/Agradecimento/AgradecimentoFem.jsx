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

export default function AgradecimentoFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Agradecimento | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 345</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Agradecimento/F/345.mp3'} />
        </div>
        <div>
          <label>COD: 344</label>
          <Player link={"https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Agradecimento/F/344.mp3"} />
        </div>
        <div>
          <label>COD: 343</label>
          <Player link={"https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Agradecimento/F/343.mp3"} />
        </div>
        <div>
          <label>COD:  342</label>
          <Player link={"https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/Agradecimento/F/342.mp3"} />
        </div>
        
      </ContainerCss>
    </div>
  )
}