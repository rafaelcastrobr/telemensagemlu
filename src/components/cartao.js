import styled from 'styled-components'

// Estilos do cartão de uma mensagem, usados pelo Player e pelo PlayerDrive.
export const CartaoCss = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 22rem;
  margin-bottom: 12px;
  padding: 12px 16px 14px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`

export const LinhaCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const RotuloCss = styled.div`
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
