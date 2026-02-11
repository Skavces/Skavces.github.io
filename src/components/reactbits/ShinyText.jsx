import './ShinyText.css'

export default function ShinyText({
  children,
  className = '',
  speed = 5,
  disabled = false,
}) {
  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ '--shine-speed': `${speed}s` }}
    >
      {children}
    </span>
  )
}
