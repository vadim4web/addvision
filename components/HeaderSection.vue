<template>
  <header id="top" ref="headerRef" class="header-section">
    <LogoBlock />
    <NavigationMenu />
    <LanguageSwitcher />
  </header>
</template>

<script setup>
const headerRef = ref(null)
const headerVisible = useHeaderVisibility()

useObserveVisibility(headerRef, visible => (headerVisible.value = visible))
</script>

<style lang="scss">
.header-section {
  height: 6.6rem;
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 1.5fr 0.5fr;
  align-content: center;
  justify-items: center;
  padding-inline: 0.25rem;
  z-index: 2;
  font-size: 1.4rem;
  position: relative;

  & > * {
    width: 100%;
  }

  a {
    padding: 0.5em 0.1em;
  }
}

@media (max-width: 55rem) {
  .header-section {
    grid-template-columns: 1fr 0.25fr 1fr;
  }
}
</style>
