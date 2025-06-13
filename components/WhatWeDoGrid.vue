<script setup>
import { gsap } from 'gsap'

const { locale, messages } = useI18n()
const sections = computed(() => messages.value[locale.value]?.what?.sections || {})

const sectionRefs = ref([])

// Зберігаємо всі слухачі для очищення
const listeners = []

onMounted(async () => {
  await nextTick()

  sectionRefs.value.forEach((section) => {
    const heading = section.querySelector('h3')
    const bg = section.querySelector('.bg')

    const onMouseEnter = () => {
      gsap.to(heading, {
        y: '50%',
        duration: 1,
        ease: 'power1.inOut',
      })
    }

    const onMouseLeave = () => {
      gsap.to(heading, {
        y: 0,
        duration: 1,
        ease: 'power1.inOut',
      })

      gsap.to(bg, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'power1.inOut',
      })
    }

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect()
      const difX = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const difY = ((e.clientY - rect.top) / rect.height - 0.5) * 20

      gsap.to(bg, {
        x: `${-difX}%`,
        y: `${-difY}%`,
        duration: 0.66,
        ease: 'power3.out',
      })
    }

    // Додаємо слухачі
    section.addEventListener('mouseenter', onMouseEnter)
    section.addEventListener('mouseleave', onMouseLeave)
    section.addEventListener('mousemove', onMouseMove)

    // Зберігаємо для зняття
    listeners.push({
      element: section,
      handlers: {
        mouseenter: onMouseEnter,
        mouseleave: onMouseLeave,
        mousemove: onMouseMove,
      },
    })
  })
})

// Видаляємо слухачі
onUnmounted(() => {
  listeners.forEach(({ element, handlers }) => {
    element.removeEventListener('mouseenter', handlers.mouseenter)
    element.removeEventListener('mouseleave', handlers.mouseleave)
    element.removeEventListener('mousemove', handlers.mousemove)
  })
})
</script>

<template>
  <div class="what-we-do-grid grid-four">
    <div
      v-for="(section, key) in sections"
      :key="key"
      ref="sectionRefs"
      class="what-section"
    >
      <h3 class="glow-on-hover">{{ section.title }}</h3>

      <ul>
        <li v-for="(item, idx) in section.items" :key="idx" class="glow-on-hover">{{ item }}</li>
      </ul>

      <div class="bg"></div>
    </div>
  </div>
</template>

<style lang="scss">
.what-we-do-grid {
  .what-section {
    aspect-ratio: 1;
    display: grid;
    grid-template-rows: 0.25fr 0.5fr 10rem;
    grid-template-areas:
      "."
      "heading"
      "desc"
      ;

    position: relative;
    overflow: hidden;
    z-index: 1;

    color: var(--white);
    text-shadow: 0 0 0.15em var(--bg);
    font-weight: 600;
    padding: 1rem;


    .bg {
      z-index: -1;
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transform: scale(1.2);
    }

    @for $i from 1 through 4 {
      &:nth-child(#{$i}) .bg {
        background-image: url('../assets/images/services' + $i + '.webp');
      }
    }

    &::after {
      content: '';
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
      font-size: 1.75rem;
      position: relative;
      z-index: 1;
      will-change: transform;
    }

    ul {
      grid-area: desc;
      font-size: 1.25rem;
      position: relative;
      z-index: 2;
    }


    @media (min-width: 720px) and (max-width: 1279px) {
      h3 {
        font-size: 2.25rem;
      }

      ul {
        font-size: 1.5rem;
      }
    }

    
    @media (min-width: 1280px) and (orientation: portrait) {
      h3 {
        font-size: 1.25rem;
      }

      ul {
        font-size: 1rem;
      }
    }

    @media (max-width: 719px) and (orientation: portrait) {
      h3 {
        font-size: 3rem;
      }

      ul {
        font-size: 2rem;
      }
    }

    @media (max-width: 719px) and (orientation: landscape) {
      h3 {
        font-size: 2rem;
      }

      ul {
        font-size: 1.5rem;
      }
    }

  }
}
</style>
