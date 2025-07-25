<template>
	<nav
		v-click-outside="closeMenu"
		:aria-label="$t('navigation.title')"
		class="nav"
	>
		<!-- Navigation list -->
		<ul
			ref="menuRef"
			class="nav-list"
			:class="{ open: isOpen }"
		>
			<li>
				<a
					:data-text="$t('navigation.cases')"
					href="#cases"
					@click="closeMenu"
				>
					{{ $t('navigation.cases') }}
				</a>
			</li>
			<li>
				<a
					:data-text="$t('navigation.why-us')"
					href="#why-us"
					@click="closeMenu"
				>
					{{ $t('navigation.why-us') }}
				</a>
			</li>
			<li>
				<a
					:data-text="$t('navigation.services')"
					href="#services"
					@click="closeMenu"
				>
					{{ $t('navigation.services') }}
				</a>
			</li>
			<li>
				<a
					:data-text="$t('navigation.contacts')"
					href="#contacts"
					@click="closeMenu"
				>
					{{ $t('navigation.contacts') }}
				</a>
			</li>
			<!-- Burger button -->
			<li>
				<button
					aria-label="Toggle navigation"
					class="burger"
					type="button"
					@click="toggleMenu"
				>
					<svg
						height="100"
						viewBox="0 0 100 100"
						width="60"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<filter
								id="white-glow"
								height="200%"
								width="200%"
								x="-50%"
								y="-50%"
							>
								<feDropShadow
									dx="0"
									dy="0"
									flood-color="var(--white)"
									flood-opacity="1"
									stdDeviation="10"
								/>
							</filter>
						</defs>

						<!-- Triangle path with filter applied -->
						<path
							d="M0 0 L50 86.6 L100 0"
							fill="none"
							filter="url(#white-glow)"
							stroke="var(--text-main)"
							stroke-width="12"
						/>
					</svg>
				</button>
			</li>
		</ul>
	</nav>
</template>

<script setup>
const menuVisible = useMenuVisibility()

const isOpen = ref(false)
const menuRef = ref(null)

const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)

useObserveVisibility(menuRef, visible => {
	menuVisible.value = visible

	if (!menuVisible.value && isOpen.value) closeMenu()
})
</script>

<style lang="scss" scoped>
.nav {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}

.burger {
	display: none;
	background: none;
	border: none;
	cursor: pointer;
	padding: 0.25em;
	grid-area: toggler;

	svg {
		filter: contrast(1) drop-shadow(0 0 0.2em var(--white));
		transition: transform 1s;
	}

	&:hover svg {
		transform: scale(0.6) translateY(5%) rotateX(180deg);
		filter: contrast(1.5) drop-shadow(0 0 0.33em var(--white));
	}
}

/* Desktop styles */
.nav-list {
	transition: all 1s ease;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 0;
	margin: 0 auto;

	li a {
		color: var(--bg);
		position: relative;

		&::after {
			position: absolute;
			content: '';
			width: calc(100% - 0.65em);
			height: 0.15em;
			bottom: 0.45em;
			left: 0.35em;
			background: var(--accent50);
			transition: height var(--transition-default) ease, filter var(--transition-filter) ease;
			z-index: -1;
			filter: drop-shadow(0 0 0 var(--accent75)) contrast(1) brightness(1)
				hue-rotate(0deg);
			-webkit-filter: drop-shadow(0 0 0 var(--accent75)) contrast(1) brightness(1)
				hue-rotate(0deg);
		}

		&:hover::after {
			height: 1.25em;
			filter: drop-shadow(0 0 0.15rem var(--accent75)) contrast(1.15)
			brightness(1.15) hue-rotate(360deg);
		-webkit-filter: drop-shadow(0 0 0.15rem var(--accent75)) contrast(1.15)
			brightness(1.15) hue-rotate(360deg);
		}
	}
}

/* Mobile styles */
@media (max-width: 1080px) {
	.burger {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		height: 6.6rem;
		transition:
			transform 1s,
			filter 1s ease;
		filter: contrast(1) hue-rotate(0deg);

		svg {
			width: 60%;
			aspect-ratio: 6 / 10;
			overflow: hidden;
			transform: scale(0.5) translateY(5%) rotateX(180deg);

			path {
				stroke: var(--bg);
				transition:
					stroke 1s,
					stroke-width 1s;
			}
		}
	}

	.nav-list {
		position: absolute;
		width: calc(100%);
		overflow: hidden;
		display: grid;
		grid-template-rows: 6.6rem repeat(5, 1fr);
		grid-template-areas:
			'.'
			'cases'
			'whyUs'
			'services'
			'contacts'
			'toggler';
		gap: 0;

		justify-items: center;
		top: 0;
		left: 0;
		right: 0;
		transform: translate(0, calc(6.6rem - 100%));
		padding: 0 1rem;

		box-shadow: inset 0 0 0 0 var(--accent50);

		li {
			width: 100vw;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			&:not(:last-child) {
				transition: transform 1s ease;
				transform: rotateX(-90deg);
				transition-delay: 0.75s;
			}

			&:is(:last-child) {
				transition: transform 0.5s linear;
				transform: rotateX(-180deg);
			}

			a {
				text-align: center;
				display: block;

				&::after {
					bottom: 0.6em;
				}
			}
		}

		li:nth-child(1) {
			grid-area: cases;
		}
		li:nth-child(2) {
			grid-area: whyUs;
		}
		li:nth-child(3) {
			grid-area: services;
		}
		li:nth-child(4) {
			grid-area: contacts;
		}
		li:nth-child(5) {
			grid-area: toggler;
		}
	}

	.nav-list.open {
		height: fit-content;
		transform: translate(0, 0);
		background: repeating-linear-gradient(var(--text-main66), var(--bg33));
		border-radius: 0 0 1rem 1rem;
		box-shadow: inset 0 0 1rem 0.25rem var(--accent50);
		font-weight: bolder;
		text-shadow: 0 0 0.2em var(--white);
		filter: contrast(1.2);

		li {
			transform: rotate(0deg);
		}

		& .burger {
			& svg path {
				stroke-width: 12px;
			}
		}
	}
}
</style>
