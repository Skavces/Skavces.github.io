import { Search, ClipboardList, Play, CheckCircle2 } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const steps = [
  { icon: Search, title: 'Keşif', description: 'Sahada detaylı analiz ve ihtiyaç tespiti yapıyoruz.' },
  { icon: ClipboardList, title: 'Planlama', description: 'Size özel temizlik ve bakım planı oluşturuyoruz.' },
  { icon: Play, title: 'Uygulama', description: 'Profesyonel ekibimizle planı hayata geçiriyoruz.' },
  { icon: CheckCircle2, title: 'Kontrol', description: 'Kalite kontrolü ile mükemmel sonuç garantisi.' },
]

export default function Process() {
  return (
    <section id="surec" className="min-h-screen flex items-center py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-section">
          <SectionTitle
            title="Çalışma Sürecimiz"
            subtitle="4 adımda profesyonel hizmet deneyimi."
          />
        </div>

        <div className="fade-in-section relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                {/* Step number */}
                <div className="relative z-10 mb-4">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-light to-white flex items-center justify-center
                    border-2 border-primary/10 group-hover:border-primary/30
                    group-hover:shadow-xl group-hover:shadow-primary/10
                    transition-all duration-500">
                    <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Step badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-lg shadow-accent/30">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>

                {/* Arrow between steps (mobile) */}
                {index < steps.length - 1 && (
                  <div className="sm:hidden w-0.5 h-8 bg-gradient-to-b from-accent/40 to-transparent mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
