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
        :data-text="lang.label"
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

  // Активний стан + ховер/фокус
  &.active {
    color: var(--accent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0.33em;
    left: 0.25em;
    height: 2px;
    width: 0;
    transition: width 0.5s, background 0.5s;
  }

  &:not(.active):after {
    background: var(--text-main);
  }

  &:is(.active):after {
    background: var(--accent);
  }

  &::before,
  &::after {
    position: absolute;
    transition: width 0.5s, opacity 0.5s;
  }

  &:not(:hover, :focus)::before,
  &:not(:hover, :focus)::after {
    width: 0;
    opacity: 0;
    overflow: hidden;
  }

  &::before {
    content: attr(data-text);
    top: -1px;
    left: 0;
    height: 100%;
    font-weight: bolder;
    padding: inherit;
    text-wrap: nowrap;
  }

  &::after {
    content: '';
    bottom: 0.33em;
    left: 0.25em;
    height: 2px;
    background: var(--text-main);
  }

  &:hover::before,
  &:focus::before {
    width: 100%;
    opacity: 1;
  }

  &:hover::after {
    width: calc(100% - 0.5em);
  }
}
</style>
