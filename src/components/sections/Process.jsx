import { Search, ClipboardList, Play, CheckCircle2 } from 'lucide-react'
import StarBorder from '../reactbits/StarBorder'
import AnimatedContent from '../reactbits/AnimatedContent'
import GradientText from '../reactbits/GradientText'
import { useTheme } from '../../context/useTheme'

const steps = [
  {
    icon: Search,
    title: 'Keşif',
    description: 'Sahada detaylı analiz ve ihtiyaç tespiti yapıyoruz.',
    color: '#1F6EC7',
  },
  {
    icon: ClipboardList,
    title: 'Planlama',
    description: 'Size özel temizlik ve bakım planı oluşturuyoruz.',
    color: '#7FBF3A',
  },
  {
    icon: Play,
    title: 'Uygulama',
    description: 'Profesyonel ekibimizle planı hayata geçiriyoruz.',
    color: '#1F6EC7',
  },
  {
    icon: CheckCircle2,
    title: 'Kontrol',
    description: 'Kalite kontrolü ile mükemmel sonuç garantisi.',
    color: '#7FBF3A',
  },
]

export default function Process() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="surec" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] ${isDark ? 'bg-primary/3' : 'bg-primary/2'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}>
              <span className="text-primary text-sm font-medium">Süreç</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              <GradientText colors={isDark ? ['#fff', '#1F6EC7', '#7FBF3A', '#fff'] : ['#0f172a', '#1F6EC7', '#7FBF3A', '#0f172a']} animationSpeed={6}>
                Çalışma Sürecimiz
              </GradientText>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              4 adımda profesyonel hizmet deneyimi.
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-primary to-accent mx-auto" />
          </div>
        </AnimatedContent>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-20 left-[12%] right-[12%] h-px bg-linear-to-r from-primary/30 via-accent/30 to-primary/30" />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <AnimatedContent
                key={index}
                distance={50}
                duration={0.7}
                delay={index * 0.15}
              >
                <div className="relative flex flex-col items-center text-center">
                  <StarBorder color={step.color} speed="8s" className="mb-5 w-full">
                    <div className="flex flex-col items-center py-4">
                      <div className="relative mb-4">
                        <step.icon className="w-10 h-10" style={{ color: step.color }} />
                        <div className="absolute -top-2 -right-6 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                          style={{ background: step.color, color: '#fff' }}>
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{step.description}</p>
                    </div>
                  </StarBorder>

                  {/* Arrow between steps (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="sm:hidden w-px h-6 bg-linear-to-b from-white/10 to-transparent mt-2" />
                  )}
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
