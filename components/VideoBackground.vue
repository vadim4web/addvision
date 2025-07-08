<template>
	<div aria-hidden="true" class="video-container">
		<video
			aria-hidden="true"
			autoplay
			class="hero-video"
			loop
			muted
			playsinline
			tabindex="-1"
		>
			<!-- Optional: <track> with no captions to explicitly state "no captions" -->
			<track kind="captions" label="No audio content" src="" srclang="en" />

			<source
				media="(min-width: 1920px)"
				src="/video/add_vision_3840x2160.mp4"
				type="video/mp4"
			/>
			<source
				media="(min-width: 1600px)"
				src="/video/add_vision_1920x1080.mp4"
				type="video/mp4"
			/>
			<source
				media="(min-width: 1280px)"
				src="/video/add_vision_1600x900.mp4"
				type="video/mp4"
			/>
			<source
				media="(min-width: 1024px)"
				src="/video/add_vision_1280x720.mp4"
				type="video/mp4"
			/>
			<source
				media="(min-width: 800px)"
				src="/video/add_vision_1024x600.mp4"
				type="video/mp4"
			/>
			<source
				media="(min-width: 768px)"
				src="/video/add_vision_854x480.mp4"
				type="video/mp4"
			/>
			<source
				media="(min-width: 600px)"
				src="/video/add_vision_768x480.mp4"
				type="video/mp4"
			/>
			<source
				media="(min-width: 400px)"
				src="/video/add_vision_400x240.mp4"
				type="video/mp4"
			/>
			<source
				media="(min-width: 300px)"
				src="/video/add_vision_384x240.mp4"
				type="video/mp4"
			/>
			<source src="/video/add_vision_256x160.mp4" type="video/mp4" />
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
