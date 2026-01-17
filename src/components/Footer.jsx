import { Mail, Linkedin, Github, MessageCircle, Terminal, Code2 } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      href: 'https://github.com/Skavces',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: 'https://www.linkedin.com/in/selim-kavakl%C4%B1%C3%A7e%C5%9Fme-a1b7b3351/',
      label: 'LinkedIn'
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      href: 'https://wa.me/905516021021',
      label: 'WhatsApp'
    },
    {
      icon: <Mail className="w-4 h-4" />,
      href: 'mailto:selimkavaklicesme@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'home', id: 'home' },
    { name: 'about', id: 'about' },
    { name: 'projects', id: 'projects' },
    { name: 'contact', id: 'contact' }
  ];

  const currentYear = new Date().getFullYear();

  // Yumuşak kaydırma fonksiyonu
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.02)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gray-900 border border-white/10 rounded p-2">
                <Terminal className="w-5 h-5 text-teal-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white font-mono">
                  SELIM_K
                </span>
                <span className="text-xs text-gray-600 font-mono">~/dev/portfolio</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm font-mono leading-relaxed">
              <span className="text-gray-700">#</span> Backend Developer
              <br />
              <span className="text-gray-700">#</span> Building scalable systems
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-teal-400" />
              <h3 className="text-white font-mono text-sm font-bold">QUICK_LINKS</h3>
            </div>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="group flex items-center space-x-2 text-gray-500 hover:text-teal-400 transition-colors text-sm font-mono cursor-pointer"
                >
                  <span className="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">$</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    cd {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-teal-400" />
              <h3 className="text-white font-mono text-sm font-bold">CONNECT</h3>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-950 border border-white/10 rounded hover:border-teal-500/50 transition-all"
                  aria-label={social.label}
                  title={social.label}
                >
                  <span className="text-gray-600 group-hover:text-teal-400 transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-xs font-mono">
              // Available for collaboration
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8"></div>

        {/* Bottom Section */}
        <div className="space-y-4">
          {/* System Info */}
          <div className="bg-gray-950/50 border border-white/10 rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-xs">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">VERSION:</span>
                  <span className="text-teal-400">1.0.0</span>
                </div>
                <span className="text-gray-800">•</span>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">BUILD:</span>
                  <span className="text-teal-400">{currentYear}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-gray-900 border border-white/10 rounded text-gray-500">
                  React + Vite
                </span>
                <span className="px-2 py-1 bg-gray-900 border border-white/10 rounded text-gray-500">
                  Tailwind
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <p className="text-gray-600">
              © {currentYear} Selim Kavaklıçeşme. All rights reserved.
            </p>
            <p className="text-gray-700">
              <span className="text-teal-400">~$</span> Made with passion for backend development
            </p>
          </div>

          {/* Terminal Line */}
          <div className="pt-4 flex items-center space-x-2 text-xs font-mono text-gray-700">
            <span className="text-teal-400">~$</span>
            <span>exit</span>
            <span className="w-2 h-3 bg-teal-400 animate-pulse ml-1"></span>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"></div>
    </footer>
  );
}