<template>
	<section
		id="hero"
		:aria-label="$t('aria.hero')"
		class="hero-section"
		role="region"
	>
		<h1 style="display: none">
			<em>ADD</em> <strong>VISION</strong> — {{ $t('moto') }} |
			{{ $t('we-do.sences') }}, {{ $t('we-do.texts') }},
			{{ $t('we-do.visual') }}, {{ $t('we-do.dev') }}
		</h1>

		<HeaderSection />
		<VideoBackground />

		<div class="hero-text">
			<div class="brand">
				<svg
					class="mask-svg"
					fill="none"
					height="2160"
					viewBox="0 0 3840 2160"
					width="3840"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<filter id='svg-fade' filterUnits="userSpaceOnUse" height='250%' width='250%' x='-125%' y='-125%'>
							<feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='1'/>
							<feDropShadow dx='0' dy='0' flood-color='black' flood-opacity='1' stdDeviation='5'/>
						</filter>

						<rect id="svg-rect" fill="white" height="2160" width="3840" />

						<g id="svg-text" fill="black" filter='url(#svg-fade)' transform="translate(1275, 710)">
							<g height="200" width="998" x="288" y="365">
								<path
								d="M358.9 562L284.5 368.8H360.1L396.4 476.2L433 368.8H508.6L434.2 562H358.9ZM523.703 562V368.8H596.303V562H523.703ZM684.06 565C670.46 565 657.36 563.9 644.76 561.7C632.16 559.3 621.56 555.9 612.96 551.5V497.2C622.36 501.8 632.96 505.6 644.76 508.6C656.56 511.6 667.06 513.1 676.26 513.1C682.26 513.1 686.96 512.4 690.36 511C693.76 509.4 695.46 507.2 695.46 504.4C695.46 500.8 692.26 498 685.86 496C679.46 494 671.06 491.1 660.66 487.3C648.26 482.5 638.46 477.5 631.26 472.3C624.06 467.1 618.86 460.9 615.66 453.7C612.66 446.3 611.16 437.1 611.16 426.1C611.16 385.9 639.46 365.8 696.06 365.8C702.46 365.8 709.56 366.3 717.36 367.3C725.36 368.1 733.06 369.2 740.46 370.6C748.06 372 754.46 373.5 759.66 375.1V429.7C748.66 425.1 738.96 422 730.56 420.4C722.16 418.8 714.76 418 708.36 418C703.36 418 698.26 418.5 693.06 419.5C687.86 420.3 685.26 422.3 685.26 425.5C685.26 428.1 687.56 430.2 692.16 431.8C696.76 433.2 704.06 435.3 714.06 438.1C730.06 442.5 742.06 447.8 750.06 454C758.06 460 763.36 467.2 765.96 475.6C768.76 483.8 770.16 493.3 770.16 504.1C770.16 522.5 762.96 537.3 748.56 548.5C734.16 559.5 712.66 565 684.06 565ZM785.031 562V368.8H857.631V562H785.031ZM975.988 565C954.188 565 935.588 561.8 920.188 555.4C904.788 548.8 892.988 538.2 884.788 523.6C876.588 509 872.488 489.6 872.488 465.4C872.488 441 876.588 421.6 884.788 407.2C892.988 392.6 904.788 382.1 920.188 375.7C935.588 369.1 954.188 365.8 975.988 365.8C997.788 365.8 1016.39 369.1 1031.79 375.7C1047.19 382.1 1058.99 392.6 1067.19 407.2C1075.39 421.6 1079.49 441 1079.49 465.4C1079.49 489.6 1075.39 509 1067.19 523.6C1058.99 538.2 1047.19 548.8 1031.79 555.4C1016.39 561.8 997.788 565 975.988 565ZM975.988 503.5C986.588 503.5 994.088 500.7 998.488 495.1C1003.09 489.3 1005.39 479.4 1005.39 465.4C1005.39 451.4 1003.09 441.6 998.488 436C994.088 430.2 986.588 427.3 975.988 427.3C965.388 427.3 957.788 430.2 953.188 436C948.788 441.6 946.588 451.4 946.588 465.4C946.588 479.4 948.788 489.3 953.188 495.1C957.788 500.7 965.388 503.5 975.988 503.5ZM1094.41 562V368.8H1155.31L1209.31 444.4V368.8H1281.91V562H1220.71L1167.01 486.4V562H1094.41Z"
								/>
							</g>
							<g height="212" width="523" x="-4" y="100">
								<path
									d="M97.5 173.8V175.9L100.8 160H144L122.4 262C122 263.8 121.7 265.5 121.5 267.1C121.3 268.5 121.2 270 121.2 271.6C121.2 276 122.2 279.3 124.2 281.5C126.2 283.5 129.3 284.5 133.5 284.5C138.7 284.5 143.4 282.1 147.6 277.3C151.8 272.3 155.2 265.3 157.8 256.3H170.4C164 274.7 155.7 288.6 145.5 298C135.3 307.2 123.5 311.8 110.1 311.8C101.5 311.8 94.6 309.4 89.4 304.6C84.4 299.8 81.5 293 80.7 284.2C74.5 293.4 67.6 300.3 60 304.9C52.6 309.5 44.6 311.8 36 311.8C23.6 311.8 13.8 307.6 6.6 299.2C-0.4 290.8 -3.9 278.9 -3.9 263.5C-3.9 252.3 -2.2 240.6 1.2 228.4C4.6 216.2 9.3 205.1 15.3 195.1C22.7 183.3 31.3 174.3 41.1 168.1C50.9 161.7 61.6 158.5 73.2 158.5C81 158.5 87 159.9 91.2 162.7C95.4 165.3 97.5 169 97.5 173.8ZM94.8 188.5C94.8 185.5 93.7 182.9 91.5 180.7C89.3 178.3 86.3 177.1 82.5 177.1C71.5 177.1 61.7 186.3 53.1 204.7C44.7 223.1 40.5 241.3 40.5 259.3C40.5 267.1 41.6 273 43.8 277C46 280.8 49.9 282.7 55.5 282.7C60.7 282.7 65.7 280.2 70.5 275.2C75.5 270.2 78.8 263.9 80.4 256.3L94.8 188.5ZM213.188 259.3C213.188 267.1 214.288 273 216.488 277C218.688 280.8 222.588 282.7 228.188 282.7C233.188 282.7 238.088 280.4 242.888 275.8C247.688 271 250.988 265 252.788 257.8V256.3L267.488 187.6C266.888 184.4 265.488 181.9 263.288 180.1C261.288 178.1 258.588 177.1 255.188 177.1C244.188 177.1 234.388 186.3 225.788 204.7C217.388 223.1 213.188 241.3 213.188 259.3ZM270.188 173.8V175L284.888 106L329.288 100L294.788 262C294.388 263.8 294.088 265.5 293.888 267.1C293.688 268.5 293.588 270 293.588 271.6C293.588 275.6 294.488 278.5 296.288 280.3C298.288 281.9 301.488 282.7 305.888 282.7C311.088 282.7 315.788 280.4 319.988 275.8C324.188 271.2 327.588 264.7 330.188 256.3H342.788C336.588 274.1 328.488 287.5 318.488 296.5C308.688 305.5 296.688 310 282.488 310C274.288 310 267.588 307.8 262.388 303.4C257.388 298.8 254.288 292.4 253.088 284.2C247.088 293.4 240.388 300.3 232.988 304.9C225.588 309.5 217.488 311.8 208.688 311.8C196.288 311.8 186.488 307.6 179.288 299.2C172.288 290.8 168.787 278.9 168.787 263.5C168.787 252.3 170.487 240.6 173.888 228.4C177.288 216.2 181.988 205.1 187.988 195.1C195.388 183.3 203.988 174.3 213.788 168.1C223.588 161.7 234.288 158.5 245.888 158.5C253.688 158.5 259.688 159.9 263.888 162.7C268.088 165.3 270.188 169 270.188 173.8ZM388.805 259.3C388.805 267.1 389.905 273 392.105 277C394.305 280.8 398.205 282.7 403.805 282.7C408.805 282.7 413.705 280.4 418.505 275.8C423.305 271 426.605 265 428.405 257.8V256.3L443.105 187.6C442.505 184.4 441.105 181.9 438.905 180.1C436.905 178.1 434.205 177.1 430.805 177.1C419.805 177.1 410.005 186.3 401.405 204.7C393.005 223.1 388.805 241.3 388.805 259.3ZM445.805 173.8V175L460.505 106L504.905 100L470.405 262C470.005 263.8 469.705 265.5 469.505 267.1C469.305 268.5 469.205 270 469.205 271.6C469.205 275.6 470.105 278.5 471.905 280.3C473.905 281.9 477.105 282.7 481.505 282.7C486.705 282.7 491.405 280.4 495.605 275.8C499.805 271.2 503.205 264.7 505.805 256.3H518.405C512.205 274.1 504.105 287.5 494.105 296.5C484.305 305.5 472.305 310 458.105 310C449.905 310 443.205 307.8 438.005 303.4C433.005 298.8 429.905 292.4 428.705 284.2C422.705 293.4 416.005 300.3 408.605 304.9C401.205 309.5 393.105 311.8 384.305 311.8C371.905 311.8 362.105 307.6 354.905 299.2C347.905 290.8 344.405 278.9 344.405 263.5C344.405 252.3 346.105 240.6 349.505 228.4C352.905 216.2 357.605 205.1 363.605 195.1C371.005 183.3 379.605 174.3 389.405 168.1C399.205 161.7 409.905 158.5 421.505 158.5C429.305 158.5 435.305 159.9 439.505 162.7C443.705 165.3 445.805 169 445.805 173.8Z"
								/>
							</g>
						</g>
					</defs>

					<mask id="text-mask" maskUnits="userSpaceOnUse">
						<use fill="white" href="#svg-rect" />
						<use fill="black" href="#svg-text" />
					</mask>

					<rect
						fill="#f1f6fc"
						height="2160"
						mask="url(#text-mask)"
						width="3840"
					/>

					<!-- <rect
						fill="#f1f6fc"
						height="2160"
						mask="url(#text-mask)"
						width="3840"
					/> -->
				</svg>
			</div>

			<p class="moto glow-on-hover">
				{{ $t('moto') }}
			</p>

			<aside class="we-do">
				<ul>
					<li class="glow-on-hover">{{ $t('we-do.sences') }}</li>
					<li class="glow-on-hover">{{ $t('we-do.texts') }}</li>
					<li class="glow-on-hover">{{ $t('we-do.visual') }}</li>
					<li class="glow-on-hover">{{ $t('we-do.dev') }}</li>
				</ul>
			</aside>
		</div>
	</section>
