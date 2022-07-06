import styled from "styled-components";
import Player from "../../../Components/Player";
import ReplaceWord from "../../../function/replace";


const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function AnivPaiFem() {
  return (
    <div>
      <h3>Aniversário Pai | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 168</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1VYdeaUv1tbSSIJe_ZblkI510N5OdAon_/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 169</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1ESeNCBY0OOhjUrujy-P-W7LmEG1icLdi/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 170</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1iuw05GJ0-VGao-yfEI_41hURxwqO9l7V/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 171</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1CEYaDBSECnP76_Nxntbgj1cQCdHI6c2m/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 172</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1JdAaNuVj9hPtVfhU_fz2aXRKgABZ8tsf/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 173</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1_9EY7NG7wg1UapR1uKn0-VX-GSHA0shH/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 174</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1YdZHPNoTY08WUb_082Vzp2NuBrC6qMYx/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 175</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1OyRby9eRfnAXTEz6ZHBYegJY0kqrTU5E/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}