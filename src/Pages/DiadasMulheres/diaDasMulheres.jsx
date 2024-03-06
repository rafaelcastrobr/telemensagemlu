import { Link } from "react-router-dom"

export default function DiaDasMulheres() {
  return (
    <div>
      <h1>Escolha o tipo</h1>
      <div>
      <Link to='mae/feminino'><button className='btn_entrar_appcss fem'>FEMINO MÃE</button></Link>
      </div>
      <div>
      <Link to='mae/masculino'><button className='btn_entrar_appcss masc'>MASCULINO MÃE</button></Link>
      </div>
      <div>
      <Link to='esposa'><button className='btn_entrar_appcss masc'>MASCULINO ESPOSA</button></Link>
      </div>
      <div>
      <Link to='namorada'><button className='btn_entrar_appcss masc'>MASCULINO NAMORADA</button></Link>
      </div>
      <div>
      <Link to='amiga'><button className='btn_entrar_appcss masc'>MASCULINO AMIGA</button></Link>
      </div>
    </div>

  )
}