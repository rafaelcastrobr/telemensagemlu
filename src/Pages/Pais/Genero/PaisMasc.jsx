import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function EspFem() {

  return (
    <div>
      <h3>Dia dos Pais | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 270</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1L4pECIQHHgi9LCX7FBQkgnkNyzvpqHif/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 271</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1ws0G9FbfziqWFOfYBETCimYov9qoZn2C/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 272</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1OtPGZDpM19bjR9gvZ0gIx_vzwwnBEO72/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 273</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1ta5ytq_L8TwuCLzNZEOERPr1AT8Em5PC/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 275</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1QRlkDk0BycyjQK8hEmW8g4ANHb-3ELC_/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 276</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1OrEKSmN8-iTlodsitZRy-ECZUz0Lobz4/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 277</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1UEDNkKkrK-dqL8iOecqzAl5grs9knqSM/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  278</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/10Rtjtu-98ZiXxdpFfo7I10wjZNREBbwN/view?usp=sharing')} />
        </div>
        
      </ContainerCss>
    </div>
  )
}