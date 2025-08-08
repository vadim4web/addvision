<template>
  <section id="cases" :aria-label="$t('aria.cases')" class="cases-section">
    <div class="content">
      <div class="head">
        <SectionHeading class="cases-heading glow-on-hover text-shade">
          <span class="heading-text">{{ $t("cases.title") }}</span>
          <i class="arrow"><SvgArrow /></i>
        </SectionHeading>

        <NuxtLink
          class="more glow-on-hover font-inter-regular text-shade font-36"
          :to="localePath('/cases')"
        >
          {{ $t("cases.moreLabel") }}

          <i class="arrow"><SvgArrow /></i>
        </NuxtLink>

        <strong class="description glow-on-hover text-shade font-inter-regular font-26">
          {{ $t("cases.description") }}
        </strong>
      </div>

      <CasesAccordion />
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="scss">
.cases-section {
  background: var(--dark-green);

  .head {
    display: grid;
    grid-template-columns: 1fr fit-content;
    grid-template-rows: fit-content 1fr;
    grid-template-areas:
      "heading more"
      "desc    .";
    gap: 1rem;
    padding-bottom: 4rem;

    @media (orientation: portrait) {
      grid-template-columns: 1fr fit-content;
      grid-template-rows: fit-content 1fr;
      grid-template-areas:
        "heading more"
        "desc    desc";
    }

    h2 {
      grid-area: heading;
    }

    .more {
      grid-area: more;
      justify-self: end;

      @media (orientation: portrait) {
        line-height: 150%;
      }

      .arrow svg {
        width: 4rem;
        height: 4rem;
        position: relative;
        top: 0.5rem;
      }
    }

    .description {
      grid-area: desc;
    }
  }
}
</style>
