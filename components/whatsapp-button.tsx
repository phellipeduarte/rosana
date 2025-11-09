import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
    const whatsappNumber = "5532991666322"
    const message = encodeURIComponent("Olá, eu gostaria de começar a fazer terapia!")
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            aria-label="Contato via WhatsApp"
        >
            <MessageCircle className="h-7 w-7" />
        </a>
    )
}