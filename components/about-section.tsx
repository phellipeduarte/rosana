"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Video } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export function AboutSection() {

  const folder = "/profile"

  const images = [
    {
      src: `${folder}/profile-1.jpg`,
      alt: "Rosana Moreira - Foto 1"
    },
    {
      src: `${folder}/profile-2.jpg`,
      alt: "Rosana Moreira - Foto 2"
    },
    {
      src: `${folder}/profile-3.jpg`,
      alt: "Rosana Moreira - Foto 3"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const slideDuration = 10000
  const increment = 100 / (slideDuration / 100)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          setCurrentIndex((current) => (current + 1) % images.length)
          return 0
        }
        return prev + (100 / (slideDuration / 100))
      })
    }, 100)

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setProgress(0)
  }

  return (
    <section id="sobre" className="py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
            {/* Images */}
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src || "/placeholder.svg"}
                width={1920}
                height={1080}
                alt={image.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            ))}

            {/* Progress bars overlay */}
            <div className="absolute top-4 left-4 right-4 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="flex-1 h-1 bg-white/30 backdrop-blur-sm rounded-full overflow-hidden cursor-pointer hover:bg-white/40 transition-colors"
                  aria-label={`Ir para foto ${index + 1}`}
                >
                  <div
                    className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                    style={{
                      width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%'
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-4 right-4 bg-foreground/60 backdrop-blur-sm text-background px-3 py-1.5 rounded-full text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">Sobre mim</h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80 text-justify">
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
                <a href="#contato">Agendar sessão</a>
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-lg bg-transparent" asChild>
                <a href="#servicos">Saiba como posso te ajudar</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
