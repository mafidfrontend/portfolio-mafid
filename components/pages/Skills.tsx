"use client"

import { motion } from "framer-motion"
import { Code, Database, Palette, Zap, Globe, Smartphone } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
  color: string
}

export default function Skills() {
  const { t } = useLanguage()

  const skillCategories: SkillCategory[] = [
    {
      title: t("skills.frontend.title"),
      icon: <Code size={24} />,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Framer Motion",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("skills.backend.title"),
      icon: <Database size={24} />,
      skills: ["Node.js", "Express", "REST API", "GraphQL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: t("skills.design.title"),
      icon: <Palette size={24} />,
      skills: ["UI/UX Design", "Figma", "Responsive Design", "Material Design"],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: t("skills.tools.title"),
      icon: <Zap size={24} />,
      skills: ["Git", "GitHub", "Webpack", "Vite", "Zustand", "React Hook Form"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: t("skills.web.title"),
      icon: <Globe size={24} />,
      skills: ["SEO", "Performance Optimization", "Accessibility", "PWA"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: t("skills.mobile.title"),
      icon: <Smartphone size={24} />,
      skills: ["React Native", "Mobile Responsive", "Touch Optimization"],
      color: "from-teal-500 to-cyan-500",
    },
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
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("skills.title")}</h1>
          <p className="text-xl text-gray-400 mb-6">{t("skills.subtitle")}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-colors"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index + 0.05 * skillIndex }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 bg-slate-700/50 text-gray-300 rounded-lg text-sm hover:bg-purple-500/20 hover:text-purple-300 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">{t("skills.additional.title")}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving",
              "Team Collaboration",
              "Code Review",
              "Agile Methodology",
              "Version Control",
              "Testing",
              "Documentation",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white rounded-lg text-sm border border-purple-500/30 hover:border-purple-500/50 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

