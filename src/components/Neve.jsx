import styled, { keyframes } from 'styled-components'

const QUANTIDADE = 32

// Cada floco tem posição, tamanho, velocidade e atraso diferentes, mas sempre os mesmos
// (calculados por fórmula, sem sorteio), para a neve não "pular" quando a tela atualiza.
const FLOCOS = Array.from({ length: QUANTIDADE }, (_, i) => ({
  esquerda: (i * 37 + 11) % 100, // % da largura da tela
  tamanho: 4 + ((i * 5) % 6), // px
  duracao: 10 + ((i * 7) % 9), // s
  atraso: -((i * 5) % 17), // s (negativo: já começa no meio da queda)
  deriva: (i % 2 ? 1 : -1) * (15 + ((i * 11) % 40)), // px de balanço pro lado
}))

const cair = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -5vh, 0);
  }
  8%, 90% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
    transform: translate3d(var(--deriva), 105vh, 0);
  }
`

// Camada fixa que fica atrás do conteúdo (a neve cai no fundo, nunca por cima de botões
// e players) e não recebe clique nem toque.
const CamadaCss = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`

const FlocoCss = styled.i`
  position: absolute;
  top: 0;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  animation: ${cair} linear infinite;
  will-change: transform;
`

// Neve leve, feita só com CSS. Aparece quando MODO_NATAL está ligado (src/data/config.js).
export default function Neve() {
  return (
    <CamadaCss aria-hidden="true" data-testid="neve">
      {FLOCOS.map((floco, i) => (
        <FlocoCss
          key={i}
          style={{
            left: `${floco.esquerda}%`,
            width: floco.tamanho,
            height: floco.tamanho,
            animationDuration: `${floco.duracao}s`,
            animationDelay: `${floco.atraso}s`,
            '--deriva': `${floco.deriva}px`,
          }}
        />
      ))}
    </CamadaCss>
  )
}
