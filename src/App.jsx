import { ThemeProvider } from './context/ThemeContext'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import Process from './components/sections/Process'
import Referanslar from './components/sections/Referanslar'
import SSS from './components/sections/SSS'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Endüstriyel GES Temizliği ve Otonom Robot Teknolojileri | New Temizlik</title>
        <meta name="description" content="Soma ve çevresinde endüstriyel GES santralleri için minimum verim kaybı, maksimum enerji üretimi sağlayan otonom ve profesyonel mühendislik çözümleri." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-screen theme-transition overflow-x-hidden" style={{ backgroundColor: 'var(--bg-body)' }}>
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Referanslar />
        <SSS />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  )
}

export default App
