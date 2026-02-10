import { Zap, ShieldCheck, Wrench, CalendarCheck, Award, HeadphonesIcon } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import IconBadge from '../ui/IconBadge'

const highlights = [
  { icon: Zap, title: 'Hızlı Ekip', description: 'Deneyimli ekibimiz en kısa sürede sahada.' },
  { icon: ShieldCheck, title: 'Güvenilir Hizmet', description: 'Sertifikalı ve sigortalı profesyonel kadro.' },
  { icon: Wrench, title: 'Modern Ekipman', description: 'Son teknoloji araç ve gereçlerle donatılmış ekip.' },
  { icon: CalendarCheck, title: 'Planlı Çalışma', description: 'Sistematik ve zamanında teslim garantisi.' },
  { icon: Award, title: 'Kalite Kontrol', description: 'Her aşamada titiz kalite denetimi uyguluyoruz.' },
  { icon: HeadphonesIcon, title: '7/24 Destek', description: 'İhtiyacınız olduğunda her zaman yanınızdayız.' },
]

export default function WhyUs() {
  return (
    <section id="hakkimizda" className="min-h-screen flex items-center py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="fade-in-section">
          <SectionTitle
            title="Neden Biz?"
            subtitle="Kaliteli hizmeti uygun fiyatla, güvenle sunuyoruz."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="fade-in-section group flex items-start gap-4 p-6 rounded-2xl bg-white
                border border-gray-100 hover:border-primary/20
                hover:shadow-[0_8px_32px_rgba(31,110,199,0.1)]
                transition-all duration-300"
            >
              <IconBadge variant="light" size="sm">
                <item.icon className="w-5 h-5" />
              </IconBadge>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
