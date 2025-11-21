function Trust() {
  const logos = [
    'Straumann', 'Invisalign', 'Philips Zoom', 'CNAS', 'Smile Design', '3Shape'
  ]
  return (
    <section className="py-20" id="trust">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3E2723]">Parteneri și certificări</h2>
          <p className="text-[#3E2723]/70 mt-2">Clinică acreditată și parteneri de încredere.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((logo) => (
            <div key={logo} className="h-16 rounded-xl border border-[#3E2723]/10 bg-white flex items-center justify-center text-[#3E2723]/60 font-medium">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trust
