import { Mail, Linkedin, Github, MessageCircle, Instagram, Sparkles, ExternalLink } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'E-posta',
      value: 'selimkavaklicesme@gmail.com',
      href: 'mailto:selimkavaklicesme@gmail.com',
      gradient: 'from-cyan-400 to-blue-600',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-400/20',
      hover: 'hover:border-cyan-400/50',
      iconColor: 'text-cyan-400'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/selimkavaklicesme',
      href: 'https://www.linkedin.com/in/selim-kavakl%C4%B1%C3%A7e%C5%9Fme-a1b7b3351/',
      gradient: 'from-blue-400 to-blue-600',
      bg: 'bg-blue-500/10',
      border: 'border-blue-400/20',
      hover: 'hover:border-blue-400/50',
      iconColor: 'text-blue-400'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/Skavces',
      href: 'https://github.com/Skavces',
      gradient: 'from-purple-400 to-purple-600',
      bg: 'bg-purple-500/10',
      border: 'border-purple-400/20',
      hover: 'hover:border-purple-400/50',
      iconColor: 'text-purple-400'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '+90 551 602 10 21',
      href: 'https://wa.me/905516021021',
      gradient: 'from-green-400 to-green-600',
      bg: 'bg-green-500/10',
      border: 'border-green-400/20',
      hover: 'hover:border-green-400/50',
      iconColor: 'text-green-400'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      value: '@jedelx',
      href: 'https://instagram.com/jedelx',
      gradient: 'from-pink-400 to-rose-600',
      bg: 'bg-pink-500/10',
      border: 'border-pink-400/20',
      hover: 'hover:border-pink-400/50',
      iconColor: 'text-pink-400'
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-24 scroll-mt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-full px-4 py-2 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300 font-medium">İletişim</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Benimle <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">İletişime Geçin</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Yeni projeler, iş birlikleri veya sadece merhaba demek için benimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 [&>*:last-child:nth-child(odd)]:md:col-start-1 [&>*:last-child:nth-child(odd)]:md:col-end-3 [&>*:last-child:nth-child(odd)]:md:w-1/2 [&>*:last-child:nth-child(odd)]:md:mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border ${contact.border} ${contact.hover} p-6 transition-all duration-300 hover:scale-[1.02] overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`}></div>

              <div className="relative flex items-start space-x-4">
                <div className={`flex-shrink-0 p-3 ${contact.bg} rounded-xl border ${contact.border} group-hover:scale-110 transition-transform duration-300`}>
                  <div className={contact.iconColor}>
                    {contact.icon}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-gray-400 text-sm truncate">{contact.value}</p>
                </div>

                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${contact.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}