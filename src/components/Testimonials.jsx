import { useState, useEffect } from 'react'

function Testimonials() {
  const slides = [
    {name:'Andreea M.', text:'Am fost impresionată de atenția la detalii și de atmosfera relaxată. Rezultatul? Un zâmbet pe care îl ador!'},
    {name:'Radu P.', text:'Echipa a fost profesionistă și empatică. Fără durere, fără stres.'},
    {name:'Ioana T.', text:'Recomand oricui își dorește un zâmbet natural și o experiență fără frică.'},
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-24" id="testimoniale">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723]">Ce spun pacienții noștri</h2>
        <p className="text-[#3E2723]/70 mt-2">Recenzii verificate Google</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {slides.map((s, i) => (
            <div key={s.name} className={`rounded-2xl border border-[#3E2723]/10 bg-white p-6 text-left transition-all ${i===index? 'shadow-lg ring-1 ring-[#4FC3C1]/30' : ''}`}>
              <div className="text-[#4FC3C1] text-lg mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-[#3E2723] mb-4">“{s.text}”</p>
              <div className="text-[#3E2723]/80 font-medium">{s.name}</div>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 mt-6 text-xs text-[#3E2723]/70 bg-white px-3 py-1 rounded-full border border-[#3E2723]/10">Verified Google Reviews</div>
      </div>
    </section>
  )
}

export default Testimonials
