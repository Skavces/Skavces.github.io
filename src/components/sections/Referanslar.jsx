import AnimatedContent from '../reactbits/AnimatedContent'
import GradientText from '../reactbits/GradientText'
import { useTheme } from '../../context/useTheme'

const references = [
  { name: 'Albayrak', logo: 'albayrak.png' },
  { name: 'Bizim Yem', logo: 'bizimyem.png' },
  { name: 'Gezgin Enerji', logo: 'gezginenerji.png' },
  { name: 'Halkbank', logo: 'halkbank.png' },
  { name: 'La Bella', logo: 'labella.png' },
  { name: 'Mert Civata', logo: 'mert-civata-logo.png' },
  { name: 'Saloni', logo: 'saloni.png' },
  { name: 'Sun Tekstil', logo: 'suntekstil.png' },
  { name: 'Wolfex', logo: 'wolfex.png' },
  { name: 'Hasan Atak', logo: 'hasanatak.webp'}
]

export default function Referanslar() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="referanslar" className="relative min-h-screen flex flex-col justify-center py-20">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] ${isDark ? 'bg-primary/5' : 'bg-primary/3'}`} />
        <div className={`absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px] ${isDark ? 'bg-accent/5' : 'bg-accent/4'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="text-accent text-sm font-medium">Referanslar</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              <GradientText colors={isDark ? ['#fff', '#7FBF3A', '#fff'] : ['#0f172a', '#7FBF3A', '#0f172a']} animationSpeed={6}>
                Referanslarımız
              </GradientText>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Bize güvenen ve birlikte çalıştığımız sektörün öncü markaları.
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-accent to-primary mx-auto" />
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 justify-items-center items-center">
          {references.map((ref, index) => (
            <AnimatedContent
              key={ref.name}
              distance={30}
              duration={0.5}
              delay={index * 0.1}
            >
              <div
                className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl backdrop-blur-sm theme-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.5)' }}
                title={ref.name}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${ref.logo}`}
                  alt={`${ref.name} Logosu`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
