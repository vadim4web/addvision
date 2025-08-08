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
          {{ $t("faq.titleParts.start") }}
          <wbr v-if="$i18n.locale !== 'en'" /> <br v-else />
          {{ $t("faq.titleParts.middle") }}
          <wbr />
          {{ $t("faq.titleParts.end") }}
        </span>
        <i class="arrow"><SvgArrow /></i>
      </SectionHeading>

      <div class="head">
        <strong
          class="faq-description glow-on-hover text-shade font-inter-regular font-26"
        >
          {{ $t("faq.description") }}
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
        <hr class="box-shade" />

        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq"
          :class="{ closed: openedIndex !== index }"
          @click="handleClick(index)"
        >
          <hr class="box-shade" />

          <div class="faq-question glow-on-hover text-shade font-yanone-light font-64">
            {{ item.question }}
            <i class="arrow-icon" :class="{ open: openedIndex === index }"
              ><SvgArrow
            /></i>
          </div>
          <div class="faq-answer glow-on-hover text-shade font-inter-regular font-24">
            {{ item.answer }}
          </div>

          <hr class="box-shade" />
        </div>

        <hr class="box-shade" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale, messages } = useI18n();
const faqItems = computed(() => messages.value[locale.value]?.faq?.items || []);

const openedIndex = ref(null);

function handleClick(index) {
  openedIndex.value = openedIndex.value === index ? null : index;
}

function handleClickOutside() {
  openedIndex.value = null;
}
</script>

<style lang="scss">
.faq-section {
  background: var(--dark-green);
  display: flex;
  flex-direction: column;

  .head {
    display: grid;
    grid-template-columns: 66% 1fr;
    grid-template-areas: "desc  img";

    @media (orientation: portrait) {
      grid-template-columns: none;
      grid-template-rows: fit-content 1fr;
      grid-template-areas: "desc" "img";
    }

    .faq-description {
      grid-area: desc;
      margin-bottom: 2rem;
      display: block;
      text-align: justify;
      margin-bottom: 10%;
    }

    .faq-image {
      grid-area: img;
      max-width: 90%;
      margin-bottom: 10%;
      margin-inline: auto;
    }
  }

  .faq-items {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-block: 1px;
    margin-block: 1rem;

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

    @media (orientation: landscape), (min-width: 90ch) {
      max-width: 66%;
      margin-inline: auto 0;
    }

    @media (max-width: 1080px) {
      margin-inline: auto;
    }

    .faq {
      cursor: pointer;
      padding: 2rem 0 1rem 1rem;
      position: relative;

      .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
      }

      .arrow-icon {
        transform: rotate3d(1, 1, 0, 180deg); // діагональна вісь
        transform: rotate(180deg);
        transition: transform 0.5s ease;

        svg {
          width: 4rem;
          height: 4rem;
          position: relative;
          bottom: -0.75rem;
        }
      }

      .arrow-icon.open {
        transform: rotate3d(1, 1, 0, 0deg);
        transform: rotate(0deg);
      }

      .faq-answer {
        color: var(--text-main);
        padding: 1rem 0 4rem;
        max-height: fit-content;
        overflow: hidden;
        transition: all 0.5s ease;
        max-width: calc(100% - 6rem);
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
