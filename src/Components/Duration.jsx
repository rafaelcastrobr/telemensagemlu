export default function Duration ({seconds }) {
  return (
    <time dateTime={`P${Math.round(seconds)}S`} >
      {format(seconds)}
    </time>
  )
}

function format (seconds) {
  const date = new Date(seconds * 1000)
  const mm = date.getMinutes()
  const ss = pad(date.getSeconds())
  console.log('se', seconds)
  return `${mm}:${ss}`
}

function pad (string) {
  return ('0' + string).slice(-2)
}