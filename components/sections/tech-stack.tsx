"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"

const technologies = [
  { name: "React", icon: "⚛️", funFact: "Still better than jQuery" },
  { name: "Next.js", icon: "▲", funFact: "The triangle of power" },
  { name: "TypeScript", icon: "TS", funFact: "Because 'any' is not a type" },
  { name: "Node.js", icon: "⬢", funFact: "JavaScript's gym phase" },
  { name: "Tailwind CSS", icon: "🎨", funFact: "100 classes per div" },
  { name: "Python", icon: "🐍", funFact: "Spaces vs tabs: choose wisely" },
  { name: "PostgreSQL", icon: "🐘", funFact: "The elephant never forgets" },
  { name: "MongoDB", icon: "🍃", funFact: "JSON all the way down" },
  { name: "AWS", icon: "☁️", funFact: "Powered by bezos.exe" },
  { name: "Docker", icon: "🐳", funFact: "It works in my container" },
  { name: "Git", icon: "📦", funFact: "git push --force (don't)" },
  { name: "Firebase", icon: "🔥", funFact: "NoSQL? More like YesQL!" },
]

export function TechStackSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B6B]/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Powered by </span>
              <span className="gradient-text">Modern Technology</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mx-auto rounded-full" />
            <p className="text-[#71717A] mt-6 max-w-2xl mx-auto text-lg">
              We leverage cutting-edge tools and frameworks to build exceptional digital experiences.
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />

          <div className="flex gap-6 overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="group flex-shrink-0 glass rounded-xl p-6 min-w-[140px] hover:bg-[#1A1A24]/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B6B]/50 border border-transparent relative cursor-pointer"
                  onMouseEnter={() => setHoveredTech(`${tech.name}-${index}`)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:animate-jello">
                      {tech.icon}
                    </div>
                    <p className="text-[#71717A] group-hover:text-white font-medium transition-colors duration-300">
                      {tech.name}
                    </p>
                  </div>

                  {/* Fun tooltip */}
                  {hoveredTech === `${tech.name}-${index}` && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-[#1A1A24] border border-[#FFAB4C]/30 rounded-lg text-xs text-[#FFAB4C] whitespace-nowrap z-20 animate-fade-in">
                      {tech.funFact}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="relative mt-6">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />

          <div className="flex gap-6 overflow-hidden">
            <div className="flex gap-6 animate-scroll-reverse">
              {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map((tech, index) => (
                <div
                  key={`${tech.name}-reverse-${index}`}
                  className="group flex-shrink-0 glass rounded-xl p-6 min-w-[140px] hover:bg-[#1A1A24]/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#4ECDC4]/50 border border-transparent relative cursor-pointer"
                  onMouseEnter={() => setHoveredTech(`${tech.name}-reverse-${index}`)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:animate-jello">
                      {tech.icon}
                    </div>
                    <p className="text-[#71717A] group-hover:text-white font-medium transition-colors duration-300">
                      {tech.name}
                    </p>
                  </div>

                  {/* Fun tooltip */}
                  {hoveredTech === `${tech.name}-reverse-${index}` && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-[#1A1A24] border border-[#4ECDC4]/30 rounded-lg text-xs text-[#4ECDC4] whitespace-nowrap z-20 animate-fade-in">
                      {tech.funFact}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
