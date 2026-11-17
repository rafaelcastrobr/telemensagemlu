import { Link } from 'react-router-dom'

import { botoesDaTela } from '../data/ocasioes'

// Tela de escolha de uma ocasião (ex.: gênero, tipo de mensagem). Configuração em data/ocasioes.js
export default function Ocasiao({ tela }) {
  return (
    <div>
      {tela.titulo && <h1>{tela.titulo}</h1>}
      {botoesDaTela(tela).map((botao) => (
        <div key={botao.rota}>
          <Link to={botao.rota}>
            <button className={`btn_entrar_appcss ${botao.genero}`}>{botao.texto}</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
