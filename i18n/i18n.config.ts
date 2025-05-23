export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "uk",
  normalizeLocale: true, // Автоматично прибирає суфікси '-US', '-UA'
  messages: {
    uk: {
      meta: {
        title: "AddVision — агенція цифрового втілення візії",
        description:
          "Дизайн сайтів, брендинг, астропсихологія та ambient-досвід. Допомагаємо втілити вашу ідею онлайн та офлайн.",
      },
      agency: "агенція",
      navigation: {
        title: "Головна навігація",
        cases: "Кейси",
        "why-us": "Чому ми",
        services: "Послуги",
        contacts: "Контакти",
      },
      "we-do": {
        sences: "сенси",
        texts: "тексти",
        visual: "візуал",
        dev: "розробка",
      },
      moto: "digital-рішення для втілення вашої візії",
      aria: {
        hero: "Головний банер",
        cases: "Кейси",
        casesVideo: "Відео кейсів",
        whyUs: "Чому ми",
        whatWeDo: "Що ми робимо",
        services: "Послуги",
        testimonials: "Відгуки клієнтів",
        faq: "Поширені запитання",
        contact: "Контактна інформація",
      },
    },
    ru: {
      meta: {
        title: "AddVision — агентство цифровой реализации идей",
        description:
          "Дизайн сайтов, брендинг, астропсихология и ambient-опыт. Помогаем воплотить вашу идею онлайн и офлайн.",
      },
      agency: "агентство",
      navigation: {
        title: "Главная навигация",
        cases: "Кейсы",
        "why-us": "Почему мы",
        services: "Услуги",
        contacts: "Контакты",
      },
      "we-do": {
        sences: "смыслы",
        texts: "тексты",
        visual: "визуал",
        dev: "разработка",
      },
      moto: "digital-решения для воплощения вашей визии",
      aria: {
        hero: "Главный баннер",
        cases: "Кейсы",
        casesVideo: "Видео-кейсы",
        whyUs: "Почему мы",
        whatWeDo: "Что мы делаем",
        services: "Услуги",
        testimonials: "Отзывы клиентов",
        faq: "Часто задаваемые вопросы",
        contact: "Контактная информация",
      },
    },
    en: {
      meta: {
        title: "AddVision — digital agency to realize your vision",
        description:
          "Web design, branding, astro-psychology, and ambient experience. We help bring your vision to life online and offline.",
      },
      agency: "agency",
      navigation: {
        title: "Main navigation",
        cases: "Cases",
        "why-us": "Why us",
        services: "Services",
        contacts: "Contacts",
      },
      "we-do": {
        sences: "senses",
        texts: "texts",
        visual: "visual",
        dev: "development",
      },
      moto: "digital solutions to embody your vision",
      aria: {
        hero: "Hero banner",
        cases: "Cases",
        casesVideo: "Video cases",
        whyUs: "Why us",
        whatWeDo: "What we do",
        services: "Services",
        testimonials: "Client testimonials",
        faq: "Frequently asked questions",
        contact: "Contact information",
      },
    },
  },
}));
