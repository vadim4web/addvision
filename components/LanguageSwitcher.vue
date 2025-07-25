<script setup>
const languages = [
	{ code: 'uk', label: 'Ua' },
	{ code: 'ru', label: 'Ru' },
	{ code: 'en', label: 'En' },
]
</script>

<template>
	<ul class="language-switcher">
		<li v-for="lang in languages" :key="lang.code">
			<NuxtLinkLocale
				:aria-current="$i18n.locale === lang.code ? 'page' : null"
				class="language-link"
				:class="{ active: $i18n.locale === lang.code }"
				:data-text="lang.label"
				:locale="lang.code"
				to="/"
			>{{ lang.label }}</NuxtLinkLocale>
		</li>
	</ul>
</template>

<style lang="scss">
.language-switcher {
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 0.25rem;
	z-index: 1;

	@media (orientation: portrait), (max-width: 1080px) {
		justify-content: space-around;
		max-width: 10rem;
	}

	@media (orientation: portrait) and (max-width: 1080px) {
		.language-link:before {
			top: 0;
		}
	}
}

.language-link {
	overflow: hidden;
	position: relative;
	transition: color var(--transition-default) ease;

	&.active, &:hover {
		color: var(--white);
	}

	&::after {
		height: 1.25em;
		position: absolute;
		content: '';
		width: calc(100% - 0.65em);
		bottom: 0.45em;
		left: 0.35em;
		background: var(--accent50);
		transition: background var(--transition-default) ease, filter var(--transition-filter) ease;
		z-index: -1;
		filter: drop-shadow(0 0 0 var(--accent75)) contrast(1) brightness(1)
			hue-rotate(0deg);
		-webkit-filter: drop-shadow(0 0 0 var(--accent75)) contrast(1) brightness(1)
			hue-rotate(0deg);
	}

	&:not(.active)::after {
		background: transparent;
	}

	&:hover::after {
		background: var(--accent50);
		filter: drop-shadow(0 0 0.15rem var(--accent75)) contrast(1.15)
		brightness(1.15) hue-rotate(360deg);
	-webkit-filter: drop-shadow(0 0 0.15rem var(--accent75)) contrast(1.15)
		brightness(1.15) hue-rotate(360deg);
	}
}
</style>
