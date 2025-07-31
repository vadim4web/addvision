<template>
	<section
		id="faq"
		v-click-outside="handleClickOutside"
		:aria-label="$t('aria.faq')"
		class="faq-section"
	>
		<div class="content">
			<SectionHeading class="glow-on-hover">
				<span class="faq-heading heading-text">
					{{ $t('faq.titleParts.start') }}
					<br />
					{{ $t('faq.titleParts.middle') }}
					<wbr />
					{{ $t('faq.titleParts.end') }}
				</span>
				<i class="arrow"><SvgArrow /></i>
			</SectionHeading>

			<div class="head">
				<strong class="faq-description glow-on-hover">
					{{ $t('faq.description') }}
				</strong>

				<img
					alt="faq_heading.webp"
					class="faq-image glow-on-hover"
					height="300"
					src="/images/faq_heading.webp"
					width="360"
				/>
			</div>

			<div class="faq-items">
				<div
					v-for="(item, index) in faqItems"
					:key="index"
					class="faq"
					:class="{ closed: openedIndex !== index }"
					@click="handleClick(index)"
				>
					<div class="faq-question glow-on-hover">
						{{ item.question }}
						<i class="arrow-icon" :class="{ open: openedIndex === index }"
							><SvgArrow
						/></i>
					</div>
					<div class="faq-answer glow-on-hover">
						{{ item.answer }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const { locale, messages } = useI18n()
const faqItems = computed(() => messages.value[locale.value]?.faq?.items || [])

const openedIndex = ref(null)

function handleClick(index) {
	openedIndex.value = openedIndex.value === index ? null : index
}

function handleClickOutside() {
	openedIndex.value = null
}
</script>

<style lang="scss">
.faq-section {
	background: var(--dark-green);
	display: flex;
	flex-direction: column;

	.head {
		display: grid;
		grid-template-columns: 50vw 1fr;
		grid-template-areas: 'desc  img';

		@media (orientation: portrait) {
			grid-template-columns: none;
			grid-template-rows: fit-content 1fr;
			grid-template-areas: 'desc'  'img';
		}

		.faq-description {
			grid-area: desc;
			font-weight: 500;
			font-size: 1.125rem;
			margin-bottom: 2rem;
			display: block;
			text-align: justify;
		}

		.faq-image {
			grid-area: img;
			max-width: 30ch;
			margin-inline: auto;
		}
	}

	.faq-items {
		margin-block: 2rem;
		max-width: 50vw;
		align-self: flex-end;
		display: flex;
		flex-direction: column;
		border-top: 2px solid var(--text-main);

		@media (max-width: 1080px) {
			margin-inline: auto;
		}

		.faq {
			border-bottom: 2px solid var(--text-main);
			cursor: pointer;
			padding: 0.5rem 0;

			.faq-question {
				font-weight: bold;
				font-size: 1.25rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 1rem;
			}

			.arrow-icon {
				transform: rotate3d(1, 1, 0, 180deg); // діагональна вісь
				transform: rotate(180deg);
				transition: transform 0.5s ease;

				svg {
					width: 2rem;
				}
			}

			.arrow-icon.open {
				transform: rotate3d(1, 1, 0, 0deg);
				transform: rotate(0deg);
			}

			.faq-answer {
				font-size: 1rem;
				color: var(--text-main);
				padding: 0.5rem 0;
				max-height: 500px;
				overflow: hidden;
				transition: all 0.5s ease;
			}

			&.closed .faq-answer {
				max-height: 0;
				margin-top: 0;
				padding: 0;
				opacity: 0;
				transition: all 0.5s ease;
			}
		}
	}
}
</style>
