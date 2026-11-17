import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { MENU_INICIAL } from '../data/ocasioes'

const BoxTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;

  p {
    color: blueviolet;
/* NATAL */
    /* color: white; */
    font-size: 1.2rem;
  }

  .box-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .box-btn-style {
    width: 18rem;
    height: 6rem;
    margin-bottom: 1em;

    .box-btn-ico {
      position: absolute;
    }
  }
`

// Página inicial. Os botões (e quais estão ativos) ficam em data/ocasioes.js
export default function Home() {
  return (
    <BoxTitle>
      <div>
        <h1>Mensagens Para Todas Ocasiões</h1>
        <p>Mensagens sendo enviadas excepcionalmente por Whatsapp.</p>
        <p>Entre em contato!</p>
        <div className="box-btn">

          {MENU_INICIAL.filter((item) => item.ativo).map((item) => (
            <div className="box-btn-style" key={item.rota}>
              <img className="box-btn-ico" src={item.icone} alt="" />
              <Link to={item.rota}><button className='btn_entrar_appcss btn-opcao'>{item.texto}</button></Link>
            </div>
          ))}

          <button className='btn_entrar_appcss desativado'> SITE EM REFORMA </button>
        </div>
        <p>Encontrou algum erro? Entre em contato!</p>
      </div>
    </BoxTitle>
  )
}
