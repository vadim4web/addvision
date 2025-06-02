<!-- eslint-disable vue/html-self-closing -->
<template>
  <h2 class="section-heading font-inter-semibold"></h2>
</template>

<script setup></script>

<style lang="scss">
.section-heading {
  font-size: 5.5rem;
  color: var(--text-main);
  line-height: 1 ;
  position: relative;
  display: inline;
  padding-right: 7.5rem;

  &:after {
    content: '';
    display: inline-block;
    width: calc(5.5rem * 1);
    aspect-ratio: 1;
    background: url('./arrow-right-up.svg') no-repeat center;
    background-size: contain;
    color: inherit;
    overflow: visible;
    position: absolute;
    top: 0.5rem;
    right: 0;
  }
}
.accent { color: var(--accent); }
</style>