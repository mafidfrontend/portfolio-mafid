"use client"

import { motion } from "framer-motion"
import { Briefcase, Code, Users, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Experience() {
  const { t } = useLanguage()

  const technologies = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Zustand",
    "Framer Motion",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "Webpack",
    "Vite",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("experience.title")}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-12 hover:border-purple-500/50 transition-colors"
        >
          <div className="flex items-start gap-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white"
            >
              <Briefcase size={24} />
            </motion.div>

            <div className="flex-1">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl font-bold text-white mb-2"
              >
                {t("experience.najotTitle")}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-purple-400 mb-4 font-medium"
              >
                2025 - Present
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-300 leading-relaxed mb-6"
              >
                {t("experience.najotDesc")}
              </motion.p>

              {/* Key Achievements */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-3 gap-4"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-3 text-gray-300">
                  <Code className="text-purple-400" size={20} />
                  <span>Teaching</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-3 text-gray-300">
                  <Users className="text-purple-400" size={20} />
                  <span>Team Collaboration</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-3 text-gray-300">
                  <Zap className="text-purple-400" size={20} />
                  <span>Performance Optimization</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t("experience.technologies")}</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)",
                }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 text-center hover:border-purple-500/50 transition-colors cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center"
                >
                  <Code className="text-white" size={20} />
                </motion.div>
                <h3 className="text-white font-semibold text-sm">{tech}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
