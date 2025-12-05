// app/page.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LanguageProvider } from "@/contexts/LanguageContext"
import Navbar from "@/components/Navbar"
import Home from "@/components/pages/Home"
import About from "@/components/pages/About"
import Experience from "@/components/pages/Experience"
import Portfolio from "@/components/pages/Portfolio"
import Skills from "@/components/pages/Skills"
import Contact from "@/components/pages/Contact"

export type PageType = "home" | "about" | "experience" | "portfolio" | "skills" | "contact"

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<PageType>("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />
      case "about":
        return <About />
      case "experience":
        return <Experience />
      case "portfolio":
        return <Portfolio />
      case "skills":
        return <Skills />
      case "contact":
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <main className="pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </LanguageProvider>
  )
}
