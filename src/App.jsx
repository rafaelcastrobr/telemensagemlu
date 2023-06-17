import './App.css'

import { HashRouter, Link, Route, Routes } from 'react-router-dom'

import img from './assets/img/banner-namorados.png'
import imgdois from './assets/img/banner-namorados-dois.png'


import Home from './Pages/Home'
import Namorados from './Pages/Namorados/Namorados'
import Aniversario from './Pages/Aniversario/Aniversario'

import NamMasc from './Pages/Namorados/NamMasc'
import NamFem from './Pages/Namorados/NamFem'
import EspMasc from './Pages/Namorados/EspMasc'
import EspMascEvan from './Pages/Namorados/EspMascEvan'
import EspFemEvan from './Pages/Namorados/EspFemEvan'
import EspFem from './Pages/Namorados/EspFem'
import AnivAmigaFem from './Pages/Aniversario/Amiga/AnivAmigaFem'
import AnivFilhaFem from './Pages/Aniversario/Filha/AnivFilhaFem'
import AnivFilhoFem from './Pages/Aniversario/Filho/AnivFilhoFem'
import AnivFilhoMasc from './Pages/Aniversario/Filho/AnivFilhoMasc'
import AnivFilhaMasc from './Pages/Aniversario/Filha/AnivFilhaMasc'
import AnivMaeMasc from './Pages/Aniversario/Mae/AnivMaeMasc'
import AnivMaeFem from './Pages/Aniversario/Mae/AnivMaeFem'
import AnivPaiFem from './Pages/Aniversario/Pai/AnivPaiFem'
import AnivNamFem from './Pages/Aniversario/Namorado_a/AnivNamFem'
import AnivEspFem from './Pages/Aniversario/Esposo_a/AnivEspFem'
import AnivEspMasc from './Pages/Aniversario/Esposo_a/AnivEspMasc'
import AnivPaiMasc from './Pages/Aniversario/Pai/AnivPaiMasc'
import AnivNamMasc from './Pages/Aniversario/Namorado_a/AnivNamMasc'
import Romanticas from './Pages/Romantica/Romanticas'
import RomanticaFem from './Pages/Romantica/Neutra_hot/RomanticaFem'
import RomanticaMasc from './Pages/Romantica/Neutra_hot/RomanticaMasc'
import DiaDosPais from './Pages/Pais/Pais'
import PaisFem from './Pages/Pais/Genero/PaisFem'
import PaisMasc from './Pages/Pais/Genero/PaisMasc'
import AnivIrmaFem from './Pages/Aniversario/Irma/AnivIrmaFem'
import AnivIrmaMasc from './Pages/Aniversario/Irma/AnivIrmaMasc'
import AnivIrmaoFem from './Pages/Aniversario/Irmao/AnivIrmaoFem'
import AnivIrmaoMasc from './Pages/Aniversario/Irmao/AnivIrmaoMasc'
import Natal from './Pages/Natal/Natal'
import NatalNeutroFem from './Pages/Natal/Neutro/NatalNeutroFem'
import NatalNeutroMasc from './Pages/Natal/Neutro/NatalNeutroMasc'
import MaesFem from './Pages/Maes/Genero/MaesFem'
import DiaDasMaes from './Pages/Maes/Maes'
import MaesMasc from './Pages/Maes/Genero/MaesMasc'
import AnivTioFem from './Pages/Aniversario/Tio/AnivTioFem'
import AnivNetaFem from './Pages/Aniversario/Netos/Neta/AnivNetaFem'
import AnivNetaMasc from './Pages/Aniversario/Netos/Neta/AnivNetaMasc'


document.title = 'WhatsMensagem da Lú'

export default function App() {
  return (
    <div className="App">
      


      <HashRouter basename="/">
      <div className='img-dois'>
        <Link to="/"><img className='img-app' src={imgdois} /></Link>
      </div>
      <div className='img-um' >
        <Link to="/"><img className='img-app' src={img} /></Link>
      </div>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/aniversario' element={<Aniversario />} />

          <Route path='/aniversario/mae/feminino' element={<AnivMaeFem />} />
          <Route path='/aniversario/pai/feminino' element={<AnivPaiFem />} />
          <Route path='/aniversario/irma/feminino' element={<AnivIrmaFem />} />
          <Route path='/aniversario/irmao/feminino' element={<AnivIrmaoFem />} />
          <Route path='/aniversario/amiga/feminino' element={<AnivAmigaFem />} />
          <Route path='/aniversario/filha/feminino' element={<AnivFilhaFem />} />
          <Route path='/aniversario/filho/feminino' element={<AnivFilhoFem />} />
          <Route path='/aniversario/namorado/feminino' element={<AnivNamFem />} />
          <Route path='/aniversario/esposo/feminino' element={<AnivEspFem />} />
          <Route path='/aniversario/tio/feminino' element={<AnivTioFem />} />
          <Route path='/aniversario/neta/feminino' element={<AnivNetaFem/>} />

          <Route path='/aniversario/filho/masculino' element={<AnivFilhoMasc />} />
          <Route path='/aniversario/filha/masculino' element={<AnivFilhaMasc />} />
          <Route path='/aniversario/irma/masculino' element={<AnivIrmaMasc />} />
          <Route path='/aniversario/irmao/masculino' element={<AnivIrmaoMasc />} />
          <Route path='/aniversario/mae/masculino' element={<AnivMaeMasc />} />
          <Route path='/aniversario/esposa/masculino' element={<AnivEspMasc />} />
          <Route path='/aniversario/pai/masculino' element={<AnivPaiMasc />} />
          <Route path='/aniversario/namorada/masculino' element={<AnivNamMasc />} />
          <Route path='/aniversario/neta/masculino' element={<AnivNetaMasc/>} />
 
          <Route path='/romanticas' element={<Romanticas />} />
          <Route path='/romanticas/feminino' element={<RomanticaFem />} />
          <Route path='/romanticas/masculino' element={<RomanticaMasc />} />

          
          <Route path='/namorados' element={<Namorados />} />
          <Route path='/namorados/feminino' element={<NamFem />} />
          <Route path='/namorados/feminino/esposo' element={<EspFem />} />
          <Route path='/namorados/feminino/esposo/evangelico' element={<EspFemEvan />} />
          <Route path='/namorados/masculino' element={<NamMasc />} />
          <Route path='/namorados/masculino/esposa' element={<EspMasc />} />
          <Route path='/namorados/masculino/esposa/evangelica' element={<EspMascEvan />} />
        
          <Route path='/dia-dos-pais' element={<DiaDosPais />}/>
          <Route path='/dia-dos-pais/feminino' element={<PaisFem />}/>
          <Route path='/dia-dos-pais/masculino' element={<PaisMasc />}/>

          <Route path='/dia-das-maes' element={<DiaDasMaes />}/>
          <Route path='/dia-das-maes/neutro/feminino' element={<MaesFem />}/>
          <Route path='/dia-das-maes/neutro/masculino' element={<MaesMasc />}/>

          <Route path='/natal' element={<Natal />}/>
          <Route path='/natal/neutro/feminino' element={<NatalNeutroFem />}/>
          <Route path='/natal/neutro/masculino' element={<NatalNeutroMasc />}/>


        </Routes>
      </HashRouter>

      {/* <div class="wh-api"><a href="https://api.whatsapp.com/send?l=pt_br&amp;phone=+5511930947670&amp;text=Gostaria de saber como funciona"><button class="wh-ap-btn"></button></a></div> */}
    
    </div>
  )
}