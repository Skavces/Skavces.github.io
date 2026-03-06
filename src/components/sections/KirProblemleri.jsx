import AnimatedContent from '../reactbits/AnimatedContent'
import GradientText from '../reactbits/GradientText'
import CountUp from '../reactbits/CountUp'
import { useTheme } from '../../context/useTheme'

const stats = [
  { value: 30, prefix: '%', label: 'Verim Kaybı', sub: 'Temizlenmeyen panellerde' },
  { value: 40, prefix: '%', label: 'Daha Hızlı Kirlenme', sub: 'Tarım & sanayi bölgelerinde' },
  { value: 2, suffix: 'x', label: 'Yıllık Temizlik', sub: 'Önerilen minimum sıklık' },
]

export default function KirProblemleri() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="kir-problemleri"
      className="relative min-h-screen flex flex-col justify-center py-24 md:py-32 scroll-mt-16 md:scroll-mt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-[120px] ${isDark ? 'bg-primary/5' : 'bg-primary/3'}`} />
        <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] ${isDark ? 'bg-accent/5' : 'bg-accent/3'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimatedContent distance={40} duration={0.7}>
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}
            >
              <span className="text-primary text-sm font-medium">Panel Kirliliği</span>
            </div>
            <h2
              id="kir-problemleri-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              <GradientText
                colors={isDark ? ['#fff', '#94a3b8', '#fff'] : ['#0f172a', '#1F6EC7', '#0f172a']}
                animationSpeed={6}
              >
                GES Panel Kirlilik Rehberi
              </GradientText>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Panel kirlenmenin nedenleri, sonuçları ve profesyonel temizlik yöntemleri.
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-primary to-accent mx-auto" />
          </div>
        </AnimatedContent>

        {/* Stats */}
        <AnimatedContent distance={40} duration={0.7} delay={0.1}>
          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-14">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-5 md:p-6 rounded-2xl backdrop-blur-sm theme-card flex flex-col justify-center gap-2">
                <p className="text-sm md:text-base font-semibold" style={{ color: 'var(--text-primary)' }}>{stat.sub}</p>
                <div className="text-3xl md:text-4xl font-extrabold text-primary">
                  <CountUp to={stat.value} duration={2.5} delay={0.3} suffix={stat.suffix} prefix={stat.prefix} className="tabular-nums" />
                </div>
                <p className="text-sm md:text-base font-semibold" style={{ color: 'var(--text-primary)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedContent>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">

          {/* Kir Problemleri */}
          <AnimatedContent distance={30} duration={0.6} delay={0}>
            <div
              className="rounded-2xl p-6 md:p-7 h-full transition-all duration-300 theme-card"
              style={{ borderTop: '3px solid var(--color-primary)' }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Kir Problemleri
              </h3>
              <div className="space-y-3 text-[15px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <p>
                  GES panellerinde oluşan kirlenme, enerji üretimini doğrudan etkileyen önemli bir problemdir. Özellikle <strong style={{ color: 'var(--text-secondary)' }}>tozlu bölgelerde ve tarım arazilerine yakın santrallerde</strong> kirlenme daha hızlı gerçekleşir.
                </p>
                <p>
                  Yağmurla birleşen kir tabakası zamanla panel yüzeyine yapışarak ışık geçirgenliğini ciddi şekilde azaltır.
                </p>
                <p>
                  Uzun süre temizlenmeyen panellerde <strong style={{ color: 'var(--text-secondary)' }}>düzensiz ısınma (hot-spot)</strong> ve hücre hasarları oluşabilir. Bu durum hem enerji kaybına hem de panel ömrünün kısalmasına neden olur.
                </p>
                <p>
                  Düzenli GES panel temizliği, bu riskleri ortadan kaldırarak santralinizin güvenli ve verimli çalışmasını sağlar.
                </p>
              </div>
            </div>
          </AnimatedContent>

          {/* Neden Yıkanmalı */}
          <AnimatedContent distance={30} duration={0.6} delay={0.1}>
            <div
              className="rounded-2xl p-6 md:p-7 h-full transition-all duration-300 theme-card"
              style={{ borderTop: '3px solid var(--color-accent)' }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Neden Yıkanmalı?
              </h3>
              <div className="space-y-3 text-[15px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <p>
                  GES panel temizliği, güneş enerji santrallerinde <strong style={{ color: 'var(--text-secondary)' }}>maksimum enerji verimliliği</strong> sağlamak için kritik bir bakım sürecidir. Panellerde biriken toz, kir, polen ve kuş pisliği, güneş ışığının panele ulaşmasını engeller.
                </p>
                <p>
                  Düzenli temizlik sayesinde <strong style={{ color: 'var(--text-secondary)' }}>%30&apos;a varan verim kayıplarının önüne geçilir.</strong> Temiz paneller, santralinizin tam kapasite çalışmasını sağlar ve yatırım geri dönüş süresini kısaltır.
                </p>
                <p>
                  Ayrıca düzenli bakım, ekipman ömrünü uzatarak uzun vadede işletme maliyetlerini azaltır.
                </p>
              </div>
            </div>
          </AnimatedContent>

          {/* Nasıl Temizlenmeli */}
          <AnimatedContent distance={30} duration={0.6} delay={0.2}>
            <div
              className="rounded-2xl p-6 md:p-7 h-full transition-all duration-300 theme-card"
              style={{ borderTop: '3px solid var(--color-primary)' }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Nasıl Temizlenmeli?
              </h3>
              <div className="space-y-3 text-[15px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <p>
                  Profesyonel panel temizliği, panellere zarar vermeden yapılan özel uygulamalarla gerçekleştirilmelidir. <strong style={{ color: 'var(--text-secondary)' }}>Saf su</strong> kullanılarak yapılan temizlik, panel yüzeyinde kireç ve leke oluşumunu önler.
                </p>
                <p>
                  <strong style={{ color: 'var(--text-secondary)' }}>Yumuşak fırçalar ve otomatik temizlik sistemleri</strong> sayesinde panellerin cam yüzeyi ve hücre yapısı korunur.
                </p>
                <p>
                  Temizlik işlemi genellikle sabah erken saatlerde veya akşam serinliğinde yapılır. Bu sayede hem güvenli hem de etkili bir temizlik sağlanır.
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>
        
      </div>
    </section>
  )
}
