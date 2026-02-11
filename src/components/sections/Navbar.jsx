import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import ShinyText from '../reactbits/ShinyText'
import { useTheme } from '../../context/useTheme'

const navLinks = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Süreç', href: '#surec' },
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl shadow-2xl'
          : 'bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: 'var(--bg-nav)', boxShadow: `0 25px 50px -12px var(--shadow-color)` } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="New Temizlik Hizmetleri"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium transition-colors duration-300 relative
                  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                  after:bg-linear-to-r after:from-primary after:to-accent after:rounded-full
                  after:transition-all after:duration-300 hover:after:w-full"
                style={{ color: 'var(--text-nav)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-nav-hover)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-nav)'}
              >
                {link.label}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="p-2.5 rounded-xl transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
              aria-label="Tema değiştir"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
              ) : (
                <Moon className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
              )}
            </button>

            <a
              href="#iletisim"
              className="px-5 py-2.5 rounded-xl bg-linear-to-r from-primary to-primary-dark text-white font-semibold
                shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30
                hover:-translate-y-0.5 transition-all duration-300"
            >
              <ShinyText speed={3}>✨ Teklif Al</ShinyText>
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-lg transition-colors cursor-pointer"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Tema değiştir"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 transition-colors"
              style={{ color: 'var(--text-muted)' }}
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
