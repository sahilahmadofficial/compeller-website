"use client"

import { useState } from "react"
import { Layout, Globe, Smartphone, Lightbulb, GraduationCap, Wrench } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Fast, conversion-optimized websites that capture attention and drive results.",
    gradient: "from-[#FF6B6B] to-[#FF8E53]",
    funFact: "Average load time: faster than you can say 'Loading...'",
  },
  {
    icon: Globe,
    title: "Full-Stack Web Apps",
    description: "Scalable, robust applications built with modern technologies for optimal performance.",
    gradient: "from-[#4ECDC4] to-[#2DD4BF]",
    funFact: "We promise not to use 'Hello World' in production",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform solutions that deliver seamless mobile experiences.",
    gradient: "from-[#FFAB4C] to-[#FF8E53]",
    funFact: "Works on phones, tablets, and probably your smart fridge",
  },
  {
    icon: Lightbulb,
    title: "Tech Consulting",
    description: "Strategic technology guidance to help you make informed decisions for your business.",
    gradient: "from-[#10B981] to-[#2DD4BF]",
    funFact: "Like therapy, but for your tech stack",
  },
  {
    icon: GraduationCap,
    title: "Project Guidance",
    description: "Expert mentorship for student projects, helping you learn and build with confidence.",
    gradient: "from-[#FF6B6B] to-[#FFAB4C]",
    funFact: "No question is too basic (we've all been there)",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing technical support to keep your applications running smoothly.",
    gradient: "from-[#4ECDC4] to-[#10B981]",
    funFact: "We fix bugs so you can sleep at night",
  },
]

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Our </span>
              <span className="gradient-text">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mx-auto rounded-full" />
            <p className="text-[#71717A] mt-6 max-w-2xl mx-auto text-lg">
              From concept to deployment, we offer comprehensive solutions to bring your ideas to life.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={service.title} delay={index * 100}>
              <div
                className="group relative h-full"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative h-full glass rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6B6B]/50 border border-transparent">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:animate-bounce-spin transition-transform duration-300`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#71717A] leading-relaxed">{service.description}</p>

                  <div
                    className={`mt-4 p-3 rounded-lg bg-[#1A1A24]/80 border border-[#FFAB4C]/20 transition-all duration-300 ${hoveredCard === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
                  >
                    <p className="text-[#FFAB4C] text-sm font-mono">💡 {service.funFact}</p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
