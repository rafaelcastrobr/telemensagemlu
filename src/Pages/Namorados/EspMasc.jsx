import Player from "../../Components/Player";
import styled from "styled-components";
import ReplaceWord from "../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function EspMasc() {
  return (
    <div>
      <h3>Masculino Esposa</h3>
      <ContainerCss>
        <div>
          <label>COD: 112</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1G7jiqVbrTgSUkfHZpDBvWtcza67MAzc6/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 113</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1oOt8NZu6-AJ4TiDHP-1QTvm9K7HCnzds/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 114</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1gIYQCrzUMtRhJDMw-mlCm5TDfkHzYaOn/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 115</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/12rMISMp9f-SAtKCO4vY3TqyBGUIFy2pb/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 116</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1w_opPtmuLHsgglcIX2cWadDKtvwy33nD/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 117</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1MnWHNFhNYNI_aMVs4ESwLT4H-x_cW-ed/view?usp=sharing')} />
        </div>
     

      </ContainerCss>
    </div>
  )
}