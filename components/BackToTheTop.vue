<template>
	<Transition name="fade">
		<div v-if="showBackToTop" class="back-to-the-top">
			<NuxtLink :title="$t('backToTop')" to="#top">
				<LogoIcon class="logo-small" />
			</NuxtLink>
		</div>
	</Transition>
</template>

<script setup lang="ts">
const headerVisible = useHeaderVisibility()
const menuVisible = useMenuVisibility()

const showBackToTop = ref(false)

// Main logic: update when header/menu visibility changes
watch([headerVisible, menuVisible], ([header, menu]) => {
	showBackToTop.value = !header && !menu
})

// Optional: force re-check on route change (useful for i18n jumps)
const route = useRoute()
watch(() => route.fullPath, () => {
	showBackToTop.value = !headerVisible.value && !menuVisible.value
})
</script>

<style lang="scss">
/* These must be global or at root level in scoped styles */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.back-to-the-top {
	position: fixed;
	z-index: 5;
	bottom: 0;
	right: 0;

	mix-blend-mode: difference;
	mix-blend-mode: exclusion;

	a {
		padding-inline: 1.5rem !important;
		display: flex;
		align-items: center;
		justify-content: center;

		transition: filter 1s;
		filter: drop-shadow(0 0 0.1em var(--accent75)) contrast(1.075)
			brightness(1.05);

		.logo-image {
			width: 6.6rem;
			aspect-ratio: 1;
		}

		&:hover .logo-image {
			filter: drop-shadow(0 0 0.15em var(--accent75)) contrast(1.125)
				brightness(1.1);
		}
	}
}
</style>
