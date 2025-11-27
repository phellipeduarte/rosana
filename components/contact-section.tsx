"use client"

import { FormEvent } from "react";
import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    modality: "individual",
    message: "",
  })

  const whatsappNumber = "5532991666322"
  const message = encodeURIComponent("Olá, eu gostaria de começar a fazer terapia!")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.message === "OK") {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          modality: "online",
          message: "",
        });

        setTimeout(() => setStatus("idle"), 10000);
      } else {
        setStatus("error");
      }
    } catch (err: any) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 10000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="py-8 md:py-16 px-4 bg-primary/15">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">Agende sua sessão</h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            Entre em contato para marcar uma sessão ou tirar suas dúvidas.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 mt-2">
            Sua jornada de cuidado com a mente e as emoções pode começar <span className="font-bold text-primary">hoje</span>.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 md:p-12 rounded-2xl shadow-lg space-y-6 border border-border/50"
          >
            {status === "success" && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <Check className="h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Obrigada pelo contato!</p>
                  <p className="text-sm">Recebemos sua mensagem e entraremos em contato em breve.</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                <X className="h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Não foi possível enviar sua mensagem</p>
                  <p className="text-sm">Por favor, tente novamente ou entre em contato pelo WhatsApp.</p>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Modalidade de atendimento</Label>
              <RadioGroup
                value={formData.modality}
                onValueChange={(value) => setFormData({ ...formData, modality: value })}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="individual" id="individual" />
                  <Label htmlFor="individual" className="font-normal cursor-pointer">
                    Individual
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="casal" id="casal" />
                  <Label htmlFor="casal" className="font-normal cursor-pointer">
                    Casal
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="bg-background resize-none"
                placeholder="Conte um pouco sobre o que você gostaria de trabalhar na terapia..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-lg" disabled={loading}>
              {loading ? "Enviando..." : "Agendar agora"}
            </Button>

            <Button
              type="button"
              size="lg"
              variant="secondary"
              className="w-full text-lg sm:py-6 rounded-lg bg-transparent whitespace-normal text-center py-10"
              asChild
            >
              <a href={whatsappUrl} target="_blank">Saiba mais sobre os horários disponíveis</a>
            </Button>
          </form>

          <div className="md:block relative rounded-2xl overflow-hidden">
            <Image
              src="/profile/contact.jpg"
              alt="Psicóloga acolhendo paciente"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-contrast/20 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 text-white items-stretch">
              <div className="bg-contrast/70 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <p className="text-lg font-semibold mb-2">Estou aqui para te acolher</p>
                <p className="text-sm leading-relaxed opacity-90">
                  Cada pessoa tem sua história única. Vamos construir juntos um espaço seguro para seu crescimento e
                  bem-estar emocional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
