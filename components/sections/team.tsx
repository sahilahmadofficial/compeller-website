"use client"

import { Users, Heart, Code, Sparkles, Zap, Target } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import Image from "next/image"

const founders = [
    {
        name: "Sahil Ahmad",
        role: "Co-Founder & Backend Engineer",
        image: "/sahil-ahmad.jpeg",
        bio: "Backend engineer obsessed with building systems that scale. Breaks things to understand them, then builds them to last. Dark terminal enthusiast who turns complex problems into elegant solutions.",
        expertise: ["Python", "Django", "FastAPI", "System Design", "PostgreSQL", "Redis"],
    },
    {
        name: "Mohammad Kaif",
        role: "Co-Founder & Solution Architect",
        image: "/mohammad-kaif.jpeg",
        bio: "Solution architect who bridges the gap between business needs and technical reality. Designs scalable architectures and guides teams to turn ambitious visions into production-ready solutions.",
        expertise: ["Architecture Design", "Full-Stack", "Cloud Infrastructure", "DevOps", "API Design", "Team Leadership"],
    },
]

export function TeamSection() {
    return (
        <section id="team" className="relative py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            <span className="text-white">Meet </span>
                            <span className="gradient-text">The Founders</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mx-auto rounded-full" />
                    </div>
                </ScrollAnimation>

                {/* Story Section */}
                <ScrollAnimation>
                    <div className="glass rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B6B]/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4ECDC4]/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Our Story</h3>
                            </div>

                            <div className="space-y-4 text-[#A1A1AA] text-lg leading-relaxed">
                                <p>
                                    <span className="text-white font-semibold">Compeller</span> started in a university computer lab,
                                    where two CS students—one obsessed with backend systems, the other passionate about architecture—realized
                                    they had complementary skills and a shared frustration.
                                </p>
                                <p>
                                    We watched{" "}
                                    <span className="text-[#4ECDC4] font-semibold">
                                        small businesses, local organizations, and fellow students
                                    </span>{" "}
                                    struggle to afford quality tech solutions. Big agencies quoted astronomical prices. Freelancers
                                    delivered inconsistent quality. There had to be a better way.
                                </p>
                                <p>
                                    So we built it. Not as a typical agency, but as a{" "}
                                    <span className="text-[#FF6B6B] font-semibold">collective of passionate students</span>, each bringing
                                    their own expertise to the table. We're{" "}
                                    <span className="text-[#FFAB4C] font-semibold">CS/IT students</span> from different backgrounds—frontend
                                    developers, backend engineers, designers, and problem solvers—united by fresh perspectives, cutting-edge
                                    knowledge, and genuine enthusiasm for building great products.
                                </p>
                                <p>
                                    What sets us apart? We don't just code—we <span className="text-white font-semibold">engineer</span>.
                                    Our team combines deep technical expertise with an understanding of real-world constraints. We deliver{" "}
                                    <span className="text-[#4ECDC4] font-semibold">
                                        enterprise-grade quality at competitive prices
                                    </span>{" "}
                                    because we're lean, hungry, and driven by passion rather than overhead.
                                </p>
                                <p>
                                    We're not building a portfolio—we're building partnerships. Your success fuels our growth, and we're
                                    invested in making it remarkable.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <Users className="w-8 h-8 text-[#FF6B6B] mx-auto mb-2" />
                                    <p className="text-sm text-[#A1A1AA]">Diverse Expertise</p>
                                </div>
                                <div className="text-center">
                                    <Zap className="w-8 h-8 text-[#FFAB4C] mx-auto mb-2" />
                                    <p className="text-sm text-[#A1A1AA]">Performance Obsessed</p>
                                </div>
                                <div className="text-center">
                                    <Target className="w-8 h-8 text-[#4ECDC4] mx-auto mb-2" />
                                    <p className="text-sm text-[#A1A1AA]">Goal-Driven Approach</p>
                                </div>
                                <div className="text-center">
                                    <Heart className="w-8 h-8 text-[#10B981] mx-auto mb-2" />
                                    <p className="text-sm text-[#A1A1AA]">Genuinely Care</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Founders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {founders.map((founder, index) => (
                        <ScrollAnimation key={founder.name} delay={index * 100}>
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] via-[#FFAB4C] to-[#4ECDC4] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl" />

                                <div className="relative glass rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6B6B]/50 border border-transparent h-full">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Profile Image */}
                                        <div className="relative flex-shrink-0">
                                            <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#FF6B6B]/30 group-hover:border-[#4ECDC4]/50 transition-colors duration-500">
                                                <Image
                                                    src={founder.image || "/placeholder.svg"}
                                                    alt={founder.name}
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-lg bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] flex items-center justify-center shadow-lg">
                                                <Sparkles className="w-5 h-5 text-white" />
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 flex flex-col">
                                            <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                                            <p className="text-[#FFAB4C] font-medium mb-4">{founder.role}</p>
                                            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4 flex-grow">{founder.bio}</p>

                                            {/* Expertise Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {founder.expertise.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-1 text-xs font-medium text-white/80 bg-white/5 rounded-full border border-white/10 hover:border-[#FF6B6B]/50 transition-colors duration-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Team Note */}
                <ScrollAnimation>
                    <div className="mt-12 text-center">
                        <p className="text-[#A1A1AA] text-sm max-w-2xl mx-auto">
                            Behind Compeller is a talented group of passionate students, each bringing their unique skills in frontend,
                            backend, design, and beyond. Together, we're a full-stack powerhouse ready to tackle any challenge.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Call to Action */}
                <ScrollAnimation>
                    <div className="mt-12 text-center glass rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to work with a team that{" "}
                            <span className="gradient-text">engineers solutions, not just code</span>?
                        </h3>
                        <p className="text-[#A1A1AA] mb-6 max-w-2xl mx-auto">
                            Let's discuss your project. Whether you're a startup with big ambitions or a local business going digital,
                            we'll architect a solution that scales with your growth—without breaking your budget.
                        </p>
                        <button
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                            }}
                            className="group relative px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6B6B]/20 hover:scale-105"
                        >
                            <span className="relative z-10">Start Your Project</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
