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

export default function AnivNamFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Namorado</h3>
      <ContainerCss>
        <div>
          <label>COD: 190</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1dMn4sJC9759blbBfed6DSmTMER1hMPpQ/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 191</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/10skTfOcN59ro53_1hULyxlo6vgEZcW2y/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 192</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1F2xKXrPqMeuG4eve9U3lTtjOpMcTJGAU/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  193</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1lgp58u8EfWjdAzWlFA6bbYw3qEPVHBzm/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 194</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1X3K4Wol-_FWye8WXzvm4yNb1ayM70Ybw/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 195</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1WhAdOG4RNbAWIh8Hv7rD94nSgFV1wSUP/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 196</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1l6ex-hY6jYSRnLMLwMHksvErah2_nSvo/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 197</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1eFr9AbHcOayyvwYzg2c01V9AxTZV-Buf/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 198</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Gv_GblwQI1plzSyo7tsU8gexm1j73hab/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}