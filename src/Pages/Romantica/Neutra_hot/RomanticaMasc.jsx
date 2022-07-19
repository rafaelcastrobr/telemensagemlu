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

export default function RomanticaMasc() {
  //https://drive.google.com/file/d/1l2Nbqs1eefWFeiyqqkpiutFn3EcDFpOd/view?usp=sharing
  return (
    <div>
      <h3>Romântica | voz masculina</h3>
      <ContainerCss>
        <div>
          <label>COD: 246</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1oZjRTDy5PDfQhjyqROti1Lj_D67MyzaY/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 247</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/19C_pG8Eki7WJxBjOhs2nx-QkDsA2HAn2/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 248</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1Td7vvH-krman0YrjMcJjJqErqv9XDvv8/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 249</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1JejqIbjjoEVzceddfpyFoR6fHjJfO6wt/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 250 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1oeh02DGKj-zSJTceALFAvqDPzalTGj4u/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 251</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1kBJeTE-vL36TgPTVuSLK-eLidtHay2fg/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 252</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1sw-KqTBDt3K93k78Xzhx4O7_mJWS7VUB/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 253</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1u1cn8AE4YlsFu118fdkbmKVMmQAzGMOA/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 254 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/16IoQgxeUEgx9No1hMrXUK7xJ5Kyhz74-/view?usp=sharing')} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 255 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/16y1oMfyQjgumbSQ9_M2Eb861n-Pfuvzk/view?usp=sharing')} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 256 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1rlF8GEMgWSx3f6PvFFeNpEerwZRnXDd0/view?usp=sharing')} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 257 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1eb8cZT-N2sQzo_WWAQDlTK8ko54BKRXP/view?usp=sharing')} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 258 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/16E00TY_cANNNl_joc3fNgQnxOK5D0sS-/view?usp=sharing')} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 259 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1hxOSsCmJoljjUHX9PE5e1gyS35BsYWev/view?usp=sharing')} />
        </div>
        <div>
          <img src={pimenta} alt="" />
          <label>COD: 260 </label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1ATp6uUB6M7raZp1zVJdWLviMvmxptnWl/view?usp=sharing')} />
        </div>
      </ContainerCss>
    </div>
  )
}