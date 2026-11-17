import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { MENU_INICIAL } from '../data/ocasioes'

const PaginaCss = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 24rem;
  padding: 4px 16px 96px; /* folga embaixo pro botão flutuante do WhatsApp */
`

const TituloCss = styled.h1`
  margin: 6px 0 10px;
  font-size: 2rem;
  line-height: 1.1;
`

const AvisoCss = styled.p`
  color: var(--cor-texto);
  font-size: 1.15rem;
  line-height: 1.3;
`

const ListaCss = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0 14px;
  padding: 0;
  list-style: none;
`

const ItemCss = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  box-sizing: border-box;
  min-height: 4.4rem;
  padding: 10px 16px 10px 12px;
  color: #E0FBFC;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: left;
  text-decoration: none;
  background: #a52504;
  border-radius: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);

  &:active {
    background: #EE6C4D;
  }

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 2px;
  }

  span {
    flex: 1;
  }

  svg {
    flex: none;
    opacity: 0.8;
  }
`

const IconeCss = styled.img`
  flex: none;
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  padding: 7px;
  object-fit: contain;
  background: #fff;
  border-radius: 50%;
`

// Aviso, não é um botão: não leva a lugar nenhum
const EmBreveCss = styled.p`
  margin: 0 0 6px;
  padding: 14px 10px;
  color: var(--cor-texto);
  font-size: 1.1rem;
  letter-spacing: 0.04em;
  border: 2px dashed currentColor;
  border-radius: 14px;
  opacity: 0.8;
`

const RodapeCss = styled.p`
  margin-top: 16px;
  color: var(--cor-texto);
  font-size: 1rem;
  opacity: 0.9;
`

// Página inicial. Os botões (e quais estão ativos) ficam em data/ocasioes.js
export default function Home() {
  return (
    <PaginaCss>
      <TituloCss>Mensagens Para Todas Ocasiões</TituloCss>
      <AvisoCss>Mensagens sendo enviadas excepcionalmente por Whatsapp.</AvisoCss>
      <AvisoCss>Entre em contato!</AvisoCss>

      <nav aria-label="Ocasiões">
        <ListaCss>
          {MENU_INICIAL.filter((item) => item.ativo).map((item) => (
            <li key={item.rota}>
              <ItemCss to={item.rota}>
                <IconeCss src={item.icone} alt="" />
                <span>{item.texto}</span>
                <FaChevronRight aria-hidden="true" />
              </ItemCss>
            </li>
          ))}
        </ListaCss>
      </nav>

      <EmBreveCss>EM BREVE, MAIS MENSAGENS</EmBreveCss>
      <RodapeCss>Encontrou algum erro? Entre em contato!</RodapeCss>
    </PaginaCss>
  )
}
