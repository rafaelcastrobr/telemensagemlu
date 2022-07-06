import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivPaiMasc() {
  return (
    <div>
      <h3>Aniversário Pai | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 176</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1lKyEB41J7ENGCzQWKYdyqpXaJkJU7yuv/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 177</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1XXazUa5IlAcHnCpW3jE5FhvC8V6BBBT0/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 178</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1M-M8IJM-rIS4eqmjuZXt0QawRa3kdGr7/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 179</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Uft3nKKticZk_OWXnNL4f1yEap0wIqNK/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 180</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1R0NNUg6X6JIe-puG0WUNu4Zu_mYqkND8/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}