</template>

<script setup>
import { gsap } from 'gsap'

onMounted(() => {
	// Початкові анімації
	gsap.set('.hero-text', { y: 100, z: 0 })
	gsap.set('.brand', { scale: 1.5, z: 50, rotationX: 0, rotationY: 0 })
	gsap.set('.moto', { y: 0, z: 30, opacity: 0 })
	gsap.set('.we-do li', { y: '5rem', opacity: 0, z: 10 })

	const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
	tl.to('.hero-text', { y: 0, opacity: 1, duration: 1.2 })
		.to('.brand', { scale: 1, opacity: 1, duration: 1 }, '-=0.8')
		.to('.moto', { y: 0, opacity: 1, duration: 1.5, clearProps: true }, '-=0.6')
		.to(
			'.we-do li',
			{ y: 0, opacity: 1, duration: 2, stagger: 0.33, clearProps: true },
			'-=0.4'
		)

	const hero = document.querySelector('.hero-section')
	const brand = document.querySelector('.brand')

	// Функції руху
	const moveX = el =>
		gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' })
	const moveY = el =>
		gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' })
	const moveZ = el =>
		gsap.quickTo(el, 'z', { duration: 0.6, ease: 'power3.out' })
	const rotateX = el =>
		gsap.quickTo(el, 'rotationX', { duration: 0.6, ease: 'power3.out' })
	const rotateY = el =>
		gsap.quickTo(el, 'rotationY', { duration: 0.6, ease: 'power3.out' })

	const moveBrandX = moveX(brand)
	const moveBrandY = moveY(brand)
	const moveBrandZ = moveZ(brand)
	const rotateBrandX = rotateX(brand)
	const rotateBrandY = rotateY(brand)

	// Рух за мишею
	const handleMove = (x, y) => {
		const centerX = window.innerWidth / 2
		const centerY = window.innerHeight / 2
		const offsetX = (x - centerX) / centerX
		const offsetY = (y - centerY) / centerY

		moveBrandX(offsetX * 60)
		moveBrandY(offsetY * 40)
		moveBrandZ(Math.abs(offsetX * offsetY) * 20)
		rotateBrandX(offsetY * 20)
		rotateBrandY(-offsetX * 20)
	}

	// Повернення в центр при виході
	const resetBrand = () => {
		gsap.to(brand, {
			x: 0,
			y: 0,
			z: 0,
			rotationX: 0,
			rotationY: 0,
			duration: 1,
			ease: 'power2.out',
		})
	}

	const onPointerMove = e => handleMove(e.clientX, e.clientY)
	const onTouchMove = e => {
		if (e.touches.length > 0) {
			handleMove(e.touches[0].clientX, e.touches[0].clientY)
		}
	}

	// Навігація
	hero.addEventListener('pointermove', onPointerMove)
	hero.addEventListener('touchmove', onTouchMove)
	hero.addEventListener('mouseleave', resetBrand)

	// Очистка
	onBeforeUnmount(() => {
		hero.removeEventListener('pointermove', onPointerMove)
		hero.removeEventListener('touchmove', onTouchMove)
		hero.removeEventListener('mouseleave', resetBrand)
	})
})
</script>

