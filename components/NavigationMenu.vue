<template>
  <nav
    v-click-outside="closeMenu"
    :aria-label="$t('navigation.title')"
    class="nav"
  >
    <!-- Navigation list -->
    <ul ref="menuRef" class="nav-list" :class="{ open: isOpen }">
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
          <svg width="60" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="white-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="var(--white)" flood-opacity="1" />
              </filter>
            </defs>

            <!-- Triangle path with filter applied -->
            <path
              d="M0 0 L50 86.6 L100 0"
              stroke="var(--text-main)"
              stroke-width="12"
              fill="none"
              filter="url(#white-glow)"
            />
          </svg>
        </button>
      </li>
    </ul>

  </nav>
</template>

<script setup>
const menuVisible = useMenuVisibility()

const isOpen = ref(false)
const menuRef = ref(null)

const toggleMenu = () => isOpen.value = !isOpen.value
const closeMenu = () => isOpen.value = false

useObserveVisibility(menuRef, visible => {
  (menuVisible.value = visible)

  if (!menuVisible.value && isOpen.value) closeMenu()
})
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

  svg {
    filter: contrast(1) drop-shadow(0 0 0.2em var(--white));
    transition: transform 1s;
  }

  &:hover svg {
    transform: scale(0.6) translateY(5%) rotateX(180deg);
    filter: contrast(1.5) drop-shadow(0 0 0.33em var(--white));
  }
}

/* Desktop styles */
.nav-list {
  transition: all 1s ease;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
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
      filter: drop-shadow(0 0 0.25em var(--bg25));
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
      text-decoration: underline var(--bg) 0.15em;
      text-underline-offset: 25%;
      text-underline-offset: 0.25em;
      left: 0;
      top: -0.125vmax;
      height: 100%;
      font-weight: bold;
      padding: inherit;
      text-wrap: nowrap;
      color: var(--bg75);
      overflow: hidden;
    }


    &:hover::before,
    &:focus::before {
      width: 100%;
      opacity: 1;
      text-shadow: 0 0 0.05em var(--bg50);
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
        stroke: var(--text-main);
        transition: stroke 1s, stroke-width 1s;
      }
    }
  }

  .nav-list {
    position: absolute;
    width: calc(100%);
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
    left: 0;
    right: 0;
    transform: translate(0, calc(6.6rem - 100%));
    padding: 0 1rem;

    box-shadow: inset 0 0 0 0 var(--accent50);

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

        &:before {
          top: 0;
        }
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
    box-shadow: inset 0 0 1rem 0.25rem var(--accent50);
    font-weight: bolder;
    text-shadow: 0 0 0.2em var(--white);
    filter: contrast(1.2);

    li {
      transform: rotate(0deg);
    }

    & .burger {
      & svg path {
        stroke-width: 12px;
      }
    }
  }
}
</style>
