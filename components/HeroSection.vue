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
      <h1 class="brand">
        <em class="font-galada-regular add">&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</em>
        <strong class="font-kanit-black vision">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VISION&nbsp;&nbsp;</strong>
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
      flex-direction: column;
      align-items: center;
      justify-content: center;
      justify-self: center;
      width: min-content;

      * {
        line-height: 60%;
      }

      @media (orientation: portrait) {
        .add {
          font-size: min(9vh, 17vw);
        }

        .vision {
          font-size: max(14vh, 24vw);
        }
      }
      @media (orientation: landscape) {
        .add {
          font-size: min(25vh, 10vw);
        }

        .vision {
          font-size: min(42vh, 17vw);
        }
      }

      .vision {
        letter-spacing: -0.05ch;
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
}
</style>
