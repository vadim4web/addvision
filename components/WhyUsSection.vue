<template>
  <section class="why-us-section" id="why-us" :aria-label="$t('aria.whyUs')">
    <SectionHeading v-html="$t('why.title')"/>
    <SuccessStats />
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.why-us-section {}
</style>