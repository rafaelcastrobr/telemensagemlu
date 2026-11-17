import { IconContext } from 'react-icons'
import { FaPlayCircle } from 'react-icons/fa'
import { BsFillPauseCircleFill, BsFillStopCircleFill } from 'react-icons/bs'

import styled from 'styled-components'

import { useCallback, useEffect, useRef, useState } from 'react'

import ReactPlayer from 'react-player'

import Duration from './Duration'
import { CartaoCss, LinhaCss, RotuloCss } from './cartao'


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
  margin-top: 6px;
`

// Barra de posição: um <input type="range"> (funciona com mouse, toque e teclado).
// A parte já tocada é pintada com a variável --p (0 a 1), que o componente atualiza.
const BarraCss = styled.input`
  flex: 1;
  min-width: 0;
  height: 28px; /* área de toque maior que a trilha */
  margin: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  touch-action: pan-y; /* arrasta pros lados na barra; rolar a página continua na vertical */
  -webkit-appearance: none;
  appearance: none;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 3px solid #3d5a80;
    outline-offset: 2px;
    border-radius: 6px;
  }

  &::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(
      to right,
      #EE6C4D calc(9px + (100% - 18px) * var(--p, 0)),
      #e3e3e3 calc(9px + (100% - 18px) * var(--p, 0))
    );
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    margin-top: -6px;
    background: #EE6C4D;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  }

  &::-moz-range-track {
    height: 6px;
    background: #e3e3e3;
    border-radius: 3px;
  }

  &::-moz-range-progress {
    height: 6px;
    background: #EE6C4D;
    border-radius: 3px;
  }

  &::-moz-range-thumb {
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    background: #EE6C4D;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  }
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
  // Arraste da barra: enquanto o dedo/mouse está na barra, "posicao" mostra onde vai cair
  // e o progresso do áudio não mexe na barra. O áudio só pula ao soltar.
  const [arrastando, setArrastando] = useState(false)
  const [posicao, setPosicao] = useState(null)
  const posicaoRef = useRef(null)
  const playerRef = useRef(null)

  const pausar = useCallback(() => setTocando(false), [])

  // Leva o áudio para um ponto (em segundos)
  const irPara = useCallback((segundos) => {
    setTocado(segundos)
    if (playerRef.current) playerRef.current.seekTo(segundos, 'seconds')
  }, [])

  // Enquanto arrasta, soltar o mouse/dedo em qualquer lugar da tela confirma a nova posição
  useEffect(() => {
    if (!arrastando) return undefined

    function soltou() {
      const destino = posicaoRef.current
      posicaoRef.current = null
      setPosicao(null)
      setArrastando(false)
      if (destino !== null) irPara(destino)
    }

    window.addEventListener('pointerup', soltou)
    window.addEventListener('pointercancel', soltou)
    return () => {
      window.removeEventListener('pointerup', soltou)
      window.removeEventListener('pointercancel', soltou)
    }
  }, [arrastando, irPara])

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


  function aoComecarArraste() {
    posicaoRef.current = null // só pula se a posição realmente mudar
    setArrastando(true)
  }


  function aoMoverBarra(e) {
    const valor = Number(e.target.value)
    if (arrastando) {
      posicaoRef.current = valor
      setPosicao(valor)
    } else {
      irPara(valor) // teclado (setas, Home, End): pula na hora
    }
  }


  const exibido = posicao ?? tocado
  const fracao = duracao > 0 ? Math.min(1, exibido / duracao) : 0
  const barraAtiva = duracao > 0 && url !== null

  return (
    <CartaoCss>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={tocando}
        width='0px'
        height='0px'
        progressInterval={250}
        onProgress={(p) => { if (!arrastando) setTocado(p.playedSeconds) }}
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
        <BarraCss
          type='range'
          aria-label={`Posição de ${nome}`}
          min={0}
          max={duracao > 0 ? duracao : 1}
          step='any'
          value={exibido}
          disabled={!barraAtiva}
          onPointerDown={aoComecarArraste}
          onChange={aoMoverBarra}
          style={{ '--p': fracao }}
        />
        <TempoCss>
          <Duration seconds={exibido} /> / {duracao > 0 ? <Duration seconds={duracao} /> : '--:--'}
        </TempoCss>
      </ProgressoCss>
    </CartaoCss>
  )
}
