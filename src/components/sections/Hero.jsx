import { useState, useEffect, useCallback } from 'react'
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '../ui/Button'

const mediaItems = [
  { type: 'image', src: '/media-1.jpeg' },
  { type: 'image', src: '/media-2.jpeg' },
  { type: 'video', src: '/media-3.mp4' },
  { type: 'video', src: '/media-4.mp4' },
  { type: 'video', src: '/media-5.mp4' },
  { type: 'video', src: '/media-6.mp4' },
]

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
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-light">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -top-20 -right-40 w-[800px] h-[800px] opacity-[0.07]" viewBox="0 0 800 800">
          <path d="M100,400 Q400,50 700,400" stroke="#7FBF3A" strokeWidth="120" fill="none" strokeLinecap="round" />
        </svg>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <svg className="absolute top-32 left-10 w-48 h-48 opacity-[0.06]" viewBox="0 0 200 200">
          {Array.from({ length: 25 }).map((_, i) => (
            <circle key={i} cx={(i % 5) * 40 + 20} cy={Math.floor(i / 5) * 40 + 20} r="3" fill="#1F6EC7" />
          ))}
        </svg>
        <div className="absolute top-1/2 right-0 w-1 h-40 bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        {/* Text – centered */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Profesyonel{' '}
            <span className="text-primary">Temizlik</span>{' '}
            <span className="relative inline-block">
              Çözümleri
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto">
            Güneş paneli temizliğinden robotik çözümlere, endüstriyel bakım hizmetlerinden izleme sistemlerine kadar
            kapsamlı ve güvenilir temizlik hizmetleri sunuyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="#iletisim" size="lg">
              Teklif Al
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="#hizmetler" variant="secondary" size="lg">
              Hizmetleri İncele
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-bold text-xs">✓</span>
              </div>
              <span>500+ Proje</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">✓</span>
              </div>
              <span>10+ Yıl Deneyim</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-bold text-xs">✓</span>
              </div>
              <span>%100 Memnuniyet</span>
            </div>
          </div>
        </div>

        {/* Large centered carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 aspect-video bg-gray-900">
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
                    alt={`Proje ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay={index === current}
                    ref={(el) => {
                      if (el) {
                        if (index === current) el.play().catch(() => {})
                        else el.pause()
                      }
                    }}
                  />
                )}
              </div>
            ))}

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Prev/Next */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-white shadow-lg transition-all duration-200 cursor-pointer"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-white shadow-lg transition-all duration-200 cursor-pointer"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer
                    ${index === current
                      ? 'w-10 bg-white'
                      : 'w-2.5 bg-white/50 hover:bg-white/80'
                    }`}
                  aria-label={`Medya ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Decorative accents */}
          <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="absolute -z-10 -bottom-4 -left-4 w-28 h-28 rounded-2xl bg-accent/20 blur-sm" />
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#hizmetler" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" aria-label="Aşağı kaydır">
        <span className="text-xs font-medium">Keşfet</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}
