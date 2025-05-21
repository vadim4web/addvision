// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  plugins: ['~/plugins/v-click-outside.ts'],

  css: [
    '~/assets/css/reset.css',
    '~/assets/css/typography.css',
  ],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'uk',
    locales: [
      { code: 'uk', iso: 'uk-UA', file: 'uk.json', name: 'Українська' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'Русский' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
    ],
    lazy: true,
    langDir: 'locales/',
  },

  googleFonts: {
    families: {
      // Inter з усіма потрібними вагами + курсив
      Inter: {
        wght: [400, 500, 600, 700], // Regular, Medium, SemiBold, Bold
        ital: [400],                // Inter Italic
      },

      // Yanone Kaffeesatz Light
      'Yanone Kaffeesatz': [300],  // Light

      // Montserrat Regular + Medium
      Montserrat: [400, 500],

      // Bebas Neue Regular (одна вага)
      'Bebas Neue': true,

      // Kanit Black
      Kanit: [900],

      // Galada Regular
      Galada: true,
    },

    display: 'swap',       // Покращення UX при завантаженні шрифтів
    prefetch: true,        // DNS Prefetch
    preconnect: true,      // Попереднє з'єднання
    preload: true,         // Preload у <head>
    useStylesheet: true,   // Використання <link rel="stylesheet">
    subsets: ['latin', 'cyrillic'], // Якщо потрібно для української
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts'
  ]
})