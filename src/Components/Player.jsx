import { IconContext } from 'react-icons'
import { FaPlayCircle } from 'react-icons/fa'
import { BsFillPauseCircleFill, BsFillStopCircleFill } from 'react-icons/bs'

import styled from 'styled-components'

import { useCallback, useEffect, useState } from 'react'

import ReactPlayer from 'react-player'


const BotaoCss = styled.button`
  display: flex;
  margin-left: 15px;
  cursor: pointer;
  background: transparent;
  border: none;
`


const ContainerCss = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 20px;
`

// Função que pausa o áudio que está tocando agora. Garante um áudio por vez na página.
let pausarAtual = null

export default function Player({ link, nome = 'mensagem' }) {
  const [url, setUrl] = useState(link)
  const [tocando, setTocando] = useState(false)

  const pausar = useCallback(() => setTocando(false), [])

  // Ao sair da página, esquece este player se ele era o "atual"
  useEffect(() => {
    return () => {
      if (pausarAtual === pausar) pausarAtual = null
    }
  }, [pausar])


  function btnPlayPause() {
    if (!tocando) {
      // vai começar a tocar: pausa o outro áudio que estiver tocando
      if (pausarAtual && pausarAtual !== pausar) pausarAtual()
      pausarAtual = pausar
      setUrl(link)
    }
    setTocando(!tocando)
  }


  function btnStop() {
    if (pausarAtual === pausar) pausarAtual = null
    setUrl(null)
    setTocando(false)
  }


  return (
    <IconContext.Provider value={{ size: '50px', color: '#EE6C4D' }}>
      <ContainerCss>
        <ReactPlayer
          url={url}
          playing={tocando}
          width='0px'
          height='0px'
          onEnded={pausar}
          onError={pausar}
        />

        <BotaoCss type='button' onClick={btnStop} aria-label={`Parar ${nome}`}>
          <BsFillStopCircleFill />
        </BotaoCss>

        {tocando ?

          <IconContext.Provider value={{ size: '50px', color: '#531c0e' }}>
            <BotaoCss type='button' onClick={btnPlayPause} aria-label={`Pausar ${nome}`}>
              <BsFillPauseCircleFill />
            </BotaoCss>
          </IconContext.Provider>
          :
          <BotaoCss type='button' onClick={btnPlayPause} aria-label={`Tocar ${nome}`}>
            <FaPlayCircle />
          </BotaoCss>
        }

      </ContainerCss>
    </IconContext.Provider>
  )
}
