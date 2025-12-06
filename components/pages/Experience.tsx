"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar, Users } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface ExperienceItem {
  title: string
  company: string
  employmentType: string
  startDate: string
  endDate: string
  duration: string
  location: string
  workType: string
  description: string
  skills: string[]
}

export default function Experience() {
  const { t } = useLanguage()

  const experiences: ExperienceItem[] = [
    {
      title: t("experience.talimHub.title"),
      company: "Talim-Hub Team",
      employmentType: t("experience.employmentType.freelance"),
      startDate: "July 2025",
      endDate: "November 2025",
      duration: "3 months",
      location: "Tashkent, Tashkent, Uzbekistan",
      workType: t("experience.workType.hybrid"),
      description: t("experience.talimHub.description"),
      skills: [t("experience.skills.frontend")],
    },
    {
      title: t("experience.chegbox.title"),
      company: "Chegbox.uz",
      employmentType: t("experience.employmentType.freelance"),
      startDate: "July 2025",
      endDate: "August 2025",
      duration: "2 months",
      location: "Tashkent, Tashkent, Uzbekistan",
      workType: t("experience.workType.remote"),
      description: t("experience.chegbox.description"),
      skills: ["GitHub", "TypeScript", t("experience.skills.andMore")],
    },
    {
      title: t("experience.izisol.title"),
      company: "Izisol",
      employmentType: t("experience.employmentType.fulltime"),
      startDate: "June 2025",
      endDate: "June 2025",
      duration: "1 month",
      location: "Tashkent, Tashkent, Uzbekistan",
      workType: t("experience.workType.onsite"),
      description: t("experience.izisol.description"),
      skills: ["GitHub", "HTML", t("experience.skills.andMore")],
    },
    {
      title: t("experience.najot.title"),
      company: "Najot Ta'lim",
      employmentType: t("experience.employmentType.fulltime"),
      startDate: "January 2025",
      endDate: "June 2025",
      duration: "6 months",
      location: "Tashkent, Tashkent, Uzbekistan",
      workType: t("experience.workType.onsite"),
      description: t("experience.najot.description"),
      skills: ["GitHub"],
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("experience.title")}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                  <Briefcase size={20} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="px-3 py-1 bg-slate-700/50 rounded-lg text-gray-300">
                        {exp.employmentType}
                      </span>
                    </div>
                  </div>

                  {/* Dates and Location */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>
                        {exp.startDate} - {exp.endDate} ({exp.duration})
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>
                        {exp.location} ({exp.workType})
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>

                  {/* Skills */}
                  {exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
