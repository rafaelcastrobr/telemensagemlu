import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 100%;
`

export default function AnivAmigaFem() {
  return (
    <div>
      <h3>Aniversário Amiga Feminino</h3>
      <ContainerCss>
        <div>
          <label>COD: 141</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1XhmmbPml6ZGNYvF4kH4i7Co3xLUD3mWh/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 142</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1oOpw9R5OOZGtIue_JFAcy0gWZAFGWmtv/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 143</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/15HKNznwKgzhl6siMa1H2G_UJEKUvISx_/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 144</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1UkbYjTUxqAHIl7i-cUTgUY5qB2iRB_zk/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 151</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1hHk8pO8arONxKGYidfLpy8TnY8eWS7x8/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 152</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Mei8Z5Yi7QhfGUpupj8bhCJ64vwLbB5L/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}