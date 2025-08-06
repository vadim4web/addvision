<template>
	<section
		id="what-we-do"
		:aria-label="$t('aria.whatWeDo')"
		class="what-we-do-section masked-section"
	>
		<div class="content">
			<SectionHeading class="glow-on-hover text-shade">
				<span class="heading-text">
					<span class="before">
						{{ $t('what.titleParts.before') }}
						<i class="arrow"><SvgArrow /></i>
					</span>
					<br>
					<span class="brown-deep">
						{{ $t('what.titleParts.brownDeep1') }}
					</span>
					<span class="accent">
						{{ $t('what.titleParts.accent') }}
					</span>
					<span class="brown-deep">{{ $t('what.titleParts.brownDeep2') }}</span>
				</span>

			</SectionHeading>

			<WhatWeDoGrid />

			<div class="cta-container">
				<em class="cta glow-on-hover text-shade">
					{{ $t('what.cta') }}
				</em>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.what-we-do-section {
	background: var(--dark-green);

	.heading-text .before {
		position: relative;
		display: inline-block;

		@media (min-width: 360px) {
			padding-right: 2ch;
		}

		.arrow {
			position: absolute;
			top: 0;
			right: 0;
		}
	}

	.cta-container {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: 1rem 1fr 1rem;
		gap: 1rem;

		grid-template-areas:
			'.   .   .   .   .   .   .   .'
			'.   .   .   .   cta cta cta .'
			'.   .   .   .   .   .   .   .';

		@media (orientation: portrait) {
			grid-template-areas:
				'.   .   .   .   .   .   .   .'
				'.   .   cta cta cta cta cta .'
				'.   .   .   .   .   .   .   .';
		}

		.cta {
			grid-area: cta;
			font-size: 1.75rem;

			@media (orientation: portrait) {
				font-size: 1.25rem;
			}
		}
	}
}
</style>
