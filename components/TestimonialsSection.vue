<template>
	<section
		id="testimonials"
		:aria-label="$t('aria.testimonials')"
		class="testimonials-section"
	>
		<div class="content">
			<SectionHeading class="glow-on-hover testimonials-heading">
				<span class="heading-text">
					<span class="before">
						{{ $t('testimonials.titleParts.before') }}
					</span>
					<span class="accent">
						{{ $t('testimonials.titleParts.accent') }}
					</span>
					<wbr />
					<span class="accent">
						{{ $t('testimonials.titleParts.accent_') }}
					</span>
				</span>

				<i class="arrow"><SvgArrow /></i>
			</SectionHeading>

			<TestimonialsSlider />
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
