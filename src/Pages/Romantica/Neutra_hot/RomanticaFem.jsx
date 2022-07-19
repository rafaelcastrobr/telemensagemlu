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
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Xu8NbwzvXVq3rqIsy6QBv0952OoihTHm/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 232</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1bH9wAhLigPD0S_1OmhEEHGjlDnS4yQJy/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 233</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1bH9wAhLigPD0S_1OmhEEHGjlDnS4yQJy/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 234</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Di4gTqxwYptRNKZD6k18_G4tYNAzlnLY/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 235</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1fVcqUi2IvtSI1YZEJ0l9d9fx7_dHxBh0/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 236</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/14WzT3rJXVFe2ezsjKU1qSEorPVwDCdw1/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 237</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1sA5XDp434h3OdagonxJMljfYWHrw65R5/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 238</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1UmMNiFAwVfO-WWloQQ48k8GKtd8EM2Gt/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 239 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1pZqXisZYGkJXY3Yj4oWjJVA9YKNRGMov/view?usp=sharing')} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD: 240</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/17I5n38aSX4RSm_NNf2VauyMGZj7dlm9V/view?usp=sharing')} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD: 241 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1dujO5IiX3Sr5sXR2A53l8R4BLRg2FpsB/view?usp=sharing')} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD: 242</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1bv6Q2VTrF4Jv_1TYlM9BXDtVZtsPCACm/view?usp=sharing')} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD:  243</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1jVn5WaWa4EIzsy5IuQGk_jbomDYUKG39/view?usp=sharing')} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD: 244 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1HvkW1k8xYSqXpZgGrwrMyFnyig11oJeI/view?usp=sharing')} />
        </div>
        <div>
          <span><img src={pimenta} alt="" /></span>
          <label>COD: 245</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1FJOzMKkX9CoDtUK823us5EstyF182Kw9/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}