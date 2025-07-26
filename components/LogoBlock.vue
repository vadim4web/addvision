<template>
	<div class="logo">
		<LogoIcon />

		<div class="logo-text">
			<span class="logo-subline" :data-text="'WEB-' + $t('agency')">
				WEB-{{ $t('agency') }}
			</span>
			<div class="logo-brand">
				<em data-text="{ADD}">{<i>ADD</i>}</em>
				<strong data-text="VISION"> VISION </strong>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss">
.logo {
	display: grid;
	justify-content: start;
	grid-template-columns: 6.6rem auto;
	grid-template-areas: 'img txt';
	align-items: center;
	gap: 0.125rem;
	z-index: 1;

	perspective: 1000px;

	&-image {
		width: 6.6rem;
		height: 6.6rem;
		grid-area: img;
		transition: filter 1s ease;
	}

	&:has(:hover) &-image {
		filter: drop-shadow(0 0 0.1em var(--accent75)) contrast(1.1) brightness(1.1);
	}

	&-text {
		display: inline-flex;
		flex-direction: column;
		line-height: 1;
		color: var(--bg);
		gap: 0.25rem;
		grid-area: txt;
		max-width: fit-content;
		padding: 0.125em;
		position: relative;
		filter: none;
		transition: filter 1s ease;
	}

	&-subline {
		font-size: 0.875rem;
		font-weight: bold;
		text-transform: uppercase;
		color: var(--bg50);
		width: max-content;
		transition: color 1s ease;

		&::after {
			content: '';
			width: 100%;
		}
	}

	&-text:hover {
		filter: drop-shadow(0 0 0.1em var(--bg50)) contrast(1.1) brightness(1.1);
	}

	&:hover &-subline {
		color: var(--bg75);
	}

	&-brand {
		font-size: 1.75rem;
		font-weight: 600;
		position: relative;
		left: -0.1rem;
		top: -0.1em;

		@media (max-width: 1080px) {
			font-size: 1.33rem;
		}

		em {
			font-weight: 400;
			display: inline-block;
			text-transform: lowercase;
			color: var(--accent75);
			transform-style: preserve-3d;
			transform-origin: 33% center;

			& i {
				color: var(--bg);
			}
			&::after {
				text-transform: lowercase;
			}
		}

		em > i,
		strong {
			position: relative;
			top: 0.1em;
		}

		strong {
			font-weight: 800;
			display: inline-block;
		}
	}
}

[lang='uk'] .logo-subline {
	letter-spacing: 0.5em;
}
[lang='ru'] .logo-subline {
	letter-spacing: 0.278em;
}
[lang='en'] .logo-subline {
	letter-spacing: 0.58em;
}

@media (max-width: 1080px) {
	[lang='uk'] .logo-subline {
		letter-spacing: 0.22em;
	}
	[lang='ru'] .logo-subline {
		letter-spacing: 0.04em;
	}
	[lang='en'] .logo-subline {
		letter-spacing: 0.255em;
	}
}
</style>
