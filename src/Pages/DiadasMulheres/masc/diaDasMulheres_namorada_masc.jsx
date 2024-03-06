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

export default function DiaDasMulheresNamoradaMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Dia das Mulheres - Namorada | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 375</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Namorada/375.mp3'} />
        </div>
        <div>
          <label>COD: 376</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Namorada/376.mp3'} />
        </div>
        <div>
          <label>COD: 377</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Namorada/377.mp3'} />
        </div>
        <div>
          <label>COD:  378</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Namorada/378.mp3'} />
        </div>
        <div>
          <label>COD:  379</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Namorada/379.mp3'} />
        </div>
        <div>
          <label>COD: 380</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Namorada/380.mp3'} />
        </div>
       
      </ContainerCss>
    </div>
  )
}