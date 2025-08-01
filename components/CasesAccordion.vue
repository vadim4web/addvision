<template>
	<div class="cases-accordion">
		<div class="cases-frame">
			<div
				v-for="(item, index) in casesItems"
				:key="index"
				class="case"
				:class="{ closed: openedIndex !== index }"
				@click="handleClick(index)"
			>
				<h3 class="case-title glow-on-hover font-yanone-light">
					{{ item.title }}
					<i class="arrow-icon" :class="{ open: openedIndex === index }"
						><SvgArrow
					/></i>
				</h3>

				<p class="case-description glow-on-hover">
					{{ item.description }}
				</p>

				<div v-if="openedIndex === index" class="preview-frame">
					<div class="overflow-cutting-wrapper">
						<iframe
							class="preview"
							frameborder="0"
							:src="opened?.url"
							:title="opened?.title"
						></iframe>
					</div>
				</div>
			</div>
		</div>

		<!-- <div v-if="!isPortrait" class="preview-frame">
			<div class="overflow-cutting-wrapper">
				<iframe
					class="preview"
					frameborder="0"
					:src="opened?.url"
					:title="opened?.title"
				></iframe>
			</div>
		</div> -->
	</div>
</template>

<script setup>
const { locale, messages } = useI18n()

const isReady = ref(false)

watch(
  () => messages.value?.[locale.value],
  (newVal) => {
    if (newVal?.cases?.list) {
      isReady.value = true
    }
  },
  { immediate: true }
)

const casesItems = computed(() =>
  isReady.value ? (messages.value[locale.value]?.cases?.list || []).slice(0, 4) : []
)

const openedIndex = ref(0)
const opened = computed(() => casesItems.value[openedIndex.value])

function handleClick(index) {
  openedIndex.value = openedIndex.value === index ? 0 : index
}
</script>

<style lang="scss">
.cases-accordion {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	position: relative;

	@media (orientation: portrait) {
		grid-template-columns: none;
	}

	@media (orientation: landscape) {
		max-height: 30rem;
	}

	.cases-frame {
		border-top: 1px solid var(--gray);
		border-bottom: 1px solid var(--gray);

		.case {
			overflow: hidden;
			border-top: 1px solid var(--gray);
			border-bottom: 1px solid var(--gray);

			&:not(.closed) {
				padding-bottom: 0.5rem;
			}

			.case-title {
				font-size: 3rem;

				@media (max-width: 480px) {
					font-size: 2rem;
				}

				.arrow-icon svg {
					width: 2rem;
					height: 2rem;
					transition: transform 0.5s ease;

					@media (max-width: 480px) {
						width: 1.25rem;
						height: 1.25rem;
					}
				}

				.arrow-icon:not(.open) svg {
					transform: rotate(-180deg);
					transition: transform 0.5s ease;
				}
			}

			.case-description {
				transition: all 1s ease !important;
				font-size: 1.5rem;
			}

			&:is(.closed) .case-description {
				height: 0;
				transition: height 0.5s ease;
			}

			&:not(.closed) .case-description {
				transition: height 0.5s ease;
			}


			@media (orientation: landscape) {
				&:not(.closed) .case-description {
					height: 14rem;
				}
			}

			@media (orientation: portrait) {
				&:not(.closed) .case-description {
					height: fit-content;
				}
			}
		}
	}

	.preview-frame {
		background: linear-gradient(
			90deg,
			transparent,
			var(--accent50),
			transparent
		);
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 33rem;

		@media (orientation: landscape) {
			position: absolute;
			top: 0;
			right: 0;
			width: 50%;
		}

		@media (orientation: portrait) {
			margin-top: 1rem;
		}

		.overflow-cutting-wrapper {
			overflow: hidden;
			aspect-ratio: 9 / 16;
			max-height: 33rem;

			.preview {
				object-fit: cover;
				width: 100%;
				aspect-ratio: 9 / 16;
				max-height: 34.2rem;
				position: relative;
				left: -2.5%;
				transform: scale(1.03) translate(0, 1.5%);
			}
		}
	}
}
</style>
