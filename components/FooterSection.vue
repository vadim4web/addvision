<template>
  <footer class="contacts-section" id="contacts" :aria-label="$t('aria.contact')" role="contentinfo">
        <SectionHeading v-html="`<span class='heading-text'>${$t('contacts.title')}</span><span class='arrow'>${svgArrow()}</span>`"/>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contacts-section {
  background: var(--accent);
  color: var(--white);
}
</style>