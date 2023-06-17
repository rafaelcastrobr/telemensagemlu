import styled from "styled-components";
import Player from "../../../../Components/Player";
import ReplaceWord from "../../../../function/replace";


//ReplaceWord
//Player

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivNetaFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Neta | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 334</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/13un--X8bmcrYWk5CaqToCxHyXs_6egEJ/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 335</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/14LV4hGuOFzjDLl3O75wuGXmt6GwR_L4m/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 336</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1MNZTi47uq0smhjN3xYMA9Dt8HL2Lf0rY/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 336</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1J7cw7SHfP0LZW6KUJVFhAKSGS7h3Oy4L/view?usp=sharing')} />
        </div>
        
      </ContainerCss>
    </div>
  )
}