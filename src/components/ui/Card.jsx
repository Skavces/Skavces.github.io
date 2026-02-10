export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`
        bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8
        border border-white/40
        shadow-[0_8px_32px_rgba(31,110,199,0.08)]
        ${hover ? 'hover:shadow-[0_16px_48px_rgba(31,110,199,0.15)] hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
