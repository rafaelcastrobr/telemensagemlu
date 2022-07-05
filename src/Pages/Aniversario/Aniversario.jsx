import { Link } from 'react-router-dom'


export default function Aniversario() {
  return (
    <div>
      <h1>Clique no gênero</h1>
      <div>
        <Link to='amiga/feminino/'><button className='btn_entrar_appcss'>FEMININO AMIGA</button></Link>
      </div>
      <div>
        <Link to='filha/feminino/'><button className='btn_entrar_appcss'>FEMININO FILHA</button></Link>
      </div>

    </div>
  )
}