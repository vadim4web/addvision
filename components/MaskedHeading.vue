<template>
  <svg
    viewBox="0 0 100 30"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="What We Do?"
    class="masked-text-svg"
  >
    <defs>
      <mask :id="maskId" maskUnits="userSpaceOnUse">
        <rect width="100" height="30" fill="white" />
        <text
          x="5"
          y="22"
          :font-size="fontSize"
          font-weight="bold"
          fill="black"
          letter-spacing="0.5"
          font-family="sans-serif"
          ref="textRef"
        >
          <tspan
            v-for="(letter, i) in letters"
            :key="i"
            :ref="el => letterRefs[i] = el"
            :x="5 + i * 5"
          >
            {{ letter }}
          </tspan>
        </text>
      </mask>
    </defs>

    <!-- Фон з маскою -->
    <rect
      width="100"
      height="30"
      fill="url(#backgroundGradient)"
      :mask="`url(#${maskId})`"
    />

    <defs>
      <linearGradient id="backgroundGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#00f" />
        <stop offset="100%" stop-color="#0ff" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  text: { type: String, required: true },
  maskId: { type: String, default: 'text-mask' },
  fontSize: { type: String, default: '18px' }, // Задаємо розмір шрифту у відносних одиницях px/em/rem
})

const letters = computed(() => props.text.split(''))
const letterRefs = ref([])
const textRef = ref(null)

onMounted(() => {
  gsap.set(letterRefs.value, { opacity: 0, y: 5 })
  gsap.to(letterRefs.value, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power2.out',
  })
})
</script>

<style scoped>
.masked-text-svg {
  width: 100%;
  height: auto;
  max-width: 600px; /* або як потрібно */
  display: block;
}
</style>
