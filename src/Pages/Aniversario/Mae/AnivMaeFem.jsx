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

export default function AnivMaeFem() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Aniversário Mãe | voz feminina</h3>
      <ContainerCss>
        <div>
          <label>COD: 153</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1NeNo6n5JaDc_tyx4qTZyceGC-AXkiOnU/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 154</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1g8l9yFECHcGFmNzKjW1j1b8SkEvZJqPQ/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 155</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1xqlv_3TcOSFuVA5Bb4AauTlITmYvyDey/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  156</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1KTGMgzcwVxSmwMVa8rPOLnUpzjq-gylH/view?usp=sharing')} />
        </div>
        <div>
          <label>COD:  157</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/156CJRSGkFccoRaXbh1p-vKtUNl1RwIoG/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 158</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1hEu60B0A4-_DAvGL7sRKej4LNR6BJmzc/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 159</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Sg33Ck-IZS9d-Nq4XZNOT4gz8PvyCtvH/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 160</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Ge3u2-537VyS_iXr70m5h9FscFO3ba2b/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}