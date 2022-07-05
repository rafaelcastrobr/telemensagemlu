import { Link } from "react-router-dom";
import styled from "styled-components";

const BoxTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;

  p {
    color: blueviolet;
    font-size: 1.2rem;
  }

  .box-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`


export default function Home() {

  return (

    <BoxTitle>

      <div>
        <h1>Mensagens Para Todas Ocasiões</h1>
        <p>Mensagens sendo enviadas excepcionalmente por Whatsapp.</p>
        <p>Entre em contato!</p>
        <div className="box-btn">
          <Link to='/aniversario'><button className='btn_entrar_appcss'>ANIVERSÁRIOS</button></Link>
          <Link to='/namorados'><button className='btn_entrar_appcss'>DIA DOS NAMORADOS</button></Link>
          <button className='btn_entrar_appcss desativado'>+ OPÇÕES EM BREVE</button>
        </div>
      </div>

    </BoxTitle>
  )
}