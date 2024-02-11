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

export default function RomanticaFem() {
  return (
    <div>
      <h3>Romântica | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 231</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/231.mp3'} />
        </div>
        <div>
          <label>COD: 232</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/232.mp3'} />
        </div>
        <div>
          <label>COD: 233</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/233.mp3'} />
        </div>
        <div>
          <label>COD: 234</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/234.mp3'} />
        </div>
        <div>
          <label>COD: 235</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/235.mp3'} />
        </div>
        <div>
          <label>COD: 236</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/236.mp3'} />
        </div>
        <div>
          <label>COD: 237</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/237.mp3'} />
        </div>
        <div>
          <label>COD: 238</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/238.mp3'} />
        </div>
        <div>
          <label>COD: 239 </label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/239.mp3'} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD: 240</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/240p.mp3'} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD: 241 </label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/241p.mp3'} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD: 242</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/242p.mp3'} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD:  243</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/243p.mp3'} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD: 244 </label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/244p.mp3'} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD: 245</label>
          <Player link={'https://whatsmensagem.s3.sa-east-1.amazonaws.com/telemensagem/romanticas/F+Neutra/245p.mp3'} />
        </div>
      </ContainerCss>
    </div>
  )
}