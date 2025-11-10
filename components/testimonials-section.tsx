import { Button } from "@/components/ui/button"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Minha experiência com a Rosana está sendo excepcional! Pena que demorei demais para encontrá-la. Excelente profissional!",
    name: "Giovanna",
  },
  {
    quote: "Confesso que nunca fui muito adepto da terapia, mas com a Rosana descobri o quanto ela é importante para nossa saúde mental. As consultas são leves, tranquilas e o tempo passa voando. Excelente profissional!",
    name: "Victor",
  },

  {
    quote: "Uma profissional excelente, amiga, acolhedora, paciente e de um coração enorme. Sou muito grata por tê lá em minha vida.",
    name: "Jacqueline",
  },
  {
    quote: "Rosana é uma profissional com olhar atento, com fala doces, firmes e precisas.",
    name: "Elaine",
  },
  {
    quote: "A Rosana é muito atenciosa e fácil de se conectar com. Evolui muito no meu autoconhecimento desde que começamos. Além da terapia em si, ela ensina o processo e as armadilhas estudadas na terapia cognitiva comportamental.",
    name: "Isabela",
  }
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">Depoimentos</h2>
          <p className="text-lg leading-relaxed text-foreground/80 max-w-2xl mx-auto">
            Veja o que alguns pacientes compartilham sobre sua experiência terapêutica.
          </p>
        </div>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="w-full sm:w-auto rounded-lg" asChild>
            <a href="#contato">Agendar consulta</a>
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-lg bg-transparent" asChild>
            <a href="#faq">Saiba mais sobre meu método de trabalho</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
