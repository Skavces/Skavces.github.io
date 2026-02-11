import { ArrowRight } from 'lucide-react'
import GradientText from '../reactbits/GradientText'
import AnimatedContent from '../reactbits/AnimatedContent'
import { useTheme } from '../../context/useTheme'

export default function CTABand() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="relative py-20 md:py-28">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 ${isDark ? 'bg-primary/20' : 'bg-primary/10'}`} />
          <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 ${isDark ? 'bg-accent/15' : 'bg-accent/8'}`} />
          <div
            className="absolute inset-0"
            style={{
              background: isDark
                ? 'linear-gradient(to bottom, #0a0e1a, rgba(31,110,199,0.1), #0a0e1a)'
                : 'linear-gradient(to bottom, transparent, rgba(31,110,199,0.05), transparent)'
            }}
          />
        </div>

        {/* Border lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedContent distance={40} duration={0.7}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
              <GradientText
                colors={isDark ? ['#fff', '#1F6EC7', '#7FBF3A', '#fff'] : ['#0f172a', '#1F6EC7', '#7FBF3A', '#0f172a']}
                animationSpeed={5}
              >
                Hemen Teklif İsteyin
              </GradientText>
            </h2>
          </AnimatedContent>

          <AnimatedContent distance={30} duration={0.6} delay={0.2}>
            <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Ücretsiz keşif ve fiyat teklifi için bizimle iletişime geçin.
              Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
            </p>
          </AnimatedContent>

          <AnimatedContent distance={20} duration={0.5} delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#iletisim"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl
                  bg-linear-to-r from-primary to-primary-dark text-white font-semibold text-lg
                  shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40
                  hover:-translate-y-1 transition-all duration-300"
              >
                İletişime Geç
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+905001234567"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg
                  hover:-translate-y-1 transition-all duration-300"
                style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
              >
                📞 Hemen Ara
              </a>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
