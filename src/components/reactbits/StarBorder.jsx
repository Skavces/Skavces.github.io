import './StarBorder.css'

export default function StarBorder({
  className = '',
  color = '#7FBF3A',
  speed = '6s',
  children,
  ...rest
}) {
  return (
    <div className={`star-border-container ${className}`} {...rest}>
      <div
        className="star-border-line star-border-before"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="star-border-line star-border-after"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="star-border-content">
        {children}
      </div>
    </div>
  )
}
