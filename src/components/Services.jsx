function Services() {
  const items = [
    {title:'Implant dentar',desc:'Soluție durabilă pentru un zâmbet complet.'},
    {title:'Fațete dentare',desc:'Perfecțiune estetică pentru dinți naturali.'},
    {title:'Albire profesională',desc:'Strălucire vizibilă după prima ședință.'},
    {title:'Ortodonție',desc:'Zâmbet armonios cu aparate moderne și discrete.'},
    {title:'Igienizare profesională',desc:'Curățare completă, fără disconfort.'},
    {title:'Urgențe dentare',desc:'Intervenții rapide, fără durere.'},
  ]
  return (
    <section className="py-24" id="servicii">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723]">Tratamentele noastre principale</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-[#3E2723]/10 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="h-40 rounded-xl bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mb-4 opacity-90"></div>
              <h3 className="text-xl font-semibold text-[#3E2723] mb-1">{it.title}</h3>
              <p className="text-[#3E2723]/70">{it.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#servicii" className="text-[#3E2723] hover:text-[#4FC3C1] font-medium">Vezi toate tratamentele →</a>
        </div>
      </div>
    </section>
  )
}

export default Services
