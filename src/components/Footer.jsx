import { Mail, Linkedin, Github, MessageCircle, Instagram, Heart, Terminal } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/username',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/username',
      label: 'LinkedIn'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/username',
      label: 'Instagram'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: 'https://wa.me/905XXXXXXXXX',
      label: 'WhatsApp'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:email@example.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımda', href: '#about' },
    { name: 'Projeler', href: '#projects' },
    { name: 'İletişim', href: '#contact' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-slate-900 p-2 rounded-lg border border-cyan-400/30">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {"Selim Kavaklıçeşme"}
                </span>
                <span className="text-xs text-gray-500 font-mono">Full Stack Web Developer</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Modern web uygulamaları geliştiren tutkulu bir yazılımcı.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Hızlı Erişim</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Sosyal Medya</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300"
                  aria-label={social.label}
                >
                  <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Benimle iletişime geçmek için sosyal medya hesaplarımı kullanabilirsiniz.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm flex items-center space-x-2">
              <span>© {currentYear} Tüm hakları saklıdır.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center space-x-1">
              </span>
            </p>
            
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span className="px-3 py-1 bg-slate-900/50 border border-slate-800 rounded-full">
                React + Vite
              </span>
              <span className="px-3 py-1 bg-slate-900/50 border border-slate-800 rounded-full">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
    </footer>
  );
}