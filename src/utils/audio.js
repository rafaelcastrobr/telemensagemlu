import { S3_BASE } from '../data/config'
import { converterLinkDrive } from './drive'

// Link final de um áudio dos dados: arquivo do S3 (campo "s3") ou URL completa (campo "link").
export function linkDoAudio(audio) {
  const url = audio.s3 !== undefined ? S3_BASE + audio.s3 : audio.link
  return converterLinkDrive(url)
}
