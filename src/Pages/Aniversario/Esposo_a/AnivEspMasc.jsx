import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivEspMasc() {
  return (
    <div>
      <h3>Aniversário Esposa</h3>
      <ContainerCss>
        <div>
          <label>COD: 207</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1IFx5uaS-UOOFodExQMlp3cnxh3hiX4EF/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 208</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1R-9wzxGHKjMsFJryNXu1gSen82WcicH6/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 209</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/15Iu0xLOmSIq6iP9VjcM6kGLeCqkgQ7Ao/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 210</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1idR2RSOMmV1cB-2MuUjqzD4j39jZl6hz/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 211</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1AmkrOjkIcLSvII2F32yEsvYKc_CX6KIx/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 212</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1lEE6R9AgiYBoYiWsmVXGQoLRGo5cfIEa/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 213</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1dgJF1-ODUHm6_HRuTuz2lC8JFLB2pIdF/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}