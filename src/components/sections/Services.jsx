import { ArrowRight } from 'lucide-react'
import SpotlightCard from '../reactbits/SpotlightCard'
import AnimatedContent from '../reactbits/AnimatedContent'
import GradientText from '../reactbits/GradientText'
import { useTheme } from '../../context/useTheme'

const services = [
  {
    title: 'Panel Temizlik Hizmeti',
    description:
      'Özel ekipmanlar ve uygun temizlik yöntemleri kullanarak güneş panellerinin yüzey temizliğini gerçekleştiriyoruz. Düzenli temizlik, panel veriminin korunmasına ve üretim kayıplarının azaltılmasına yardımcı olur.',
    gradient: 'from-yellow-400 to-orange-500',
    spotlightColor: 'rgba(250, 204, 21, 0.15)',
    img: 'endustriyel-gunes-paneli-yikama.jpeg',
    alt: 'GES sahasında profesyonel güneş paneli temizlik çalışması'
  },
  {
    title: 'Panel Bakım & Onarım İzleme',
    description:
      'Santral üretim verilerini inceleyerek performans düşüşlerini tespit ediyoruz. Planlı bakım ve kontroller ile sistemin düzenli ve verimli çalışmasına destek oluyoruz.',
    gradient: 'from-primary to-blue-400',
    spotlightColor: 'rgba(31, 110, 199, 0.2)',
    img: 'soma-gunes-enerjisi-santrali-uzman-bakim.webp',
    alt: 'Güneş enerjisi santralinde bakım ve performans kontrol çalışması'
  },
  {
    title: 'Temizlik Robot Makina Satışı',
    description:
      'Büyük ölçekli güneş enerji santralleri için panel temizlik robotları sunuyoruz. Otomatik temizlik sistemleri ile bakım süreçleri hızlanır ve iş gücü ihtiyacı azalır.',
    gradient: 'from-accent to-emerald-400',
    spotlightColor: 'rgba(127, 191, 58, 0.2)',
    img: 'soma-ges-otonom-temizlik-robotu.jpeg',
    alt: 'GES sahasında kullanılan panel temizlik robotu'
  },
]

export default function Services() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="hizmetler" aria-labelledby="services-title" className="relative min-h-screen flex flex-col justify-center py-24 md:py-32 scroll-mt-16 md:scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] ${isDark ? 'bg-accent/8' : 'bg-accent/5'}`} />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] ${isDark ? 'bg-primary/5' : 'bg-primary/3'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}>
              <span className="text-primary text-sm font-medium">Hizmetlerimiz</span>
            </div>
            <h2 id="services-title" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              <GradientText colors={isDark ? ['#fff', '#94a3b8', '#fff'] : ['#0f172a', '#1F6EC7', '#0f172a']} animationSpeed={6}>
                GES Bakım ve Panel Temizlik Hizmetleri
              </GradientText>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Güneş enerji santrallerinde panel temizliği, bakım ve performans takibi hizmetleri sunuyoruz. Düzenli bakım ile üretim kayıplarını azaltıyoruz.
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
                className="h-full flex flex-col pt-0 px-0 pb-6 overflow-hidden"
                spotlightColor={service.spotlightColor}
              >
                {/* Service Image */}
                <div className="w-full h-36 sm:h-44 bg-gray-900/10 dark:bg-gray-100/5 mb-4 overflow-hidden rounded-t-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}${service.img}`}
                    alt={service.alt || service.title}
                    title={service.alt || service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full text-[0px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <article className="px-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-3 mt-2" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                  <p className="leading-relaxed grow" style={{ color: 'var(--text-muted)' }}>{service.description}</p>

                  <a
                    href="#iletisim"
                    className="inline-flex items-center gap-2 text-primary font-semibold mt-6
                      group/link hover:gap-3 transition-all duration-300"
                  >
                    Detaylı Bilgi
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </article>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
