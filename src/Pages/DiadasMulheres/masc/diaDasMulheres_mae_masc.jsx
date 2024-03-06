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

export default function DiaDasMulheresMaeMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Dia das Mulheres - Esposa | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 381</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Mae/381.mp3'} />
        </div>
        <div>
          <label>COD: 382</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Mae/382.mp3'} />
        </div>
        <div>
          <label>COD: 383</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Mae/383.mp3'} />
        </div>
        <div>
          <label>COD:  384</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Mae/384.mp3'} />
        </div>
        <div>
          <label>COD:  385</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Mae/385.mp3'} />
        </div>
        <div>
          <label>COD:  386</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Mae/386.mp3'} />
        </div>
       
      </ContainerCss>
    </div>
  )
}