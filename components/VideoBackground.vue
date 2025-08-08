<template>
  <div aria-hidden="true" class="video-container">
    <video
      aria-hidden="true"
      autoplay
      class="hero-video"
      loop
      muted
      playsinline
      preload="auto"
      :style="{ objectFit: fit }"
      tabindex="-1"
    >
      <track kind="captions" label="No audio content" src="" srclang="en" />

      <source
        v-for="source in sources"
        :key="source.res"
        :media="source.media"
        :src="basePath + source.res + '.mp4'"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script setup>
const { basePath, fit } = defineProps({
  basePath: {
    type: String,
    default: "/video/hero-section/", // fallback if none is passed
  },
  fit: {
    type: String,
    default: "contain", // fallback if none is passed
  },
});

// Define video resolutions in descending order of size
const sources = [
  { media: "(min-width: 1920px)", res: "3840x2160" },
  { media: "(min-width: 1600px)", res: "1920x1080" },
  { media: "(min-width: 1280px)", res: "1600x900" },
  { media: "(min-width: 1024px)", res: "1280x720" },
  { media: "(min-width: 800px)", res: "1024x600" },
  { media: "(min-width: 768px)", res: "854x480" },
  { media: "(min-width: 600px)", res: "768x480" },
  { media: "(min-width: 400px)", res: "400x240" },
  { media: "(min-width: 300px)", res: "384x240" },
  { media: "", res: "256x160" }, // default/fallback
];
</script>

<style lang="scss">
.video-container {
  inset: 0;
  z-index: -1;
  pointer-events: none;
  position: absolute;
  filter: contrast(1.2) brightness(1.5);
}

.hero-video {
  width: 100%;
  height: 100%;
  object-position: 58% 40%;
}

@media (orientation: portrait) {
  .hero-section .hero-video {
    transform: scale(1.33);
    object-position: 58% 42%;
  }
}

@media (aspect-ratio <= 0.5) {
  .hero-section .hero-video {
    transform: scale(1.5);
    object-position: 50% 50%;
  }
}
</style>
