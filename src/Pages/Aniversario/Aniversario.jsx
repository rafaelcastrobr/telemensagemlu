import { Link } from 'react-router-dom'


export default function Aniversario() {
  return (
    <div>
      <h1>Clique no gênero</h1>
      <div>
        <Link to='mae/feminino/'><button className='btn_entrar_appcss fem'>FEMININO MÃE</button></Link>
      </div>
      <div>
        <Link to='amiga/feminino/'><button className='btn_entrar_appcss fem'>FEMININO AMIGA</button></Link>
      </div>
      <div>
        <Link to='filha/feminino/'><button className='btn_entrar_appcss fem'>FEMININO FILHA</button></Link>
      </div>
      <div>
        <Link to='filho/feminino/'><button className='btn_entrar_appcss fem'>FEMININO FILHO</button></Link>
      </div>
      <div>
        <Link to='mae/masculino/'><button className='btn_entrar_appcss masc'>MASCULINO MÃE</button></Link>
      </div>
      <div>
        <Link to='filho/masculino/'><button className='btn_entrar_appcss masc'>MASCULINO FILHO</button></Link>
      </div>
      <div>
        <Link to='filha/masculino/'><button className='btn_entrar_appcss masc'>MASCULINO FILHA</button></Link>
      </div>


      

    </div>
  )
}