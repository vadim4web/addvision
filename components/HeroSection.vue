<template>
  <section class="hero-section" id="hero" role="region" :aria-label="$t('aria.hero')">
    <HeaderSection />
    Hero Section
  </section>
</template>

<script setup>

</script>

<style lang="scss">
@keyframes lightningSwing {
  0% {
    transform: translate(-50%, 50%) scale(1);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  50% {
    transform: translate(calc(100vw - 50%), calc(50% - 100vh)) scale(1.2);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 50%) scale(1);
    opacity: 0;
  }
}

.hero-section {
  position: relative;
  height: 100vh;
  background-color: var(--bg);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50vmin;
    height: 50vmin;

    /*
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(0, 255, 255, 0.5) 40%,
      transparent 80%
    );
    */

    background: radial-gradient(
      circle at center,
      var(--bg80) 0%,
      var(--accent50) 40%,
      transparent 80%
    );

    border-radius: 50%;
    filter: blur(1rem) brightness(1.5);
    pointer-events: none;
    mix-blend-mode: screen;

    animation: lightningSwing 24s ease-in-out infinite alternate;
  }
}

@keyframes floatingRadial {
  0% {
    background-position: left bottom;
  }
  50% {
    background-position: right top;
  }
  100% {
    background-position: left bottom;
  }
}

.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: var(--bg);

  /* background-image: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(0, 255, 255, 0.3) 40%,
    transparent 70%
  ); */

  background-image: radial-gradient(
    circle at center,
    var(--bg66) 0%,
    var(--accent33) 40%,
    transparent 70%
  );

  background-repeat: no-repeat;
  background-size: 200% 200%; // Щоб було з чим працювати
  background-position: left bottom;
  animation: floatingRadial 24s -12s ease-in-out infinite alternate;

  // Додатково можеш використовувати filter, якщо потрібно:
  // filter: brightness(1.2) contrast(1.1);
}
</style>