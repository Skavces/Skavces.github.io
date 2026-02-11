import { SunMedium, MonitorCog, Bot, ArrowRight } from 'lucide-react'
import SpotlightCard from '../reactbits/SpotlightCard'
import AnimatedContent from '../reactbits/AnimatedContent'
import GradientText from '../reactbits/GradientText'
import { useTheme } from '../../context/useTheme'

const services = [
  {
    icon: SunMedium,
    title: 'Panel Temizlik Hizmeti',
    description:
      'Güneş panellerinizin verimliliğini en üst düzeyde tutmak için profesyonel ve çevre dostu temizlik çözümleri sunuyoruz. Enerji kaybınızı minimize edin.',
    gradient: 'from-yellow-400 to-orange-500',
    spotlightColor: 'rgba(250, 204, 21, 0.15)',
  },
  {
    icon: MonitorCog,
    title: 'Bakım & Onarım İzleme',
    description:
      'Gelişmiş izleme teknolojileri ile sistemlerinizin performansını sürekli takip ediyor, bakım ve onarım süreçlerini optimize ediyoruz.',
    gradient: 'from-primary to-blue-400',
    spotlightColor: 'rgba(31, 110, 199, 0.2)',
  },
  {
    icon: Bot,
    title: 'Temizlik Robot Makina Satış',
    description:
      'Son teknoloji robotik temizlik makinelerimiz ile otonom, hızlı ve etkili temizlik çözümlerini işletmenize kazandırın.',
    gradient: 'from-accent to-emerald-400',
    spotlightColor: 'rgba(127, 191, 58, 0.2)',
  },
]

export default function Services() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="hizmetler" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] ${isDark ? 'bg-accent/8' : 'bg-accent/5'}`} />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] ${isDark ? 'bg-primary/5' : 'bg-primary/3'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}>
              <span className="text-primary text-sm font-medium">Hizmetlerimiz</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              <GradientText colors={isDark ? ['#fff', '#94a3b8', '#fff'] : ['#0f172a', '#1F6EC7', '#0f172a']} animationSpeed={6}>
                Uzman Çözümlerimiz
              </GradientText>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Endüstriyel temizlik ve bakım alanında uzman ekibimizle yanınızdayız.
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-primary to-accent mx-auto" />
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedContent
              key={index}
              distance={60}
              duration={0.7}
              delay={index * 0.15}
            >
              <SpotlightCard
                className="h-full flex flex-col"
                spotlightColor={service.spotlightColor}
              >
                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                <p className="leading-relaxed grow" style={{ color: 'var(--text-muted)' }}>{service.description}</p>

                <a
                  href="#iletisim"
                  className="inline-flex items-center gap-2 text-primary font-semibold mt-6
                    group hover:gap-3 transition-all duration-300"
                >
                  Detay
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
