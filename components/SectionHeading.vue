<template>
  <h2 class="section-heading font-inter-semibold font-88">
    <slot />
  </h2>
</template>

<script setup></script>

<style lang="scss">
.section-heading {
  position: relative;
  z-index: 5;
  padding-top: 1rem;
  line-height: 1;
  display: grid;
  color: inherit;
  transition: filter 1s ease;
  align-items: start;
  gap: 1rem;
  justify-content: start;
  text-align: left;

  .arrow {
    color: inherit;
    display: block;
    aspect-ratio: 1;
    width: 8.8rem;
    height: 8.8rem;

    @media (orientation: portrait) {
      justify-self: start;
    }

    @media (orientation: landscape) and (min-width: 1440px) {
      justify-self: end;
    }

    svg {
      width: 100%;
      height: 100%;
      stroke: currentColor;
    }
  }

  @media (orientation: portrait), (max-width: 1024px) {
    grid-template-columns: min-content auto;
  }

  @media (orientation: landscape), (min-width: 1025px) {
    grid-template-columns: max-content auto;
  }
}

.accent {
  color: var(--accent);
}
</style>
