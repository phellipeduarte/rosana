import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Video } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre" className="py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/profile.jpg"
                width={1920}
                height={1080}
                alt="Consultório de psicologia com ambiente acolhedor"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">Sobre mim</h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>
                Sou Rosana Moreira, psicóloga clínica há 20 anos, especialista em Terapias Cognitivas e Terapia do Esquema.
                Atendo jovens, adultos e casais, com uma escuta empática e acolhedora, focada no equilíbrio emocional e autoconhecimento.
                Minha prática busca promover transformações positivas por meio das Terapias Cognitivas.
              </p>
              <p>Você não precisa dar conta de tudo sozinho!</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6 mb-8">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-normal bg-accent/20 text-accent-foreground border border-accent/30"
              >
                <Brain className="w-4 h-4 mr-2" />
                TCC — Terapia Cognitivo-Comportamental
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-normal bg-primary/10 text-primary border border-primary/20"
              >
                <Video className="w-4 h-4 mr-2" />
                Atendimento online
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto rounded-lg" asChild>
                <a href="#contato">Agendar consulta</a>
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-lg bg-transparent" asChild>
                <a href="#sobre">Saiba mais sobre minha trajetória</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
