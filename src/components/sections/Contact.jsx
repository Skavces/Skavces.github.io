import { useState } from 'react'
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react'
import AnimatedContent from '../reactbits/AnimatedContent'
import GradientText from '../reactbits/GradientText'
import { useTheme } from '../../context/useTheme'

const contactInfo = [
  { icon: MapPin, label: 'Adres', value: 'Soma, Manisa / Türkiye' },
  { icon: Phone, label: 'Telefon', value: '+90 (500) 123 45 67' },
  { icon: Mail, label: 'E-posta', value: 'info@newgruptemizlik.com' },
  { icon: Clock, label: 'Çalışma Saatleri', value: 'Pzt – Cmt: 08:00 – 18:00' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Teşekkürler! Mesajınız alındı. En kısa sürede dönüş yapacağız.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="iletisim" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] ${isDark ? 'bg-primary/5' : 'bg-primary/3'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              Projeleriniz için bizimle iletişime geçin.
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-primary to-accent mx-auto" />
          </div>
        </AnimatedContent>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <AnimatedContent distance={50} duration={0.7} delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5 order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>Ad Soyad</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Adınız Soyadınız"
                    className="theme-input w-full px-4 py-3 rounded-xl outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>Telefon</label>
                  <input
                    id="phone" name="phone" type="tel" required
                    value={form.phone} onChange={handleChange}
                    placeholder="05XX XXX XX XX"
                    className="theme-input w-full px-4 py-3 rounded-xl outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>E-posta</label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="ornek@email.com"
                  className="theme-input w-full px-4 py-3 rounded-xl outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>Mesajınız</label>
                <textarea
                  id="message" name="message" rows={5} required
                  value={form.message} onChange={handleChange}
                  placeholder="Projeniz hakkında kısa bilgi verin..."
                  className="theme-input w-full px-4 py-3 rounded-xl outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl
                  bg-linear-to-r from-primary to-primary-dark text-white font-semibold text-lg
                  shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40
                  hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto cursor-pointer"
              >
                <Send className="w-4 h-4 mr-2" />
                Mesaj Gönder
              </button>
            </form>
          </AnimatedContent>

          {/* Info + Map */}
          <AnimatedContent distance={50} duration={0.7} delay={0.2} direction="horizontal" reverse>
            <div className="space-y-5 order-1 lg:order-2">
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl theme-card transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--text-faint)' }}>{item.label}</p>
                      <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-52" style={{ border: '1px solid var(--border-subtle)' }}>
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
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
