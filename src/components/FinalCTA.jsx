function FinalCTA() {
  return (
    <section className="py-24 bg-[#FAFAF8]" id="cta-final">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-3">Pregătit pentru un zâmbet fără griji?</h2>
          <p className="text-[#3E2723]/80 mb-6">Completează formularul și te contactăm în câteva minute.</p>
          <a href="#contact" className="rounded-full bg-[#4FC3C1] text-white px-6 py-3 font-semibold hover:bg-teal-500 transition-colors shadow-md inline-block">Programează-te acum</a>
          <p className="mt-3 text-sm text-[#3E2723]/70">⭐ 4.9/5 rating Google · 300+ pacienți fericiți · Programare rapidă</p>
        </div>
        <div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#3E2723]/10 bg-white">
            <img src="https://images.unsplash.com/photo-1600721187850-c944924fd48a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYWNpZW50JTIwZmVyaWNpdHxlbnwwfDB8fHwxNzYzNzE5NzY0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Pacient fericit" className="h-full w-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
