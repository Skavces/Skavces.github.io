import { ArrowRight } from 'lucide-react'
import SpotlightCard from '../reactbits/SpotlightCard'
import AnimatedContent from '../reactbits/AnimatedContent'
import GradientText from '../reactbits/GradientText'
import { useTheme } from '../../context/useTheme'

const services = [
  {
    title: 'Profesyonel Güneş Paneli Yıkama',
    description:
      'Saf su sistemleri ve termal kamera destekli mikrokırık analizleriyle %15\'e varan verim artışı sağlıyor, GES santralinizin ROI süresini kısaltıyoruz.',
    gradient: 'from-yellow-400 to-orange-500',
    spotlightColor: 'rgba(250, 204, 21, 0.15)',
    img: 'endustriyel-gunes-paneli-yikama.jpeg',
    alt: 'Soma GES santralinde termal analizli ve saf su destekli endüstriyel güneş paneli profesyonel yıkama'
  },
  {
    title: 'Santral Bakım & Performans İzleme',
    description:
      'Anlık performans verilerini analiz ederek potansiyel arızaları önceden tespit ediyor, üretim kaybını tamamen ortadan kaldırıyoruz.',
    gradient: 'from-primary to-blue-400',
    spotlightColor: 'rgba(31, 110, 199, 0.2)',
    img: 'soma-gunes-enerjisi-santrali-uzman-bakim.jpg',
    alt: 'Güneş enerjisi santrali uzman bakım, onarım ve anlık performans izleme mühendisliği'
  },
  {
    title: 'Otonom Panel Temizlik Robotu Satışı',
    description:
      'İnsan gücüne bağımlılığı bitiren, sensör destekli endüstriyel yıkama makineleri ile büyük ölçekli ve otonom temizlik yatırımları.',
    gradient: 'from-accent to-emerald-400',
    spotlightColor: 'rgba(127, 191, 58, 0.2)',
    img: 'soma-ges-otonom-temizlik-robotu.jpeg',
    alt: 'Manisa Soma GES santrali otonom temizlik robotu ve üretim verimlilik analizi'
  },
]

export default function Services() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="hizmetler" aria-labelledby="services-title" className="relative min-h-screen flex flex-col justify-center py-24 md:py-32 overflow-hidden">
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
            <h2 id="services-title" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              <GradientText colors={isDark ? ['#fff', '#94a3b8', '#fff'] : ['#0f172a', '#1F6EC7', '#0f172a']} animationSpeed={6}>
                GES Yatırımcıları İçin Uçtan Uca Bakım Hizmetleri
              </GradientText>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Endüstriyel temizlik ve bakım alanında uçtan uca otonom ve profesyonel mühendislik çözümleri sunuyoruz.
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
                <div className="w-full h-48 sm:h-56 bg-gray-900/10 dark:bg-gray-100/5 mb-6 overflow-hidden rounded-t-2xl">
                  <img 
                    src={`${import.meta.env.BASE_URL}${service.img}`} 
                    alt={service.alt || service.title}
                    title={service.alt || service.title}
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
