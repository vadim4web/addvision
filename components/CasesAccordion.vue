<template>
  <div class="cases-accordion">
    <div class="cases-frame">
      <hr class="box-shade" />

      <div
        v-for="(item, index) in casesItems"
        :key="index"
        class="case"
        :class="{ closed: openedIndex !== index }"
        @click="handleClick(index)"
      >
        <hr class="box-shade" />

        <h3 class="case-title glow-on-hover font-yanone-light text-shade font-64">
          {{ item.title }}
          <i class="arrow-icon" :class="{ open: openedIndex === index }"><SvgArrow /></i>
        </h3>

        <p class="case-description glow-on-hover text-shade font-inter-regular font-24">
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

        <hr class="box-shade" />
      </div>

      <hr class="box-shade" />
    </div>
  </div>
</template>

<script setup>
const { locale, messages } = useI18n();

const isReady = ref(false);

watch(
  () => messages.value?.[locale.value],
  (newVal) => {
    if (newVal?.cases?.list) {
      isReady.value = true;
    }
  },
  { immediate: true }
);

const casesItems = computed(() =>
  isReady.value ? (messages.value[locale.value]?.cases?.list || []).slice(0, 4) : []
);

const openedIndex = ref(0);
const opened = computed(() => casesItems.value[openedIndex.value]);

function handleClick(index) {
  openedIndex.value = openedIndex.value === index ? 0 : index;
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
  }

  .cases-frame {
    hr {
      margin: 0;
      background: var(--gray);
      border: none;
      height: 1px;
    }

    .case {
      overflow: hidden;

      .case-title {
        padding-top: 0.75rem;

        .arrow-icon svg {
          width: 4rem;
          height: 4rem;
          transition: transform 0.5s ease;
        }

        .arrow-icon:not(.open) svg {
          transform: rotate(-180deg);
          transition: transform 0.5s ease;
        }
      }

      .case-description {
        transition: all 1s ease !important;
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
          height: 22.4rem;
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
    background: linear-gradient(90deg, transparent, var(--accent50), transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media (orientation: landscape) {
      position: absolute;
      top: 2px;
      right: 0;
      width: 50%;
    }

    @media (orientation: portrait) {
      margin-top: 1.6rem;
    }

    .overflow-cutting-wrapper {
      overflow: hidden;
      aspect-ratio: 10 / 16;
      height: 100%;

      .preview {
        object-fit: cover;
        width: 100%;
        aspect-ratio: 10 / 16;
        max-height: 64.7rem;
        position: relative;
        left: 0;
        transform: scale(1, 1.03) translate(-1%, 1.5%);
      }
    }
  }
}
</style>
