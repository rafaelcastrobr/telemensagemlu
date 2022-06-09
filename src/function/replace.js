export default function ReplaceWord(srt)  {
  const strid = srt.replace('https://drive.google.com/file/d/', 'http://docs.google.com/uc?export=open&id=')
  const replaceSrt = strid.replace('/view?usp=sharing', '')
    

  return replaceSrt
}