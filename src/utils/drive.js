// Converte o link de compartilhamento do Google Drive em link de reprodução direta (https).
// Links que não são do Drive (como os do S3) passam sem alteração.
export function converterLinkDrive(url) {
  const achado = url.match(/^https:\/\/drive\.google\.com\/file\/d\/([^/?#]+)/)
  if (!achado) return url

  return `https://drive.google.com/uc?export=download&id=${achado[1]}`
}
