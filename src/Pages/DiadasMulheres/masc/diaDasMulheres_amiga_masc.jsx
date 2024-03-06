import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


//ReplaceWord
//Player

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function DiaDasMulheresAmigaMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Dia das Mulheres - Amiga | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 393</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Amiga/393.mp3'} />
        </div>
        <div>
          <label>COD: 394</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Amiga/394.mp3'} />
        </div>
        <div>
          <label>COD: 395</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Amiga/395.mp3'} />
        </div>
        <div>
          <label>COD:  396</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Amiga/396.mp3'} />
        </div>
        <div>
          <label>COD:  397</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Amiga/397.mp3'} />
        </div>
        <div>
          <label>COD:  398</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Amiga/398.mp3'} />
        </div>
       
      </ContainerCss>
    </div>
  )
}