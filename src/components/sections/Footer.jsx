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
      { label: '+90 (500) 123 45 67', href: 'tel:+905001234567' },
      { label: 'info@newgruptemizlik.com', href: 'mailto:info@newgruptemizlik.com' },
      { label: 'Soma, Manisa', href: '#iletisim' },
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
    <footer className="bg-gray-900 relative">
      {/* Green accent separator */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="New Temizlik Hizmetleri"
                className="h-16 w-auto object-contain rounded-xl bg-white p-2"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Profesyonel temizlik ve bakım çözümleri ile endüstriyel alanda güvenilir iş ortağınız.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center
                    hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent text-sm transition-colors duration-200"
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
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 New Grup Temizlik Hizmetleri. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1 text-gray-600 text-xs">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Güçlü &amp; Güvenilir
          </div>
        </div>
      </div>
    </footer>
  )
}
