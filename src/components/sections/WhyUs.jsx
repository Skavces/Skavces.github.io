import { Zap, ShieldCheck, Wrench, CalendarCheck, Award, HeadphonesIcon } from 'lucide-react'
import CountUp from '../reactbits/CountUp'
import AnimatedContent from '../reactbits/AnimatedContent'
import GradientText from '../reactbits/GradientText'
import { useTheme } from '../../context/useTheme'

const highlights = [
  { icon: Zap, title: 'Hızlı Ekip', description: 'Deneyimli ekibimiz en kısa sürede sahada.' },
  { icon: ShieldCheck, title: 'Güvenilir Hizmet', description: 'Sertifikalı ve sigortalı profesyonel kadro.' },
  { icon: Wrench, title: 'Modern Ekipman', description: 'Son teknoloji araç ve gereçlerle donatılmış ekip.' },
  { icon: CalendarCheck, title: 'Planlı Çalışma', description: 'Sistematik ve zamanında teslim garantisi.' },
  { icon: Award, title: 'Kalite Kontrol', description: 'Her aşamada titiz kalite denetimi uyguluyoruz.' },
  { icon: HeadphonesIcon, title: '7/24 Destek', description: 'İhtiyacınız olduğunda her zaman yanınızdayız.' },
]

const stats = [
  { value: 500, suffix: '+', label: 'Tamamlanan Proje' },
  { value: 10, suffix: '+', label: 'Yıl Deneyim' },
  { value: 100, suffix: '%', label: 'Müşteri Memnuniyeti' },
  { value: 50, suffix: '+', label: 'Uzman Personel' },
]

export default function WhyUs() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="hakkimizda" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 right-0 w-[400px] h-[400px] rounded-full blur-[100px] ${isDark ? 'bg-accent/5' : 'bg-accent/4'}`} />
        <div className={`absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full blur-[100px] ${isDark ? 'bg-primary/5' : 'bg-primary/3'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="text-accent text-sm font-medium">Neden Biz?</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              <GradientText colors={isDark ? ['#fff', '#7FBF3A', '#fff'] : ['#0f172a', '#7FBF3A', '#0f172a']} animationSpeed={6}>
                Güvenin Adresi
              </GradientText>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Kaliteli hizmeti uygun fiyatla, güvenle sunuyoruz.
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-accent to-primary mx-auto" />
          </div>
        </AnimatedContent>

        {/* Stats Bar */}
        <AnimatedContent distance={50} duration={0.7} delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl backdrop-blur-sm theme-card">
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                  <CountUp to={stat.value} duration={2.5} delay={0.3} suffix={stat.suffix} className="tabular-nums" />
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedContent>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, index) => (
            <AnimatedContent
              key={index}
              distance={40}
              duration={0.6}
              delay={index * 0.1}
            >
              <div className="group flex items-start gap-4 p-5 rounded-xl h-full theme-card transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
