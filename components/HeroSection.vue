<template>
  <section
    class="hero-section"
    id="hero"
    role="region"
    :aria-label="$t('aria.hero')"
  >
    <HeaderSection />

    <video autoplay muted loop playsinline class="hero-video">
      <source src="/add_vision_800x480.mp4" type="video/mp4" />
    </video>

    <div class="hero-text">
      <h1 class="brand">
        <em class="font-galada-regular add" data-text="Add"> Add </em>
        <strong class="font-kanit-black vision" data-text="VISION">
          VISION
        </strong>
      </h1>

      <p class="moto" :data-text="$t('moto')">
        {{ $t("moto") }}
      </p>

      <aside class="we-do">
        <ul>
          <li :data-text="$t('we-do.sences')">
            {{ $t("we-do.sences") }}
          </li>
          <li :data-text="$t('we-do.texts')">
            {{ $t("we-do.texts") }}
          </li>
          <li :data-text="$t('we-do.visual')">
            {{ $t("we-do.visual") }}
          </li>
          <li :data-text="$t('we-do.dev')">
            {{ $t("we-do.dev") }}
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@keyframes lightningSwing {
  0% {
    transform: translate(-50%, 50%) scale(1);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  50% {
    transform: translate(calc(100vw - 50%), calc(50% - 100vh)) scale(1.2);
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

@keyframes floatingRadial {
  0% {
    background-position: left bottom;
  }
  50% {
    background-position: right top;
  }
  100% {
    background-position: left bottom;
  }
}

.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;

  --grid-height: calc(100vh - 5.5rem);
  --row-height: calc(var(--grid-height) / 3);
  --brand-row-height: calc(var(--row-height) / 3);

  /*

  background-image: radial-gradient(
    circle at center,
    var(--bg66) 0%,
    var(--accent33) 40%,
    transparent 70%
  );

  background-repeat: no-repeat;
  background-size: 200% 200%; // Щоб було з чим працювати
  background-position: left bottom;
  animation: floatingRadial 24s -12s ease-in-out infinite alternate;

  */

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
      var(--bg80) 0%,
      var(--accent50) 40%,
      transparent 80%
    );

    border-radius: 50%;
    filter: blur(4rem) brightness(1.5);
    pointer-events: none;
    animation: lightningSwing 24s ease-in-out infinite alternate;
  }

  .hero-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 70% 70%;
    z-index: -1;
    opacity: 0.42;
    transform: scale(1.065);
  }

  .hero-text {
    width: 100%;
    height: var(--grid-height);

    &,
    .brand {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    grid-template-areas:
      ".      .      .      .      wedo"
      "brand  brand  brand  brand  brand"
      "moto   moto   moto   moto   moto";

    .brand {
      position: relative;
      grid-area: brand;

      grid-template-areas:
        "add1    add1    .       .       ."
        "vision2 vision2 vision2 vision2 vision2"
        "vision2 vision2 vision2 vision2 vision2";

      .add {
        grid-area: add1;
      }

      .add,
      .vision {
        display: flex;
        flex-direction: column;
        align-items: end;
      }

      .vision {
        grid-area: vision2;
      }
    }

    .moto {
      grid-area: moto;
      font-size: 3.5rem;
      line-height: 3.5rem;
      text-align: center;
    }

    .moto,
    .we-do {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .we-do {
      grid-area: wedo;
      font-size: 2rem;
    }

    & > * {
      color: transparent;
      -webkit-text-stroke: 2px var(--text-main);
      text-stroke: 2px var(--text-main);
      height: var(--row-height);
    }
  }

  @media (orientation: portrait) {
    .add {
      font-size: var(--brand-row-height);
      line-height: var(--brand-row-height);
    }

    .vision {}
  }

  @media (orientation: portrait) and (max-width: 1023px) {
    .add {
      transform: translate(5%, 15%);
    }

    .vision {
      font-size: calc(var(--brand-row-height) * 1.5);
      line-height: calc(var(--brand-row-height) * 1.5);
      transform: translate(-5%, -15%);
    }
  }

  @media (orientation: portrait) and (max-width: 767px) {
    .add {
      transform: translate(5%, 20%);
    }

    .vision {
      font-size: calc(var(--brand-row-height) * 1.1);
      line-height: calc(var(--brand-row-height) * 1.5);
      transform: translate(-5%, -20%);
    }
  }

  @media (orientation: portrait) and (max-width: 767px) and (aspect-ratio >= 0.75) {
    .add {
      transform: translate(5%, 15%);
    }

    .vision {
      font-size: calc(var(--brand-row-height) * 1.5);
      line-height: calc(var(--brand-row-height) * 1.5);
      transform: translate(-5%, -15%);
    }
  }

  @media (orientation: portrait) and (max-width: 479px) {
    .add {
      transform: translate(5%, 20%);
    }

    .vision {
      font-size: calc(var(--brand-row-height) * 1.1);
      line-height: calc(var(--brand-row-height) * 1.5);
      transform: translate(-5%, -20%);
    }
  }

  @media (orientation: portrait) and (max-width: 479px) and (aspect-ratio < 0.5) {
    .add {
      transform: translate(15%, 20%);
    }

    .vision {
      font-size: calc(var(--brand-row-height) * 1);
      line-height: calc(var(--brand-row-height) * 1.5);
      transform: translate(0, -20%);
    }
  }

  @media (orientation: portrait) and (min-width: 1023px) {
    .add {
      transform: translate(10%, 15%);
    }

    .vision {
      font-size: calc(var(--brand-row-height) * 1.5);
      line-height: calc(var(--brand-row-height) * 1.5);
      transform: translate(-0%, -15%);
    }

    .hero-video {
      object-position: 75% 75%;
    }
  }

  @media (orientation: portrait) and (max-width: 1023px) and (aspect-ratio < 0.695) and (aspect-ratio > 0.5) {
    .add {
      transform: translate(0%, 15%);
    }

    .vision {
      transform: translate(-0%, -15%);
    }
  }

  @media (orientation: portrait) and (max-width: 479px) and (aspect-ratio < 0.695) and (aspect-ratio > 0.5) {
    .add {
      transform: translate(-15%, 15%);
    }

    .vision {
      font-size: calc(var(--brand-row-height) * 1.5);
      line-height: calc(var(--brand-row-height) * 1.5);
      transform: translate(-0%, -15%);
    }
  }

  @media (orientation: landscape) {
    .add {
      font-size: calc(var(--brand-row-height) * 2.5);
      line-height: calc(var(--brand-row-height) * 1.5);
      transform: translate(10%, -30%);
    }

    .vision {
      font-size: calc(var(--brand-row-height) * 3.5);
      line-height: calc(var(--brand-row-height) * 1.5);
      transform: translate(-5%, -15%);
    }
  }
}
</style>
