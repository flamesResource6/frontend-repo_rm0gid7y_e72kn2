function WhyUs() {
  const items = [
    {title:'Fără durere', desc:'Tratamente moderne, complet confortabile.'},
    {title:'Rezultate naturale', desc:'Estetică și funcționalitate în armonie.'},
    {title:'Echipă empatică', desc:'Medici care ascultă și înțeleg.'},
    {title:'Tehnologie 3D modernă', desc:'Precizie și siguranță în fiecare pas.'},
  ]
  return (
    <section className="py-24" id="despre-noi">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-8">De ce pacienții aleg Dentissimo</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((it) => (
              <div key={it.title} className="rounded-2xl border border-[#3E2723]/10 bg-white p-6">
                <div className="w-10 h-10 rounded-full bg-[#4FC3C1]/15 flex items-center justify-center mb-3">
                  <span className="w-2 h-2 bg-[#4FC3C1] rounded-full"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#3E2723]">{it.title}</h3>
                <p className="text-[#3E2723]/70">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#3E2723]/10 bg-white">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop" alt="Doctor principal" className="h-full w-full object-cover"/>
          </div>
          <p className="text-[#3E2723]/80 text-sm">„Peste 15 ani de experiență în stomatologie modernă.”</p>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
