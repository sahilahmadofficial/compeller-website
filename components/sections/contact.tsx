"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, Github, Linkedin, Twitter, Loader2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollAnimation } from "@/components/scroll-animation"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
]

const services = [
  "Landing Pages",
  "Full-Stack Web Apps",
  "Mobile Applications",
  "Tech Consulting",
  "Project Guidance",
  "Maintenance & Support",
]

const loadingMessages = [
  "Compiling your message...",
  "Opening WhatsApp...",
  "Preparing carrier pigeons...",
  "Connecting to the matrix...",
  "npm install enthusiasm...",
]

function Confetti() {
  const confettiColors = ["#FF6B6B", "#FFAB4C", "#4ECDC4", "#10B981", "#FF8E53"]
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    size: Math.random() * 8 + 4,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute confetti"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0%",
          }}
        />
      ))}
    </div>
  )
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0])
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (isSubmitting) {
      const interval = setInterval(() => {
        setLoadingMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)])
      }, 800)
      return () => clearInterval(interval)
    }
  }, [isSubmitting])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    const whatsappNumber = "916388365386" // +91 6388365386 without + and spaces
    const message = `
*New Project Inquiry from The Compiled*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Service:* ${formData.service || "Not specified"}

*Project Description:*
${formData.message}
    `.trim()

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Small delay for the fun loading messages
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
    setIsSubmitted(true)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleInvalidSubmit = () => {
    const form = document.querySelector("form")
    form?.classList.add("animate-shake")
    setTimeout(() => form?.classList.remove("animate-shake"), 500)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="relative py-24 px-4">
        {showConfetti && <Confetti />}
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation>
            <div className="glass rounded-3xl p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center mx-auto mb-6 animate-jello">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">WhatsApp Opened! 🎉</h3>
              <p className="text-[#71717A] text-lg mb-2">
                Complete sending your message on WhatsApp. We'll respond as soon as possible!
              </p>
              <p className="text-[#25D366] text-sm mb-8 font-mono">(Our phone just buzzed with excitement)</p>
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({ name: "", email: "", service: "", message: "" })
                }}
                className="bg-gradient-to-r from-[#FF6B6B] to-[#FFAB4C] text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity active:animate-pop"
              >
                Send Another Message
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Let's Build </span>
              <span className="gradient-text">Something Amazing</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mx-auto rounded-full" />
            <p className="text-[#71717A] mt-6 max-w-2xl mx-auto text-lg">
              Ready to transform your idea into reality? Get in touch and let's start building together.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollAnimation>
            <form
              onSubmit={(e) => {
                if (!validateForm()) {
                  e.preventDefault()
                  handleInvalidSubmit()
                } else {
                  handleSubmit(e)
                }
              }}
              className="glass rounded-3xl p-8 md:p-10"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#E4E4E7] mb-2">
                    Your Name <span className="text-[#EF4444]">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`bg-[#1A1A24]/80 border-[#27272A] text-white placeholder:text-[#52525B] focus:border-[#FF6B6B] focus:ring-[#FF6B6B]/20 rounded-xl h-12 ${
                      errors.name ? "border-[#EF4444] animate-shake" : ""
                    }`}
                  />
                  {errors.name && <p className="text-[#EF4444] text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E4E4E7] mb-2">
                    Email Address <span className="text-[#EF4444]">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`bg-[#1A1A24]/80 border-[#27272A] text-white placeholder:text-[#52525B] focus:border-[#FF6B6B] focus:ring-[#FF6B6B]/20 rounded-xl h-12 ${
                      errors.email ? "border-[#EF4444] animate-shake" : ""
                    }`}
                  />
                  {errors.email && <p className="text-[#EF4444] text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#E4E4E7] mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A24]/80 border border-[#27272A] text-white rounded-xl h-12 px-4 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]/20 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#E4E4E7] mb-2">
                    Project Description <span className="text-[#EF4444]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className={`w-full bg-[#1A1A24]/80 border border-[#27272A] text-white placeholder:text-[#52525B] rounded-xl p-4 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]/20 focus:outline-none resize-none ${
                      errors.message ? "border-[#EF4444] animate-shake" : ""
                    }`}
                  />
                  {errors.message && <p className="text-[#EF4444] text-sm mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#25D366]/90 hover:to-[#128C7E]/90 text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 active:animate-pop"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {loadingMessage}
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
              </div>
            </form>
          </ScrollAnimation>

          {/* Contact Info */}
          <ScrollAnimation delay={200}>
            <div className="flex flex-col justify-between h-full">
              <div className="glass rounded-3xl p-8 md:p-10 mb-6">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                <div className="flex items-center gap-4 mb-6 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center group-hover:scale-110 group-hover:animate-bounce-spin transition-transform duration-300">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#71717A] text-sm">WhatsApp us at</p>
                    <a
                      href="https://wa.me/916388365386"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#25D366] transition-colors"
                    >
                      +91 6388365386
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center group-hover:scale-110 group-hover:animate-bounce-spin transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#71717A] text-sm">Email us at</p>
                    <a
                      href="mailto:hello@thecompiled.com"
                      className="text-white hover:text-[#FF6B6B] transition-colors"
                    >
                      hello@thecompiled.com
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
                  <p className="text-[#25D366] text-sm font-medium">Quick Response via WhatsApp</p>
                  <p className="text-[#71717A] text-sm">
                    We typically respond within minutes on WhatsApp (or after coffee, whichever comes first ☕)
                  </p>
                </div>
              </div>

              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center text-[#71717A] hover:text-white hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#FFAB4C] transition-all duration-300 hover:scale-110 hover-spin-wobble"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
