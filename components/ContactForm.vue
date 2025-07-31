<template>
	<div class="form-container">
		<h3>{{ $t('contacts.emailUs') }}</h3>

		<form
			:aria-label="$t('contacts.aria_label')"
			class="contact-form"
			@submit.prevent="submitForm"
		>
			<label>
				{{ $t('contacts.name') }} *
				<input
					v-model="form.name"
					:aria-label="$t('contacts.name')"
					minlength="2"
					name="name"
					pattern="^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]{2,}$"
					required
					:title="$t('contacts.name_title')"
					type="text"
				/>
			</label>

			<label>
				{{ $t('contacts.email') }} *
				<input
					v-model="form.email"
					:aria-label="$t('contacts.email')"
					name="email"
					required
					:title="$t('contacts.email_title')"
					type="email"
				/>
			</label>

			<label>
				{{ $t('contacts.phone') }} *
				<input
					v-model="form.phone"
					:aria-label="$t('contacts.phone')"
					name="phone"
					pattern="^\+?[0-9\s\-()]{7,20}$"
					required
					:title="$t('contacts.phone_title')"
					type="tel"
				/>
			</label>

			<label class="type">
				{{ $t('contacts.type') }} *
				<CustomSelect
					v-model="form.type"
					:options="options"
					:placeholder="$t('contacts.choose')"
				/>
			</label>

			<label>
				{{ $t('contacts.notes') }}
				<input
					v-model="form.notes"
					:aria-label="$t('contacts.notes')"
					maxlength="500"
					name="notes"
					:title="$t('contacts.notes_title')"
					type="text"
				/>
			</label>

			<button class="form-submit glow-on-hover-light" type="submit">
				{{ $t('contacts.send') }}
			</button>
		</form>

		<ThankYou v-if="showThanks" :set-show-thanks />
	</div>
</template>

<script setup>
const { t } = useI18n()

const form = ref({
	name: '',
	email: '',
	phone: '',
	type: '',
	notes: '',
})

const options = computed(() => [
	{ label: t('contacts.type_general'), value: 'general' },
	{ label: t('contacts.type_support'), value: 'support' },
	{ label: t('contacts.type_feedback'), value: 'feedback' },
])

const showThanks = ref(false)
const setShowThanks = value => (showThanks.value = value)

const submitForm = async () => {
	try {
		const response = await fetch(
			'https://formsubmit.co/ajax/vadim4web@gmail.com',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(form.value),
			}
		)

		if (response.ok) {
			showThanks.value = true
			form.value = {
				name: '',
				email: '',
				phone: '',
				type: '',
				notes: '',
			}
		} else {
			console.error('Submission failed.')
		}
	} catch (err) {
		console.error('Error:', err)
	}
}
</script>

<style lang="scss">
.form-container {
	display: grid;
	grid-template-rows: 1fr 6fr;
	color: var(--bg);
	padding: 3.75rem;

	@media (orientation: portrait) {
		font-size: 2rem;
	}

	@media (max-width: 480px) {
		padding: 1rem;
	}

	h3 {
		font-size: 2.25rem;

		@media (orientation: portrait) {
			font-size: 2rem;
		}
	}

	@media (max-width: 1080px) {
		margin-inline: auto;
	}

	.contact-form {
		display: grid;
		grid-template-rows: repeat(5, 1fr);
		gap: 1.5rem;
		padding-top: 0.5rem;

		font-size: 1.25rem;
		font-weight: 400;

		@media (max-width: 480px) {
			padding: 0;
			font-size: 1rem;
		}

		& > * {
			min-height: 3.75rem;
		}

		input {
			padding: 0.5rem 1rem;
		}

		& > *:not(button) {
			display: grid;
			grid-template-columns: 50% 50%;
			align-items: center;

			border-bottom: 1px solid var(--bg);
			position: relative;

			@media (max-width: 640px) {
				grid-template-columns: none;
			}
		}

		.type {
			z-index: 1;

			@media (max-width: 480px) {
				display: flex;
				flex-direction: column;
				align-items: start;
			}
		}

		button.form-submit {
			background: var(--accent);
			color: var(--bg);
			width: max-content;
			text-transform: uppercase;
			justify-self: center;
			padding: 0.5rem 3.75rem;
		}
	}
}
</style>
