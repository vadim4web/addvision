<template>
	<div ref="container" class="why-cta-container glow-on-hover">
		<a
			ref="cta"
			class="why-cta"
			href="https://t.me/vicharych"
			rel="noopener noreferrer"
			target="_blank"
		>
			<span style="line-height: 100%; font-size: 100%;">
				&nbsp;<br>
			</span>
			{{ $t('why.cta') }}<br />
			{{ $t('why.cta_') }}<br />
			{{ $t('why.cta__') }}
		</a>
	</div>
</template>

<script setup></script>

<style lang="scss">
@keyframes ripple-rings {
	0% {
		background-size: 500% 500%;
		opacity: 1;
		transform: translate(-50%, -50%) scale(0.5);
	}
	100% {
		background-size: 1000% 1000%;
		opacity: 0;
		transform: translate(-50%, -50%) scale(2.5);
	}
}

@keyframes pulsing {
	0%,
	100% {
	}
	50% {
		transform: scale(1.2);
	}
}

.why-cta-container {
	display: grid;
	position: relative;
	left: 0;
	width: 100%;
	aspect-ratio: 1.5;

	@media (max-width: 1080px) {
		aspect-ratio: 1;
	}

	&::before {
		content: '';
		position: absolute;
		width: 50%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0.5);
		aspect-ratio: 1;
		border-radius: 100vh;
		z-index: -2;
		background-image: repeating-radial-gradient(
			circle,
			transparent 0,
			transparent 10px,
			var(--accent10) 10px,
			var(--accent10) 11px,
			transparent 11px,
			transparent 20px
		);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 0 0;
		opacity: 0;
		animation: ripple-rings 6s 2s ease-in-out infinite;
	}

	.why-cta {
		grid-area: link;
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 3rem;
		font-weight: bold;
		color: var(--white);
		background: radial-gradient(circle at center, var(--accent10), transparent);
		border-radius: 50%;
		position: absolute;
		width: 50vmin;
		height: 50vmin;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
		transition: transform 0.5s ease;
		margin-inline: auto;

		overflow: visible;

		@media (max-width: 719px) and (aspect-ratio < 0.4) {
			font-size: 1.3rem;
		}

		@media (max-width: 719px), (orientation: portrait) {
			font-size: 1.5rem;
		}


		&::after {
			content: '';
			position: absolute;
			aspect-ratio: 1;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			z-index: -1;
			background: radial-gradient(circle at center, var(--accent50), var(--accent25));
			box-shadow: 0 0 5rem var(--accent75);
			animation: pulsing 3.5s ease-in-out infinite;
			transition: filter 1s ease;
		}

		&:hover::after {
			filter: drop-shadow(0 0 1rem var(--accent50));
		}
	}
}
</style>
