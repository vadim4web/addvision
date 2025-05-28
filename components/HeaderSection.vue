<template>
  <header class="header-section">
    <LogoBlock />
    <NavigationMenu />
    <LanguageSwitcher />
  </header>
</template>

<script setup>
// нічого не треба, все реактивне і через i18n
</script>

<style lang="scss">
.header-section {
  color: var(--bg);
  height: 6.6rem;
  display: grid;
  gap: 0.25rem;
  grid-template-columns: 1fr 1.5fr 0.5fr;
  align-content: center;
  justify-items: center;
  padding-inline: 0.25rem;
  position: relative;
  z-index: 2;
  font-size: 1.4rem;

  & > * {
    width: 100%;
  }

  a {
    padding: 0.5em 0.1em;
  }
}

@media (max-width: 54rem) {
  .header-section {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
