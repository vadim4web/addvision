<template>
	<section id="why-us" :aria-label="$t('aria.whyUs')" class="why-us-section">
		<div class="content">
			<div class="coop">
				<SectionHeading class="coop-heading">
					<span class="heading-text">
						<span class="before">
							{{ $t('why.titleParts.before') }}
						</span>
						<span class="accent">
							{{ $t('why.titleParts.accent') }}
						</span>
					</span>

					<i class="arrow">
						<SvgArrow />
					</i>
				</SectionHeading>

				<div class="coop-top-right">
					<strong class="coop-top-right-strong glow-on-hover">
						<span class="accent">
							{{ $t('why.coopParts.accent') }}
						</span>
						<span class="rest">
							{{ $t('why.coopParts.rest') }}
						</span>
					</strong>

					<div class="coop-top-right-visual">
						<img alt="" height="400" src="/images/coop.webp" width="400" />
					</div>
				</div>

				<em class="coop-values glow-on-hover">
					<span class="accent">{</span>add<span class="accent">}</span>VISION
					{{ $t('why.values') }}
				</em>
			</div>

			<SuccessStatsGrid />

			<WhyUsCTA />
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.why-us-section {
	background: var(--dark-green);

	.coop,
	.stats-section {
		padding-inline: var(--padding-inline);
	}

	.coop {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas:
			'heading  heading  topRight  topRight'
			'.        values   values  .';

		@media (orientation: portrait) {
			aspect-ratio: 2;
			grid-template-rows: 10rem 1fr;
		}

		@media (orientation: landscape) {
			grid-template-rows: repeat(2, minmax(12rem, 1fr));
			aspect-ratio: 3;
		}

		&-heading {
			grid-area: heading;
		}

		&-top-right {
			grid-area: topRight;
			display: flex;
			justify-self: end;

			&-strong {
				align-self: center;
				justify-self: end;
				font-size: 1.75rem;
				font-variant: small-caps;
				font-weight: 600;
			}

			&-visual {
				height: 100%;
				aspect-ratio: 1;
				position: relative;

				img {
					width: 100%;
					height: 100%;
				}

				&::after {
					position: absolute;
					content: '';
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					scale: 1.02;
					background: radial-gradient(
						circle at center,
						transparent,
						var(--bg) 71%
					);
				}
			}
		}

		&-values {
			grid-area: values;
			text-align: justify;

			@media (orientation: portrait) {
				font-size: 1.2rem;
			}

			@media (orientation: landscape), (max-width: 719px) {
				font-size: 1.5rem;
			}

			@media (min-width: 720px) and (max-width: 1279px) {
				font-size: 1.25rem;
			}
		}
	}
}
</style>
