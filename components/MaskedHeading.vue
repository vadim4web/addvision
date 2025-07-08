<template>
	<svg
		aria-label="What We Do?"
		class="masked-text-svg"
		preserveAspectRatio="xMidYMid meet"
		role="img"
		viewBox="0 0 100 30"
	>
		<defs>
			<mask :id="maskId" maskUnits="userSpaceOnUse">
				<rect fill="white" height="30" width="100" />
				<text
					ref="textRef"
					fill="black"
					font-family="sans-serif"
					:font-size="fontSize"
					font-weight="bold"
					letter-spacing="0.5"
					x="5"
					y="22"
				>
					<tspan
						v-for="(letter, i) in letters"
						:key="i"
						:ref="el => (letterRefs[i] = el)"
						:x="5 + i * 5"
					>
						{{ letter }}
					</tspan>
				</text>
			</mask>
		</defs>

		<!-- Фон з маскою -->
		<rect
			fill="url(#backgroundGradient)"
			height="30"
			:mask="`url(#${maskId})`"
			width="100"
		/>

		<defs>
			<linearGradient id="backgroundGradient" x1="0" x2="1" y1="0" y2="1">
				<stop offset="0%" stop-color="#00f" />
				<stop offset="100%" stop-color="#0ff" />
			</linearGradient>
		</defs>
	</svg>
</template>

<script setup>
import { gsap } from 'gsap'

const props = defineProps({
	text: { type: String, required: true },
	maskId: { type: String, default: 'text-mask' },
	fontSize: { type: String, default: '18px' }, // Задаємо розмір шрифту у відносних одиницях px/em/rem
})

const letters = computed(() => props.text.split(''))
const letterRefs = ref([])
const textRef = ref(null)

onMounted(() => {
	gsap.set(letterRefs.value, { opacity: 0, y: 5 })
	gsap.to(letterRefs.value, {
		opacity: 1,
		y: 0,
		stagger: 0.1,
		duration: 0.5,
		ease: 'power2.out',
	})
})
</script>

<style scoped>
.masked-text-svg {
	width: 100%;
	height: auto;
	max-width: 600px; /* або як потрібно */
	display: block;
}
</style>
