import { Link } from "react-router-dom";


export default function DiaDosPais() {
  return (
    <div>
      <h1>Clique no gênero</h1>
      <div>
        <Link to='esposa'><button className='btn_entrar_appcss fem'>ESPOSA</button></Link>
      </div>
      
      <div>
        <Link to='filhos/feminino'><button className='btn_entrar_appcss fem'>FILHA</button></Link>
      </div>

      <div>
        <Link to='filhos/masculino'><button className='btn_entrar_appcss masc'>FILHO</button></Link>
      </div>

      

    </div>

  )
}