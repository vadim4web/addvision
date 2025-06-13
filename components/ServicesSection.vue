<template>
  <section id="services" class="services-section" :aria-label="$t('aria.services')">
    <SectionHeading v-html="`<span class='heading-text'>${$t('services.title')}</span><span class='arrow'>${svgArrow()}</span>`"/>

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
          <li v-for="(item, idx) in category.items" :key="idx" class="font-inter-regular">{{ item }}</li>
        </ul>
        <span class="category-arrow" v-html="svgArrow()"></span>
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
  color: var(--white);
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

    .category {
      padding-block: 1rem;
      border-top: 0.125rem solid var(--white);
      border-bottom: 0.125rem solid var(--white);
      margin-bottom: -0.125rem;
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