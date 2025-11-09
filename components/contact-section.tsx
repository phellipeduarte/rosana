"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    modality: "online",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contato" className="py-8 md:py-16 px-4 bg-primary/15">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">Agende sua consulta</h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            Entre em contato para marcar uma sessão ou tirar suas dúvidas.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 mt-2">
            Sua jornada de cuidado com a mente e as emoções pode começar hoje.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card p-8 md:p-12 rounded-2xl shadow-lg space-y-6 border border-border/50"
        >
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
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online" className="font-normal cursor-pointer">
                  Online
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="presencial" id="presencial" />
                <Label htmlFor="presencial" className="font-normal cursor-pointer">
                  Presencial
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

          <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-lg">
            Agendar agora
          </Button>

          <Button
            type="button"
            size="lg"
            variant="secondary"
            className="w-full text-lg py-6 rounded-lg bg-transparent text-wrap whitespace-normal text-center py-10 sm:py-2"
            asChild
          >
            <a href="#faq">Saiba mais sobre os horários disponíveis</a>
          </Button>
        </form>
      </div>
    </section>
  )
}
