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

export default function MaesFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Dia dos País | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 315</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1zXn3kkfs74sHyGGtbYzjZOJBaq4A1e_o/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 316</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/11odR9rXp5Bf4r09od7NrsfDbjTETsgPh/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 317</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1YqLxtAjjZeWfGOMHY8zbym9gaYbtJ4Sh/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  318</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1MkWA53G38B0IVPiplGhxhlHF1myoEF-q/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  319</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1KLqHQ7QexmSr54Zlk8iM0uWhLlVpTpwW/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  320</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1QHRVooJv3kTtbnQyuiI3vEb6A6sBwj-l/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  321</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1MiywCFzjeYiUucZB52adNGYUGQf6fuP-/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  322</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1IXk0sfipcBJsOiE5UTl0iwSV8YaSntij/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  323</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1RcPBhUMOEJKMXZYQ66F8WKqFbLCEl3B0/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  324</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1IoWpSFaXlqonczyu0eklWFD46l8DXMFB/view?usp=sharing')} />
        </div>
        
      </ContainerCss>
    </div>
  )
}