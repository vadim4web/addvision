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
      <li>
        <button
          class="burger"
          type="button"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <svg width="60" height="100" viewBox="0 0 100 100">
            <!-- Один V-подібний трикутник ABC -->
            <path d="M0 0 L50 86.6 L100 0" stroke="var(--bg)" stroke-width="12" fill="none" />
          </svg>
        </button>
      </li>
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
  width: 100%;
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
  transition: transform 1s ease, background 1s ease-in;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
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
      filter: drop-shadow(0 0 0.25em var(--bg66));
    }

    &:not(:hover, :focus)::after,
    &:not(:hover, :focus)::before {
      text-decoration-color: transparent;
      width: 0;
      opacity: 0;
    }

    &::before {
      transition: all 1s ease;
      content: attr(data-text);
      text-decoration: underline var(--text-main) 0.15em;
      text-underline-offset: 25%;
      text-underline-offset: 0.25em;
      top: -0.1rem;
      left: 0;
      height: 100%;
      font-weight: bolder;
      padding: inherit;
      text-wrap: nowrap;
      color: var(--text-main75);
      overflow: hidden;
    }


    &:hover::before,
    &:focus::before {
      width: 100%;
      opacity: 1;
      text-shadow: 0 0 0.05em var(--text-main50);
    }
  }
}

/* Mobile styles */
@media (max-width: 55rem) {
  .burger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 6.6rem;
    transition: transform 1s, filter 1s ease;
    filter: contrast(1) hue-rotate(0deg);

    svg {
      width: 60%;
      aspect-ratio: 6 / 10;
      overflow: hidden;
      transform: scale(0.5) translateY(5%) rotateX(180deg);

      path {
        mix-blend-mode: color-burn;
        transition: stroke 1s, stroke-width 1s;
      }
    }
  }

  .nav-list {
    position: absolute;
    width: calc(100% - 3rem);
    overflow: hidden;
    display: grid;
    grid-template-rows: 6.6rem repeat(5, 1fr);
    grid-template-areas:
      '.'
      'cases'
      'whyUs'
      'services'
      'contacts'
      'toggler';
    gap: 0;

    justify-items: center;
    top: 0;
    left: -3rem;
    right: 0;
    transform: translate(0, calc(6.6rem - 100%));
    padding: 0 1rem;

    li {
      width: 100vw;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:not(:last-child) {
        transition: transform 1s ease;
        transform: rotateX(-90deg);
        transition-delay: 0.75s;
      }

      &:is(:last-child) {
        transition: transform 0.5s linear;
        transform: rotateX(-180deg);
      }


      a {
        text-align: center;
        display: block;
      }
    }

    li:nth-child(1) { grid-area: cases; }
    li:nth-child(2) { grid-area: whyUs; }
    li:nth-child(3) { grid-area: services; }
    li:nth-child(4) { grid-area: contacts; }
    li:nth-child(5) { grid-area: toggler; }
  }

  .nav-list.open {
    height: fit-content;
    transform: translate(0, 0);
    background: repeating-linear-gradient(var(--bg50), var(--accent50));
    border-radius: 0  0 1rem 1rem;

    li {
      transform: rotate(0deg);
    }


    & .burger {
      transition: filter 1s ease;
      filter: contrast(1.5) brightness(1.5) drop-shadow(0 0 0.25em var(--accent));

      & svg path {
        stroke: var(--accent);
        stroke-width: 12px;
      }
    }
  }
}
</style>
