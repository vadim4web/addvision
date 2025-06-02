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

  @media (orientation: portrait) or (max-width: 55rem) {
      justify-content: space-around;
  }
}

.language-link {
  position: relative;
  overflow: hidden;

  // Активний стан + ховер/фокус
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
    // text-decoration: underline overline transparent 0.2em;
    text-decoration: underline transparent 0.2em;
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
    text-underline-offset: 0.5em;
  }

  &::after {
    content: '';
    bottom: 0.33em;
    left: 0.25em;
    bottom: 0.15em;
    left: 0.2em;
    height: 0.15em;
    background: linear-gradient(90deg, var(--accent50)0%, var(--accent)50%, var(--accent50)75%);
    z-index: 1;
  }

  &:hover::before {
    width: 100%;
    opacity: 1;
    // text-decoration: underline overline var(--accent) 0.2em;
    text-decoration: underline var(--accent) 0.2em;
    text-shadow: 0 0 0.25em var(--accent50);
    filter: drop-shadow(0 0 0.2em var(--accent));
  }

  &:hover::after {
    width: calc(100% - 0.5em);
    box-shadow: 0 0 0.25em var(--accent);
    filter: drop-shadow(0 0 0.2em var(--accent));
  }
}
</style>
