import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivFilhoFem() {
  return (
    <div>
      <h3>Aniversário Filho | voz femimina</h3>
      <ContainerCss>
        <div>
          <label>COD: 219</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1VvFGKDkNazi5mx72b6zXahBrNIhscfE0/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 220</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1cB2hdklmNqngB01O8xCeomKTrYVcU6OH/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 221</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1BMa5Q4275_vJZ5dlF_UlQI1Ujkywp1UK/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 222</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/14QQfFD8bBmYeWq-npYXQFda89s3GoVrb/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 223</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/19zb-l586LZrOVmS7diGGn4turUHobg5f/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 224</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1514YG5z4DRG3sR2tiZASyh0gtpHC_-De/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}