import Player from "../../Components/Player";
import styled from "styled-components";
import ReplaceWord from "../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function EspFem() {
  return (
    <div>
      <h3>Femino Esposo Evangélico</h3>
      <ContainerCss>
        <div>
          <label>COD: 128</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1RiGB1EZdUynDC7yJGaESIL533LYmbqrx/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 129</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1DhXe9EscsSAyU9QZeb-UYVnRGfRneMp4/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 130</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1urmvfGwQlY9DOuPbvVUwxnCFS_lvJbPY/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 131</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1TQkvIZa_gL0p5TT-_X3LzVhA4SW8EN3u/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 132</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1oF4D7R5onD222QrJ7PBv-SBVDRUZ5YBe/view?usp=sharing')} />
        </div>
      
      </ContainerCss>
    </div>
  )
}