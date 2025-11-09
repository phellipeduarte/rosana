"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o atendimento online?",
    answer:
      "O atendimento online é realizado por videochamada em plataforma segura e confidencial. Você precisa apenas de um dispositivo com câmera e internet estável. As sessões têm a mesma qualidade e efetividade do atendimento presencial.",
  },
  {
    question: "Qual é a duração das sessões?",
    answer:
      "Cada sessão tem duração de 50 minutos. A frequência é geralmente semanal, mas pode ser ajustada conforme a necessidade de cada paciente e a avaliação clínica.",
  },
  {
    question: "O atendimento é sigiloso?",
    answer:
      "Sim, o sigilo é um dos pilares fundamentais da prática psicológica. Todas as informações compartilhadas durante as sessões são estritamente confidenciais, conforme o Código de Ética Profissional do Psicólogo.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Você pode agendar sua primeira sessão através do formulário de contato nesta página, por WhatsApp ou e-mail. Entrarei em contato para confirmar o horário e esclarecer qualquer dúvida.",
  },
  {
    question: "Qual o valor das sessões?",
    answer: "Os valores podem ser informados pelo WhatsApp. Fique à vontade para entrar em contato e saber mais sobre o investimento e as formas de pagamento."
  },
  {
    question: "Preciso de encaminhamento médico?",
    answer:
      "Não é necessário encaminhamento médico para iniciar a psicoterapia. Você pode buscar atendimento psicológico por iniciativa própria sempre que sentir necessidade de apoio emocional.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-8 md:py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">Perguntas Frequentes</h2>
          <p className="text-lg leading-relaxed text-foreground/80">Tire suas dúvidas sobre o processo terapêutico.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl px-6 border border-border/50 shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-lg text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="w-full sm:w-auto rounded-lg" asChild>
            <a href="#contato">Agendar primeira sessão</a>
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-lg bg-transparent" asChild>
            <a href="#servicos">Saiba mais sobre o processo terapêutico</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
