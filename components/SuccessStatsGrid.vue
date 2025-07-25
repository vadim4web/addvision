<template>
	<div class="stats-section">
		<div class="stats-grid grid-four countup-trigger">
			<div
				v-for="(stat, i) in stats"
				:key="i"
				class="stat-box font-bebas-regular glow-on-hover"
			>
				<CountUp
					:end-val="stat.value"
					:postfix="
						i === 2 ? '%'
						: i === 3 || i === 1 ? '+'
						: ''
					"
				/>
				<p class="label font-inter-medium">{{ $t(`why.stats.${i}`) }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const stats = [{ value: 12 }, { value: 17 }, { value: 71 }, { value: 27 }]
</script>

<style scoped lang="scss">
.stats-section {

	text-align: center;
}

.stats-grid {
}

.stat-box {
	&:hover {
		transform: translateY(-2.5%) scale(1.05);
	}

	.label {
		font-size: 1rem;
		@media (min-width: 720px) and (max-width: 1279px) {
			font-size: 1.25rem;
		}

		@media (max-width: 719px) {
			font-size: 1.5rem;
		}
	}
}
</style>
