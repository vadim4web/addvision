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
  gap: 0.25rem;
  z-index: 1;
  
  @media (orientation: portrait) , (max-width: 55rem) {
    justify-content: space-around;
    max-width: 10rem;
  }
}

.language-link {
  position: relative;
  overflow: hidden;

  &.active {
    color: var(--accent);
  }

  &::before,
  &::after {
    position: absolute;
    transition: all 1s ease;
  }

  &:not(.active):after {
    background: var(--accent);
  }

  &:is(.active):after {
    background: var(--accent);
  }

  &:not(:hover)::before,
  &:not(:hover)::after {
    width: 0;
    visibility: hidden;
    overflow: hidden;
    filter: none;
    box-shadow: none;
    text-shadow: none;
    text-decoration: underline transparent 0.15em;
  }

  &::before {
    content: attr(data-text);
    color: var(--accent75);
    top: -0.1rem;
    left: 0;
    width: 0;
    height: 100%;
    font-weight: bolder;
    padding: inherit;
    text-wrap: nowrap;
    text-underline-offset: 0.25em;
  }

  &:hover::before {
    width: 100%;
    opacity: 1;
    text-decoration: underline var(--accent) 0.15em;
    text-shadow: 0 0 0.1em var(--accent50);
  }
}
</style>
