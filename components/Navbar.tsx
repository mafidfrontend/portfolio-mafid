"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage, type Language } from "@/contexts/LanguageContext"
import type { PageType } from "@/app/page"

interface NavbarProps {
  currentPage: PageType
  setCurrentPage: (page: PageType) => void
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems: { key: PageType; label: string }[] = [
    { key: "home", label: t("nav.home") },
    { key: "about", label: t("nav.about") },
    { key: "experience", label: t("nav.experience") },
    { key: "portfolio", label: t("nav.portfolio") },
    { key: "contact", label: t("nav.contact") },
  ]

  const languages: { code: Language; label: string }[] = [
    { code: "uz", label: "UZ" },
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FD</span>
            </div>
            <span className="text-white font-semibold text-lg">Frontend Dev</span>
          </motion.div>

          {/* Center: Language Selector (Always Visible) */}
          <div className="flex items-center space-x-2">
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  language === lang.code ? "text-purple-400 bg-purple-500/20" : "text-gray-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {lang.label}
              </motion.button>
            ))}
          </div>

          {/* Right: Desktop nav or mobile menu button */}
          <div className="flex items-center space-x-2">
            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.key}
                  onClick={() => setCurrentPage(item.key)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.key
                      ? "text-purple-400 bg-purple-500/20"
                      : "text-gray-300 hover:text-white hover:bg-slate-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white p-2"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu content */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 px-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key)
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === item.key
                    ? "text-purple-400 bg-purple-500/20"
                    : "text-gray-300 hover:text-white hover:bg-slate-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  )
}
