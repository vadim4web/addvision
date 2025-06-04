<template>
  <section class="cases-showreel-section" :aria-label="$t('aria.casesVideo')">
    <VideoBackground style="height: 30vh; top: 10vh;" />
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.cases-showreel-section {
  position: relative;
  height: 50vh;
  z-index: 1;
  background: var(--gray);
}
</style>