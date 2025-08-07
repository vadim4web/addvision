<template>
	<footer
		id="contacts"
		:aria-label="$t('aria.contact')"
		class="contacts-section box-shade text-shade light-bg-section"
		role="contentinfo"
	>
		<div class="content">
			<SectionHeading class="heading glow-on-hover text-shade">
				<span class="heading-text">{{ $t('contacts.title') }}</span>
				<i class="arrow"><SvgArrow /></i>
			</SectionHeading>

			<ContactsBlock />

			<ContactForm :set-show-thanks />

			<p class="copy glow-on-hover text-shade">
				&copy; 2013 - {{ new Date().getFullYear() }}
				<span style="color: var(--accent)">{</span><span class="lowercase">Add</span
				><span style="color: var(--accent)">}</span
				><span class="uppercase">Vision</span>
				{{ $t('rights') }}
			</p>
		</div>
	</footer>
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
.contacts-section {

	font-weight: bolder;

	.content {
		display: grid;
		align-content: center;
		gap: 1rem;

		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr auto 1fr;
		grid-template-areas:
			'heading   heading'
			'contacts   form'
			'copyright copyright';

		@media (max-width: 1080px) {
			grid-template-columns: none;
			grid-template-rows: auto auto 1fr auto;
			grid-template-areas:
				'heading'
				'contacts'
				'form'
				'copyright';
		}

		.heading {
			grid-area: heading;
		}

		.contacts-block {
			grid-area: contacts;
		}

		.form-container {
			grid-area: form;

			@media (orientation: portrait) {
				margin-bottom: 4rem;
			}

			@media (orientation: landscape) {
				align-self: start;
			}
		}

		.copy {
			grid-area: copyright;
			align-self: end;
			text-align: center;
			font-weight: 300;
		}
	}
}
</style>
