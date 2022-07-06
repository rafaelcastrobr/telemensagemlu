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

export default function AnivNamMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Namorada</h3>
      <ContainerCss>
        <div>
          <label>COD: 181</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1rDo_Eb-4lBsu4ESRgAucJHYfJzEcBNhI/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 182</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1U0Zdhuog-GDHoqAzg1TMrqGFagon9dxy/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 183</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/18uMMArI_-v4y0GGzJeDrIv3NL_UfmzfP/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 184</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/12tHTmP5DGkygNRU8PG5-uYboIiXhczVe/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 185</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1krF-JBePWBtuQY0QMtkW-AZ_QZ9PP3Vw/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 186</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/19WFMKDA7RFBRDEmjgXZOtkFsyDtdDcoH/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 187</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1kQg1XuW8PsNQ2sAFZEtFB20X6CBuFuuH/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 188</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1paz0Dw4n1NAqXkojN7o0wHSNxZujUnZp/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 189</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1W5kP1yCtl1S-E4xJCsJnhzzATEXF-F2Z/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}