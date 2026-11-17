// Converte o link de compartilhamento do Google Drive em link de reprodução direta.
// Links que não são do Drive (como os do S3) passam sem alteração.
export function converterLinkDrive(url) {
  return url
    .replace('https://drive.google.com/file/d/', 'http://docs.google.com/uc?export=open&id=')
    .replace('/view?usp=sharing', '')
}
