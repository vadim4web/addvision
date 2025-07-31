<template>
  <div class="animation-container"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@keyframes lightningSwing {
  0% {
    transform: translate(-50%, 0%) scale(1.5);
    opacity: 0.5;
  }
  20% {
    opacity: 1;
  }
  50% {
    transform: translate(calc(100vw - 50%), calc(-100%)) scale(1);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 0%) scale(1.5);
    opacity: 0.5;
  }
}

.animation-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  offset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0; /* Ensure it's behind other content */
}

.animation-container::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  left: 0;
  bottom: 0;
  pointer-events: none;
}

.animation-container::before {
  background: linear-gradient(235deg, var(--accent33), transparent);
  border-radius: 50%;
  filter: blur(5rem) brightness(1.5);
  animation: lightningSwing 24s ease-in-out infinite alternate;
}
</style>