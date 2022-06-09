import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import img from './assets/img/banner-namorados.png'
import imgdois from './assets/img/banner-namorados-dois.png'


import Home from './Pages/Home'
import Namorados from './Pages/Namorados/Namorados'

import NamMasc from './Pages/Namorados/NamMasc'
import NamFem from './Pages/Namorados/NamFem'
import EspMasc from './Pages/Namorados/EspMasc'
import EspMascEvan from './Pages/Namorados/EspMascEvan'
import EspFemEvan from './Pages/Namorados/EspFemEvan'
import EspFem from './Pages/Namorados/EspFem'


export default function App() {
  return (
    <div className="App">
      <div className='img-dois'>
        <img className='img-app' src={imgdois} />
      </div>
      <div className='img-um' >
        <img className='img-app' src={img} />
      </div>

      <a href="https://api.whatsapp.com/send?phone=554899999999&text=Olá!%20Encontrei%20seu%20site%20na%20Internet%20e%20preciso%20de%20seus%20serviços." class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
      </a>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/namorados' element={<Namorados />} />
          <Route path='/namorados/feminino' element={<NamFem />} />
          <Route path='/namorados/feminino/esposo' element={<EspFem />} />
          <Route path='/namorados/feminino/esposo/evangelico' element={<EspFemEvan />} />
          <Route path='/namorados/masculino' element={<NamMasc />} />
          <Route path='/namorados/masculino/esposa' element={<EspMasc />} />
          <Route path='/namorados/masculino/esposa/evangelica' element={<EspMascEvan />} />
        </Routes>
      </Router>

      <div class="wh-api"><a href="https://api.whatsapp.com/send?l=pt_br&amp;phone=+5511930947670&amp;text=Gostaria de saber como funciona"><button class="wh-ap-btn"></button></a></div>
    </div>
  )
}