// app/page.tsx
"use client"

import { useState, lazy, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LanguageProvider } from "@/contexts/LanguageContext"
import Navbar from "@/components/Navbar"
import Home from "@/components/pages/Home"

// Code splitting - Lazy load pages
const About = lazy(() => import("@/components/pages/About"))
const Experience = lazy(() => import("@/components/pages/Experience"))
const Portfolio = lazy(() => import("@/components/pages/Portfolio"))
const Skills = lazy(() => import("@/components/pages/Skills"))
const Contact = lazy(() => import("@/components/pages/Contact"))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
  </div>
)

export type PageType = "home" | "about" | "experience" | "portfolio" | "skills" | "contact"

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<PageType>("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />
      case "about":
        return (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        )
      case "experience":
        return (
          <Suspense fallback={<PageLoader />}>
            <Experience />
          </Suspense>
        )
      case "portfolio":
        return (
          <Suspense fallback={<PageLoader />}>
            <Portfolio />
          </Suspense>
        )
      case "skills":
        return (
          <Suspense fallback={<PageLoader />}>
            <Skills />
          </Suspense>
        )
      case "contact":
        return (
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        )
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
