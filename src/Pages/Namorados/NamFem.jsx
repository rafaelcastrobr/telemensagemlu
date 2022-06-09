import Player from "../../Components/Player";
import styled from "styled-components";
import ReplaceWord from '../../function/replace'

const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export default function NamFem() {
  return (
    <div>
      <h3>Feminino Namorado</h3>
      <ContainerCss>
        <div>
          <label>COD: 101</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1nKIZCLwSNh32d4bdwKqSuBM5IsfHdqlb/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 102</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1YXDx0TkI9ATyyCBE1_JCWd7CXjrs0by_/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 103</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1zepAVlhMSri3_6qAusyDqSCWinH-8E3E/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 104</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1hreMxDt6TKI9enmY5MAgIJ7lRJtc0lbW/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 105</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1vxG3vlbOlZQlwPu-ZDcsu9fNDNdeNZ1n/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 106</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1sRzP1XNnBjCiSSW8atL8ONWQts5b8P7t/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 107</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1jdiyGuE2IeSPnwORPTW6Wl6Cm1ZGXjst/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 108</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1iSziynnTdxQ5kxig_mwtA-dnPz5to2JW/view?usp=sharing')} />
        </div>
        <div>
          <label>COD: 109</label>
          <Player link={ReplaceWord('https://drive.google.com/file/d/1kWkepthsncuf_mTnEyL9YqnMhTgajLhN/view?usp=sharing')} />
        </div>

      </ContainerCss>
    </div>
  )
}