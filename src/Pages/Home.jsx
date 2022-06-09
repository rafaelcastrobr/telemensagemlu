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
`


export default function Home() {

  return (

    <BoxTitle>
      
        <div>
          <h1>Mensagens Para Todas Ocasiões</h1>
          <h3>Especial dia dos Namorados</h3>
          <p>Mensagens sendo enviadas excepcionalmente por Whatsapp.</p>
          <p>Entre em contato!</p>
          <Link to='/namorados'><button className='btn_entrar_appcss'>DIA DOS NAMORADOS</button></Link>
        </div>
    
    </BoxTitle>
  )
}