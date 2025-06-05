export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "uk",
  normalizeLocale: true, // Автоматично прибирає суфікси '-US', '-UA'
  messages: {
    uk: {
      meta: {
        title: "Add Vision — агенція цифрового втілення візії",
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
      what: {
        title: "ЩО МИ ВКЛЮЧАЄМО<br><span class='brown-deep'>В</span>&nbsp;<span class='accent'>УПАКОВКУ</span> <span class='brown-deep'>БІЗНЕСУ?</span>",
        sections: {
          senses: {
            title: 'Сенси',
            items: [
              'концепція бренду',
              'місія та бачення',
              'позиціонування',
              'цінності бренду',
              'дослідження аудиторії',
            ],
          },
          texts: {
            title: 'Тексти',
            items: [
              'слогани',
              'продажні тексти',
              'описи продуктів',
              'сторітелінг',
              'маніфести',
            ],
          },
          visual: {
            title: 'Візуал',
            items: [
              'логотип',
              'айдентика',
              'фірмовий стиль',
              'соцмедіа-контент',
              'motion-дизайн',
            ],
          },
          dev: {
            title: 'Розробка',
            items: [
              'сайт або лендінг',
              'веб-додатки',
              'веб-анімація',
              'банер/реклама',
              'інтерактив у соцмережах',
            ],
          },
        },
        cta: "Індивідуально підбираємо комплекс послуг під ваш бізнес для максимального результату.",
      },
      why: {
        title: "ЧОМУ <span class='accent'>МИ</span>?",
        coop: "<span class='accent'>Спів</span>творення",
        values: " — це партнерство, це більше за відносини “замовник-підрядник”. Ми прагнемо бути корисними з першої зустрічі, допомогти, вкласти наш досвід у новий проект. Якщо ми працюємо з вами, значить безперечно віримо у нього.",
        stats: [
          'Років досвіду',
          'Задоволених клієнтів',
          'Клієнтів повертаються',
          'Реалізованих проєктів'
        ],
        cta: "ПРОРАХУВАТИ ВАРТІСТЬ САЙТУ",
      },
      cases: {
        title: "КЕЙСИ",
      },
      services: {
        title: "НАШІ ПОСЛУГИ",
      },
      testimonials: {
        title: "ВІДГУКИ <span class='accent'>КЛІЄНТІВ</span>",
      },
      faq: {
        title: "ЧАСТІ ПИТАННЯ",
      },
      contacts: {
        title: "КОНТАКТИ",
      },
      rights: "Усі права захищено.",
    },
    ru: {
      meta: {
        title: "Add Vision — агентство цифровой реализации идей",
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
      what: {
        title: "ЧТО МЫ ВКЛЮЧАЕМ<br><span class='brown-deep'>В</span>&nbsp;<span class='accent'>УПАКОВКУ</span> <span class='brown-deep'>БИЗНЕСА?</span>",
        sections: {
          senses: {
            title: 'Смыслы',
            items: [
              'концепция бренда',
              'миссия и видение',
              'позиционирование',
              'ценности бренда',
              'исследование аудитории',
            ],
          },
          texts: {
            title: 'Тексты',
            items: [
              'слоганы',
              'продающие тексты',
              'описания продуктов',
              'сторителлинг',
              'манифесты',
            ],
          },
          visual: {
            title: 'Визуал',
            items: [
              'айдентика',
              'логотип',
              'фирменный стиль',
              'контент для соцсетей',
              'motion-дизайн',
            ],
          },
          dev: {
            title: 'Разработка',
            items: [
              'сайт или лендинг',
              'веб-приложения',
              'веб-анимация',
              'баннер/реклама',
              'интерактив в соцсетях',
            ],
          },
        },
        cta: "Индивидуально подбираем комплекс услуг под ваш бизнес для максимального результата.",
      },
      why: {
        title: "ПОЧЕМУ <span class='accent'>МЫ</span>?",
        coop: "<span class='accent'>Со</span>творение",
        values: " — это партнёрство, это больше, чем отношения “заказчик-исполнитель”. Мы стремимся быть полезными с первой встречи, помочь, вложить наш опыт в новый проект. Если мы работаем с вами — значит, безусловно верим в него.",
        stats: [
          'Лет опыта',
          'Довольных клиентов',
          'Клиенты возвращаются',
          'Реализованных проектов'
        ],
        cta: "РАССЧИТАТЬ СТОИМОСТЬ САЙТА",
      },
      cases: {
        title: "КЕЙСЫ",
      },
      services: {
        title: "НАШИ УСЛУГИ",
      },
      testimonials: {
        title: "ОТЗЫВЫ <span class='accent'>КЛИЕНТОВ</span>",
      },
      faq: {
        title: "ЧАСТЫЕ ВОПРОСЫ",
      },
      contacts: {
        title: "КОНТАКТЫ",
      },
      rights: "Все права защищены.",
    },
    en: {
      meta: {
        title: "Add Vision — digital agency to realize your vision",
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
      what: {
        title: "WHAT WE INCLUDE<br><span class='brown-deep'>IN</span>&nbsp;<span class='accent'>BUSINESS</span> <span class='brown-deep'>BRANDING?</span>",
        sections: {
          senses: {
            title: 'Senses',
            items: [
              'brand concept',
              'mission and vision',
              'positioning',
              'brand values',
              'audience research',
            ],
          },
          texts: {
            title: 'Texts',
            items: [
              'slogans',
              'sales copy',
              'product descriptions',
              'storytelling',
              'manifestos',
            ],
          },
          visual: {
            title: 'Visual',
            items: [
              'identity',
              'logo',
              'brand style',
              'social content',
              'motion design',
            ],
          },
          dev: {
            title: 'Development',
            items: [
              'website or landing',
              'web apps',
              'web animation',
              'banner/ads',
              'social media interactive',
            ],
          },
        },
        cta: "We tailor a service package specifically for your business to achieve maximum results.",
      },
      why: {
        title: "WHY <span class='accent'>US</span>?",
        coop: "<span class='accent'>Co</span>creation",
        values: " is a partnership — more than just a client-contractor relationship. We aim to bring value from the very first meeting, contribute, and invest our experience into each new project. If we work with you, it means we truly believe in it.",
        stats: [
          'Years of experience',
          'Happy clients',
          'Clients return',
          'Projects completed'
        ],
        cta: "ESTIMATE WEBSITE COST",
      },
      cases: {
        title: "CASES",
      },
      services: {
        title: "OUR SERVICES",
      },
      testimonials: {
        title: "CLIENT <span class='accent'>TESTI<wbr>MONIALS</span>",
      },
      faq: {
        title: "FREQUENTLY ASKED QUESTIONS",
      },
      contacts: {
        title: "CONTACTS",
      },
      rights: "All rights reserved.",
    },
  },
}));
