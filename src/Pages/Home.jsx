import { Link } from "react-router-dom";
import styled from "styled-components";
import bolo from '../img/icons8-aniversário-40.png'
import coracao from '../img/icons8-red-heart-40.png'
import flecha from '../img/icons8-love-arrow-40.png'
import pai from '../img/icons8-usuario-masculino-40.png'
import natal from '../img/icons8-Arvore-de-natal-40.png'


const BoxTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;

  p {
    //color: blueviolet;
    color: white;
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


export default function Home() {

  return (

    <BoxTitle>

      <div>
        <h1>Mensagens Para Todas Ocasiões</h1>
        <p>Mensagens sendo enviadas excepcionalmente por Whatsapp.</p>
        <p>Entre em contato!</p>
        <div className="box-btn">
        <div className="box-btn-style">
            <img className="box-btn-ico" src={natal} alt="" />
            <Link to='/natal'><button className='btn_entrar_appcss btn-opcao'>NATAL</button></Link>
          </div>
        <div className="box-btn-style">
            <img className="box-btn-ico" src={pai} alt="" />
            <Link to='/dia-dos-pais'><button className='btn_entrar_appcss btn-opcao'>DIA DOS PAÍS</button></Link>
          </div>
          <div className="box-btn-style">
            <img className="box-btn-ico" src={bolo} alt="" />
            <Link to='/aniversario'><button className='btn_entrar_appcss btn-opcao'>ANIVERSÁRIOS</button></Link>
          </div>

          <div className="box-btn-style">
            <img className="box-btn-ico" src={coracao} alt="" />
            <Link to='/romanticas'><button className='btn_entrar_appcss btn-opcao'>ROMÂNTICAS</button></Link>
          </div>

          <div className="box-btn-style">
            <img className="box-btn-ico" src={flecha} alt="" />
            <Link to='/namorados'><button className='btn_entrar_appcss btn-opcao'>DIA DOS NAMORADOS</button></Link>
          </div>

          <button className='btn_entrar_appcss desativado'>+ OPÇÕES EM BREVE</button>
        </div>
        <p>Encontrou algum erro? Entre em contato!</p>
      </div>
      <div style={{display: 'none'}}>
        ultima 303
      </div>
    </BoxTitle>
  )
}