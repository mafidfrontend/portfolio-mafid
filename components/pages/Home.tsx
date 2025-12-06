"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl relative">
            <Image
              src="/logo.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="(max-width: 768px) 192px, 192px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abdulloh Anvarov
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            {t("home.subtitle")}
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {t("home.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a
              href="/Resume.pdf"
              download
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Download size={20} />
              {t("home.downloadResume")}
            </motion.a>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-purple-500/10 transition-colors"
          >
            <Mail size={20} />
            {t("home.contactMe")}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <motion.a
          rel="preconnect"
            href="https://github.com/mafidfrontend"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-400 hover:text-purple-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
          rel="preconnect"
            href="https://www.linkedin.com/in/abdulloh-anvarov-3ba480248/"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="text-gray-400 hover:text-purple-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
