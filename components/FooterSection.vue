<template>
  <footer class="contacts-section" id="contacts" :aria-label="$t('aria.contact')" role="contentinfo">
    <SectionHeading class="heading" v-html="`<span class='heading-text'>${$t('contacts.title')}</span><span class='arrow'>${svgArrow()}</span>`"/>

    <p class="copy">&copy; 2013 - {{ new Date().getFullYear() }} <span style="color: var(--gray)">{</span><span class="lowercase">Add</span><span style="color: var(--gray)">}</span><span class="uppercase">Vision</span>
    {{ $t('rights') }}
    </p>

    <ContactForm :setShowThanks />
  </footer>
</template>

<script setup>
const { setShowThanks } = defineProps({
  setShowThanks: {
    type: Function,
    required: true,
  },
})
</script>

<style lang="scss">
.contacts-section {
  background: var(--accent);
  color: var(--bg);
  font-weight: bolder;

  display: grid;

  @media (orientation: landscape) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "heading   form"
      "copyright copyright";
  }

  @media (orientation: portrait) {
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "heading"
      "form"
      "copyright";
  }

  .heading {
    grid-area: heading;
  }

  .form-container {
    grid-area: form;
    background: var(--white);

    @media (orientation: portrait) {
      margin-bottom: 4rem;
    }
  }
  .copy {
    grid-area: copyright;
    align-self: end;
  }
}

.dim {
  color: var(--white50);
}
</style>