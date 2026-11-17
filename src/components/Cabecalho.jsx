import { Link } from 'react-router-dom'

import bannerComputador from '../assets/images/banner-namorados-lu.png'
import bannerCelular from '../assets/images/banner-namorados-dois-lu.png'

// Banner do topo, com link para a página inicial.
// Qual dos dois aparece (computador ou celular) é decidido em styles/global.css.
export default function Cabecalho() {
  return (
    <>
      <div className='img-dois'>
        <Link to='/'><img className='img-app' src={bannerCelular} alt='WhatsMensagem da Lú' /></Link>
      </div>
      <div className='img-um'>
        <Link to='/'><img className='img-app' src={bannerComputador} alt='WhatsMensagem da Lú' /></Link>
      </div>
    </>
  )
}
