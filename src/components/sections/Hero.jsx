import { useState, useEffect, useCallback } from 'react'
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import BlurText from '../reactbits/BlurText'
import GradientText from '../reactbits/GradientText'
import AnimatedContent from '../reactbits/AnimatedContent'

const base = import.meta.env.BASE_URL

const mediaItems = [
  { type: 'video', src: `${base}otonom-panel-yikama-robotu-test.mp4`, alt: 'Soma GES otonom panel yıkama robotu saha testi ve performans analizi' },
  { type: 'video', src: `${base}soma-endustriyel-temizlik-makinesi.mp4`, alt: 'Endüstriyel güneş santralleri için yapay zeka destekli otonom temizlik makinesi' },
  { type: 'video', src: `${base}ges-temizlik-referans-uygulamasi-1.mp4`, alt: 'Türkiye geneli güneş enerjisi santralleri verimlilik artırıcı profesyonel temizlik referansı' }
]

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
const PARTICLE_COUNT = isMobile ? 10 : 30
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: `${6 + Math.random() * 8}s`,
  delay: `${Math.random() * 5}s`,
  size: `${2 + Math.random() * 3}px`,
  opacity: 0.2 + Math.random() * 0.4,
}))

function ParticleField() {
  return (
    <div className="hero-particles">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % mediaItems.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + mediaItems.length) % mediaItems.length)
  }, [current, goTo])

  useEffect(() => {
    if (mediaItems[current].type === 'video') return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [current, next])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden theme-transition"
    >
      {/* Full-screen background media */}
      <div className="absolute inset-0 z-0">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-600 ease-in-out
              ${index === current
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
              }`}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt || `Proje ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                aria-label={item.alt}
                title={item.alt}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload={index === current ? 'auto' : 'none'}
                autoPlay={index === current}
                onEnded={() => {
                  if (index === current) next()
                }}
                ref={(el) => {
                  if (el) {
                    if (index === current) {
                      el.currentTime = 0
                      el.play().catch(() => {})
                    } else {
                      el.pause()
                    }
                  }
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-1 bg-black/55" />

      {/* Particles */}
      <div className="relative z-2">
        <ParticleField />
      </div>

      <div className="relative z-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 w-full">
        {/* Text – centered */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-12 w-full flex flex-col items-center">

          <AnimatedContent distance={40} duration={0.8} delay={0.2} className="w-full flex flex-col items-center justify-center">
            {/* SEO Odaklı Yeni H1 Başlığı */}
            <h1 className="flex flex-col items-center justify-center text-[1.9rem] sm:text-4xl md:text-5xl lg:text-[4.5rem] font-black text-white leading-[1.15] md:leading-[1.2] mb-4 sm:mb-6 drop-shadow-2xl max-w-[100vw]" style={{ textShadow: '0 10px 40px rgba(0,0,0,0.8)' }}>
              <span>New Temizlik</span>
              <span className="text-white my-1 md:my-2 text-center">
                Soma Güneş Enerji Santrali
              </span>
              <span className="text-center">Temizliği ve Çözümleri</span>
            </h1>
          </AnimatedContent>

          <AnimatedContent distance={30} duration={0.8} delay={0.6}>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-6 leading-snug" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              <GradientText
                colors={['#7FBF3A', '#4ADE80', '#1F6EC7', '#38BDF8', '#7FBF3A']}
                animationSpeed={5}
                className="inline-block py-1"
              >
                Kirli paneller üretim kaybına neden olur.{' '}
                Profesyonel temizlik ve bakım ile GES veriminizi koruyun.
              </GradientText>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={30} duration={0.8} delay={0.8}>
            {/* Destekleyici ve B2B Odaklı H2 Alt Başlığı */}
            <h2 className="text-[0.9rem] sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto text-white/80 drop-shadow px-4">
              Otonom temizlik robotları, profesyonel yıkama ekipmanları ve termal analiz destekli bakım hizmetleri ile GES sahalarında düzenli temizlik ve performans takibi sağlıyoruz.
            </h2>
          </AnimatedContent>

          <AnimatedContent distance={20} duration={0.6} delay={1}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-10 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="#iletisim"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl
                  bg-linear-to-r from-primary to-primary-dark text-white font-semibold text-base sm:text-lg
                  shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40
                  hover:-translate-y-1 transition-all duration-300"
              >
                Ücretsiz Keşif Talep Et
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg
                  hover:-translate-y-1 transition-all duration-300
                  border-2 border-accent text-accent hover:bg-accent hover:text-white
                  shadow-[0_0_15px_rgba(127,191,58,0.3)] hover:shadow-[0_0_25px_rgba(127,191,58,0.6)]"
              >
                Hizmetleri İncele
              </a>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={15} duration={0.5} delay={1.2}>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/60">
              {[
                { label: '195+ Tamamlanan Proje', color: 'bg-accent' },
                { label: '5+ Yıllık Saha Deneyimi', color: 'bg-primary' },
                { label: '%95 Müşteri Memnuniyeti', color: 'bg-accent' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </div>

      {/* Prev/Next arrows – positioned on the section */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-8 bottom-32 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 sm:bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 sm:hover:bg-white/25 transition-all duration-200 cursor-pointer border border-white/10 sm:border-white/15"
        aria-label="Önceki"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-8 bottom-32 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 sm:bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 sm:hover:bg-white/25 transition-all duration-200 cursor-pointer border border-white/10 sm:border-white/15"
        aria-label="Sonraki"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-4 flex gap-2.5">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer
              ${index === current
                ? 'w-10 bg-linear-to-r from-primary to-accent'
                : 'w-2.5 bg-white/30 hover:bg-white/50'
              }`}
            aria-label={`Medya ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <a href="#hizmetler" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-4 flex flex-col items-center gap-1 text-white/60 hover:text-accent transition-colors" aria-label="Aşağı kaydır">
        <span className="text-xs font-medium">Keşfet</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}