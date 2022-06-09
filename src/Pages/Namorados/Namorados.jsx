import { Link } from 'react-router-dom'


export default function Namorados() {
  return (
    <div>
      <h1>Clique no gênero</h1>
      <div>
      <Link to='feminino'><button className='btn_entrar_appcss'>FEMININO NAMORADO</button></Link>

      </div>

      <div>
      <Link to='feminino/esposo/'><button className='btn_entrar_appcss'>FEMININO ESPOSO</button></Link>

      </div>

      <div>
      <Link to='feminino/esposo/evangelico'><button className='btn_entrar_appcss'>FEMININO ESPOSO EVANGÉLICO</button></Link>

      </div>

      <div>
      <Link to='masculino'><button className='btn_entrar_appcss'>MASCULINO NAMORADA</button></Link>

      </div>

      <div>
      <Link to='masculino/esposa'><button className='btn_entrar_appcss'>MASCULINO ESPOSA</button></Link>

      </div>

      <div>
      <Link to='masculino/esposa/evangelica'><button className='btn_entrar_appcss'>MASCULINO ESPOSA EVANGÉLICA</button></Link>

      </div>

    </div>
  )
}