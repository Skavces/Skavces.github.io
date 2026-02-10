import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function CTABand() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Green accent line on top */}
      <div className="h-1 bg-gradient-to-r from-accent via-accent/60 to-accent" />

      <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-dark flex-1 flex items-center py-16 md:py-24 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3" />
          <svg className="absolute right-20 top-1/2 -translate-y-1/2 w-64 h-64 text-white/5" viewBox="0 0 200 200">
            <path d="M20,100 Q100,20 180,100" stroke="currentColor" strokeWidth="60" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hemen Teklif İsteyin
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Ücretsiz keşif ve fiyat teklifi için bizimle iletişime geçin.
            Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="#iletisim"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              İletişime Geç
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              href="tel:+905001234567"
              variant="ghost"
              size="lg"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              📞 Hemen Ara
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
