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
  min-height: 5.5rem;
  display: grid;
  gap: 0.25rem;
  grid-template-columns: 1fr 1.5fr 1fr;
  padding-inline: 0.25rem;
  align-items: center;

  position: relative;
  z-index: 2;

  & > * {
    width: 100%;
  }

  a {
    padding: 0.5em 0.25em;
  }
}

@media (max-width: 960px) {
  .header-section {
    grid-template-columns: 2fr 3fr 2fr;
  }
}
</style>
