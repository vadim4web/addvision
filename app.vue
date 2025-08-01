<script setup>
const { t, locale } = useI18n()

useHead({
	htmlAttrs: {
		lang: locale,
	},
	title: t('meta.title'),
	meta: [
		{
			name: 'description',
			content: t('meta.description'),
		},
		{ property: 'og:title', content: t('meta.title') },
		{ property: 'og:description', content: t('meta.description') },
		{ property: 'og:type', content: 'website' },
		{
			property: 'og:url',
			content: `https://addvision.dev${locale.value === 'uk' ? '' : '/' + locale.value}`,
		},
		{ property: 'og:image', content: '/og-image.jpg' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: t('meta.title') },
		{ name: 'twitter:description', content: t('meta.description') },
		{ name: 'twitter:image', content: '/og-image.jpg' },
		{ name: 'theme-color', content: '#ffffff' },
		{ name: 'msapplication-TileColor', content: '#ffffff' },
		{ name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
	],
	link: [
		{ rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
		{ rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
		{ rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
		{ rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
		{
			rel: 'apple-touch-icon',
			sizes: '114x114',
			href: '/apple-icon-114x114.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '120x120',
			href: '/apple-icon-120x120.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '144x144',
			href: '/apple-icon-144x144.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '152x152',
			href: '/apple-icon-152x152.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/apple-icon-180x180.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '192x192',
			href: '/android-icon-192x192.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: '/favicon-32x32.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '96x96',
			href: '/favicon-96x96.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: '/favicon-16x16.png',
		},
		{ rel: 'manifest', href: '/manifest.json' },
		{ rel: 'alternate', hreflang: 'x-default', href: 'https://addvision.dev/' },
		{ rel: 'alternate', hreflang: 'uk', href: 'https://addvision.dev/' },
		{ rel: 'alternate', hreflang: 'ru', href: 'https://addvision.dev/ru/' },
		{ rel: 'alternate', hreflang: 'en', href: 'https://addvision.dev/en/' },
	],
	script: [
		{
			src: 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js',
			async: true,
			defer: true,
			tagPosition: 'body',
		},
	],
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
	/* --bg: #f1f6fc; */ /* Основний фон 100% */
	--bg: #0e0903; /* Основний фон */
	--bg: #0e0903; /* Основний фон */
	--bg80: #0e0903cc; /* Основний фон 100% */
	--bg75: #0e0903bf; /* Основний фон 75% */
	--bg66: #0e0903a8; /* Основний фон 66% */
	--bg50: #0e090380; /* Основний фон 50% */
	--bg33: #0e090354; /* Основний фон 33% */
	--bg25: #0e090340; /* Основний фон 25% */
	/* --text-main: #040404;
  --text-main: #353e43;    */ /* Основний текст (gun-metal) */
	--text-main: #f1f6fc;
	--text-main75: #f1f6fcbf;
	--text-main66: #f1f6fca8;
	--text-main50: #f1f6fc80;
	--text-main33: #f1f6fc54;
	--text-main25: #f1f6fc40;
	/* Головний акцент (blue-shade) */
	--accent: #00ffef; /* Головний акцент (blue-shade) */
	--accent75: #00ffefbf; /* Головний акцент (blue-shade) 33% */
	--accent66: #00ffefa8; /* Головний акцент (blue-shade) 66% */
	--accent50: #00ffef80; /* Головний акцент (blue-shade) 33% */
	--accent33: #00ffef54; /* Головний акцент (blue-shade) 33% */
	--accent25: #00ffef40; /* Головний акцент (blue-shade) 25% */
	--accent10: #00ffef0b; /* Головний акцент (blue-shade) 25% */

	/* === Додаткові акценти === */
	--accent-light: #68e2fa; /* Світлий акцент (electric-blue-nv) */
	--accent-cyan: #00ffef; /* Яскраво-бірюзовий */
	--accent-electric: #00f0ff; /* Електричний блакитний */

	/* === Службові кольори === */
	--gray: #808080; /* Світло-сірий, межі, бордери */
	--powder-blue: #b6d0e2; /* Пудровий синій, фони секцій */
	--brown-deep: #003539; /* Темно-коричневий (може бути для контрасту, футера) */
	--brown-deep: #00aeb8; /* Темно-коричневий (може бути для контрасту, футера) */

	--night-blue: #0A1930;
	--dark-night-blue: #10182A;
	--dark-green: #082424;

	cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 75 75'><defs><filter id='blur-glow' x='-125%' y='-125%' width='250%' height='250%'><feGaussianBlur in='SourceGraphic' stdDeviation='1' result='blur'/><feDropShadow dx='0' dy='0' stdDeviation='10' flood-color='%23cc40ff' flood-opacity='1'/></filter></defs><circle cx='38' cy='38' r='25' fill='%23ffffffa8' stroke='%2300ffef' stroke-width='1' filter='url(%23blur-glow)'/><circle cx='38' cy='38' r='25' fill='%2300ffef40' stroke='%2300ffef40' stroke-width='1'/><circle cx='38' cy='38' r='15' fill='transparent' stroke-width='10'/></svg>") 38 38, auto;
}
</style>
