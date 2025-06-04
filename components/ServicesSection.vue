<template>
  <section class="services-section" id="services" :aria-label="$t('aria.services')">
    <SectionHeading v-html="`<span class='heading-text'>${$t('services.title')}</span><span class='arrow'>${svgArrow()}</span>`"/>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.services-section {
  background: var(--accent);
  color: var(--white);
}
</style>