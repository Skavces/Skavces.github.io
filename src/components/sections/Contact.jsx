import { useState } from 'react'
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const contactInfo = [
  { icon: MapPin, label: 'Adres', value: 'Soma, Manisa / Türkiye' },
  { icon: Phone, label: 'Telefon', value: '+90 (500) 123 45 67' },
  { icon: Mail, label: 'E-posta', value: 'info@newgruptemizlik.com' },
  { icon: Clock, label: 'Çalışma Saatleri', value: 'Pzt – Cmt: 08:00 – 18:00' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Teşekkürler! Mesajınız alındı. En kısa sürede dönüş yapacağız.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="iletisim" className="min-h-screen flex items-center py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-section">
          <SectionTitle
            title="İletişim"
            subtitle="Projeleriniz için bizimle iletişime geçin."
          />
        </div>

        <div className="fade-in-section grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Ad Soyad</label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white
                    focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none
                    transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Telefon</label>
                <input
                  id="phone" name="phone" type="tel" required
                  value={form.phone} onChange={handleChange}
                  placeholder="05XX XXX XX XX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white
                    focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none
                    transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">E-posta</label>
              <input
                id="email" name="email" type="email" required
                value={form.email} onChange={handleChange}
                placeholder="ornek@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white
                  focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none
                  transition-all duration-200 text-gray-900 placeholder:text-gray-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Mesajınız</label>
              <textarea
                id="message" name="message" rows={5} required
                value={form.message} onChange={handleChange}
                placeholder="Projeniz hakkında kısa bilgi verin..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white
                  focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none
                  transition-all duration-200 text-gray-900 placeholder:text-gray-400 resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              <Send className="w-4 h-4 mr-2" />
              Mesaj Gönder
            </Button>
          </form>

          {/* Info + Map */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                    <p className="text-gray-800 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-52">
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
        </div>
      </div>
    </section>
  )
}
