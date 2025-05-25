<template>
  <section
    class="hero-section"
    id="hero"
    role="region"
    :aria-label="$t('aria.hero')"
  >
    <h1 style="display: none;">
      <em>Add</em> <strong>VISION</strong> — {{ $t("moto") }} | {{ $t("we-do.sences") }}, {{ $t("we-do.texts") }}, {{ $t("we-do.visual") }}, {{ $t("we-do.dev") }}
    </h1>

    <HeaderSection />

    <video autoplay muted loop playsinline class="hero-video">
      <source src="/add_vision_800x480.mp4" type="video/mp4" />
    </video>

    <div class="hero-text">
      <h2 class="brand font-kanit-black">
        <span class="font-galada-regular add">
          Add
        </span>
        VISION
      </h2>

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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      ".      .      .      wedo   wedo"
      "brand  brand  brand  brand  brand"
      "moto   moto   moto   moto   moto";

    .brand {
      position: relative;
      grid-area: brand;
      display: inline-flex;
      align-items: center;
      justify-self: end;
      border: 1px solid cyan;
      width: min-content;


      .add {
        font-size: 75%;
        line-height: 100%;
        position: absolute;

        top: 0;
        left: 0;
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

  @media (orientation: portrait) and (min-width: 1024px) {
    .brand {
      font-size: calc(var(--row-height) * 0.5);
      line-height: calc(var(--row-height) * 0.5);
      margin-right: 1rem;

      .add {
        transform: translate(-25%, 12.5%);
      }
    }
  }

  @media (orientation: portrait) and (max-width: 1023px) {
    .brand {
      font-size: calc(var(--row-height) * 0.4);
      line-height: calc(var(--row-height) * 0.5);
      margin-right: min(1.5vw, 0.75rem);

      .add {
        transform: translate(-15%, 40%);
      }
    }
  }

  @media (orientation: portrait) and (max-width: 1023px) and (aspect-ratio >= 0.75) {
    .brand {
      font-size: calc(var(--row-height) * 0.6);
      margin-right: 2rem;

      .add {
        transform: translate(-25%, -5%);
      }
    }
  }

  @media (orientation: portrait) and (max-width: 1023px) and (aspect-ratio < 0.75) and (aspect-ratio >= 0.7) {
    .brand {
      font-size: calc(var(--row-height) * 0.45);
      margin-right: 2rem;

      .add {
        transform: translate(-25%, -5%);
      }
    }
  }

  @media (orientation: portrait) and (min-width: 1023px) {
    .hero-video {
      object-position: 75% 75%;
    }
  }

  @media (orientation: landscape) and (min-width: 1440px) {
    .brand {
      font-size: calc(var(--row-height) * 1.5);
      line-height: calc(var(--row-height) * 1.5);
      margin-right: 12vw;

      .add {
        transform: translate(-33%, -75%);
      }
    }
  }

  @media (orientation: landscape) and (max-width: 1439px) {
    .brand {
      font-size: calc(var(--row-height) * 1.25);
      line-height: calc(var(--row-height) * 1.5);
      margin-right: 12vw;

      .add {
        transform: translate(-33%, -75%);
      }
    }
  }
}
</style>
