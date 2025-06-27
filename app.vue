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
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js',
      async: true,
      defer: true,
      tagPosition: 'body',
    }
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
  /* font-size: min(1.33vmax, 3vmin); */
  /* === Базові кольори === */
  --white: #ffffff;
  --white50: #ffffff80;
  --black: #000000;

  /* === Основна палітра === */
  --bg: #f1f6fc;                    /* Основний фон */
  --bg80: #f1f6fccc;                    /* Основний фон 100% */
  --bg75: #f1f6fcbf;                    /* Основний фон 75% */
  --bg66: #f1f6fca8;                    /* Основний фон 66% */
  --bg50: #f1f6fc80;                    /* Основний фон 50% */
  --bg33: #f1f6fc54;                    /* Основний фон 33% */
  --bg25: #f1f6fc40;                    /* Основний фон 25% */
  --text-main: #040404;             /* Основний текст (gun-metal) */
  --text-main: #353e43;             /* Основний текст (gun-metal) */
  --text-main75: #353e43bf;             /* Основний текст (gun-metal) */
  --text-main66: #353e43a8;             /* Основний текст (gun-metal) */
  --text-main50: #353e4380;             /* Основний текст (gun-metal) */
  --text-main33: #353e4354;             /* Основний текст (gun-metal) */
  --text-main25: #353e4340;             /* Основний текст (gun-metal) */
  /* Головний акцент (blue-shade) */
  --accent: #59cbe8;                /* Головний акцент (blue-shade) */
  --accent75: #59cbe8bf;                /* Головний акцент (blue-shade) 33% */
  --accent66: #59cbe8a8;                /* Головний акцент (blue-shade) 66% */
  --accent50: #59cbe880;                /* Головний акцент (blue-shade) 33% */
  --accent33: #59cbe854;                /* Головний акцент (blue-shade) 33% */
  --accent25: #59cbe840;                /* Головний акцент (blue-shade) 25% */
  --accent10: #59cbe80b;                /* Головний акцент (blue-shade) 25% */

  /* === Додаткові акценти === */
  --accent-light: #68e2fa;          /* Світлий акцент (electric-blue-nv) */
  --accent-cyan: #00ffff;           /* Яскраво-бірюзовий */
  --accent-electric: #00f0ff;       /* Електричний блакитний */

  /* === Службові кольори === */
  --gray: #d9d9d9;                  /* Світло-сірий, межі, бордери */
  --powder-blue: #b6d0e2;           /* Пудровий синій, фони секцій */
  --brown-deep: #003539;            /* Темно-коричневий (може бути для контрасту, футера) */

   /* cursor: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='10' fill='transparent' stroke='%2359cbe880' stroke-width='4'/%3E%3Ccircle cx='24' cy='24' r='10' fill='none' stroke='%23353e4380' stroke-width='1'/%3E%3Ccircle cx='24' cy='24' r='16' fill='none' stroke='%2359cbe880' stroke-width='10'/%3E%3Ccircle cx='24' cy='24' r='20' fill='transparent' stroke='%2359cbe880' stroke-width='4'/%3E%3Ccircle cx='24' cy='24' r='20' fill='none' stroke='%23353e4380' stroke-width='1'/%3E%3C/svg%3E") 24 24, auto; */

cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><defs><filter id='shadow' x='-50%' y='-50%' width='400%' height='400%'><feDropShadow dx='0' dy='0' stdDeviation='5' flood-color='%2359cbe8' flood-opacity='1'/></filter></defs><circle cx='32' cy='32' r='20' fill='%2359cbe880' stroke='%2359cbe840' stroke-width='1' filter='url(%23shadow)'/><circle cx='32' cy='32' r='20' fill='%2359cbe880' stroke='%2359cbe840' stroke-width='1'/><circle cx='32' cy='32' r='12' fill='transparent'/></svg>") 32 32, auto;

}

@media (orientation: portrait) {
  :root {
    font-size: max(1.1vh, 1.8vw);
  }
}
@media (orientation: landscape) {
  :root {
    font-size: max(1.8vh, 1.1vw);
  }
}

body {
  color: var(--text-main);
}
</style>
