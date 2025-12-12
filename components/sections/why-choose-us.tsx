"use client"

import { Zap, TrendingUp, Clock, GraduationCap, DollarSign, Headphones } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const features = [
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "We use the latest tools, frameworks, and best practices to build future-proof solutions.",
    gradient: "from-[#FF6B6B] to-[#FF8E53]",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Built to grow with your business, handling increasing demands without breaking a sweat.",
    gradient: "from-[#4ECDC4] to-[#2DD4BF]",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient workflows and agile methodologies ensure quick turnaround without compromising quality.",
    gradient: "from-[#FFAB4C] to-[#FF8E53]",
  },
  {
    icon: GraduationCap,
    title: "Student-Friendly",
    description: "Special guidance and mentorship for academic projects, helping you learn while you build.",
    gradient: "from-[#10B981] to-[#2DD4BF]",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Quality solutions that fit your budget. We believe great technology should be accessible.",
    gradient: "from-[#FF6B6B] to-[#FFAB4C]",
  },
  {
    icon: Headphones,
    title: "Continuous Support",
    description: "We're here long after deployment, providing updates, maintenance, and ongoing assistance.",
    gradient: "from-[#4ECDC4] to-[#10B981]",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Updated gradient */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Why </span>
              <span className="gradient-text">The Compiled?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mx-auto rounded-full" />
            <p className="text-[#71717A] mt-6 max-w-2xl mx-auto text-lg">
              We're not just developers - we're partners in your success. Here's what sets us apart.
            </p>
          </div>
        </ScrollAnimation>

        {/* Features Grid - Updated hover border color */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={index * 100}>
              <div className="group relative h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative h-full glass rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6B6B]/50 border border-transparent">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-[#71717A] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Stats Section */}
        <ScrollAnimation>
          <div className="mt-20 glass rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <p className="text-[#71717A]">Projects Delivered</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  5+
                </div>
                <p className="text-[#71717A]">Happy Clients</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <p className="text-[#71717A]">Satisfaction Rate</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <p className="text-[#71717A]">Support Available</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
