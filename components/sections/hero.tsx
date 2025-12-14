"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const taglines = [
  "Compelling Digital Solutions.",
  "No Bugs, Just Features.",
  "Ctrl+S Your Vision.",
  "git commit -m 'success'",
  "404: Boredom Not Found.",
]

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [currentTagline, setCurrentTagline] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [sparkleClicks, setSparkleClicks] = useState(0)
  const [isSparkleRainbow, setIsSparkleRainbow] = useState(false)

  useEffect(() => {
    const fullText = taglines[currentTagline]

    const typingInterval = setInterval(
      () => {
        if (!isDeleting) {
          if (displayText.length < fullText.length) {
            setDisplayText(fullText.slice(0, displayText.length + 1))
          } else {
            // Wait before deleting
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentTagline((prev) => (prev + 1) % taglines.length)
          }
        }
      },
      isDeleting ? 40 : 80,
    )

    return () => clearInterval(typingInterval)
  }, [displayText, isDeleting, currentTagline])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSparkleClick = () => {
    setSparkleClicks((prev) => prev + 1)
    if (sparkleClicks >= 4) {
      setIsSparkleRainbow(true)
      setTimeout(() => setIsSparkleRainbow(false), 5000)
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-10 text-[#FF6B6B]/20 font-mono text-sm hidden lg:block animate-float hover:text-[#FF6B6B]/60 transition-colors cursor-default">
        {"// TODO: Take over the world"}
      </div>
      <div
        className="absolute bottom-1/3 right-10 text-[#4ECDC4]/20 font-mono text-sm hidden lg:block animate-float hover:text-[#4ECDC4]/60 transition-colors cursor-default"
        style={{ animationDelay: "1s" }}
      >
        {"while(alive) { code(); coffee(); }"}
      </div>
      <div
        className="absolute top-1/2 left-1/4 text-[#FFAB4C]/20 font-mono text-sm hidden lg:block animate-float hover:text-[#FFAB4C]/60 transition-colors cursor-default"
        style={{ animationDelay: "2s" }}
      >
        {"// It works on my machine ¯\\_(ツ)_/¯"}
      </div>
      <div
        className="absolute top-1/3 right-1/4 text-[#4ECDC4]/20 font-mono text-sm hidden lg:block animate-float hover:text-[#4ECDC4]/60 transition-colors cursor-default"
        style={{ animationDelay: "1.5s" }}
      >
        {"sudo make me a sandwich"}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <button
          onClick={handleSparkleClick}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in cursor-pointer hover:scale-105 transition-transform ${isSparkleRainbow ? "animate-rainbow" : ""}`}
        >
          <Sparkles className={`w-4 h-4 text-[#FFAB4C] ${sparkleClicks > 0 ? "animate-bounce-spin" : ""}`} />
          <span className="text-sm text-[#E4E4E7]">
            {sparkleClicks >= 5 ? "You found the secret! 🎉" : "Modern Tech Consultancy"}
          </span>
        </button>

        {/* Main Heading */}
        <div
          className="mb-6 animate-fade-in flex justify-center"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative inline-block hover:animate-jello cursor-default group">
            <Image
              src="/logo.png"
              alt="Compeller"
              width={480}
              height={120}
              className="
        w-full
        max-w-[260px]
        sm:max-w-[320px]
        md:max-w-[400px]
        lg:max-w-[480px]
        h-auto
      "
              priority
            />
            {/* Very subtle glow effect */}
            <div className="absolute inset-0 bg-[#FF6B6B]/5 blur-sm group-hover:bg-[#4ECDC4]/5 transition-colors duration-300" />
          </div>
        </div>


        <div className="h-12 mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-2xl sm:text-3xl md:text-4xl font-mono text-[#E4E4E7]">
            {displayText}
            {showCursor && <span className="text-[#FF6B6B] animate-pulse">|</span>}
          </p>
        </div>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl text-[#71717A] max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Transform your vision into reality with cutting-edge technology solutions. We compile ideas into exceptional
          digital experiences.
        </p>

        {/* CTA Buttons with fun active states */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="relative overflow-hidden bg-gradient-to-r from-[#FF6B6B] to-[#FFAB4C] hover:from-[#FF6B6B]/90 hover:to-[#FFAB4C]/90 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,107,0.5)] active:animate-jello group"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFAB4C] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#services")}
            className="border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4]/10 hover:text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:border-[#FF6B6B] hover:shadow-[0_0_20px_rgba(78,205,196,0.3)] bg-transparent active:animate-pop"
          >
            Explore Services
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#services")}
          className="flex flex-col items-center gap-2 text-[#71717A] hover:text-white transition-colors group"
        >
          <span className="text-sm group-hover:animate-pulse">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>
    </section>
  )
}
