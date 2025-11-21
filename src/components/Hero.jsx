function Hero() {
  return (
    <section className="pt-28 md:pt-32" id="hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#3E2723] mb-6">
            „Zâmbetul tău merită specialiști adevărați.”
          </h1>
          <p className="text-lg md:text-xl text-[#3E2723]/80 mb-6">
            Clinică modernă · Fără durere · Rezultate naturale.
          </p>
          <ul className="space-y-3 text-[#3E2723] mb-8">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#4FC3C1]"></span>Echipă empatică și atentă la detalii</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#4FC3C1]"></span>Tehnologie modernă · Atmosferă relaxantă</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#4FC3C1]"></span>Fără durere</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#4FC3C1]"></span>Programare ușoară și rapidă</li>
          </ul>
          <div className="flex items-center gap-4">
            <a href="#cta-final" className="rounded-full bg-[#4FC3C1] text-white px-6 py-3 font-semibold hover:bg-teal-500 transition-colors shadow">
              Programează o consultație gratuită
            </a>
          </div>
          <p className="mt-3 text-sm text-[#3E2723]/70">⭐ 4.9/5 rating Google · Peste 300 pacienți fericiți</p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#3E2723]/10 bg-white">
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400&auto=format&fit=crop" alt="Medic și pacient zâmbind" className="h-full w-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
