<template>
  <footer class="contacts-section" id="contacts" :aria-label="$t('aria.contact')" role="contentinfo">
        <SectionHeading v-html="`<span class='heading-text'>${$t('contacts.title')}</span><span class='arrow'>${svgArrow()}</span>`"/>

        <p class="copy">&copy; 2013 - {{ new Date().getFullYear() }} <span class="dim">{</span><span class="lowercase">Add</span><span class="dim">}</span><span class="uppercase">Vision</span>
        {{ $t('rights') }}
        </p>
  </footer>
</template>

<script setup>

</script>

<style lang="scss">
.contacts-section {
  background: var(--accent);
  color: var(--white);
  font-weight: bolder;
}

.dim {
  color: var(--white50);
}
</style>