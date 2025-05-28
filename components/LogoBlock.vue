<template>
  <div class="logo">
    <svg class="logo-image" width="816" height="816" viewBox="0 0 816 816" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 170)">
        <path d="M477.117 0.538357L299.837 0.509288L388.502 154.024L409.758 117.208L477.117 0.538357Z" fill="#59CBE8"/>
        <path d="M527.668 0.546194L481.145 81.1273L413.785 197.798L468.622 292.743L489.878 255.926L637.311 0.565041L527.668 0.546194Z" fill="#59CBE8"/>
        <path d="M687.86 0.57286L641.337 81.154L493.903 336.516L557.821 447.182L815.659 0.593508L687.86 0.57286Z" fill="#59CBE8"/>
        <path d="M477.117 0.538357L299.837 0.509288L388.502 154.024L409.758 117.208L477.117 0.538357Z" fill="#59CBE8"/>
        <path d="M527.668 0.546011L481.145 81.1271L413.785 197.798L468.622 292.742L489.878 255.926L637.311 0.564858L527.668 0.546011Z" fill="#59CBE8"/>
        <path d="M687.86 0.57286L641.337 81.154L493.903 336.516L557.821 447.182L815.659 0.593508L687.86 0.57286Z" fill="#59CBE8"/>
        <path d="M348.29 180.306L259.675 26.7623L171.06 180.306H213.571H348.29Z" fill="#59CBE8"/>
        <path d="M373.558 224.088H280.511H145.791L90.9854 319.051H133.497H428.363L373.558 224.088Z" fill="#59CBE8"/>
        <path d="M453.631 362.832H360.584H65.718L1.83691 473.519H517.513L453.631 362.832Z" fill="#59CBE8"/>
        <path d="M348.29 180.306L259.675 26.7623L171.06 180.306H213.571H348.29Z" fill="#59CBE8"/>
        <path d="M373.558 224.088H280.511H145.791L90.9854 319.051H133.497H428.363L373.558 224.088Z" fill="#59CBE8"/>
        <path d="M453.631 362.832H360.584H65.718L1.83691 473.519H517.513L453.631 362.832Z" fill="#59CBE8"/>
      </g>
    </svg>

    <div class="logo-text">
      <span
        class="logo-subline"
        :data-text="'WEB-' + $t('agency')"
      >
        WEB-{{ $t('agency') }}
      </span>
      <div class="logo-brand">
        <em data-text="{ADD}">{<i>ADD</i>}</em>
        <strong data-text="VISION" >
          VISION
        </strong>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@keyframes addEffect {
  0%, 100% {
    transform: rotateY(0deg) scale(1);
    color: var(--text-main);
    text-shadow: none;
    filter: brightness(1);
  }
  50% {
    transform: rotateY(180deg) scale(1.1);
    color: var(--accent);
    text-shadow: 0 0 10px var(--accent), 0 0 20px var(--accent);
    filter: brightness(1.3);
  }
}

@keyframes visionEffect {
  0% { transform: scale(1) translateX(0) rotateX(0); }
  25% { transform: scale(1.1) translateX(0) rotateX(0);}
  50% { transform: scale(1.25) translateX(-10%) rotateX(180deg);}
  66% {
    transform: scale(1.2) translateX(0) rotateX(270deg);
    color: var(--accent);
  }
  75% { transform: scale(1.1) translateX(0) rotateX(360deg);}
  100% { transform: scale(1) translateX(0) rotateX(360deg); }
}

.logo {
  display: grid;
  justify-content: start;
  grid-template-columns: 1rem 6.6rem auto;
  grid-template-areas: ". img txt";
  align-items: center;
  gap: 0.25rem;
  z-index: 1;

  perspective: 1000px;

  &-image {
    width: 6.6rem;
    height: 6.6rem;
    grid-area: img;
  }

  &-text {
    display: inline-flex;
    flex-direction: column;
    line-height: 1;
    color: var(--bg);
    gap: 0.25rem;
    grid-area: txt;
    max-width: fit-content;
    padding: 0.125em;
    position: relative;
    filter: none;
    transition: filter 1s ease;

    &::before {
      position: absolute;
      height: 4rem;
      left: -0.125em;
      top: -0.33em;
      content: '';
      background:
        linear-gradient(180deg, var(--accent) 10%, transparent 10%, transparent 90%, var(--accent)90%),
      linear-gradient(90deg, var(--accent10), var(--accent25), var(--accent10)90%);
      transition: width 1s;
      filter: drop-shadow(0 0 0.16em var(--accent50)) contrast(1.5);
      mix-blend-mode: color-burn;
      z-index: -1;
      opacity: 0.75;
    }

    &:not(:hover)::before {
      position: absolute;
      width: 0;
      height: inherit;
      content: '';
      transition: width 1s ease;
    }

    &:hover::before {
      width: 12ch;
    }
  }

  &-subline {
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--bg50);
    width: max-content;
    transition: color 1s ease;

    &::after {
      content: "";
      width: 100%;
    }
  }

  &-text:hover {
    filter: drop-shadow(0 0 0.2em var(--bg50)) contrast(2);
  }
  &:hover &-subline {
    color: var(--bg75);
  }

  &-brand {
    font-size: 1.5rem;
    font-weight: 600;
    position: relative;
    left: -0.1rem;

    @media (orientation: portrait) and (max-width: 959px) {
      font-size: 1.2rem;
    }

    em {
      font-weight: 400;
      display: inline-block;
      text-transform: lowercase;
      color: var(--accent);
      transform-style: preserve-3d;
      transform-origin: 33% center;

      & i {
        font-style: italic;
        color: var(--bg);
      }

      &::after {
        text-transform: lowercase;
      }
    }

    strong {
      font-weight: 800;
      display: inline-block;
    }
  }
}

[lang="en"] .logo-subline { letter-spacing: 0.7ch }
[lang="ru"] .logo-subline { letter-spacing: 0.3ch }
[lang="uk"] .logo-subline { letter-spacing: 0.6ch }

@media (orientation: portrait) and (max-width: 959px) {
  [lang="en"] .logo-subline { letter-spacing: 0.3ch }
  [lang="ru"] .logo-subline { letter-spacing: 0 }
  [lang="uk"] .logo-subline { letter-spacing: 0.25ch }
}
</style>