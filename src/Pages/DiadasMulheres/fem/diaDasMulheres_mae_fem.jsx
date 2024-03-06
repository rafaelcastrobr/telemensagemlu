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

export default function DiaDasMulheresMaeFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Dia das Mulheres - Mae | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 387</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/F/Mae/387.mp3'} />
        </div>
        <div>
          <label>COD: 388</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Mae/388.mp3'} />
        </div>
        <div>
          <label>COD: 389</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Mae/389.mp3'} />
        </div>
        <div>
          <label>COD: 390</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Mae/390.mp3'} />
        </div>
        <div>
          <label>COD: 391</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Mae/391.mp3'} />
        </div>
        <div>
          <label>COD: 392</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/DiaDasMulheres/M/Mae/392.mp3'} />
        </div>
       
      </ContainerCss>
    </div>
  )
}