// Mostra segundos como m:ss (ex.: 75 -> 1:15)
export default function Duration({ seconds }) {
  const total = Math.max(0, Math.floor(seconds || 0))
  const mm = Math.floor(total / 60)
  const ss = String(total % 60).padStart(2, '0')

  return (
    <time dateTime={`PT${total}S`}>
      {mm}:{ss}
    </time>
  )
}
