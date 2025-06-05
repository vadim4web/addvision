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
  transition: filter 1s ease;

  @media (orientation: portrait), (max-width: 767px) {
    grid-template-columns: min-content auto;
  }

  @media (orientation: landscape), (min-width: 768px) {
    grid-template-columns: max-content auto;
  }

  @media (orientation: portrait) {
    font-size: 3.5rem;

    .arrow {
      width: 3.5rem;
      justify-self: start;
    }
  }

  @media (orientation: landscape) {
    font-size: 5rem;

    .arrow {
      width: 5rem;
      justify-self: end;
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