import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Clock, Video } from "lucide-react"
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          className="sm:hidden w-full h-full object-cover"
          src="/living-room.jpg"
          width={1920}
          height={1080}
          alt="Consultório de psicologia com ambiente acolhedor"
        />
        <Image
          className="hidden sm:block w-full h-full object-cover"
          src="/living-room.jpg"
          width={1920}
          height={1080}
          alt="Consultório de psicologia com ambiente acolhedor"
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-bold text-3xl md:text-6xl lg:text-7xl text-foreground mb-4 text-balance">
          Rosana Moreira Psicóloga Clínica
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 text-balance leading-relaxed">
          Acolhimento, escuta e cuidado para o seu bem-estar emocional.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-3 mb-8">
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-normal bg-card/90 text-foreground border border-border"
          >
            <Award className="w-4 h-4 mr-2" />
            CRP 04/24000
          </Badge>
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-normal bg-card/90 text-foreground border border-border"
          >
            <Clock className="w-4 h-4 mr-2" />
            20 anos de formação
          </Badge>
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-normal bg-card/90 text-foreground border border-border"
          >
            <Video className="w-4 h-4 mr-2" />
            Atendimento online
          </Badge>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-lg" asChild>
            <a href="#contato">Agendar sessão</a>
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-6 rounded-lg bg-card/80 hover:bg-card" asChild>
            <a href="#sobre">Saiba mais</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
