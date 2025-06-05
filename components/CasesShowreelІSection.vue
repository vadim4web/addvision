<template>
  <section class="cases-showreel-section" :aria-label="$t('aria.casesVideo')">
    <VideoBackground style="width: 40rem; height: 30rem; margin: 5rem auto;" />
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.cases-showreel-section {
  position: relative;
  height: 40rem;
  z-index: 1;
  background: var(--gray);
}
</style>