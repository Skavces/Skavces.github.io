import { SunMedium, MonitorCog, Bot, ArrowRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import IconBadge from '../ui/IconBadge'

const services = [
  {
    icon: SunMedium,
    title: 'Panel Temizlik Hizmeti',
    description:
      'Güneş panellerinizin verimliliğini en üst düzeyde tutmak için profesyonel ve çevre dostu temizlik çözümleri sunuyoruz. Enerji kaybınızı minimize edin.',
    color: 'primary',
  },
  {
    icon: MonitorCog,
    title: 'Bakım & Onarım İzleme',
    description:
      'Gelişmiş izleme teknolojileri ile sistemlerinizin performansını sürekli takip ediyor, bakım ve onarım süreçlerini optimize ediyoruz.',
    color: 'accent',
  },
  {
    icon: Bot,
    title: 'Temizlik Robot Makina Satış',
    description:
      'Son teknoloji robotik temizlik makinelerimiz ile otonom, hızlı ve etkili temizlik çözümlerini işletmenize kazandırın.',
    color: 'primary',
  },
]

export default function Services() {
  return (
    <section id="hizmetler" className="min-h-screen flex items-center py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-section">
          <SectionTitle
            title="Hizmetlerimiz"
            subtitle="Endüstriyel temizlik ve bakım alanında uzman ekibimizle yanınızdayız."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="fade-in-section">
              <Card className="h-full flex flex-col group">
                <IconBadge variant={service.color}>
                  <service.icon className="w-6 h-6" />
                </IconBadge>

                <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed flex-grow">{service.description}</p>

                <a
                  href="#iletisim"
                  className="inline-flex items-center gap-1 text-primary font-semibold mt-6
                    group-hover:gap-2 transition-all duration-300"
                >
                  Detay
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
