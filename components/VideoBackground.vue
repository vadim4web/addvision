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
	object-fit: contain;
}
</style>
