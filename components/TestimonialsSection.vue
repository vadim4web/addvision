<template>
  <section class="testimonials-section" id="testimonials" :aria-label="$t('aria.testimonials')">
    <SectionHeading v-html="`<span class='heading-text'>${$t('testimonials.title')}</span><span class='arrow'>${svgArrow()}</span>`"/>

    <TestimonialsSlider :locale="$i18n.locale" />
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.testimonials-section {
  background: var(--bg);
}
</style>