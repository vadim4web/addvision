<template>
	<section id="cases" :aria-label="$t('aria.cases')" class="cases-section">
		<div class="content">
			<div class="head">
				<SectionHeading class="cases-heading glow-on-hover text-shade">
					<span class="heading-text">{{ $t('cases.title') }}</span>
					<i class="arrow"><SvgArrow /></i>
				</SectionHeading>

				<NuxtLink class="more glow-on-hover text-shade" :to="localePath('/cases')">
					{{ $t('cases.moreLabel') }}

					<i class="arrow"><SvgArrow /></i>
				</NuxtLink>

				<strong class="description glow-on-hover text-shade">
					{{ $t('cases.description') }}
				</strong>
			</div>

			<CasesAccordion />
		</div>
	</section>
</template>

<script setup>
const localePath = useLocalePath()
</script>

<style lang="scss">
.cases-section {
	background: var(--dark-green);

	.head {
		display: grid;
		grid-template-columns: 1fr fit-content;
		grid-template-rows: fit-content 1fr;
		grid-template-areas:
			'heading more'
			'desc    .';
		gap: 1rem;
		padding-bottom: 2.5rem;

		@media (orientation: portrait) {
			grid-template-columns: 1fr fit-content;
			grid-template-rows: fit-content 1fr;
			grid-template-areas:
				'heading more'
				'desc    desc';
		}

		h2 {
			grid-area: heading;
		}

		.more {
			grid-area: more;
			font-size: 2rem;
			line-height: 2rem;
			justify-self: end;

			@media (orientation: portrait) {
				font-size: 1rem;
				line-height: 1.5rem;
			}

			.arrow svg {
				width: 2rem;
				height: 2rem;
				position: relative;
				top: 0.25rem;

				@media (orientation: portrait) {
					width: 1.5rem;
					height: 1.5rem;
				}
			}
		}

		.description {
			grid-area: desc;
			font-size: 1.5rem;
		}
	}
}
</style>
