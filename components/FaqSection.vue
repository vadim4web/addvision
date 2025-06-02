<template>
  <section class="faq-section" id="faq" :aria-label="$t('aria.faq')">
        <SectionHeading v-html="`<span class='heading-text'>${$t('faq.title')}</span><span class='arrow'>${svgArrow()}</span>`"/>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.faq-section {}
</style>