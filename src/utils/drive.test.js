import { S3_BASE } from '../data/config'
import { linkDoAudio } from './audio'
import { converterLinkDrive } from './drive'

describe('converterLinkDrive', () => {
  test('converte o link de compartilhamento do Drive em link de reprodução', () => {
    expect(converterLinkDrive('https://drive.google.com/file/d/ABC123/view?usp=sharing'))
      .toBe('http://docs.google.com/uc?export=open&id=ABC123')
  })

  test('não altera links que não são do Drive', () => {
    const url = 'https://exemplo.com/audio.mp3'
    expect(converterLinkDrive(url)).toBe(url)
  })
})

describe('linkDoAudio', () => {
  test('monta o endereço do S3 a partir do caminho', () => {
    expect(linkDoAudio({ cod: '1', s3: 'Pasta/1.mp3' })).toBe(S3_BASE + 'Pasta/1.mp3')
  })

  test('converte links do Drive', () => {
    expect(linkDoAudio({ cod: '2', link: 'https://drive.google.com/file/d/XYZ/view?usp=sharing' }))
      .toBe('http://docs.google.com/uc?export=open&id=XYZ')
  })
})
