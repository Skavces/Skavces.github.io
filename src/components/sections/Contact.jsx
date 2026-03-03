import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import AnimatedContent from '../reactbits/AnimatedContent'
import GradientText from '../reactbits/GradientText'
import { useTheme } from '../../context/useTheme'

const contactInfo = [
  { icon: MapPin, label: 'Adres', value: 'Atatürk Mah. İzgin Sk. No:4 Soma/Manisa' },
  { icon: Phone, label: 'Telefon', value: '+90 530 473 87 93' },
  { icon: Mail, label: 'E-posta', value: 'info@newgruptemizlik.com.tr' },
  { icon: Clock, label: 'Çalışma Saatleri', value: 'Pzt – Cmt: 09:00 – 18:00, Pazar: Kapalı' },
]

export default function Contact() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="iletisim" className="relative min-h-screen flex flex-col justify-center py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] ${isDark ? 'bg-primary/5' : 'bg-primary/3'}`} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}>
              <span className="text-primary text-sm font-medium">İletişim</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              <GradientText colors={isDark ? ['#fff', '#1F6EC7', '#fff'] : ['#0f172a', '#1F6EC7', '#0f172a']} animationSpeed={6}>
                Bize Ulaşın
              </GradientText>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Projeleriniz ve detaylı bilgi için iletişim kanallarımızdan bize ulaşabilirsiniz.
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-primary to-accent mx-auto" />
          </div>
        </AnimatedContent>

        <div className="max-w-5xl mx-auto">
          <AnimatedContent distance={50} duration={0.7} delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Info */}
              <div className="flex flex-col justify-between h-full gap-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex flex-1 items-center gap-4 p-5 rounded-2xl theme-card transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-faint)' }}>{item.label}</p>
                      <p className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl p-8 theme-card flex flex-col justify-center" style={{ border: '1px solid var(--border-subtle)' }}>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Mesaj Gönderin</h3>
                <form action="https://formsubmit.co/bariskurnazoglu1@gmail.com" method="POST" className="space-y-4">
                  {/* formsubmit.co ayarları */}
                  <input type="hidden" name="_subject" value="Web Sitesinden Yeni İletişim Formu!" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>Adınız Soyadınız</label>
                      <input 
                        type="text" 
                        name="Ad_Soyad" 
                        className="w-full px-4 py-3 rounded-xl outline-hidden focus:ring-2 focus:ring-primary transition-all" 
                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }} 
                        placeholder="Ad Soyad" 
                        maxLength="50"
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>Telefon Numaranız</label>
                      <input 
                        type="tel" 
                        name="Telefon" 
                        className="w-full px-4 py-3 rounded-xl outline-hidden focus:ring-2 focus:ring-primary transition-all" 
                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }} 
                        placeholder="+90 5XX XXX XX XX"
                        defaultValue="+90 "
                        maxLength="17"
                        pattern="^(\+90|0)?\s*5[0-9]{2}\s*[0-9]{3}\s*[0-9]{2}\s*[0-9]{2}$"
                        title="Geçerli bir telefon numarası giriniz (Örn: +90 555 123 45 67)"
                        onInput={(e) => {
                          let value = e.target.value.replace(/[^\d+]/g, '');
                          if (value.startsWith('90')) value = '+' + value;
                          if (!value.startsWith('+90')) value = '+90' + value.replace(/^\+?/, '');
                          
                          const match = value.match(/^(\+90)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
                          if (match) {
                            e.target.value = match[1] + ' ' + match[2] + (match[3] ? ' ' + match[3] : '') + (match[4] ? ' ' + match[4] : '') + (match[5] ? ' ' + match[5] : '');
                          } else {
                            e.target.value = value;
                          }
                        }}
                        required 
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>E-posta Adresi</label>
                    <input 
                      type="email" 
                      name="E_Posta" 
                      className="w-full px-4 py-3 rounded-xl outline-hidden focus:ring-2 focus:ring-primary transition-all" 
                      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }} 
                      placeholder="ornek@mail.com" 
                      maxLength="100"
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      title="Geçerli bir e-posta adresi giriniz (Örn: ornek@mail.com)"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>Panel Adeti</label>
                      <input 
                        type="number" 
                        name="Panel_Adeti" 
                        min="0" 
                        max="1000"
                        className="w-full px-4 py-3 rounded-xl outline-hidden focus:ring-2 focus:ring-primary transition-all" 
                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }} 
                        placeholder="Örn: 1000" 
                        title="En fazla 1000 adet panel girebilirsiniz."
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>Saha Megavatı (MW)</label>
                      <input 
                        type="number" 
                        name="Saha_Megavati" 
                        min="0" 
                        max="1000"
                        step="0.01" 
                        className="w-full px-4 py-3 rounded-xl outline-hidden focus:ring-2 focus:ring-primary transition-all" 
                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }} 
                        placeholder="Örn: 2.5" 
                        title="En fazla 1000 MW girebilirsiniz."
                        required 
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>Sahada Su Ulaşımı Var Mı?</label>
                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="Su_Ulasimi_Var_Mi" value="Evet" className="w-5 h-5 text-primary bg-transparent border-gray-300 focus:ring-primary" required />
                        <span style={{ color: 'var(--text-primary)' }}>Evet</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="Su_Ulasimi_Var_Mi" value="Hayır" className="w-5 h-5 text-primary bg-transparent border-gray-300 focus:ring-primary" required />
                        <span style={{ color: 'var(--text-primary)' }}>Hayır</span>
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="w-full py-4 mt-6 rounded-xl bg-linear-to-r from-primary to-primary-dark text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 text-lg">
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </AnimatedContent>

          {/* Full Width Map */}
          <AnimatedContent distance={30} duration={0.7} delay={0.4}>
            <div className="mt-12 rounded-2xl overflow-hidden w-full h-[400px] shadow-lg" style={{ border: '1px solid var(--border-subtle)' }}>
              <iframe
                title="Soma, Manisa Harita"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.5!2d27.6033488!3d39.1871673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b761223baac18d%3A0xec7d0d10a31330b9!2zQXRhdMO8cmssIMSwemdpbiBTay4gTm86NCwgNDU1MTAgU29tYS9NYW5pc2E!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
