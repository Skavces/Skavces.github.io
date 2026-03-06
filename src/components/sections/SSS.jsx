import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimatedContent from '../reactbits/AnimatedContent'
import GradientText from '../reactbits/GradientText'
import { useTheme } from '../../context/useTheme'

const faqs = [
  {
    question: 'Hangi bölgelere hizmet veriyorsunuz?',
    answer: 'Başta Soma/Manisa olmak üzere çevre illere profesyonel temizlik hizmeti sunmaktayız. Büyük projeler için Türkiye genelinde hizmet sağlamaktayız.',
  },
  {
    question: 'Güneş paneli temizliği ne sıklıkla yapılmalıdır?',
    answer: 'Bulunduğunuz bölgenin toz, polen ve çevre kirliliği durumuna göre değişmekle birlikte, panellerin maksimum verimde çalışması için yılda en az 2 kez (tercihen ilkbahar ve sonbahar aylarında) profesyonel temizlik önerilmektedir.',
  },
  {
    question: 'Temizlikte kullandığınız ürünler ve ekipmanlar nelerdir?',
    answer: 'Tüm temizlik süreçlerimizde yüzeye zarar vermeyen, doğa dostu özel solüsyonlar ve son teknoloji robotik sistemler ile deiyonize (saf su) üreten makineler kullanıyoruz. Bu sayede panellerde kireç veya leke kalmaz.',
  },
  {
    question: 'Hizmetleriniz garantili mi?',
    answer: 'Evet, tüm panel temizliği, periyodik bakım ve sunduğumuz diğer endüstriyel çözümler firmamızın garantisi altındadır. Memnuniyetiniz bizim için önceliktir.',
  },
  {
    question: 'Fiyatlandırma nasıl yapılıyor?',
    answer: 'Fiyatlandırmamız panel sayısı, çatı veya arazinin durumu, kirlilik derecesi ve periyodik anlaşma gibi faktörlere bağlı olarak değişiklik göstermektedir. Detaylı ve adil bir fiyat teklifi için ücretsiz keşif talep edebilirsiniz.',
  }
]

export default function SSS() {
  const [openIndex, setOpenIndex] = useState(null)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="sss" className="relative min-h-screen flex flex-col justify-center py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-40 right-10 w-[400px] h-[400px] rounded-full blur-[120px] ${isDark ? 'bg-primary/5' : 'bg-primary/5'}`} />
        <div className={`absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] ${isDark ? 'bg-accent/5' : 'bg-accent/5'}`} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}>
              <span className="text-primary text-sm font-medium">S.S.S</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              <GradientText colors={isDark ? ['#fff', '#94a3b8', '#fff'] : ['#0f172a', '#1F6EC7', '#0f172a']} animationSpeed={6}>
                Sıkça Sorulan Sorular
              </GradientText>
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-primary to-accent mx-auto" />
          </div>
        </AnimatedContent>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedContent
                key={index}
                distance={30}
                duration={0.5}
                delay={index * 0.1}
              >
                <div 
                  className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'ring-2 ring-primary/30' : ''}`}
                  style={{ 
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: isOpen ? '0 10px 30px -10px var(--shadow-color)' : '0 4px 15px -10px var(--shadow-color)'
                  }}
                  onClick={() => toggleQuestion(index)}
                >
                  <div
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-hidden select-none"
                  >
                    <h3 className="text-lg md:text-xl font-semibold pr-8" style={{ color: 'var(--text-primary)' }}>
                      {faq.question}
                    </h3>
                    <div 
                      className={`shrink-0 transition-transform duration-300 flex items-center justify-center rounded-full p-2
                        ${isOpen ? 'bg-primary text-white rotate-180' : ''}`}
                      style={!isOpen ? { background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)', color: 'var(--text-muted)' } : {}}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out px-5 md:px-6
                      ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                  >
                    <p className="leading-relaxed border-t border-gray-500/20 pt-4 mt-2" style={{ color: 'var(--text-muted)' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  )
}
