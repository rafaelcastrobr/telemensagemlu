// Código do arquivo num link de compartilhamento do Google Drive (ou null se não for do Drive).
export function idDoDrive(url) {
  const achado = typeof url === 'string' && url.match(/^https:\/\/drive\.google\.com\/file\/d\/([^/?#]+)/)
  return achado ? achado[1] : null
}

// Converte o link de compartilhamento do Drive em link de reprodução direta (https).
// Links que não são do Drive (como os do S3) passam sem alteração.
// Atenção: o Google bloqueia esse tipo de link dentro de outros sites; por isso as páginas
// usam o player do próprio Drive (PlayerDrive) para os áudios que ainda estão lá.
export function converterLinkDrive(url) {
  const id = idDoDrive(url)
  return id ? `https://drive.google.com/uc?export=download&id=${id}` : url
}

// Endereço do player do próprio Drive, que pode ser colocado dentro de uma página.
export function playerDoDrive(id) {
  return `https://drive.google.com/file/d/${id}/preview`
}
