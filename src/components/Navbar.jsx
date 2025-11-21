import { useState, useEffect } from 'react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${isScrolled ? 'shadow-md' : 'shadow-sm'} bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="cursor-pointer text-[#3E2723] font-semibold text-lg">
            Dentissimo <span className="text-[#4FC3C1]">Smile</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#3E2723]">
            <button onClick={() => scrollToId('servicii')} className="hover:text-[#4FC3C1] transition-colors">Servicii</button>
            <button onClick={() => scrollToId('despre-noi')} className="hover:text-[#4FC3C1] transition-colors">Despre noi</button>
            <button onClick={() => scrollToId('testimoniale')} className="hover:text-[#4FC3C1] transition-colors">Testimoniale</button>
            <button onClick={() => scrollToId('contact')} className="hover:text-[#4FC3C1] transition-colors">Contact</button>
          </nav>
          <div className="hidden md:block">
            <button onClick={() => scrollToId('cta-final')} className="rounded-full bg-[#4FC3C1] text-white px-5 py-2 font-medium hover:bg-teal-500 transition-colors shadow-sm">
              Programează-te acum
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
