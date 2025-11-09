import { Mail, Instagram, Phone } from "lucide-react"

export function Footer() {
  const whatsappNumber = "5532991666322"
  const message = encodeURIComponent("Olá, eu gostaria de começar a fazer terapia!")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <footer className="bg-foreground/5 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <span className="text-2xl text-accent-foreground font-serif">&</span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">rosana moreira</h3>
              </div>
            </div>
            <p className="text-foreground/70">Psicóloga Clínica</p>
            <p className="text-sm text-foreground/60 mt-2">CRP 04/24000</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-foreground/70 hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="text-foreground/70 hover:text-primary transition-colors">
                Atendimento
              </a>
              <a href="#depoimentos" className="text-foreground/70 hover:text-primary transition-colors">
                Depoimentos
              </a>
              <a href="#contato" className="text-foreground/70 hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href={whatsappUrl}
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/rosanapmoreira.psi/"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:rosana.rpmjf@hotmail.com"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>E-mail</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-foreground/60">© 2025 Rosana Moreira — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
