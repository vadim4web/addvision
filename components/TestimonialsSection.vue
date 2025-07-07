<template>
  <section class="testimonials-section" id="testimonials" :aria-label="$t('aria.testimonials')">
    <SectionHeading>
      <span class='heading-text'>
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

      <i class='arrow'><SvgArrow /></i>
    </SectionHeading>

    <TestimonialsSlider />
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.testimonials-section {
  background: var(--bg);
}
</style>