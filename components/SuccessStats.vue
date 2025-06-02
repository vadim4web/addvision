<template>
  <div class="stats-section">
    <div class="stats-grid countup-trigger">
      <div v-for="(stat, i) in stats" :key="i" class="stat-box font-bebas-regular">
        <CountUp :end-val="stat.value" :postfix="i === 2 ? '%' : i === 3 ? '+' : ''" />
        <p class="label">{{ $t(`why.stats.${i}`) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { value: 12 },
  { value: 77 },
  { value: 71 },
  { value: 90 },
]
</script>

<style scoped lang="scss">
.stats-section {
  padding: 80px 20px;
  background: var(--bg);
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-box {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .label {
    margin-top: 10px;
    color: #555;
    font-size: 1rem;
  }
}
</style>