<style lang="scss">
.hero-section {
	color: var(--bg);
	position: relative;
	height: fit-content;
	overflow: hidden;
	width: 100%;
	z-index: 1;

	@media (orientation: landscape) {
		height: 100dvh;
	}

	@media (orientation: portrait) {
		height: 100dvh;
	}

	.hero-text {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 6.5rem repeat(3, 1fr);
		grid-template-areas:
			'.      .      .      .      .   '
			'.      .      wedo   wedo   wedo'
			'.      .      .      .      .   '
			'moto   moto   moto   moto   moto';
		align-content: center;
		justify-items: center;

		@media (orientation: landscape) {
			height: 100dvh;
		}

		@media (orientation: portrait) {
			height: 100dvh;
		}

		@media (orientation: landscape) and (aspect-ratio > 2.75) {
			grid-template-rows: 6.5rem 1fr 0.75fr 1fr;
		}

		@media (orientation: landscape) and (aspect-ratio <= 2.75) {
			grid-template-rows: 6.5rem 1fr 1fr 1fr;
		}

		.brand {
			grid-area: brand;
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;

			@media (orientation: landscape) {
				height: 100dvh;
			}

			@media (orientation: portrait) {
				height: 100dvh;
			}

			svg {
				position: absolute;
				top: 0;
				left: 0;
				inset: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				pointer-events: none;
				transform: scale(2.76);

				@media (orientation: landscape) {
					height: 100dvh;
				}

				@media (orientation: portrait) {
				}

				@media (max-width: 640px) {
					transform: scale(2.76, 3.5);
				}

				@media (aspect-ratio < 0.54) {
					transform: scale(3, 4.5);
				}

				@media (aspect-ratio <= 0.45) {
					transform: scale(3, 4.5);
				}

				@media (aspect-ratio <= 0.4) {
					transform: scale(3, 5);
				}
			}
		}

		.moto {
			top: 0;
			grid-area: moto;
			font-size: 3rem;
			line-height: 3rem;
			text-align: center;
			text-wrap: wrap;
			width: 80%;
			justify-content: center;

			@media (max-width: 640px) {
				font-size: 2.5rem;
			}
		}

		.moto,
		.we-do {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;
		}

		.we-do {
			grid-area: wedo;
			font-size: 2rem;

			@media (orientation: portrait) {
				justify-content: center;
			}

			@media (orientation: landscape) {
				justify-content: end;
			}

			@media (orientation: landscape) and (aspect-ratio > 2.5) {
				font-size: 1.5rem;
			}

			@media (max-width: 640px) {
				font-size: 1.25rem;
			}

			li {
				transition:
					transform 1s ease,
					filter 4s ease;
				will-change: transform;

				&:hover {
					transform: translate(15%, -20%) scale(1.1);
				}
			}
		}
	}
}
</style>
