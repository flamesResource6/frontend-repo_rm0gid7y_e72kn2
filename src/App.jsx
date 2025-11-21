import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="space-y-24 md:space-y-28">
        <Hero />
        <Trust />
        <Services />
        <WhyUs />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
