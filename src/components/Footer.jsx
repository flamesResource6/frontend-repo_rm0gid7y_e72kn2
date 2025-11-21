function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        <div>
          <div className="text-[#3E2723] font-semibold text-lg mb-4">Dentissimo <span className="text-[#4FC3C1]">Smile</span></div>
          <ul className="space-y-2 text-[#3E2723]/80">
            <li><a href="#servicii" className="hover:text-[#4FC3C1]">Servicii</a></li>
            <li><a href="#testimoniale" className="hover:text-[#4FC3C1]">Testimoniale</a></li>
            <li><a href="#contact" className="hover:text-[#4FC3C1]">Contact</a></li>
            <li><a href="#" className="hover:text-[#4FC3C1]">Politică de confidențialitate</a></li>
          </ul>
        </div>
        <div className="text-[#3E2723]">
          <div className="space-y-2">
            <div>📍 Adresă: „Bd. Unirii 45, București”</div>
            <div>📞 Telefon: „0723 456 789”</div>
            <div>✉️ Email: „contact@dentissimo.ro”</div>
            <div>🕑 Program: „L–V: 09:00–20:00 · S: 09:00–14:00”</div>
          </div>
          <div className="flex items-center gap-3 mt-4 text-[#3E2723]/80">
            <a href="#" className="hover:text-[#4FC3C1]">Facebook</a>
            <a href="#" className="hover:text-[#4FC3C1]">Instagram</a>
            <a href="#" className="hover:text-[#4FC3C1]">WhatsApp</a>
            <a href="#" className="hover:text-[#4FC3C1]">YouTube</a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-[#3E2723]/10 pt-6 text-center text-sm text-[#3E2723]/70">
        © 2025 Dentissimo Smile · Toate drepturile rezervate.
      </div>
    </footer>
  )
}

export default Footer
