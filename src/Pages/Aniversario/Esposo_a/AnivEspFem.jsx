import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivEspFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Esposo</h3>
      <ContainerCss>
        <div>
          <label>COD: 199</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1eRhrkUrLRk3GIfpzEiy3BI4Waw8Rm37U/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 200</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1_UpCvz2ueBahjExx_oCTfz7Y0Z1b_VaR/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 201</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1GPwjvAMAvLrNYi5yik44c8kD-kODRL3z/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 202</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1KH5bPcjP7vnOaNyhKXP2vt0jxjg-LxDE/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 203</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/17-AVIkuOMLsmugYJGeLt4dVHonD_dVfm/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 204</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1lfYZUjl5gJ9qxOf69vVMDNL886Ie0Izu/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 205</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/10kq7MTiy1M-LjMNi3ZhGfBdO5vlii8fj/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 206</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1sojP9gXrtNpI3Kao1lE1HmulMfisbewC/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}