import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";
import pimenta from '../../../img/icons8-pimenta-chili-40.png'


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function RomanticaMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Romântica | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 246</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/246.mp3'} />
        </div>
        <div>
          <label>COD: 247</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/247.mp3'} />
        </div>
        <div>
          <label>COD: 248</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/248.mp3'} />
        </div>
        <div>
          <label>COD: 249</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/249.mp3'} />
        </div>
        <div>
          <label>COD: 250 </label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/250.mp3'} />
        </div>
        <div>
          <label>COD: 251</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/251.mp3'} />
        </div>
        <div>
          <label>COD: 252</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/252.mp3'} />
        </div>
        <div>
          <label>COD: 253</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/253.mp3'} />
        </div>
        <div>
          <label>COD: 254 </label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/254.mp3'} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 255 </label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/255p.mp3'} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 256 </label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/256p.mp3'} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 257 </label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/257p.mp3'} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 258 </label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/258p.mp3'} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 259 </label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/529p.mp3'} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 260 </label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/M+Neutra/260p.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}