<!-- eslint-disable vue/html-self-closing -->
<template>
  <h2 class="section-heading font-inter-semibold"></h2>
</template>

<script setup></script>

<style lang="scss">
.section-heading {
  padding-top: 1rem;
  font-size: 5rem;
  line-height: 1;
  display: grid;
  color: inherit;

  @media (orientation: landscape) {
    grid-template-columns: max-content auto;

    .arrow {
      justify-self: end;
    }
  }
  @media (orientation: portrait) {
    grid-template-columns: min-content auto;

    .arrow {
      justify-self: start;
    }
  }
  align-items: start;
  gap: 0.5rem;

  justify-content: start;
  text-align: left;

  .arrow {
    color: inherit;
    display: block;
    width: 5rem;
    aspect-ratio: 1;
    background: url('./arrow-right-up.svg') no-repeat center;
    background-size: contain;

    svg {
      width: 100%;
      height: 100%;
      stroke: currentColor;
    }
  }
}
.accent {
  color: var(--accent);
}
</style>