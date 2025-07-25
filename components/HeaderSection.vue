<template>
	<header id="top" ref="headerRef" class="header-section">
		<div class="content">
			<LogoBlock />
			<NavigationMenu />
			<LanguageSwitcher />
		</div>
	</header>
</template>

<script setup>
const headerRef = ref(null)
const headerVisible = useHeaderVisibility()

useObserveVisibility(headerRef, visible => (headerVisible.value = visible))
</script>

<style lang="scss">
.header-section .content {
	height: 6.6rem;
	display: grid;
	grid-template-columns: 1fr 1.5fr 0.5fr;
	align-content: center;
	justify-items: center;
	z-index: 2;
	font-size: 1.4rem;
	position: relative;

	& > * {
		width: 100%;
	}
}

@media (max-width: 1080px) {
	.header-section .content {
		grid-template-columns: 1fr 0.25fr 1fr;
	}
}
</style>
