import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Compeller | Futuristic Tech Consultancy",
  description:
    "Transform your vision into reality with cutting-edge technology solutions. We compile ideas into exceptional digital experiences.",
  keywords: ["tech consultancy", "web development", "mobile apps", "full-stack", "startup", "student projects"],
  authors: [{ name: "Compeller" }],
  openGraph: {
    title: "Compeller | Futuristic Tech Consultancy",
    description: "Transform your vision into reality with cutting-edge technology solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compeller | Futuristic Tech Consultancy",
    description: "Transform your vision into reality with cutting-edge technology solutions.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
