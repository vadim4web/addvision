<template>
  <div class="video-container" aria-hidden="true">
    <video
      autoplay
      muted
      loop
      playsinline
      class="hero-video"
      tabindex="-1"
      aria-hidden="true"
    >
      <!-- Optional: <track> with no captions to explicitly state "no captions" -->
      <track kind="captions" src="" srclang="en" label="No audio content">

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
/* @keyframes lightningSwing {
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
} */

.video-container {
  inset: 0;
  z-index: 0;
  pointer-events: none;
  position: absolute;

  /*
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50vmin;
    height: 50vmin;
    z-index: 1;
    border: 1px solid red;

    background: radial-gradient(
      circle at center,
      var(--bg80) 0%,
      var(--accent50) 40%,
      var(--bg50) 0%,
      var(--accent33) 25%,
      transparent 80%
    );

    border-radius: 50%;
    filter: blur(4rem) brightness(1.5);
    filter: blur(5rem) brightness(1.5);
    pointer-events: none;
    animation: lightningSwing 24s ease-in-out infinite alternate;
  }
    */
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
