"use client";

import type React from "react";
import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "uz" | "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  uz: {
    // Navigation
    "nav.home": "Bosh sahifa",
    "nav.about": "Men haqimda",
    "nav.experience": "Tajriba",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Aloqa",

    // Home
    "home.title": "Frontend Dasturchi",
    "home.subtitle": "React va TypeScript mutaxassisi",
    "home.description":
      "Zamonaviy web ilovalar yaratishga ixtisoslashgan frontend dasturchi",
    "home.downloadResume": "Rezyumeni yuklash",
    "home.contactMe": "Men bilan bog'lanish",

    // About
    "about.title": "Men haqimda",
    "about.bio":
      "Men tajribali frontend dasturchiman, zamonaviy web texnologiyalar bilan ishlashga ixtisoslashganman. Najot Ta'lim kabi nufuzli ta'lim muassasalarida ta'lim olganman va doimiy ravishda o'z bilimlarimni yangilab turaman.",
    "about.education": "Ta'lim",
    "about.najot": "Najot Ta'lim",
    "about.najotDesc": "Frontend Development kursi",
    "about.university": "Akita",
    "about.universityDesc": "Web dasturlash",

    // Experience
    "experience.title": "Tajriba",
    "experience.najotTitle": "Yordamchi o'qituvchi - Najot Ta'lim",
    "experience.najotDesc":
      "Frontend dasturlash asoslarini o‘rganuvchilarga amaliy yordam berish, ularning savollariga javob berish va loyihalarni ishlab chiqishda yo‘l-yo‘riq ko‘rsatish.",
    "experience.technologies": "Texnologiyalar",

    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.project1": "E-commerce Platform",
    "portfolio.project1Desc":
      "NextJs va TypeScript yordamida yaratilgan zamonaviy onlayn do'kon",

    // Contact
    "contact.title": "Aloqa",
    "contact.subtitle": "Loyihangiz haqida gaplashaylik",
    "contact.name": "Ism",
    "contact.email": "Email",
    "contact.phone": "Telefon",
    "contact.message": "Xabar",
    "contact.send": "Xabar yuborish",
    "contact.success": "Xabar muvaffaqiyatli yuborildi!",
    "contact.error": "Xatolik yuz berdi. Qaytadan urinib ko'ring.",
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.about": "Обо мне",
    "nav.experience": "Опыт",
    "nav.portfolio": "Портфолио",
    "nav.contact": "Контакты",

    // Home
    "home.title": "Frontend Разработчик",
    "home.subtitle": "Специалист по React и TypeScript",
    "home.description":
      "Frontend разработчик, специализирующийся на создании современных веб-приложений",
    "home.downloadResume": "Скачать резюме",
    "home.contactMe": "Связаться со мной",

    // About
    "about.title": "Обо мне",
    "about.bio":
      "Я опытный frontend разработчик, специализирующийся на современных веб-технологиях. Получил образование в престижных учебных заведениях, таких как Najot Ta'lim, и постоянно обновляю свои знания.",
    "about.education": "Образование",
    "about.najot": "Najot Ta'lim",
    "about.najotDesc": "Курс Frontend Development",
    "about.university": "Akita",
    "about.universityDesc": "Web Programming",

    // Experience
    "experience.title": "Опыт",
    "experience.najotTitle": "Ассистент преподавателя — Najot Ta'lim",
    "experience.najotDesc":
      "Помощь студентам в изучении основ frontend-разработки, ответы на их вопросы и сопровождение в процессе создания проектов.",
    "experience.technologies": "Технологии",

    // Portfolio
    "portfolio.title": "Портфолио",
    "portfolio.project1": "E-commerce Платформа",
    "portfolio.project1Desc":
      "Современный интернет-магазин, созданный с помощью NextJs и TypeScript",

    // Contact
    "contact.title": "Контакты",
    "contact.subtitle": "Давайте обсудим ваш проект",
    "contact.name": "Имя",
    "contact.email": "Email",
    "contact.phone": "Телефон",
    "contact.message": "Сообщение",
    "contact.send": "Отправить сообщение",
    "contact.success": "Сообщение успешно отправлено!",
    "contact.error": "Произошла ошибка. Попробуйте еще раз.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Home
    "home.title": "Frontend Developer",
    "home.subtitle": "React & TypeScript Specialist",
    "home.description":
      "Frontend developer specializing in creating modern web applications",
    "home.downloadResume": "Download Resume",
    "home.contactMe": "Contact Me",

    // About
    "about.title": "About Me",
    "about.bio":
      "I am an experienced frontend developer specializing in modern web technologies. I have studied at prestigious educational institutions like Najot Ta'lim and continuously update my knowledge.",
    "about.education": "Education",
    "about.najot": "Najot Ta'lim",
    "about.najotDesc": "Frontend Development Course",
    "about.university": "Akita",
    "about.universityDesc": "Web Development",

    // Experience
    "experience.title": "Experience",
    "experience.najotTitle": "Teaching Assistant - Najot Ta'lim",
    "experience.najotDesc":
      "Assisting students in learning frontend development fundamentals, answering their questions, and guiding them through project development.",
    "experience.technologies": "Technologies",

    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.project1": "E-commerce Platform",
    "portfolio.project1Desc":
      "Modern online store built with NextJs and TypeScript",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's discuss your project",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully!",
    "contact.error": "An error occurred. Please try again.",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
