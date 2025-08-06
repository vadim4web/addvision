<template>
	<section
		id="faq"
		v-click-outside="handleClickOutside"
		:aria-label="$t('aria.faq')"
		class="faq-section"
	>
		<div class="content">
			<SectionHeading class="glow-on-hover text-shade">
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
				<strong class="faq-description glow-on-hover text-shade">
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
				<hr class="box-shade">

				<div
					v-for="(item, index) in faqItems"
					:key="index"
					class="faq"
					:class="{ closed: openedIndex !== index }"
					@click="handleClick(index)"
				>
					<hr class="box-shade">

					<div class="faq-question glow-on-hover text-shade">
						{{ item.question }}
						<i class="arrow-icon" :class="{ open: openedIndex === index }"
							><SvgArrow
						/></i>
					</div>
					<div class="faq-answer glow-on-hover  text-shade">
						{{ item.answer }}
					</div>

					<hr class="box-shade">
				</div>

				<hr class="box-shade">
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
		position: relative;
		padding-block: 1px;

		hr {
			position: absolute;
			width: 100%;
			left: 0;
			right: 0;
			margin: 0;
			height: 1px;
			background: var(--text-main);
			border: none;

				&:first-of-type {
					top: 0;
				}
				&:last-of-type {
					bottom: 0;
				}
		}

		@media (max-width: 1080px) {
			margin-inline: auto;
		}

		.faq {
			cursor: pointer;
			padding: 0.5rem 0;
			position: relative;

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
				padding: 0.5rem 0 2.5rem;
				max-height: fit-content;
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
