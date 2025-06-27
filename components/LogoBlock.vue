<template>
  <div class="logo">
    <LogoIcon />

    <div class="logo-text">
      <span
        class="logo-subline"
        :data-text="'WEB-' + $t('agency')"
      >
        WEB-{{ $t('agency') }}
      </span>
      <div class="logo-brand">
        <em data-text="{ADD}">{<i>ADD</i>}</em>
        <strong data-text="VISION" >
          VISION
        </strong>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.logo {
  display: grid;
  justify-content: start;
  grid-template-columns: 1rem 6.6rem auto;
  grid-template-areas: ". img txt";
  align-items: center;
  gap: 0.25rem;
  z-index: 1;

  perspective: 1000px;

  &-image {
    width: 6.6rem;
    height: 6.6rem;
    grid-area: img;
    transition: filter 1s ease;
  }

  &:has(:hover) &-image {
    filter: drop-shadow(0 0 0.5em var(--accent75)) contrast(1.1) brightness(1.1);
  }

  &-text {
    display: inline-flex;
    flex-direction: column;
    line-height: 1;
    color: var(--text-main);
    gap: 0.25rem;
    grid-area: txt;
    max-width: fit-content;
    padding: 0.125em;
    position: relative;
    filter: none;
    transition: filter 1s ease;

    &::before {
      position: absolute;
      height: 3.8rem;
      left: -0.125em;
      top: -0.33em;
      content: '';
      background:
        linear-gradient( 180deg, var(--accent) 8%, transparent 8%, transparent 92%, var(--accent)92%),
        radial-gradient(circle at 35% 50%, var(--accent25), transparent 55%)
      ;
      transition: width 1s;
      filter: drop-shadow(0 0 0.16em var(--accent50)) contrast(1.1);
      mix-blend-mode: color-burn;
      z-index: -1;
      opacity: 1;
    }

    &:not(:hover)::before {
      position: absolute;
      width: 0;
      height: inherit;
      content: '';
      transition: width 1s ease;
    }

    &:hover::before {
      width: 7.5em;
    }
  }

  &-subline {
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--text-main50);
    width: max-content;
    transition: color 1s ease;

    &::after {
      content: "";
      width: 100%;
    }
  }

  &-text:hover {
    filter: drop-shadow(0 0 0.2em var(--bg50)) contrast(1.1) brightness(1.1);
  }
  &:hover &-subline {
    color: var(--text-main75);
  }

  &-brand {
    font-size: 1.75rem;
    font-weight: 600;
    position: relative;
    left: -0.1rem;
    top: -0.1em;

    @media (orientation: portrait) , (max-width: 55rem) {
      font-size: 1.33rem;
    }

    em {
      font-weight: 400;
      display: inline-block;
      text-transform: lowercase;
      color: var(--accent75);
      transform-style: preserve-3d;
      transform-origin: 33% center;

      & i {
        color: var(--text-main);
      }
      &::after {
        text-transform: lowercase;
      }
    }

    em>i,
    strong {
      position: relative;
      top: 0.1em;
    }

    strong {
      font-weight: 800;
      display: inline-block;
    }
  }
}

[lang="uk"] .logo-subline { letter-spacing: 0.45em }
[lang="ru"] .logo-subline { letter-spacing: 0.266em }
[lang="en"] .logo-subline { letter-spacing: 0.525em }

@media (orientation: portrait) , (max-width: 55rem) {
  [lang="uk"] .logo-subline { letter-spacing: 0.2em }
  [lang="ru"] .logo-subline { letter-spacing: 0.05em }
  [lang="en"] .logo-subline { letter-spacing: 0.25em }

  .logo-text:hover::before {
    width: 5.75em;
  }
}
</style>