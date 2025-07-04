<template>
  <section class="cases-showreel-section" :aria-label="$t('aria.casesVideo')">
    <VideoBackground style="width: 30rem; height: 17rem; margin: 5rem auto;" />

    <h2 class="glow-on-hover">
      <span class="add">{<em class="font-galada-regular">add</em>}</span><strong class="font-kanit-black vision">VISION</strong>
    </h2>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.cases-showreel-section {
  position: relative;
  height: 27rem;
  z-index: 1;
  background: linear-gradient(90deg, var(--gray), var(--accent25), var(--gray));
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    background: linear-gradient(0deg, transparent, var(--accent25), transparent);
    z-index: -1;
  }

  h2 {
    z-index: 2;
    font-size: 5rem;
    color: transparent; // сам текст прозорий
    -webkit-text-fill-color: transparent; // Safari підтримка
    -webkit-text-stroke: 0.25rem var(--accent25);
    text-stroke: 0.25rem var(--accent25);
    letter-spacing: 0.05em;
    position: relative;
    top: 3rem;

    &>* {
      position: relative;
    }

    .add {
      bottom: 4.5rem;
      left: 3rem;
    }

    .vision {
      right: 3rem;
    }
  }
}
</style>