import { ParticleBackground } from "@/components/particle-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { TechStackSection } from "@/components/sections/tech-stack"
import { ProcessSection } from "@/components/sections/process"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { TeamSection } from "@/components/sections/team"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
