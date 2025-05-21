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
  grid-template-columns: 1.5fr 2fr 1fr;
  gap: 1rem;
  padding-inline: 1rem;
  align-items: center;

  position: relative;

  & > * {
    width: 100%;
  }

  a {
    padding: 0.5em;
  }
}

@media (max-width: 960px) {
  .header-section {
    grid-template-columns: 3fr 1fr 2fr;
  }
}
</style>
