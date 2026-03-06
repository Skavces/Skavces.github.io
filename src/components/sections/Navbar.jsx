import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import ShinyText from '../reactbits/ShinyText'
import { useTheme } from '../../context/useTheme'

const navLinks = [
  { label: 'Ana Sayfa', href: '#' },
  { label: 'Panel Kirliliği', href: '#kir-problemleri' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Süreç', href: '#surec' },
  { label: 'Referanslar', href: '#referanslar' },
  { label: 'S.S.S', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isSolid = scrolled || open;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? 'backdrop-blur-xl shadow-2xl'
          : 'bg-transparent'
      }`}
      style={isSolid ? { backgroundColor: 'var(--bg-nav)', boxShadow: `0 25px 50px -12px var(--shadow-color)` } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="New Temizlik Hizmetleri"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </a>

          {/* Centered Desktop links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium whitespace-nowrap transition-colors duration-300 relative
                  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                  after:bg-linear-to-r after:from-primary after:to-accent after:rounded-full
                  after:transition-all after:duration-300 hover:after:w-full"
                style={{ color: isSolid ? 'var(--text-nav)' : 'rgba(255, 255, 255, 0.9)' }}
                onMouseEnter={(e) => e.target.style.color = isSolid ? 'var(--text-nav-hover)' : '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = isSolid ? 'var(--text-nav)' : 'rgba(255, 255, 255, 0.9)'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="p-2.5 rounded-xl transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
              style={{ 
                background: isSolid ? 'var(--bg-card)' : 'rgba(255, 255, 255, 0.1)', 
                border: isSolid ? '1px solid var(--border-subtle)' : '1px solid rgba(255, 255, 255, 0.2)' 
              }}
              aria-label="Tema değiştir"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" style={{ color: isSolid ? 'var(--text-muted)' : '#ffffff' }} />
              ) : (
                <Moon className="w-4 h-4" style={{ color: isSolid ? 'var(--text-muted)' : '#ffffff' }} />
              )}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-lg transition-colors cursor-pointer"
              style={{ color: isSolid ? 'var(--text-muted)' : '#ffffff' }}
              aria-label="Tema değiştir"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 transition-colors cursor-pointer"
              style={{ color: isSolid ? 'var(--text-muted)' : '#ffffff' }}
              aria-label="Menüyü aç/kapat"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl
          transition-all duration-300 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{ backgroundColor: 'var(--bg-nav-mobile)', borderTop: '1px solid var(--border-subtle)' }}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-medium text-lg py-2 transition-colors"
              style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border-subtle)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="mt-2 w-full px-6 py-3 rounded-xl bg-linear-to-r from-primary to-primary-dark text-white font-semibold text-center
              shadow-lg shadow-primary/20 transition-all duration-300"
          >
            Teklif Al
          </a>
        </div>
      </div>
    </nav>
  )
}
