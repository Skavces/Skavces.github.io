import { Mail, Linkedin, Github, MessageCircle, Terminal, Send } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'EMAIL',
      value: 'selimkavaklicesme@gmail.com',
      href: 'mailto:selimkavaklicesme@gmail.com',
      command: 'sendmail',
      protocol: 'SMTP'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LINKEDIN',
      value: 'linkedin.com/in/selimkavaklicesme',
      href: 'https://www.linkedin.com/in/selim-kavakl%C4%B1%C3%A7e%C5%9Fme-a1b7b3351/',
      command: 'open-link',
      protocol: 'HTTPS'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GITHUB',
      value: 'github.com/Skavces',
      href: 'https://github.com/Skavces',
      command: 'git-remote',
      protocol: 'HTTPS'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WHATSAPP',
      value: '+90 551 602 10 21',
      href: 'https://wa.me/905516021021',
      command: 'whatsapp',
      protocol: 'HTTPS'
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-black relative overflow-hidden py-24 scroll-mt-20"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-teal-400 font-mono text-sm">~$</span>
            <span className="text-gray-500 font-mono text-sm">cat contact.conf</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-mono">
            <span className="text-teal-400">#</span> CONTACT
          </h2>
          <div className="mt-2 h-1 w-24 bg-linear-to-r from-teal-400 to-transparent"></div>
          
          <p className="mt-6 text-gray-400 font-mono text-sm max-w-2xl">
            <span className="text-gray-600"># Yeni projeler, iş birlikleri veya sadece merhaba demek için</span>
            <br />
            <span className="text-gray-600"># benimle iletişime geçebilirsiniz.</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Contact Terminal */}
          <div className="bg-gray-950/80 border border-gray-800 rounded-lg overflow-hidden mb-8">
            {/* Terminal Header */}
            <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-teal-400" />
                <span className="text-gray-400 font-mono text-xs">contact_info.sh</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-4">
              <div className="text-gray-500">
                <span className="text-teal-400">~$</span> ./get-contact-methods.sh
              </div>
              
              <div className="text-gray-500 mb-4">
                Fetching available contact methods...
              </div>

              {/* Contact Methods Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-teal-800/50 hover:bg-gray-900 transition-all"
                  >
                    {/* Contact Header */}
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-800">
                      <div className="flex items-center space-x-2">
                        <span className="text-teal-400">{contact.icon}</span>
                        <span className="text-white font-bold text-xs">{contact.label}</span>
                      </div>
                      <span className="text-xs text-gray-600 group-hover:text-teal-400 transition-colors">
                        {contact.protocol}
                      </span>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-gray-600 text-xs mt-0.5">$</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-500 mb-1">command:</div>
                          <div className="text-teal-400 text-xs font-mono break-all">
                            {contact.command}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <span className="text-gray-600 text-xs mt-0.5">→</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-500 mb-1">target:</div>
                          <div className="text-gray-400 text-xs break-all group-hover:text-gray-300 transition-colors">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="mt-3 pt-3 border-t border-gray-800 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs text-gray-600">active</span>
                      </div>
                      <Send className="w-3.5 h-3.5 text-gray-700 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-4 mt-4 border-t border-gray-800">
                <div className="flex items-center space-x-2 text-green-400 text-xs">
                  <span>✓</span>
                  <span>All contact methods verified and active</span>
                </div>
              </div>

              <div className="flex items-center space-x-1 pt-2">
                <span className="text-teal-400">~$</span>
                <span className="w-2 h-4 bg-teal-400 animate-pulse ml-1"></span>
              </div>
            </div>
          </div>

          {/* Response Time Card */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-950/80 border border-gray-800 rounded-lg p-4">
              <div className="font-mono text-xs space-y-2">
                <div className="text-gray-500">RESPONSE_TIME:</div>
                <div className="text-2xl text-teal-400 font-bold">&lt; 24h</div>
                <div className="text-gray-600">Usually within hours</div>
              </div>
            </div>

            <div className="bg-gray-950/80 border border-gray-800 rounded-lg p-4">
              <div className="font-mono text-xs space-y-2">
                <div className="text-gray-500">AVAILABILITY:</div>
                <div className="text-2xl text-green-400 font-bold flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>ONLINE</span>
                </div>
                <div className="text-gray-600">Mon - Sun, 09:00-22:00</div>
              </div>
            </div>

            <div className="bg-gray-950/80 border border-gray-800 rounded-lg p-4">
              <div className="font-mono text-xs space-y-2">
                <div className="text-gray-500">TIMEZONE:</div>
                <div className="text-2xl text-blue-400 font-bold">UTC+3</div>
                <div className="text-gray-600">Turkey/Istanbul</div>
              </div>
            </div>
          </div>

          {/* Quick Note */}
          <div className="mt-8 bg-gray-950/80 border border-gray-800 rounded-lg p-4">
            <div className="font-mono text-xs space-y-2">
              <div className="flex items-center space-x-2 text-gray-500 mb-2">
                <Terminal className="w-4 h-4 text-teal-400" />
                <span>README.md</span>
              </div>
              <div className="text-gray-600">
                <span className="text-teal-400">#</span> İletişim Kuralları
              </div>
              <div className="text-gray-500 pl-4 space-y-1">
                <div>→ Profesyonel projeler için: <span className="text-teal-400">email</span> veya <span className="text-teal-400">LinkedIn</span></div>
                <div>→ Hızlı sorular için: <span className="text-teal-400">WhatsApp</span></div>
                <div>→ Kod incelemesi için: <span className="text-teal-400">GitHub</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Command */}
        <div className="mt-12 font-mono text-xs text-gray-600 text-center">
          <span className="text-teal-400">~$</span> echo "Thanks for visiting!"
        </div>
      </div>
    </section>
  );
}