<template>
  <div class="video-container">
    <video autoplay muted loop playsinline class="hero-video">
      <source src="/add_vision_1600x900.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style lang="scss">
.video-container {
  inset: 0;
  z-index: 0;
  pointer-events: none;
  position: absolute;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 71.5% 50%;
  transform: scale(1.065);
}
</style>
