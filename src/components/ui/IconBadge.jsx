export default function IconBadge({ children, variant = 'primary', size = 'md' }) {
  const variants = {
    primary: 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25',
    accent: 'bg-gradient-to-br from-accent to-accent-dark text-white shadow-lg shadow-accent/25',
    light: 'bg-primary-light text-primary',
    'accent-light': 'bg-accent-light text-accent',
  }

  const sizes = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-14 h-14 text-xl',
    lg: 'w-18 h-18 text-2xl',
  }

  return (
    <div className={`inline-flex items-center justify-center rounded-xl ${variants[variant]} ${sizes[size]}`}>
      {children}
    </div>
  )
}
