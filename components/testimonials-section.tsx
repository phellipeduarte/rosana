import { Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    text: "Rosana me ajudou a enxergar novas perspectivas em um momento muito difícil. Sua escuta acolhedora fez toda a diferença.",
    author: "Paciente, 32 anos",
  },
  {
    text: "As sessões foram fundamentais para meu crescimento pessoal. Recomendo de coração.",
    author: "Paciente, 45 anos",
  },
  {
    text: "Encontrei no consultório um espaço seguro para falar sobre minhas angústias. A terapia transformou minha vida.",
    author: "Paciente, 28 anos",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">Depoimentos</h2>
          <p className="text-lg leading-relaxed text-foreground/80 max-w-2xl mx-auto">
            Veja o que alguns pacientes compartilham sobre sua experiência terapêutica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 relative">
              <Quote className="w-8 h-8 text-accent/40 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <p className="text-sm text-muted-foreground font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="w-full sm:w-auto rounded-lg" asChild>
            <a href="#contato">Agendar consulta</a>
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-lg bg-transparent" asChild>
            <a href="#sobre">Saiba mais sobre meu método de trabalho</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
