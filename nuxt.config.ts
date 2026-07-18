// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.NUXT_APP_BASE_URL || '/addvision/'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // -------------------------------------------------
  // 🔥 REQUIRED for GitHub Pages (subfolder hosting)
  // -------------------------------------------------
  app: {
    baseURL,
    cdnURL: baseURL,
  },

  // -------------------------------------------------
  // 🔥 Fully static site for GitHub Pages
  // -------------------------------------------------
  nitro: {
    preset: 'github-pages', // ⬅️ auto-optimized for GH Pages
    prerender: {
      crawlLinks: true,
      routes: ['/', '/ru', '/en'],
    },
  },

  // GitHub Pages does NOT support SSR
  ssr: false,

  // -------------------------------------------------
  // Plugins
  // -------------------------------------------------
  plugins: [
    '~/plugins/v-click-outside.ts',
    '~/plugins/visibility-state.ts'
  ],

  // -------------------------------------------------
  // CSS
  // -------------------------------------------------
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/typography.css',
    '~/assets/css/common.css',
    '~/assets/css/utility.css',
    '~/assets/css/responsiveness.css',
  ],

  // -------------------------------------------------
  // 🌍 i18n
  // -------------------------------------------------
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'uk',
    locales: [
      { code: 'uk', iso: 'uk', name: 'Українська' },
      { code: 'ru', iso: 'ru', name: 'Русский' },
      { code: 'en', iso: 'en', name: 'English' },
    ],
    lazy: false,
    vueI18n: './i18n.config.ts',
    baseUrl: 'https://vadim4web.github.io/addvision', // ⬅️ fixes SEO canonical links
  },

  // -------------------------------------------------
  // Google Fonts
  // -------------------------------------------------
  googleFonts: {
    families: {
      Inter: {
        wght: [400, 500, 600, 700],
        ital: [400],
      },
      'Yanone Kaffeesatz': [300],
      Montserrat: [400, 500],
      'Bebas Neue': true,
      Kanit: [900],
      Galada: true,
    },

    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    useStylesheet: true,
    subsets: ['latin', 'cyrillic'],
  },

  // -------------------------------------------------
  // Modules
  // -------------------------------------------------
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],
})
