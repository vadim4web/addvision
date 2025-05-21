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
      <span class="logo-subline">
        WEB-{{ $t('agency') }}
      </span>
      <div class="logo-brand">
        <em>Add</em><strong>VISION</strong>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.logo {
  justify-self: start;
  display: grid;
  grid-template-columns: 5.5rem auto;
  align-items: center;
  gap: 0.25rem;
  z-index: 1;

  &-image {
    width: 5.5rem;
    height: 5.5rem;
  }

  &-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
    color: var(--text-main, #111);
    gap: 0.25rem;
  }

  &-subline {
    display: block;
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--text-main50);

    &::after {
      content: "";
      width: 100%;
    }
  }

  &-brand {
    font-size: 1.5rem;
    font-weight: 600;
    position: relative;
    left: -0.1rem;

    em {
      font-style: italic;
      font-weight: 400;
      position: relative;

      &::before,
      &::after {
        font-style: normal;
        position: relative;
        bottom: 0.1rem;
        color: var(--accent);
      }

      &::before {
        content: '{';
        right: -0.1rem;
      }
      &::after {
        content: '}';
        left: 0.1rem;
      }
    }

    strong {
      font-weight: 800;
    }
  }
}

[lang="en"] .logo-subline { letter-spacing: 0.7ch }
[lang="ru"] .logo-subline { letter-spacing: 0.3ch }
[lang="uk"] .logo-subline { letter-spacing: 0.6ch }
</style>