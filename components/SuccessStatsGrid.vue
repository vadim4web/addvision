<template>
  <div class="stats-section">
    <div class="stats-grid grid-four countup-trigger">
      <div v-for="(stat, i) in stats" :key="i" class="stat-box glow-on-hover">
        <CountUp
          :end-val="stat.value"
          :postfix="i === 2 ? '%' : i === 3 || i === 1 ? '+' : ''"
        />
        <p class="label font-inter-medium text-shade font-24">
          {{ $t(`why.stats.${i}`) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [{ value: 12 }, { value: 17 }, { value: 71 }, { value: 27 }];
</script>

<style scoped lang="scss">
.stats-section {
  text-align: center;
}

.stat-box {
  &:hover {
    transform: translateY(-2.5%) scale(1.05);
  }
}
</style>
