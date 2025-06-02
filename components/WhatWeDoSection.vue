<template>
  <section
    id="what-we-do"
    class="what-we-do-section masked-section"
    :aria-label="$t('aria.whatWeDo')"
  >
    <SectionHeading v-html="$t('what.title')"/>

    <WhatWeDoGrid />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.what-we-do-section {}
</style>