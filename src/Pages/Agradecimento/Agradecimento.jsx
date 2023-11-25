import { Link } from 'react-router-dom'



export default function Agradecimento() {
  return (
    <div>
      <h1>Clique no gênero</h1>
      <div>
        <Link to='feminino/'><button className='btn_entrar_appcss fem'>FEMININO</button></Link>
      </div>
      <div>
        <Link to='masculino/'><button className='btn_entrar_appcss masc'>MASCULINO</button></Link>
      </div>
    
    </div>
  )
}