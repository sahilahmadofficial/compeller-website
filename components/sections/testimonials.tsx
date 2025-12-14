"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Computer Science Student, IIT Delhi",
    avatar: "/indian-student-headshot.jpg",
    rating: 5,
    text: "Compeller provided exceptional guidance for my final year project. They patiently explained complex concepts and helped me build a machine learning application that impressed my professors. Their mentorship was invaluable!",
  },
  {
    name: "Priya Menon",
    role: "Principal, Wisdom Public School",
    avatar: "/indian-woman-professional-headshot.jpg",
    rating: 5,
    text: "They created a beautiful landing page for our school that perfectly captures our values and mission. Parents love the modern design, and inquiries have increased by 60%. Highly professional and understanding of our educational needs.",
  },
  {
    name: "Rajesh Kumar",
    role: "Owner, Chai & Coffee Corner",
    avatar: "/indian-businessman-headshot.jpg",
    rating: 5,
    text: "Compeller built an amazing website for my coffee shop with online ordering features. The design reflects our cozy atmosphere perfectly, and online orders have tripled! They truly understood my vision and delivered beyond expectations.",
  },
  {
    name: "Sneha Patel",
    role: "Operations Manager, TechFlow Solutions",
    avatar: "/indian-woman-manager-headshot.jpg",
    rating: 5,
    text: "They developed a custom automation tool that streamlined our entire workflow. What used to take hours now takes minutes. The tool is intuitive, powerful, and has saved us countless hours. Absolute game-changer for our business!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4ECDC4]/5 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header - Updated gradient */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">What Our </span>
              <span className="gradient-text">Clients Say</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mx-auto rounded-full" />
          </div>
        </ScrollAnimation>

        {/* Testimonial Carousel */}
        <ScrollAnimation>
          <div className="relative">
            {/* Quote Icon - Updated gradient */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFAB4C] flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="glass rounded-3xl p-8 md:p-12 pt-12">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="text-center">
                        <div className="flex justify-center gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-[#FFAB4C] fill-[#FFAB4C]" />
                          ))}
                        </div>

                        <p className="text-lg md:text-xl text-[#E4E4E7] leading-relaxed mb-8 italic">
                          "{testimonial.text}"
                        </p>

                        <div className="flex flex-col items-center">
                          <img
                            src={
                              testimonial.avatar || "/placeholder.svg?height=64&width=64&query=professional headshot"
                            }
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full border-2 border-[#FF6B6B] mb-4 object-cover"
                          />
                          <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                          <p className="text-[#71717A]">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation - Updated colors */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={goToPrev}
                  className="p-2 rounded-full glass hover:bg-[#FF6B6B]/20 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false)
                        setCurrentIndex(index)
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-8 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
                          : "w-2 bg-[#71717A]/30 hover:bg-[#71717A]/50"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="p-2 rounded-full glass hover:bg-[#FF6B6B]/20 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
