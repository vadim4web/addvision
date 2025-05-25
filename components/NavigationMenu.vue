<template>
  <nav
    v-click-outside="closeMenu"
    :aria-label="$t('navigation.title')"
    class="nav"
  >
    <!-- Navigation list -->
    <ul class="nav-list" :class="{ open: isOpen }">
      <li>
        <a
          href="#cases"
          :data-text="$t('navigation.cases')"
          @click="closeMenu"
        >
          {{ $t('navigation.cases') }}
        </a>
      </li>
      <li>
        <a
          href="#why-us"
          :data-text="$t('navigation.why-us')"
          @click="closeMenu"
        >
          {{ $t('navigation.why-us') }}
        </a>
      </li>
      <li>
        <a
          href="#services"
          :data-text="$t('navigation.services')"
          @click="closeMenu"
        >
          {{ $t('navigation.services') }}
        </a>
      </li>
      <li>
        <a
          href="#contacts"
          :data-text="$t('navigation.contacts')"
          @click="closeMenu"
        >
          {{ $t('navigation.contacts') }}
        </a>
      </li>
      <!-- Burger button -->
    <button
      class="burger"
      type="button"
      aria-label="Toggle navigation"
      @click="toggleMenu"
    >
      <svg width="60" height="100" viewBox="0 0 100 100">
        <!-- Один V-подібний трикутник ABC -->
        <path d="M0 0 L50 86.6 L100 0" stroke="var(--text-main)" stroke-width="6" fill="none" />
      </svg>
    </button>
    </ul>

  </nav>
</template>

<script setup>
const isOpen = ref(false)

const toggleMenu = () => isOpen.value = !isOpen.value
const closeMenu = () => isOpen.value = false
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.burger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25em;
  grid-area: toggler;
}

/* Desktop styles */
.nav-list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
  margin: 0 auto;

  li a {
    text-decoration: none;
    color: var(--text-main);
    position: relative;

    &::before,
    &::after {
      position: absolute;
      transition: width 0.5s, opacity 0.5s;
    }

    &:not(:hover, :focus)::before,
    &:not(:hover, :focus)::after {
      width: 0;
      opacity: 0;
      overflow: hidden;
    }

    &::before {
      content: attr(data-text);
      top: 0;
      left: 0;
      height: 100%;
      font-weight: bolder;
      padding: inherit;
      text-wrap: nowrap;
    }

    &::after {
      content: '';
      bottom: 0.33em;
      left: 0.25em;
      height: 2px;
      background: var(--text-main);
    }

    &:hover::before,
    &:focus::before {
      width: 100%;
      opacity: 1;
    }

    &:hover::after,
    &:focus::after {
      width: calc(100% - 0.5em);
    }
  }
}

/* Mobile styles */
@media (max-width: 960px) {
  .burger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 5.5rem;
    transition: transform 1s;

    svg {
      width: 60%;
      aspect-ratio: 6 / 10;
      overflow: hidden;
      transform: scale(0.5) translateY(5%);

      path {
        mix-blend-mode: color-burn;
        transition: stroke 1s, stroke-width 1s;
      }
    }
  }

  .nav-list {
    padding: 1rem;
    overflow: hidden;
    transition: transform 1s ease, background 1s ease-in;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    grid-template-rows: 0.5fr repeat(5, 1fr);
    grid-template-areas:
      '. . .'
      '. cases .'
      '. whyUs .'
      '. services .'
      '. contacts .'
      '. toggler .';
    gap: 0;

    justify-items: center;
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    transform: translate(0, calc(5.5rem - 100%));
    padding: 0 1rem;
    border-radius: 0.5rem;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-align: center;
        display: block;
      }
    }

    li:nth-child(1) { grid-area: cases; }
    li:nth-child(2) { grid-area: whyUs; }
    li:nth-child(3) { grid-area: services; }
    li:nth-child(4) { grid-area: contacts; }
  }

  .nav-list.open {
    height: fit-content;
    transform: translate(0, 0);
    background: var(--bg50);

    & .burger {
      transform: rotateX(180deg);

      & svg path {
        stroke: var(--accent);
        stroke-width: 8px;
      }
    }
  }
}
</style>
