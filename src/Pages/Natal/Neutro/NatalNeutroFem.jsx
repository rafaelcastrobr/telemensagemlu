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

export default function NatalNeutroFem() {
  return (
    <div>
      <h3>NEUTRO NATAL | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 303</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1k6G1wpTupU2yJICB7lHwr3EyfK6PlmQW/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 304</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Eke6nfpqdoMYBPosNtOvEnIg05Qa8yc5/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 305</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1HWO8zl7KdEq3oiSoDYhkyd0j70fiVYAl/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 306</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Be10bYzRW7J3Kf_9EOb9mOg7SqmrVYD8/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 307</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Pn1HnlgfpuZmXZ6I9vdEMCwheh2R3B0M/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 308 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/109kH6fBxn04D6k_Vr0lMy9JOoDYcanS_/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}