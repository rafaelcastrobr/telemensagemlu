import { Link } from 'react-router-dom'


export default function Aniversario() {
  return (
    <div>
      <h1>Clique no gênero</h1>
      <div>
        <Link to='mae/feminino/'><button className='btn_entrar_appcss fem'>FEMININO MÃE</button></Link>
      </div>
      <div>
        <Link to='pai/feminino/'><button className='btn_entrar_appcss fem'>FEMININO PAI</button></Link>
      </div>
      <div>
        <Link to='irma/feminino/'><button className='btn_entrar_appcss fem'>FEMININO IRMÃ</button></Link>
      </div>
      <div>
        <Link to='irmao/feminino/'><button className='btn_entrar_appcss fem'>FEMININO IRMÃO</button></Link>
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
        <Link to='namorado/feminino/'><button className='btn_entrar_appcss fem'>FEMININO NAMORADO</button></Link>
      </div>
      <div>
        <Link to='esposo/feminino/'><button className='btn_entrar_appcss fem'>FEMININO ESPOSO</button></Link>
      </div>
      <div>
        <Link to='mae/masculino/'><button className='btn_entrar_appcss masc'>MASCULINO MÃE</button></Link>
      </div>
      <div>
        <Link to='pai/masculino/'><button className='btn_entrar_appcss masc'>MASCULINO PAI</button></Link>
      </div>
      <div>
        <Link to='irma/masculino/'><button className='btn_entrar_appcss masc'>MASCULINO IRMÃ</button></Link>
      </div>
      <div>
        <Link to='irmao/masculino/'><button className='btn_entrar_appcss masc'>MASCULINO IRMÃO</button></Link>
      </div>
      <div>
        <Link to='filho/masculino/'><button className='btn_entrar_appcss masc'>MASCULINO FILHO</button></Link>
      </div>
      <div>
        <Link to='filha/masculino/'><button className='btn_entrar_appcss masc'>MASCULINO FILHA</button></Link>
      </div>
      <div>
        <Link to='namorada/masculino/'><button className='btn_entrar_appcss masc'>MASCULINO NAMORADA</button></Link>
      </div>
      <div>
        <Link to='esposa/masculino/'><button className='btn_entrar_appcss masc'>MASCULINO ESPOSA</button></Link>
      </div>


    </div>
  )
}