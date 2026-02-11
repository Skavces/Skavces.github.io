import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const footerLinks = [
  {
    title: 'Hizmetler',
    links: [
      { label: 'Panel Temizlik', href: '#hizmetler' },
      { label: 'Bakım & Onarım', href: '#hizmetler' },
      { label: 'Robot Makina Satış', href: '#hizmetler' },
    ],
  },
  {
    title: 'Kurumsal',
    links: [
      { label: 'Hakkımızda', href: '#hakkimizda' },
      { label: 'Çalışma Sürecimiz', href: '#surec' },
      { label: 'İletişim', href: '#iletisim' },
    ],
  },
  {
    title: 'İletişim',
    links: [
      { label: '+90 536 883 1994', href: 'tel:+905368831994' },
      { label: 'info@newgruptemizlik.com.tr', href: 'mailto:info@newgruptemizlik.com.tr' },
      { label: 'Atatürk Mah. İzgin Sk. No:4 Soma/Manisa', href: '#iletisim' },
    ],
  },
]

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      {/* Top gradient line */}
      <div className="h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="New Temizlik Hizmetleri"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: 'var(--text-faint)' }}>
              Profesyonel temizlik ve bakım çözümleri ile endüstriyel alanda güvenilir iş ortağınız.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center
                    hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all duration-300"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-faint)',
                  }}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-primary"
                      style={{ color: 'var(--text-faint)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <p className="text-sm" style={{ color: 'var(--text-faint)' }}>
            © 2026 New Grup Temizlik Hizmetleri. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="https://selimkavaklicesme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors duration-200 hover:text-primary"
              style={{ color: 'var(--text-faint)' }}
            >
              Tasarım & Kodlama: <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Selim Kavaklıçeşme</span>
            </a>
            <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-faint)' }}>
              <span className="w-2 h-2 bg-accent rounded-full" />
              Güçlü & Güvenilir
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
