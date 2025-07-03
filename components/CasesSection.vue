<template>
  <section class="cases-section" id="cases" :aria-label="$t('aria.cases')">
    <div class="head">
      <SectionHeading class="glow-on-hover cases-heading" v-html="`<span class='heading-text'>${$t('cases.title')}</span><span class='arrow'>${svgArrow()}</span>`"/>

      <NuxtLink :to="localePath('/cases')" class="more glow-on-hover">
        {{ $t('cases.moreLabel') }}

        <i class="arrow" v-html="`${svgArrow()}`"></i>
      </NuxtLink>

      <strong class="description glow-on-hover">
        {{ $t('cases.description') }}
      </strong>
    </div>

    <CasesAccordion />
  </section>
</template>

<script setup>
const localePath = useLocalePath()
</script>

<style lang="scss">
.cases-section {
  background: var(--bg);
  padding-bottom: 5rem;

  .head {
    display: grid;
    grid-template-columns: 1fr fit-content;
    grid-template-rows: fit-content 1fr;
    grid-template-areas:
      "heading more"
      "desc    ."
      ;
    gap: 1rem;
    padding-bottom: 2.5rem;

    h2 {
      grid-area: heading;
    }

    .more {
      grid-area: more;
      font-size: 2rem;

      justify-self: end;

      .arrow svg {
        width: 2rem;
        height: 2rem;
        padding-top: 0.5rem;
      }
    }

    .description {
      grid-area: desc;
      font-size: 1.5rem;
    }
  }
}
</style>