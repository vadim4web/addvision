<template>
	<div class="thank-you" @animationend="setShowThanks(false)">
		<h1>{{ $t('contacts.thank_you_title') }}</h1>
		<p>{{ $t('contacts.thank_you_message') }}</p>
	</div>
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
@keyframes fadeOut {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
.thank-you {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 5;
	width: 100%;
	height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--accent);
	color: var(--white);
	animation: fadeOut 1s 5s linear;

	h1 {
		font-size: 5rem;
	}

	p {
		font-size: 2.5rem;
	}
}
</style>
