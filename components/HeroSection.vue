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

    <video autoplay muted loop playsinline class="hero-video">
      <source src="/add_vision_1600x900.mp4" type="video/mp4" >
    </video>

    <div class="hero-text">
      <h1 class="brand">
        <em class="font-galada-regular add">
          ADD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

<script setup></script>

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


.text-mask {
  position: absolute;
  top: 50%;
  left: 50%;
  inset: 0;
  width: 100%;
  z-index: -1;
  display: block;
  pointer-events: none;
  object-fit: cover;
}

.hero-section {
  position: relative;
  height: 100dvh;
  overflow: hidden;
  --grid-height: calc(100dvh - 6.6rem);
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
      var(--bg50) 0%,
      var(--accent33) 25%,
      transparent 80%
    );

    border-radius: 50%;
    filter: blur(5rem) brightness(1.5);
    pointer-events: none;
    animation: lightningSwing 24s ease-in-out infinite alternate;
  }

  .hero-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 71% 71%;
    z-index: -1;
    opacity: 1;
    transform: scale(1.065);
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
        .add {
          font-size: max(8vh, 17vw);
        }

        .vision {
          font-size: max(10vh, 26vw);
        }
      }
      @media (orientation: landscape) {
        .add {
          font-size: max(25vh, 9vw);
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
        left: 0.5rem;
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
        content: "ADD\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";
        text-transform: lowercase;
      }

      .vision::before,
      .vision::after {
        content: "\00a0VISION\00a0";
      }
    }

    .moto {
      grid-area: moto;
      font-size: 3rem;
      line-height: 3rem;
      text-align: center;
      text-wrap: wrap;
      width: 80%;
      color: var(--accent50);
      -webkit-text-fill-color: var(--accent50);

      @media (orientation: landscape) {
        justify-content: center;
      }
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
