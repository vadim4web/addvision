<template>
	<footer
		id="contacts"
		:aria-label="$t('aria.contact')"
		class="contacts-section"
		role="contentinfo"
	>
		<SectionHeading class="heading">
			<span class="heading-text">{{ $t('contacts.title') }}</span>
			<i class="arrow"><SvgArrow /></i>
		</SectionHeading>

		<ContactsBlock />

		<ContactForm :set-show-thanks />

		<p class="copy">
			&copy; 2013 - {{ new Date().getFullYear() }}
			<span style="color: var(--gray)">{</span><span class="lowercase">Add</span
			><span style="color: var(--gray)">}</span
			><span class="uppercase">Vision</span>
			{{ $t('rights') }}
		</p>
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
	background: var(--accent);
	color: var(--bg);
	font-weight: bolder;
	display: grid;

	@media (orientation: landscape) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr auto 1fr;
		grid-template-areas:
			'heading   heading'
			'contacts   form'
			'copyright copyright';
	}

	@media (orientation: portrait) {
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
		background: var(--white);

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
	}
}

.dim {
	color: var(--white50);
}
</style>
