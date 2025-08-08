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
const headerRef = ref(null);
const headerVisible = useHeaderVisibility();

useObserveVisibility(headerRef, (visible) => (headerVisible.value = visible));
</script>

<style lang="scss">
.header-section .content {
  height: var(--header-height);
  display: grid;
  grid-template-columns: 1fr 1.5fr 0.5fr;
  align-content: center;
  justify-items: center;
  font-size: 1.4rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

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
