import './GradientText.css'

export default function GradientText({
  children,
  className = '',
  colors = ['#1F6EC7', '#7FBF3A', '#1F6EC7', '#7FBF3A'],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  }

  return (
    <span className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <span className="animated-gradient-border" style={gradientStyle} />
      )}
      <span className="animated-gradient-text-inner" style={gradientStyle}>
        {children}
      </span>
    </span>
  )
}
