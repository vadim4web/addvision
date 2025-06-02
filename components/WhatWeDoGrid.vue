<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale, messages } = useI18n()

// computed, щоб реагувало на зміну мови
const sections = computed(() => {
  return messages.value[locale.value]?.what?.sections || {}
})
</script>

<template>
  <div class="what-we-do-grid">
    <div
      v-for="(section, key) in sections"
      :key="key"
      class="what-section"
    >
      <h3>{{ section.title }}</h3>
      <ul>
        <li v-for="(item, idx) in section.items" :key="idx">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style>
.what-we-do-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
