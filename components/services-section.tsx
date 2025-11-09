import { Button } from "@/components/ui/button"
import { Heart, Brain, Users, Hourglass, Timer, Flower2 } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Ansiedade",
    description: "Apoio para lidar com preocupação excessiva, tensão e sintomas físicos da ansiedade.",
  },
  {
    icon: Flower2,
    title: "Depressão",
    description: "Acolhimento sensível às suas emoções, buscando estratégias para retomar a motivação.",
  },
  {
    icon: Timer,
    title: "Autocobrança",
    description: "Reconhecimento de padrões de autocrítica, ansiedade e estresse e desenvolvimento de formas mais saudáveis de enfrentá-los.",
  },
  {
    icon: Heart,
    title: "Autoconfiança",
    description: "Desenvolvimento de recursos internos para fortalecer a autoestima e segurança pessoal.",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    description: "Compreensão de padrões relacionais e construção de vínculos mais saudáveis.",
  },
  {
    icon: Hourglass,
    title: "Procrastinação",
    description: "Identificação dos motivos de procrastinação e desenvolvimento de novas habilidades para superá-la de maneira equilibrada",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-8 md:py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">Como posso te ajudar</h2>
          <p className="text-lg leading-relaxed text-foreground/80 max-w-3xl mx-auto">
            O espaço terapêutico é um convite para se conhecer melhor e desenvolver recursos internos para lidar com os
            desafios da vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border/50"
            >
              <service.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="w-full sm:w-auto rounded-lg" asChild>
            <a href="#contato">Agendar uma conversa inicial</a>
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-lg bg-transparent" asChild>
            <a href="#modalidades">Saiba mais sobre os atendimentos</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
