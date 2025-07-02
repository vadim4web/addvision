<template>
  <Transition name="fade">
    <div v-if="!headerVisible && !menuVisible" class="back-to-the-top">
      <NuxtLink to="#top" :title="$t('backToTop')">
        <LogoIcon class="logo-small" />
      </NuxtLink>
    </div>
  </Transition>
</template>

<script setup>
const headerVisible = useHeaderVisibility()
const menuVisible = useMenuVisibility()
</script>

<style lang="scss">
/* These must be global or at root level in scoped styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.back-to-the-top {
  position: fixed;
  z-index: 2;
  bottom: 0;
  right: 0;

  mix-blend-mode: difference;
  mix-blend-mode: exclusion;

  a {
    padding-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 1s;
    filter: drop-shadow(0 0 0.5em var(--accent75)) contrast(1.1) brightness(1.1);

    .logo-image {
      width: 6.6rem;
      aspect-ratio: 1;
    }

    &:hover .logo-image {
      filter: drop-shadow(0 0 0.25em var(--accent75)) contrast(1.15) brightness(1.15);
    }
  }
}
</style>