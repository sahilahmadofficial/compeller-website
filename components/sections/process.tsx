"use client"

import { Search, Palette, Code, Rocket, HeartHandshake } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We dive deep into understanding your vision, goals, and requirements to craft the perfect solution.",
    color: "#FF6B6B",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description: "Our designers create stunning, user-centric interfaces that captivate and convert.",
    color: "#FFAB4C",
  },
  {
    number: "03",
    icon: Code,
    title: "Develop",
    description: "We build with cutting-edge technology, ensuring scalability, performance, and reliability.",
    color: "#4ECDC4",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy",
    description: "Your solution goes live with thorough testing and seamless deployment processes.",
    color: "#2DD4BF",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Support",
    description: "We provide ongoing maintenance and support to ensure your continued success.",
    color: "#10B981",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/5 via-transparent to-[#4ECDC4]/5" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header - Updated gradient */}
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Our </span>
              <span className="gradient-text">Workflow</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mx-auto rounded-full" />
            <p className="text-[#71717A] mt-6 max-w-2xl mx-auto text-lg">
              A proven process that transforms your ideas into exceptional digital products.
            </p>
          </div>
        </ScrollAnimation>

        {/* Process Timeline - Desktop - Updated gradient line */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B6B] via-[#FFAB4C] to-[#4ECDC4] -translate-y-1/2" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.number} delay={index * 150}>
                <div className="relative flex flex-col items-center">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                      boxShadow: `0 0 30px ${step.color}40`,
                    }}
                  >
                    <step.icon className="w-7 h-7" />
                  </div>

                  <div className="glass rounded-2xl p-6 text-center hover:border-[#FF6B6B]/50 transition-all duration-300 hover:-translate-y-2">
                    <span className="text-sm font-mono font-bold mb-2 block" style={{ color: step.color }}>
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-[#71717A] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Process Timeline - Mobile/Tablet - Updated gradient line */}
        <div className="lg:hidden relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B6B] via-[#FFAB4C] to-[#4ECDC4]" />

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.number} delay={index * 100}>
                <div className="relative flex gap-6 pl-4">
                  <div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                      boxShadow: `0 0 20px ${step.color}40`,
                    }}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>

                  <div className="glass rounded-2xl p-6 flex-1">
                    <span className="text-sm font-mono font-bold mb-1 block" style={{ color: step.color }}>
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-[#71717A] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
