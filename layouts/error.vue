<template>
  <div class="error-container">
    <div class="emoji">😵‍💫🤷‍♀️💥</div>
    <h1>{{ localizedText.notFoundTitle }}</h1>
    <p>{{ localizedText.notFoundMessage }}</p>
    <NuxtLink class="back-home" :to="localizedHome">🏠 {{ localizedText.backHome }}</NuxtLink>
  </div>
</template>

<script setup>
const defaultLang = 'uk'
const messages = {
  en: {
    notFoundTitle: 'Oops! Page not found 😬',
    notFoundMessage: "The page you're looking for packed its bags and left... 🌴",
    backHome: 'Back to home',
  },
  ru: {
    notFoundTitle: 'Упс! Страница потерялась 😬',
    notFoundMessage: 'Страница, которую вы ищете, ушла в отпуск... 🌴',
    backHome: 'Назад домой',
  },
  uk: {
    notFoundTitle: 'Ой! Сторінку загублено 😬',
    notFoundMessage: 'Сторінка, яку ви шукаєте, поїхала у відпустку... 🌴',
    backHome: 'На головну',
  },
}

// 🧠 Try to guess locale from browser history (client-only)
const langFromPrevRoute = ref(defaultLang)

if (import.meta.client) {
  const prev = document.referrer

  if (prev.includes('/ru/')) langFromPrevRoute.value = 'ru'
  else if (prev.includes('/en/')) langFromPrevRoute.value = 'en'
  else langFromPrevRoute.value = 'uk'
}

const localizedText = computed(() => messages[langFromPrevRoute.value])
const localizedHome = computed(() => `/${langFromPrevRoute.value === 'uk' ? '' : langFromPrevRoute.value}/`)
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: #fdfdfd;
  color: #333;
}

.emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 400px;
}

.back-home {
  font-size: 1rem;
  background: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.back-home:hover {
  background: #0056b3;
}
</style>
