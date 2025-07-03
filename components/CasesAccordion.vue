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
          <i class="arrow-icon" :class="{ open: openedIndex === index }" v-html="svgArrow()"></i>
        </h3>

        <p class="case-description glow-on-hover">
          {{ item.description }}
        </p>
      </div>
    </div>

    <div class="preview-frame">
      <iframe :src="opened.url" :title="opened.title" frameborder="0" class="preview"></iframe>
    </div>
  </div>
</template>

<script setup>
const { locale, messages } = useI18n()
const casesItems = computed(() => (messages.value[locale.value]?.cases?.list).slice(0, 4) || [])

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
  height: 32rem;

  .cases-frame {
    border-top: 0.125rem solid var(--gray);
    border-bottom: 0.125rem solid var(--gray);

    .case {
      overflow: hidden;
      border-top: 0.125rem solid var(--gray);
      border-bottom: 0.125rem solid var(--gray);

      &:not(.closed) {
        padding-bottom: 0.5rem;
      }

      .case-title {
        font-size: 3rem;

        .arrow-icon svg {
          width: 2rem;
          height: 2rem;
          transition: transform 0.5s ease;
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
        height: fit-content;
        height: 14rem;
        transition: height 0.5s ease;
      }
    }
  }


  .preview-frame {
    background: linear-gradient(90deg, transparent, var(--accent50), transparent);
    display: flex;
    justify-content: center;

    .preview {
      aspect-ratio: 9 / 16;
      height: 100%;
      object-fit: contain;
      zoom: 0.45;
    }
  }
}
</style>