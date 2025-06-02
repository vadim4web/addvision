<template>
  <section class="cases-section" id="cases" :aria-label="$t('aria.cases')">
    <SectionHeading v-html="`<span class='heading-text'>${$t('cases.title')}</span><span class='arrow'>${svgArrow()}</span>`"/>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.cases-section {
  background: var(--accent);
  color: var(--white);
}
</style>