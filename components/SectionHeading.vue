<template>
	<h2 class="section-heading font-inter-semibold">
		<slot />
	</h2>
</template>

<script setup></script>

<style lang="scss">
.section-heading {
	position: relative;
	z-index: 5;
	padding-top: 0.5rem;
	line-height: 1;
	display: grid;
	color: inherit;
	transition: filter 1s ease;
	align-items: start;
	gap: 0.5rem;
	justify-content: start;
	text-align: left;

	.arrow {
		color: inherit;
		display: block;
		aspect-ratio: 1;

		svg {
			width: 100%;
			height: 100%;
			stroke: currentColor;
		}
	}

	@media (orientation: portrait), (max-width: 1024px) {
		grid-template-columns: min-content auto;
	}

	@media (orientation: landscape), (min-width: 1025px) {
		grid-template-columns: max-content auto;
	}

	@media (orientation: portrait) {
		font-size: 3.5rem;

		.arrow {
			width: 3.5rem;
			justify-self: start;
		}
	}

	@media (max-width: 480px) {
		font-size: 2.75rem;

		.arrow {
			width: 2.75rem;
		}
	}

	@media (orientation: landscape) {
		font-size: 4.5rem;

		.arrow {
			width: 4.5rem;
			justify-self: end;
		}
	}
}

.accent {
	color: var(--accent);
}
</style>
