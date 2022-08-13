import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivIrmaoFem() {
  return (
    <div>
      <h3>Aniversário Irmão | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 291</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1ZOx9iryQLFEPuoh7TFtUmidJmbgMZqMj/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 292</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1BiYp4t0cflOnBWf9lVzgo7vnHRCXQcBQ/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 293</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/149waTSH-Uxa0n6xTuCU5olVH4b55Go_E/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 294</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/19cZt6G_b64vWaTA2tWpMzcemur-0_c9b/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 295</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/18-dz7WZ5eLv3pAb72BiRcv5GldIl1fdS/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 296</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1ZtpJTSUZHSXFvlRH-RpP2St-y90cCCka/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}