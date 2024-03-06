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

export default function DiaDasMulheresEsposaMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Dia das Mulheres - Esposa | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 369</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Esposa/369.mp3'} />
        </div>
        <div>
          <label>COD: 370</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Esposa/370.mp3'} />
        </div>
        <div>
          <label>COD: 371</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Esposa/371.mp3'} />
        </div>
        <div>
          <label>COD:  372</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Esposa/372.mp3'} />
        </div>
        <div>
          <label>COD:  373</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Esposa/373.mp3'} />
        </div>
        <div>
          <label>COD:  374</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Esposa/374.mp3'} />
        </div>
       
      </ContainerCss>
    </div>
  )
}