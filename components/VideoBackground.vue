<template>
  <div class="video-container">
    <video autoplay muted loop playsinline class="hero-video">
      <source src="/video/add_vision_3840x2160.mp4" type="video/mp4" media="(min-width: 1920px)">
      <source src="/video/add_vision_1920x1080.mp4" type="video/mp4" media="(min-width: 1600px)">
      <source src="/video/add_vision_1600x900.mp4" type="video/mp4" media="(min-width: 1280px)">
      <source src="/video/add_vision_1280x720.mp4" type="video/mp4" media="(min-width: 1024px)">
      <source src="/video/add_vision_1024x600.mp4" type="video/mp4" media="(min-width: 800px)">
      <source src="/video/add_vision_854x480.mp4" type="video/mp4" media="(min-width: 768px)">
      <source src="/video/add_vision_768x480.mp4" type="video/mp4" media="(min-width: 600px)">
      <source src="/video/add_vision_400x240.mp4" type="video/mp4" media="(min-width: 400px)">
      <source src="/video/add_vision_384x240.mp4" type="video/mp4" media="(min-width: 300px)">
      <source src="/video/add_vision_256x160.mp4" type="video/mp4">
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
