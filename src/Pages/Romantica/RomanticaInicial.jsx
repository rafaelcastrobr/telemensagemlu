import { Link } from "react-router-dom";


export default function RomanticasInicial() {
  return (
    <div>
      <h1>Escolha o tipo</h1>

      <div>
      <Link to='/romanticas'><button className='btn_entrar_appcss fem'>ROMANTICAS</button></Link>
      </div>

      <div>
      <Link to='/desculpas'><button className='btn_entrar_appcss masc'>DESCULPAS</button></Link>
      </div>
    </div>

  )
}