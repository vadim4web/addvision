<template>
  <div class="stats-section">
    <div class="stats-grid grid-four countup-trigger">
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
  background: var(--bg);
  text-align: center;
}

.stats-grid {}

.stat-box {
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .label {
    color: #555;
    font-size: 1rem;
  }
}
</style>
