<script setup>
const { locale } = useI18n()

const languages = [
  { code: 'uk', label: 'Ua' },
  { code: 'ru', label: 'Ru' },
  { code: 'en', label: 'En' },
]
</script>

<template>
  <ul class="language-switcher">
    <li v-for="lang in languages" :key="lang.code">
      <NuxtLink
        :to="$localePath('index', lang.code)"
        :aria-current="locale === lang.code ? 'page' : null"
        :class="{ active: locale === lang.code }"
        class="language-link"
      >
        {{ lang.label }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss">
.language-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index: 1;
}

.language-link {
  position: relative;
  transition: color 0.25s, font-weight 0.25s;

  // Активний стан + ховер/фокус
  &.active,
  &:hover,
  &:focus {
    color: var(--accent);
  }

  &:hover,
  &:focus {
    font-weight: bolder;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0.33em;
    left: 0.25em;
    height: 2px;
    width: 0;
    transition: width 0.25s, background 0.25s;
  }

  &:not(.active):after {
    background: var(--text-main);
  }

  &:is(.active):after {
    background: var(--accent);
  }

  // Показуємо лінію при ховері, фокусі чи активному стані
  &:hover::after,
  &:focus::after {
    width: calc(100% - 0.5em);
    background: var(--accent);
  }
}
</style>
