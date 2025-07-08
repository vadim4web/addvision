<template>
	<section
		id="services"
		:aria-label="$t('aria.services')"
		class="services-section"
	>
		<SectionHeading>
			<span class="heading-text">{{ $t('services.title') }}</span>
			<i class="arrow"><SvgArrow /></i>
		</SectionHeading>

		<strong class="services-title glow-on-hover">
			{{ $t('services.heading') }}
		</strong>

		<p class="services-description glow-on-hover">
			{{ $t('services.description') }}
		</p>

		<div class="services-categories">
			<div
				v-for="(category, index) in services?.categories || []"
				:key="index"
				class="category glow-on-hover"
			>
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
	background: var(--accent);
	color: var(--bg);
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
		border-top: 0.125rem solid var(--bg);
		border-bottom: 0.125rem solid var(--bg);

		.category {
			padding-block: 1rem;
			border-top: 0.125rem solid var(--bg);
			border-bottom: 0.125rem solid var(--bg);
			display: grid;
			align-items: center;
			grid-template-columns: 1fr 1fr 2rem;

			.category-title {
				font-size: 5rem;
			}
			.category-description {
				font-size: 1.125rem;
			}

			.category-arrow svg {
				width: 2rem;
				transform: rotate(180deg);
			}
		}
	}
}
</style>
