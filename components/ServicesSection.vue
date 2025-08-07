<template>
	<section
		id="services"
		:aria-label="$t('aria.services')"
		class="services-section box-shade light-bg-section"
	>
		<div class="content">
			<SectionHeading class="glow-on-hover text-shade">
				<span class="heading-text">{{ $t('services.title') }}</span>
				<i class="arrow"><SvgArrow /></i>
			</SectionHeading>

			<strong class="services-title glow-on-hover text-shade">
				{{ $t('services.heading') }}
			</strong>

			<p class="services-description glow-on-hover text-shade">
				{{ $t('services.description') }}
			</p>

			<div class="services-categories">
				<hr>

				<div
					v-for="(category, index) in services?.categories || []"
					:key="index"
					class="category glow-on-hover text-shade"
				>
					<hr>

					<h3 class="font-yanone-light category-title">{{ category.title }}</h3>

					<ul class="category-description">
						<li
							v-for="(item, idx) in category.items"
							:key="idx"
							class="font-inter-regular"
						>
							{{ item }}
						</li>
					</ul>

					<i class="category-arrow"><SvgArrow /></i>

					<hr>
				</div>

				<hr>
			</div>
		</div>
	</section>
</template>

<script setup>
const { locale, messages } = useI18n()

const services = computed(() => messages.value[locale.value]?.services || {})
</script>

<style lang="scss">
.services-section {
	// background: var(--accent);
	display: flex;
	flex-direction: column;

	.services-title {
		align-self: start;
		font-size: 2rem;
		max-width: 30ch;
	}

	.services-description {
		font-size: 1.25rem;
		max-width: 66vw;
		margin: 2rem auto;
		text-align: justify;
	}

	.services-categories {
		margin: 4rem 0;
		padding-block: 1px;
		position: relative;

		hr {
			position: absolute;
			width: 100%;
			left: 0;
			right: 0;
			margin: 0;
			height: 1px;
			background: var(--text-main);
			border: none;
			box-shadow: 0 0 0.25vmin var(--bg75);

				&:first-of-type {
					top: 0;
				}
				&:last-of-type {
					bottom: 0;
				}
		}

		.category {
			padding-block: 1rem;
			display: grid;
			align-items: center;
			grid-template-columns: 1fr 1fr 2rem;
			grid-template-areas:
				"title desc arrow"
			;
			position: relative;

			@media (orientation: portrait) {
				grid-template-columns: 1fr 2rem;
				grid-template-rows: repeat(2, 1fr);

				grid-template-areas:
					"title title arrow"
					"desc desc arrow"
				;
			}

			.category-title {
				grid-area: title;
				font-size: 5rem;

				@media (max-width: 480px) {
					font-size: 3.5rem;
				}
			}

			.category-description {
				grid-area: desc;
				font-size: 1.125rem;
			}

			.category-arrow {
				grid-area: arrow;
			}

			.category-arrow svg {
				width: 2rem;
				transform: rotate(180deg);
			}
		}
	}
}
</style>
