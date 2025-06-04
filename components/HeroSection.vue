<template>
  <section
    id="hero"
    class="hero-section"
    role="region"
    :aria-label="$t('aria.hero')"
  >
    <h1 style="display: none;">
      <em>ADD</em> <strong>VISION</strong> — {{ $t("moto") }} | {{ $t("we-do.sences") }}, {{ $t("we-do.texts") }}, {{ $t("we-do.visual") }}, {{ $t("we-do.dev") }}
    </h1>

    <HeaderSection />
    <VideoBackground />

    <div class="hero-text">
      <div class="brand"></div>

      <p class="moto">
        {{ $t("moto") }}
      </p>

      <aside class="we-do">
        <ul>
          <li>{{ $t("we-do.sences") }}</li>
          <li>{{ $t("we-do.texts") }}</li>
          <li>{{ $t("we-do.visual") }}</li>
          <li>{{ $t("we-do.dev") }}</li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'

onMounted(() => {
  // Початкові анімації
  gsap.set('.hero-text', { y: 100, z: 0 })
  gsap.set('.brand', { scale: 1.5, z: 50, rotationX: 0, rotationY: 0 })
  gsap.set('.moto', { y: 0, z: 30, opacity: 0, })
  gsap.set('.we-do li', { y: "5rem", opacity: 0, z: 10 })

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
  tl.to('.hero-text', { y: 0, opacity: 1, duration: 1.2 })
    .to('.brand', { scale: 1, opacity: 1, duration: 1 }, '-=0.8')
    .to('.moto', { y: 0, opacity: 1, duration: 1.5, clearProps: true }, '-=0.6')
    .to('.we-do li', { y: 0, opacity: 1, duration: 2, stagger: 0.33, clearProps: true }, '-=0.4')

  const hero = document.querySelector('.hero-section')
  const brand = document.querySelector('.brand')

  // Функції руху
  const moveX = (el) => gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' })
  const moveY = (el) => gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' })
  const moveZ = (el) => gsap.quickTo(el, 'z', { duration: 0.6, ease: 'power3.out' })
  const rotateX = (el) => gsap.quickTo(el, 'rotationX', { duration: 0.6, ease: 'power3.out' })
  const rotateY = (el) => gsap.quickTo(el, 'rotationY', { duration: 0.6, ease: 'power3.out' })

  const moveBrandX = moveX(brand)
  const moveBrandY = moveY(brand)
  const moveBrandZ = moveZ(brand)
  const rotateBrandX = rotateX(brand)
  const rotateBrandY = rotateY(brand)

  // Рух за мишею
  const handleMove = (x, y) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const offsetX = (x - centerX) / centerX
    const offsetY = (y - centerY) / centerY

    moveBrandX(offsetX * 60)
    moveBrandY(offsetY * 40)
    moveBrandZ(Math.abs(offsetX * offsetY) * 20)
    rotateBrandX(offsetY * 20)
    rotateBrandY(-offsetX * 20)
  }

  // Повернення в центр при виході
  const resetBrand = () => {
    gsap.to(brand, {
      x: 0,
      y: 0,
      z: 0,
      rotationX: 0,
      rotationY: 0,
      duration: 1,
      ease: 'power2.out'
    })
  }

  const onPointerMove = (e) => handleMove(e.clientX, e.clientY)
  const onTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY)
    }
  }

  // Навігація
  hero.addEventListener('pointermove', onPointerMove)
  hero.addEventListener('touchmove', onTouchMove)
  hero.addEventListener('mouseleave', resetBrand)

  // Очистка
  onBeforeUnmount(() => {
    hero.removeEventListener('pointermove', onPointerMove)
    hero.removeEventListener('touchmove', onTouchMove)
    hero.removeEventListener('mouseleave', resetBrand)
  })
})
</script>

<style lang="scss">
.hero-section {
  position: relative;
  height: fit-content;
  overflow: hidden;
  width: 100%;

  .hero-text {
    z-index: 1;
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      ".      .      wedo   wedo   wedo"
      ".      .      .      .      .   "
      "moto   moto   moto   moto   moto";
    align-content: center;
    justify-items: center;

    .brand {
      grid-area: brand;
      width: 100%;
      max-width: 100%;
      z-index: 1;
      position: absolute;
      left: 0;

      @media (orientation: portrait) {
        height: 100%;
        top: -2rem;
      }

      @media (orientation: landscape) {
        height: 100vh;
        top: -7.5rem;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        @media (orientation: portrait) and (aspect-ratio < 0.5) {
          transform: scale(2);
        }

        @media (orientation: portrait) and (aspect-ratio >= 0.5) and (aspect-ratio < 0.75) {
          transform: scale(2.25);
        }

        @media (orientation: portrait) and (aspect-ratio > 0.75) {
          transform: scale(2.5);
        }

        @media (orientation: landscape) {
          transform: scale(2.66);
        }

        background-image: url('./images/add-vision-mask.png');
        background-size: cover;
        background-position: center;
        inset: 0;
        pointer-events: none;
        filter: blur(0.5px);
      }
    }

    .moto {
      top: 1.5rem;
      grid-area: moto;
      font-size: 3rem;
      line-height: 3rem;
      text-align: center;
      text-wrap: wrap;
      width: 80%;
      justify-content: center;
    }

    .moto,
    .we-do {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .we-do {
      grid-area: wedo;
      font-size: 2rem;

      @media (orientation: portrait) {
        justify-content: center;
      }

      @media (orientation: landscape) {
        justify-content: end;
      }

      li {
        transition: transform 1s ease;
        will-change: transform;

        &:hover {
          transform: translate(15%, -20%) scale(1.1);
        }
      }
    }
  }
}
</style>
