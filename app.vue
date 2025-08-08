<script setup>
const { t, locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale,
  },
  title: t("meta.title"),
  meta: [
    {
      name: "description",
      content: t("meta.description"),
    },
    { property: "og:title", content: t("meta.title") },
    { property: "og:description", content: t("meta.description") },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: `https://addvision.dev${locale.value === "uk" ? "" : "/" + locale.value}`,
    },
    { property: "og:image", content: "/og-image.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: t("meta.title") },
    { name: "twitter:description", content: t("meta.description") },
    { name: "twitter:image", content: "/og-image.jpg" },
    { name: "theme-color", content: "#ffffff" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
  ],
  link: [
    { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
    { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
    { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
    { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/android-icon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    { rel: "manifest", href: "/manifest.json" },
    { rel: "alternate", hreflang: "x-default", href: "https://addvision.dev/" },
    { rel: "alternate", hreflang: "uk", href: "https://addvision.dev/" },
    { rel: "alternate", hreflang: "ru", href: "https://addvision.dev/ru/" },
    { rel: "alternate", hreflang: "en", href: "https://addvision.dev/en/" },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js",
      async: true,
      defer: true,
      tagPosition: "body",
    },
  ],
});
</script>

<template>
  <!-- Global SVG Filter -->
  <svg
    aria-hidden="true"
    style="position: absolute; width: 0; height: 0; overflow: hidden"
  >
    <defs>
      <filter
        id="svg-shade"
        color-interpolation-filters="sRGB"
        height="200%"
        width="200%"
        x="-50%"
        y="-50%"
      >
        <feDropShadow
          dx="0"
          dy="0"
          flood-color="#082424"
          flood-opacity="1"
          stdDeviation="2"
        />
      </filter>
    </defs>
  </svg>

  <NuxtRouteAnnouncer />
  <SmartHighlighter />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <FooterSection />
</template>

<style lang="scss">
:root {
  /* === Базові кольори === */
  --white: #ffffff;
  --white50: #ffffff80;
  --black: #000000;

  /* === Основна палітра === */
  --bg: #0e0903;
  --bg90: #0e0903e6;
  --bg80: #0e0903cc;
  --bg75: #0e0903bf;
  --bg66: #0e0903a8;
  --bg50: #0e090380;
  --bg33: #0e090354;
  --bg25: #0e090340;
  --bg10: #0e09030b;
  /* Основний текст (gun-metal) */
  --text-main: #f1f6fc;
  --text-main75: #f1f6fcbf;
  --text-main66: #f1f6fca8;
  --text-main50: #f1f6fc80;
  --text-main33: #f1f6fc54;
  --text-main25: #f1f6fc40;
  --text-main10: #f1f6fc0b;
  /* Головний акцент (blue-shade) */
  --accent: #00ffef;
  --accent90: #00ffeee6;
  --accent80: #00ffefcc;
  --accent75: #00ffefbf;
  --accent66: #00ffefa8;
  --accent50: #00ffef80;
  --accent33: #00ffef54;
  --accent25: #00ffef40;
  --accent10: #00ffef0b;

  --anti-accent: #ff0010;
  --anti-accent75: #ff0010bf;
  --anti-accent66: #ff0010a8;
  --anti-accent50: #ff001080;
  --anti-accent33: #ff001054;
  --anti-accent25: #ff001040;
  --anti-accent10: #ff00100b;

  /* === Додаткові акценти === */
  --accent-light: #68e2fa; /* Світлий акцент (electric-blue-nv) */
  --accent-cyan: #00ffef; /* Яскраво-бірюзовий */
  --accent-electric: #00f0ff; /* Електричний блакитний */

  /* === Службові кольори === */
  --gray: #808080;
  --powder-blue: #b6d0e2;
  --brown-deep: #003539;
  --brown-deep: #00aeb8;

  --night-blue: #0a1930;
  --dark-night-blue: #10182a;
  --dark-green: #082424;
}

.font-14 {
  font-size: 1.4rem;
}
.font-16 {
  font-size: 1.6rem;
}
.font-20 {
  font-size: 2rem;
}
.font-24 {
  font-size: 2.4rem;
}
.font-26 {
  font-size: 2.6rem;
}
.font-28 {
  font-size: 2.8rem;
}
.font-34 {
  font-size: 3.4rem;
}
.font-36 {
  font-size: 3.6rem;
}
.font-40 {
  font-size: 4rem;
}
.font-48 {
  font-size: 4.8rem;
}
.font-54 {
  font-size: 5.4rem;
}
.font-64 {
  font-size: 6.4rem;
}
.font-88 {
  font-size: 8.8rem;
}
.font-110 {
  font-size: 11rem;
}
.font-200 {
  font-size: 20rem;
}
</style>
