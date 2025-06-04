<!-- eslint-disable vue/html-self-closing -->
<template>
  <h2 class="section-heading font-inter-semibold glow-on-hover"></h2>
</template>

<script setup></script>

<style lang="scss">
.section-heading {
  padding-top: 0.5rem;
  line-height: 1;
  display: grid;
  color: inherit;
  grid-template-columns: max-content auto;
  transition: filter 1s ease;

  @media (orientation: landscape) {
    font-size: 5rem;
    .arrow {
      width: 5rem;
      justify-self: end;
    }
  }
  @media (orientation: portrait) {
    font-size: 3.5rem;

    .arrow {
      width: 3.5rem;
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