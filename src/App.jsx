import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import Process from './components/sections/Process'
import CTABand from './components/sections/CTABand'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen theme-transition" style={{ backgroundColor: 'var(--bg-body)' }}>
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <CTABand />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
