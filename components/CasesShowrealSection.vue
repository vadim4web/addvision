<template>
	<section :aria-label="$t('aria.casesVideo')" class="cases-showreel-section">
		<div class="content">
			<h2 class="glow-on-hover">
				<span class="add">{<em class="font-galada-regular">add</em>}</span
				><strong class="font-kanit-black vision">VISION</strong>
			</h2>

			<VideoBackground style="margin: 0 auto" />
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.cases-showreel-section {
	z-index: 1;
	background: linear-gradient(90deg, var(--gray), var(--accent25), var(--gray));
	position: relative;
	max-width: 100%;

	@media (orientation: landscape) {
		height: 75vmin;
	}

	@media (orientation: portrait) {
		height: 75vmin;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	&::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: '';
		background: linear-gradient(
			0deg,
			transparent,
			var(--accent25),
			transparent
		);
	}

	h2 {
		z-index: 2;
		font-size: 4rem;
		color: transparent; // сам текст прозорий
		-webkit-text-fill-color: transparent; // Safari підтримка
		-webkit-text-stroke: 0.25rem var(--accent25);
		letter-spacing: 0.05em;
		position: relative;
		top: 3rem;
		text-align: center;
		width: 100%;

		@media (orientation: landscape) {
			font-size: 9rem;
		}

		& > * {
			position: relative;
		}

		.add {
			bottom: 1ch;
			left: 1ch;
		}

		.vision {
			top: 0.5ch;
			right: 1ch;
		}
	}
}
</style>
