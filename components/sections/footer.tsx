"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Twitter, Heart, Coffee, CheckCircle } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  services: [
    { name: "Landing Pages", href: "#services" },
    { name: "Web Apps", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "Consulting", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative pt-20 pb-8 px-4">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="inline-block mb-6 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="The Compiled"
                  width={108}
                  height={27}
                  className="transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#FF6B6B]/20 blur-lg group-hover:bg-[#4ECDC4]/20 transition-colors duration-300" />
              </div>
            </a>
            <p className="text-[#71717A] mb-6 leading-relaxed">
              We're a passionate tech consultancy dedicated to bringing innovative ideas to life. Transform your vision
              into reality with us.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[#71717A] hover:text-white hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#FFAB4C] transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#71717A] hover:text-[#FF6B6B] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#71717A] hover:text-[#4ECDC4] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#4ECDC4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-[#71717A] mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-[#4ECDC4] p-3 rounded-lg bg-[#4ECDC4]/10 border border-[#4ECDC4]/20">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Thanks for subscribing!</span>
              </div>
            ) : (
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-[#1A1A24]/80 border border-[#27272A] text-white placeholder:text-[#52525B] rounded-lg px-4 py-2 text-sm focus:border-[#FF6B6B] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#FFAB4C] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#27272A]/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#71717A] text-sm">
              &copy; {new Date().getFullYear()} The Compiled. All rights reserved.
            </p>
            <p className="text-[#71717A] text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-[#FF6B6B] fill-[#FF6B6B] inline" /> and lots of{" "}
              <Coffee className="w-4 h-4 text-[#FFAB4C] inline" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
