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

    <VideoBackground />

    <HeaderSection />

    <div class="hero-text">
      <h1 class="brand">
        <em class="font-galada-regular add">
          &nbsp;ADD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </em>
        <strong class="font-kanit-black vision">
          &nbsp;VISION&nbsp;
        </strong>
      </h1>
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
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // Початкові анімації
  gsap.set('.hero-text', { y: 100, opacity: 0, z: 0 })
  gsap.set('.brand', { scale: 0.8, opacity: 0, z: 50, rotationX: 0, rotationY: 0 })
  gsap.set('.moto', { y: 50, opacity: 0, z: 30 })
  gsap.set('.we-do li', { y: 20, opacity: 0, z: 10 })

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
  tl.to('.hero-text', { y: 0, opacity: 1, duration: 1.2 })
    .to('.brand', { scale: 1, opacity: 1, duration: 1 }, '-=0.8')
    .to('.moto', { y: 0, opacity: 1, duration: 1.5 }, '-=0.6')
    .to('.we-do li', { y: 0, opacity: 1, duration: 2, stagger: 0.33 }, '-=0.4')

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
      duration: 0.8,
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

  // Оживлення .we-do li при наведенні
  const weDoItems = document.querySelectorAll('.we-do li')
  const weDoHandlers = []

  weDoItems.forEach((item) => {
    const onEnter = () => {
      gsap.to(item, {
        y: -10,
        scale: 1.1,
        rotationZ: 2,
        duration: 1,
        ease: 'elastic.out(1, 0.4)',
      })
    }

    const onLeave = () => {
      gsap.to(item, {
        y: 0,
        scale: 1,
        rotationZ: 0,
        duration: 1,
        ease: 'power2.out',
      })
    }

    item.addEventListener('mouseenter', onEnter)
    item.addEventListener('mouseleave', onLeave)

    // Збережи посилання для видалення
    weDoHandlers.push({ item, onEnter, onLeave })
  })

  // Очистка
  onBeforeUnmount(() => {
    hero.removeEventListener('pointermove', onPointerMove)
    hero.removeEventListener('touchmove', onTouchMove)
    hero.removeEventListener('mouseleave', resetBrand)

      // Очистка .we-do li обробників
    weDoHandlers.forEach(({ item, onEnter, onLeave }) => {
      item.removeEventListener('mouseenter', onEnter)
      item.removeEventListener('mouseleave', onLeave)
    })
  })
})
</script>

<style lang="scss">
@keyframes lightningSwing {
  0% {
    transform: translate(-50%, 50%) scale(2);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  50% {
    transform: translate(calc(100vw - 50%), calc(50% - 100dvh)) scale(1.5);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 50%) scale(1);
    opacity: 0;
  }
}

.hero-section {
  transform-style: preserve-3d;
  perspective: 800px;
  perspective-origin: center;
  position: relative;
  height: 100dvh;
  overflow: hidden;
  --grid-height: calc(100dvh - 6.6rem);
  --row-height: calc(var(--grid-height) / 3);

  .brand, .moto, .we-do {
    transform-style: preserve-3d;
    backface-visibility: hidden;
    will-change: transform;
  }


  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50vmin;
    height: 50vmin;
    z-index: 1;

    background: radial-gradient(
      circle at center,
      var(--bg50) 0%,
      var(--accent33) 25%,
      transparent 80%
    );

    border-radius: 50%;
    filter: blur(5rem) brightness(1.5);
    pointer-events: none;
    animation: lightningSwing 24s ease-in-out infinite alternate;
  }

  .hero-text {
    position: relative;
    width: 100%;
    height: var(--grid-height);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      ".      .      .      wedo   wedo"
      "brand  brand  brand  brand  brand"
      "moto   moto   moto   moto   moto";
    align-content: center;
    justify-items: center;

    -webkit-text-stroke: 2px var(--accent);
    text-stroke: 2px var(--accent);
    mix-blend-mode: screen;
    color: transparent;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 1.33rem var(--accent)) contrast(1.5) brightness(1.5);

    .brand {
      position: relative;
      grid-area: brand;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      justify-self: center;
      width: min-content;

      * {
        line-height: 60%;
        position: relative;
        -webkit-text-stroke: 0.1rem var(--accent25);
        text-stroke: 0.1rem var(--accent25);
      }

            @media (orientation: portrait) {
        left: 2.5rem;

        .add {
          font-size: max(8vh, 17vw);
          left: -1ch;
        }

        .vision {
          font-size: max(10vh, 26vw);
        }
      }

      @media (orientation: portrait) and (aspect-ratio < 0.4) {
        left: 0;

        .add {
          left: -0.5rem;
        }

        .vision {
          font-size: max(10vh, 26vw);
        }
      }

      @media (orientation: landscape) {
          left: 5rem;
        .add {
          font-size: max(25vh, 9vw);
          left: -2.5rem;
        }

        .vision {
          font-size: max(30vh, 15vw);
        }
      }

      .add {
        display: block;
        width: 100%;
        text-align: left;
        letter-spacing: 0.1ch;
      }

      .vision {
        letter-spacing: -0.05ch;
      }

      .add::before,
      .add::after,
      .vision::before,
      .vision::after {
        position: absolute;
        color: transparent; // сам текст прозорий
        -webkit-text-fill-color: transparent; // Safari підтримка
        left: 0;
      }

      .add::before,
      .vision::before {
        -webkit-text-stroke: 0.1rem var(--accent10);
        text-stroke: 0.1rem var(--accent10);
        color: var(--text-main75);
        -webkit-text-fill-color: var(--text-main75);
      }

      .add::after,
      .vision::after {
        -webkit-text-stroke: 0.5rem var(--accent25);
        text-stroke: 0.5rem var(--accent50);

        color: var(--accent25);
        -webkit-text-fill-color: var(--accent25);
      }

      .add,
      .add::before,
      .add::after {
        text-transform: lowercase;
      }

      .add::before,
      .add::after {
        content: "\00a0 ADD\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";
        text-transform: lowercase;
      }

      .vision::before,
      .vision::after {
        content: "\00a0VISION\00a0";
      }
    }

    .moto {
      position: relative;
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
    }

    & > * {
      height: var(--row-height);
    }
  }
}
</style>
