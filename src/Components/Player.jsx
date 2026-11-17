import { IconContext } from 'react-icons'
import { FaPlayCircle } from 'react-icons/fa'
import { BsFillPauseCircleFill, BsFillStopCircleFill } from 'react-icons/bs'

import styled from 'styled-components'

import { useCallback, useEffect, useRef, useState } from 'react'

import ReactPlayer from 'react-player'

import Duration from './Duration'


const CartaoCss = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 22rem;
  margin-bottom: 12px;
  padding: 12px 16px 14px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`

const LinhaCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

const RotuloCss = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;
  color: #293241;
  white-space: nowrap;

  img {
    width: 26px;
    height: 26px;
  }
`

const ControlesCss = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const BotaoCss = styled.button`
  display: flex;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid #3d5a80;
    outline-offset: 2px;
  }
`

const ProgressoCss = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
`

const TrilhaCss = styled.div`
  flex: 1;
  height: 6px;
  overflow: hidden;
  background: #e3e3e3;
  border-radius: 3px;
`

const PreenchimentoCss = styled.div`
  height: 100%;
  background: #EE6C4D;
  border-radius: 3px;
  transition: width 0.25s linear;
`

const TempoCss = styled.span`
  min-width: 5.6rem;
  font-size: 0.9rem;
  color: #555;
  text-align: right;
  font-variant-numeric: tabular-nums;
`

// Função que pausa o áudio que está tocando agora. Garante um áudio por vez na página.
let pausarAtual = null

// Cartão de uma mensagem: o que vier em "children" (COD, ícone) fica à esquerda,
// botões de parar/tocar à direita e, embaixo, a barra de progresso com o tempo.
export default function Player({ link, nome = 'mensagem', children }) {
  const [url, setUrl] = useState(link)
  const [tocando, setTocando] = useState(false)
  const [tocado, setTocado] = useState(0)
  const [duracao, setDuracao] = useState(0)
  const playerRef = useRef(null)

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
    setTocado(0)
  }


  function aoTerminar() {
    setTocando(false)
    setTocado(0)
    if (playerRef.current) playerRef.current.seekTo(0)
  }


  const porcentagem = duracao > 0 ? Math.min(100, (tocado / duracao) * 100) : 0

  return (
    <CartaoCss>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={tocando}
        width='0px'
        height='0px'
        progressInterval={250}
        onProgress={(p) => setTocado(p.playedSeconds)}
        onDuration={setDuracao}
        onEnded={aoTerminar}
        onError={pausar}
      />

      <LinhaCss>
        <RotuloCss>{children}</RotuloCss>

        <ControlesCss>
          <IconContext.Provider value={{ size: '34px', color: '#EE6C4D' }}>
            <BotaoCss type='button' onClick={btnStop} aria-label={`Parar ${nome}`}>
              <BsFillStopCircleFill />
            </BotaoCss>
          </IconContext.Provider>

          {tocando ?
            <IconContext.Provider value={{ size: '48px', color: '#531c0e' }}>
              <BotaoCss type='button' onClick={btnPlayPause} aria-label={`Pausar ${nome}`}>
                <BsFillPauseCircleFill />
              </BotaoCss>
            </IconContext.Provider>
            :
            <IconContext.Provider value={{ size: '48px', color: '#EE6C4D' }}>
              <BotaoCss type='button' onClick={btnPlayPause} aria-label={`Tocar ${nome}`}>
                <FaPlayCircle />
              </BotaoCss>
            </IconContext.Provider>
          }
        </ControlesCss>
      </LinhaCss>

      <ProgressoCss>
        <TrilhaCss
          role='progressbar'
          aria-label={`Progresso de ${nome}`}
          aria-valuemin={0}
          aria-valuemax={Math.round(duracao)}
          aria-valuenow={Math.round(tocado)}
        >
          <PreenchimentoCss style={{ width: `${porcentagem}%` }} />
        </TrilhaCss>
        <TempoCss>
          <Duration seconds={tocado} /> / {duracao > 0 ? <Duration seconds={duracao} /> : '--:--'}
        </TempoCss>
      </ProgressoCss>
    </CartaoCss>
  )
}
