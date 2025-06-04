<template>
  <section class="why-us-section" id="why-us" :aria-label="$t('aria.whyUs')">
    <SectionHeading v-html="`<span class='heading-text'>${$t('why.title')}</span><span class='arrow'>${svgArrow()}</span>`"/>

    <SuccessStatsGrid />
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.why-us-section {
  background: var(--bg);
}
</style>