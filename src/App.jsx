import { HashRouter, Route, Routes } from 'react-router-dom'

import Cabecalho from './components/Cabecalho'
import { PAGINAS } from './data/mensagens'
import { TELAS_DE_ESCOLHA } from './data/ocasioes'
import Home from './pages/Home'
import Mensagens from './pages/Mensagens'
import Ocasiao from './pages/Ocasiao'

export default function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Cabecalho />
        <Routes>
          <Route path='/' element={<Home />} />

          {/* Telas de escolha: uma rota por item de data/ocasioes.js */}
          {TELAS_DE_ESCOLHA.map((tela) => (
            <Route key={tela.rota} path={tela.rota} element={<Ocasiao key={tela.rota} tela={tela} />} />
          ))}

          {/* Páginas de mensagens: uma rota por item de data/mensagens */}
          {PAGINAS.map((pagina) => (
            <Route
              key={pagina.rota}
              path={pagina.rota}
              element={<Mensagens key={pagina.rota} titulo={pagina.titulo} audios={pagina.audios} />}
            />
          ))}
        </Routes>
      </HashRouter>
    </div>
  )
}
