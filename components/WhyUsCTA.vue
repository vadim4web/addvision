<template>
  <div ref="container" class="why-cta-container glow-on-hover">
    <a ref="cta" href="https://t.me/vicharych" target="_blank" rel="noopener noreferrer" class="why-cta">
      {{ $t('why.cta') }}
    </a>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

const container = ref(null)
const cta = ref(null)

onMounted(() => {
  const area = container.value

  const move = (e) => {
    const rect = area.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top

    const x = (relX - rect.width / 2) * 0.34
    const y = (relY - rect.height / 2) * 0.8

    gsap.to(cta.value, {
      x,
      y,
      ease: 'power3.out',
      duration: 0.4,
    })
  }

  const reset = () => {
    gsap.to(cta.value, {
      x: 0,
      y: 0,
      ease: 'power3.out',
      duration: 0.6,
    })
  }

  area.addEventListener('pointermove', move)
  area.addEventListener('pointerleave', reset)

  onBeforeUnmount(() => {
    area.removeEventListener('pointermove', move)
    area.removeEventListener('pointerleave', reset)
  })
})
</script>

<style lang="scss">
@keyframes pulsing {
  0%,100% {
    border-radius: 3rem;
  }
  50% {
    width: calc(100% + 2rem);
    height: calc(100% + 2rem);
    transform: translate(-1rem, -1rem);
    border-radius: 0;
  }
}

.why-cta-container {
  overflow-x: hidden;
  display: grid;
  position: relative;
  left: 0;
  width: 100%;
  aspect-ratio: 2;
  grid-template-areas:
    ".     .     .     ."
    ".     link  link  ."
    ".     .     .     .";

  @media (orientation: portrait) {
    grid-template-columns: 5rem 1fr 1fr 5rem;
    grid-template-rows: 5rem 1fr 5rem;
  }

  @media (orientation: landscape) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .why-cta {
    grid-area: link;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    color: var(--white);
    background: var(--accent);
    border-radius: 3rem;
    position: absolute;
    width: calc(100% - 10rem);
    height: calc(50% - 5rem);
    top: 50%;
    left: 5rem;
    transform: translateY(-50%);
    z-index: 2;
    will-change: transform;
    transition: transform 0.5s ease;

    @media (max-width: 719px) and (aspect-ratio < 0.4) {
      font-size: 1.3rem;
    }

    @media (max-width: 719px) , (orientation: portrait) {
      font-size: 1.5rem;
    }

    &:hover::after {
      filter: drop-shadow(0 0 1rem var(--accent));
    }

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      transition: filter 1s ease;
      animation: pulsing 3s ease-in-out infinite;
      background: var(--accent);
      box-shadow: inset 0 0 5rem var(--accent);
    }
  }
}
</style>