"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

const funPhrases = ["Beep boop!", "Hello there!", "Coffee time?", "Let's code!", "*happy noises*", "01001000 01101001"]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoClicks, setLogoClicks] = useState(0)
  const [funPhrase, setFunPhrase] = useState("")
  const [isWiggling, setIsWiggling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setLogoClicks((prev) => prev + 1)
    setIsWiggling(true)
    setFunPhrase(funPhrases[Math.floor(Math.random() * funPhrases.length)])

    setTimeout(() => {
      setIsWiggling(false)
      setFunPhrase("")
    }, 2000)

    const element = document.querySelector("#home")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={handleLogoClick}
              className={`flex items-center group relative ${isWiggling ? "animate-wiggle" : ""}`}
            >
              <div className="relative">
                <Image
                  src="/logo.avif"
                  alt="Compeller Logo"
                  width={120}
                  height={30}
                  className={`transition-all duration-300 group-hover:scale-105 ${logoClicks >= 5 ? "animate-rainbow" : ""}`}
                />
                <div className="absolute inset-0 bg-[#FF6B6B]/10 blur-xl group-hover:bg-[#4ECDC4]/10 transition-colors duration-300" />
              </div>

              {/* Fun phrase popup */}
              {funPhrase && (
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-[#FFAB4C] font-mono whitespace-nowrap animate-fade-in">
                  {funPhrase}
                </span>
              )}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-[#E4E4E7] hover:text-white transition-colors duration-300 group hover-rubber"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="relative overflow-hidden bg-gradient-to-r from-[#FF6B6B] to-[#FFAB4C] hover:from-[#FF6B6B]/90 hover:to-[#FFAB4C]/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,107,0.5)] active:animate-pop"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover-spin-wobble z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 backdrop-blur-md bg-[#0A0A0F]/80 transition-all duration-300">
          <div className="flex flex-col items-center justify-center h-full gap-8 p-8 pt-24">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl text-[#E4E4E7] hover:text-white transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="bg-gradient-to-r from-[#FF6B6B] to-[#FFAB4C] text-white font-semibold px-8 py-3 rounded-lg active:animate-pop"
              onClick={() => {
                const element = document.querySelector("#contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
                setIsMobileMenuOpen(false)
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
