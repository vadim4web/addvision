<template>
  <section
    id="services"
    :aria-label="$t('aria.services')"
    class="services-section box-shade light-bg-section"
  >
    <div class="content">
      <SectionHeading class="glow-on-hover text-shade">
        <span class="heading-text">{{ $t("services.title") }}</span>
        <i class="arrow"><SvgArrow /></i>
      </SectionHeading>

      <strong class="services-title glow-on-hover text-shade font-inter-regular font-54">
        {{ $t("services.heading") }}
      </strong>

      <p class="services-description glow-on-hover text-shade font-inter-regular font-26">
        {{ $t("services.description") }}
      </p>

      <div class="services-categories">
        <hr />

        <div
          v-for="(category, index) in services?.categories || []"
          :key="index"
          class="category glow-on-hover text-shade"
        >
          <hr />

          <h3 class="font-yanone-light category-title text-shade font-110">
            {{ category.title }}
          </h3>

          <ul class="category-description font-26">
            <li
              v-for="(item, idx) in category.items"
              :key="idx"
              class="font-inter-regular text-shade"
            >
              {{ item }}
            </li>
          </ul>

          <i class="category-arrow"><SvgArrow /></i>

          <hr />
        </div>

        <hr />
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale, messages } = useI18n();

const services = computed(() => messages.value[locale.value]?.services || {});
</script>

<style lang="scss">
.services-section {
  // background: var(--accent);
  display: flex;
  flex-direction: column;

  .services-title {
    align-self: start;
  }

  .services-description {
    max-width: 66%;
    margin: 3.2rem auto 4rem 0;
    text-align: justify;
  }

  .services-categories {
    margin: 6.4rem 0;
    padding-block: 1px;
    margin-block: 1rem;
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
      padding: 3rem 0 1rem 2rem;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr 4rem;
      grid-template-areas: "title desc arrow";
      position: relative;

      @media (orientation: portrait) {
        grid-template-columns: 1fr 4rem;
        grid-template-rows: repeat(2, 1fr);

        grid-template-areas:
          "title title arrow"
          "desc desc arrow";
      }

      .category-title {
        grid-area: title;
      }

      .category-description {
        grid-area: desc;
        line-height: 250%;
      }

      .category-arrow {
        grid-area: arrow;
      }

      .category-arrow svg {
        width: 4rem;
        height: 4rem;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
