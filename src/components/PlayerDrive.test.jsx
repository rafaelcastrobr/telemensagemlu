import { render, screen } from '@testing-library/react'

import PlayerDrive from './PlayerDrive'

describe('PlayerDrive', () => {
  test('mostra o rótulo e o player do Drive dentro do cartão', () => {
    render(<PlayerDrive id="ABC123" nome="mensagem 303"><label>COD: 303</label></PlayerDrive>)

    expect(screen.getByText('COD: 303')).toBeTruthy()
    const player = screen.getByTitle('Player do Drive de mensagem 303')
    expect(player.getAttribute('src')).toBe('https://drive.google.com/file/d/ABC123/preview')
  })
})
