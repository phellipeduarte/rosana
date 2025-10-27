import { Monitor, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModalitiesSection() {
  return (
    <section id="modalidades" className="py-20 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-8 text-balance">
          Atendimento online e presencial
        </h2>

        <p className="text-lg text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
          Você pode escolher entre sessões online, realizadas por videochamada, ou presenciais em um ambiente tranquilo
          e reservado.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50">
            <Monitor className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-bold text-2xl text-foreground mb-3">Online</h3>
            <p className="text-foreground/70 leading-relaxed">
              Sessões realizadas por videochamada, com conforto e praticidade de qualquer lugar.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50">
            <Home className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-bold text-2xl text-foreground mb-3">Presencial</h3>
            <p className="text-foreground/70 leading-relaxed">Atendimento em ambiente tranquilo e reservado.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="rounded-lg" asChild>
            <a href="#contato">Agendar sessão</a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-lg bg-transparent" asChild>
            <a href="#faq">Saiba mais sobre como funciona</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
