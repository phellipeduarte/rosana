"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide/show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      // Add background when scrolled
      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#modalidades", label: "Modalidades" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
    { href: "#contato", label: "Contato" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"
        } ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, "#")} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-primary text-xl font-bold">&</span>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-bold text-lg leading-tight">rosana moreira</span>
              <span className="text-foreground/60 text-xs">Psicóloga Clínica</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector("#contato")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
            >
              Agendar sessão
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm px-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  setIsMobileMenuOpen(false)
                  const element = document.querySelector("#contato")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg w-full"
              >
                Agendar sessão
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
