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
            <path d="M0 0 L50 86.6 L100 0" stroke="var(--bg)" stroke-width="6" fill="none" />
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
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg);
  gap: 0.5rem;
  padding: 0;
  margin: 0 auto;

  li a {
    text-decoration: none;
    color: var(--bg);
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
      text-decoration: underline overline var(--bg) 0.2em;
      text-underline-offset: 25%;
      text-underline-offset: 0.5em;
      top: -0.1rem;
      left: 0;
      height: 100%;
      font-weight: bolder;
      padding: inherit;
      text-wrap: nowrap;
      color: var(--bg75);
      overflow: hidden;
    }

    &::after {
      transition: all 1s ease;
      content: '';
      width: 0;
      bottom: 0.16em;
      left: 0.125em;
      height: 0.175em;
      background: linear-gradient(90deg, var(--bg50)0%, var(--bg)50%, var(--bg50)75%);
      box-shadow: 0 0 0.3px var(--bg50);
      z-index: 1;
    }

    &:hover::after,
    &:focus::after {
      text-shadow: 0 0 0.1em var(--bg50);
      filter: drop-shadow(0 0 0.5ch var(--accent50)) contrast(2);
    }

    &:hover::before,
    &:focus::before {
      width: 100%;
      opacity: 1;
      text-shadow: 0 0 0.25em var(--bg);
      filter: drop-shadow(0 0 0.5ch var(--accent50));
    }

    &:hover::after,
    &:focus::after {
      width: calc(100% - 0.25em);
    }
  }
}

/* Mobile styles */
@media (max-width: 54rem) {
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
    padding: 1rem;
    overflow: hidden;
    transition: transform 1s ease ease-out, background 1s ease-in;
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
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    transform: translate(0, calc(6.6rem - 100%));
    padding: 0 1rem;
    width: 100%;

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
    border-radius: 0  0 0.5rem 0.5rem;
    transition: transform 1s ease;

    li {
      transform: rotate(0deg);
    }


    & .burger {
      transition: filter 1s ease;
      filter: contrast(1.5) brightness(1.5) drop-shadow(0 0 0.25em var(--accent));

      & svg path {
        stroke: var(--accent);
        stroke-width: 8px;
      }
    }
  }
}
</style>
