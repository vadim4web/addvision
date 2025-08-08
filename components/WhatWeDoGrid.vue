<script setup>
import { gsap } from "gsap";

const { locale, messages } = useI18n();
const sections = computed(() => messages.value[locale.value]?.what?.sections || {});

const sectionRefs = ref([]);

// Зберігаємо всі слухачі для очищення
const listeners = [];

const isPortraitQuery = window.matchMedia("(orientation: portrait)");
const getYOffset = () => (isPortraitQuery.matches ? "6rem" : "4rem");

onMounted(async () => {
  await nextTick();

  sectionRefs.value.forEach((section) => {
    const heading = section.querySelector("h3");
    const bg = section.querySelector(".bg");

    const onMouseEnter = () => {
      gsap.to(heading, {
        y: getYOffset(),
        duration: 1,
        ease: "power1.inOut",
      });
    };

    const onMouseLeave = () => {
      gsap.to(heading, {
        y: 0,
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.to(bg, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
      });
    };

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const difX = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const difY = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

      gsap.to(bg, {
        x: `${-difX}%`,
        y: `${-difY}%`,
        duration: 0.66,
        ease: "power3.out",
      });
    };
    // Додаємо слухачі
    section.addEventListener("mouseenter", onMouseEnter);
    section.addEventListener("mouseleave", onMouseLeave);
    section.addEventListener("mousemove", onMouseMove);

    // Зберігаємо для зняття
    listeners.push({
      element: section,
      handlers: {
        mouseenter: onMouseEnter,
        mouseleave: onMouseLeave,
        mousemove: onMouseMove,
      },
    });
  });
});

// Видаляємо слухачі
onUnmounted(() => {
  listeners.forEach(({ element, handlers }) => {
    element.removeEventListener("mouseenter", handlers.mouseenter);
    element.removeEventListener("mouseleave", handlers.mouseleave);
    element.removeEventListener("mousemove", handlers.mousemove);
  });
});
</script>

<template>
  <div class="what-we-do-grid grid-four">
    <div
      v-for="(section, key, index) in sections"
      :key="key"
      ref="sectionRefs"
      class="what-section glow-on-hover box-shade"
    >
      <h3 class="glow-on-hover text-shade font-inter-bold font-34">
        {{ section.title }}
      </h3>

      <ul>
        <li
          v-for="(item, idx) in section.items"
          :key="idx"
          class="glow-on-hover text-shade font-inter-semibold font-24"
        >
          {{ item }}
        </li>
      </ul>

      <div class="bg">
        <img
          :alt="`${section.title} image`"
          height="320"
          :src="`/images/services${index + 1}.webp`"
          width="320"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.what-we-do-grid {
  .what-section {
    aspect-ratio: 1;
    display: grid;
    grid-template-rows: 1fr 0.5fr 3fr;
    grid-template-areas:
      "heading"
      "."
      "desc";

    position: relative;
    overflow: hidden;
    z-index: 1;
    color: var(--text-main);
    padding: 1.5rem;

    .bg {
      z-index: -1;
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      transform: scale(1.2);

      img {
        width: 100%;
        height: 100%;
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: linear-gradient(180deg, transparent, var(--accent75));
      transition: opacity 1s;
    }

    &:not(:hover)::after {
      opacity: 1;
    }

    h3 {
      grid-area: heading;
      position: relative;
      z-index: 1;
      will-change: transform;
    }

    ul {
      grid-area: desc;
      position: relative;
      z-index: 2;
    }
  }
}
</style>
