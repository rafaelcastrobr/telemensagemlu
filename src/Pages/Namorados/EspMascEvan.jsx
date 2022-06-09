import Player from "../../Components/Player";
import styled from "styled-components";
import ReplaceWord from "../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function EspMascEvan() {
  return (
    <div>
      <h3>Masculino Esposa Evangélica</h3>
      <ContainerCss>
        <div>
          <label>COD: 123</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1uyqrco0gChd9R3Gwrh3_P8Ll2VQppUsN/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 124</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1SqcFnwBFRhi9quElbOexr6_MjV6ofNFS/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 125</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1XvOiTCj2i5TyiVewHoufzSO5h3SyXmWK/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 126</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1gLS2wLRuQnnJ5y7_Jl8sECtyBeY0vmkP/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 127</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1rm_NJt4vGME7XBOL0yGMLn2-mYRMuzyS/view?usp=sharing')} />
        </div>
    
      </ContainerCss>
    </div>
  )
}