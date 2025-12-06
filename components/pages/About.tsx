"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function About() {
  const { t } = useLanguage()

  const educationData = [
    {
      institution: t("about.najot"),
      description: t("about.najotDesc"),
      year: "August 2024 - May 2025",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      institution: t("about.university"),
      description: t("about.universityDesc"),
      year: "February to May | 2022",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("about.title")}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src="/logo.jpg"
                alt="About me"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">{t("about.bio")}</p>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t("about.education")}</h2>

          <div className="space-y-6">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{item.institution}</h3>
                      <div className="flex items-center gap-1 text-purple-400 text-sm">
                        <Calendar size={16} />
                        {item.year}
                      </div>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
