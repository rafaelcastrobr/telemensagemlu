import './App.css'

import { HashRouter, Link, Route, Routes } from 'react-router-dom'

import img from './assets/img/banner-namorados-lu.png'
import imgdois from './assets/img/banner-namorados-dois-lu.png'

import { PAGINAS } from './data/mensagens'
import PaginaMensagens from './Pages/PaginaMensagens'

// Telas iniciais (escolha da ocasião / do gênero)
import Home from './Pages/Home'
import Namorados from './Pages/Namorados/Namorados'
import Aniversario from './Pages/Aniversario/Aniversario'
import DiaDosPais from './Pages/Pais/Pais'
import Natal from './Pages/Natal/Natal'
import DiaDasMaes from './Pages/Maes/Maes'
import Agradecimento from './Pages/Agradecimento/Agradecimento'
import Romanticas from './Pages/Romantica/Neutra_hot/Romanticas'
import RomanticasInicial from './Pages/Romantica/RomanticaInicial'
import DesculpasRomanticas from './Pages/Romantica/Desculpas/DesculpasRomanticas'
import DiaDasMulheres from './Pages/DiadasMulheres/diaDasMulheres'


document.title = 'WhatsMensagem da Lú'

export default function App() {
  return (
    <div className="App">



      <HashRouter basename="/">
      <div className='img-dois'>
        <Link to="/"><img className='img-app' src={imgdois} alt="WhatsMensagem da Lú" /></Link>
      </div>
      <div className='img-um' >
        <Link to="/"><img className='img-app' src={img} alt="WhatsMensagem da Lú" /></Link>
      </div>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/aniversario' element={<Aniversario />} />
          <Route path='/dia-das-mulheres' element={<DiaDasMulheres />} />
          <Route path='/romanticas-inicial' element={<RomanticasInicial />} />
          <Route path='/desculpas' element={<DesculpasRomanticas />} />
          <Route path='/romanticas' element={<Romanticas />} />
          <Route path='/namorados' element={<Namorados />} />
          <Route path='/dia-dos-pais' element={<DiaDosPais />}/>
          <Route path='/dia-das-maes' element={<DiaDasMaes />}/>
          <Route path='/natal' element={<Natal />}/>
          <Route path='/agradecimento' element={<Agradecimento />}/>

          {/* Páginas de mensagens: uma rota por item de src/data/mensagens.js */}
          {PAGINAS.map((pagina) => (
            <Route
              key={pagina.rota}
              path={pagina.rota}
              element={<PaginaMensagens key={pagina.rota} titulo={pagina.titulo} audios={pagina.audios} />}
            />
          ))}

        </Routes>
      </HashRouter>

      {/* <div class="wh-api"><a href="https://api.whatsapp.com/send?l=pt_br&amp;phone=+5511930947670&amp;text=Gostaria de saber como funciona"><button class="wh-ap-btn"></button></a></div> */}

    </div>
  )
}
