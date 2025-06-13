<template>
  <section
    id="what-we-do"
    class="what-we-do-section masked-section"
    :aria-label="$t('aria.whatWeDo')"
  >
    <SectionHeading v-html="`<span class='heading-text'>${$t('what.title')}</span><span class='arrow'>${svgArrow()}</span>`"/>

    <WhatWeDoGrid />

    <div class="cta-container">
      <em class="cta glow-on-hover">
        {{ $t('what.cta') }}
      </em>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.what-we-do-section {
  background: var(--bg);

  .cta-container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1rem 1fr 1rem;
    gap: 1rem;

    grid-template-areas:
      ".   .   .   .   .   .   .   ."
      ".   .   .   .   cta cta cta ."
      ".   .   .   .   .   .   .   .";

    .cta {
      grid-area: cta;
      font-size: 1.75rem;
    }
  }
}
</style>