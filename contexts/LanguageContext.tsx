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
    "nav.skills": "Ko'nikmalar",
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
    "experience.employmentType.freelance": "Freelance",
    "experience.employmentType.fulltime": "To'liq ish kuni",
    "experience.workType.hybrid": "Hybrid",
    "experience.workType.remote": "Masofaviy",
    "experience.workType.onsite": "Ofisda",
    "experience.talimHub.title": "Frontend Developer",
    "experience.talimHub.description": "Men bu ajoyib jamoa bilan frontend developer sifatida ishlashni boshladim va ular bilan boshqa yirik loyihalarda hamkorlik qilishni istayman. Mening asosiy vazifam backend bilan bog'lanish va foydalanuvchilar uchun ijodkorlik qo'shish.",
    "experience.chegbox.title": "Software Engineer",
    "experience.chegbox.description": "Chegirma asosidagi mahsulotlar va xizmatlar e'lon qilinadigan platforma - Checkbox.uz loyihasini noldan ishlab chiqyapman. Loyihada Software Engineer sifatida frontend va backend qismlarini mustaqil tarzda ishlab chiqyapman.",
    "experience.izisol.title": "Frontend Developer",
    "experience.izisol.description": "Izisol kompaniyasida Junior Frontend Developer sifatida xizmat ko'rsatish veb-saytida ishladim. Saytdagi turli front-end buglarni tuzatdim va mobil moslashuvni yaxshiladim. Saytning SEO optimizatsiyasi ustida ishladim.",
    "experience.najot.title": "Yordamchi o'qituvchi",
    "experience.najot.description": "Frontend yo'nalishidagi Foundation va Standart kurslarida yordamchi o'qituvchi sifatida ishladim. O'quvchilarga dars vaqtida va undan tashqarida kod yozish, tushunmagan mavzularni takrorlashda yordam berdim.",
    "experience.sdct.title": "Frontend Developer",
    "experience.sdct.description": "Student Chat loyihasida Frontend dasturchi sifatida faol ishtirok etdim. ReactJS + TypeScript asosidagi foydalanuvchi interfeyslarini ishlab chiqdim. Komandada ishlash, Git orqali kodni boshqarish, hamkorlikda ishlash ko'nikmalarini rivojlantirdim.",
    "experience.skills.frontend": "Front-End Development",
    "experience.skills.andMore": "va +9 ko'nikma",
    "experience.technologies": "Texnologiyalar",

    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.project1": "E-commerce Platform",
    "portfolio.project1Desc":
      "NextJs va TypeScript yordamida yaratilgan zamonaviy onlayn do'kon",
    "portfolio.project2": "Portfolio App",
    "portfolio.project2Desc": "Trend Solution freelance kompaniyasi uchun portfolio web sahiasi",

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

    // Skills
    "skills.title": "Ko'nikmalar",
    "skills.subtitle": "Men ishlatadigan texnologiyalar va vositalar",
    "skills.frontend.title": "Frontend",
    "skills.backend.title": "Backend",
    "skills.design.title": "Dizayn",
    "skills.tools.title": "Vositalar",
    "skills.web.title": "Web",
    "skills.mobile.title": "Mobil",
    "skills.additional.title": "Qo'shimcha ko'nikmalar",
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.about": "Обо мне",
    "nav.experience": "Опыт",
    "nav.portfolio": "Портфолио",
    "nav.skills": "Навыки",
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
    "experience.employmentType.freelance": "Фриланс",
    "experience.employmentType.fulltime": "Полный рабочий день",
    "experience.workType.hybrid": "Гибридный",
    "experience.workType.remote": "Удаленно",
    "experience.workType.onsite": "В офисе",
    "experience.talimHub.title": "Frontend Developer",
    "experience.talimHub.description": "Я присоединился к этой замечательной команде в качестве frontend разработчика и с нетерпением жду работы с ними над другими крупными проектами. Моя основная задача - подключение к backend и добавление креативности для пользователей.",
    "experience.chegbox.title": "Software Engineer",
    "experience.chegbox.description": "Разрабатываю с нуля платформу для объявлений о продуктах и услугах на основе скидок - проект Checkbox.uz. В качестве Software Engineer самостоятельно разрабатываю frontend и backend части проекта.",
    "experience.izisol.title": "Frontend Developer",
    "experience.izisol.description": "Работал в качестве Junior Frontend Developer на сайте обслуживания компании Izisol. Исправлял различные front-end ошибки на сайте и улучшал мобильную адаптивность. Работал над SEO оптимизацией сайта.",
    "experience.najot.title": "Ассистент преподавателя",
    "experience.najot.description": "Работал в качестве ассистента преподавателя на курсах Foundation и Standard по направлению Frontend. Помогал студентам в написании кода во время и вне занятий, а также в повторении непонятых тем.",
    "experience.sdct.title": "Frontend Developer",
    "experience.sdct.description": "Активно участвовал в проекте Student Chat в качестве Frontend разработчика. Разрабатывал пользовательские интерфейсы на основе ReactJS + TypeScript. Развивал навыки работы в команде, управления кодом через Git, сотрудничества.",
    "experience.skills.frontend": "Front-End Development",
    "experience.skills.andMore": "и +9 навыков",
    "experience.technologies": "Технологии",

    // Portfolio
    "portfolio.title": "Портфолио",
    "portfolio.project1": "E-commerce Платформа",
    "portfolio.project1Desc":
      "Современный интернет-магазин, созданный с помощью NextJs и TypeScript",
    "portfolio.project2": "Portfolio App",
    "portfolio.project2Desc": "Trend Solution freelance kompaniyasi uchun portfolio web sahiasi",

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

    // Skills
    "skills.title": "Навыки",
    "skills.subtitle": "Технологии и инструменты, которые я использую",
    "skills.frontend.title": "Frontend",
    "skills.backend.title": "Backend",
    "skills.design.title": "Дизайн",
    "skills.tools.title": "Инструменты",
    "skills.web.title": "Web",
    "skills.mobile.title": "Мобильный",
    "skills.additional.title": "Дополнительные навыки",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.portfolio": "Portfolio",
    "nav.skills": "Skills",
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
    "experience.employmentType.freelance": "Freelance",
    "experience.employmentType.fulltime": "Full-time",
    "experience.workType.hybrid": "Hybrid",
    "experience.workType.remote": "Remote",
    "experience.workType.onsite": "On-site",
    "experience.talimHub.title": "Frontend Developer",
    "experience.talimHub.description": "I joined this great team as a frontend developer and I am looking forward to working with them on other big projects. My main task is to connect with the backend and add some creativity to the users.",
    "experience.chegbox.title": "Software Engineer",
    "experience.chegbox.description": "I am developing from scratch a platform for announcing products and services based on discounts - the Checkbox.uz project. As a Software Engineer, I am independently developing the frontend and backend parts of the project.",
    "experience.izisol.title": "Frontend Developer",
    "experience.izisol.description": "Worked as a Junior Frontend Developer on a service website at Izisol company. Fixed various front-end bugs on the site and improved mobile responsiveness. Worked on the site's SEO optimization.",
    "experience.najot.title": "Teacher Assistant",
    "experience.najot.description": "Worked as an assistant teacher in Foundation and Standard courses in the Frontend direction. Helped students with coding during and outside of class, and with reviewing topics they didn't understand.",
    "experience.sdct.title": "Frontend Developer",
    "experience.sdct.description": "Actively participated as a Frontend developer in the Student Chat project. Developed user interfaces based on ReactJS + TypeScript. Developed skills in teamwork, code management via Git, and collaboration.",
    "experience.skills.frontend": "Front-End Development",
    "experience.skills.andMore": "and +9 skills",
    "experience.technologies": "Technologies",

    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.project1": "E-commerce Platform",
    "portfolio.project1Desc":
      "Modern online store built with NextJs and TypeScript",
    "portfolio.project2": "Portfolio App",
    "portfolio.project2Desc": "Trend Solution freelance kompaniyasi uchun portfolio web sahiasi",

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

    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "Technologies and tools I use",
    "skills.frontend.title": "Frontend",
    "skills.backend.title": "Backend",
    "skills.design.title": "Design",
    "skills.tools.title": "Tools",
    "skills.web.title": "Web",
    "skills.mobile.title": "Mobile",
    "skills.additional.title": "Additional Skills",
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
