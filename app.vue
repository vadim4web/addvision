<script setup>
const { t, locale } = useI18n()

useHead({
  htmlAttrs: {
      lang: locale
  },
  title: t('meta.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.description')
    },
    { property: 'og:title', content: t('meta.title') },
    { property: 'og:description', content: t('meta.description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `https://addvision.dev${locale.value === 'uk' ? '' : '/' + locale.value}` },
    { property: 'og:image', content: '/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('meta.title') },
    { name: 'twitter:description', content: t('meta.description') },
    { name: 'twitter:image', content: '/og-image.jpg' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://addvision.dev/' },
    { rel: 'alternate', hreflang: 'uk', href: 'https://addvision.dev/' },
    { rel: 'alternate', hreflang: 'ru', href: 'https://addvision.dev/ru/' },
    { rel: 'alternate', hreflang: 'en', href: 'https://addvision.dev/en/' }
  ]
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <FooterSection />
</template>

<style lang="scss">
:root {
  /* 👇 Цей варіант особливо гарно працює для сучасних екранів (телефони → ноутбуки → 4K дисплеї). */
  font-size: clamp(0.875rem, 0.6rem + 1vw, 1.125rem);
  /* === Базові кольори === */
  --white: #ffffff;
  --black: #000000;

  /* === Основна палітра === */
  --bg: #f1f6fc;                    /* Основний фон */
  --bg66: #f1f6fca8;                    /* Основний фон 66% */
  --bg80: #f1f6fccc;                    /* Основний фон 66% */
  --text-main: #040404;             /* Основний текст (gun-metal) */
  --text-main50: #353e4380;             /* Основний текст (gun-metal) */
  --accent: #59cbe8;                /* Головний акцент (blue-shade) */
  --accent33: #59cbe854;                /* Головний акцент (blue-shade) 33% */
  --accent50: #59cbe880;                /* Головний акцент (blue-shade) 33% */

  /* === Додаткові акценти === */
  --accent-light: #68e2fa;          /* Світлий акцент (electric-blue-nv) */
  --accent-cyan: #00ffff;           /* Яскраво-бірюзовий */
  --accent-electric: #00f0ff;       /* Електричний блакитний */

  /* === Службові кольори === */
  --gray: #d9d9d9;                  /* Світло-сірий, межі, бордери */
  --powder-blue: #b6d0e2;           /* Пудровий синій, фони секцій */
  --brown-deep: #003539;            /* Темно-коричневий (може бути для контрасту, футера) */
}

body {
  color: var(--text-main);
}

.border {
  border-color: var(--gray);
}
</style>
