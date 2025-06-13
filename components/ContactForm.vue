<template>
  <div class="form-container">
    <h3>{{ $t('contacts.emailUs') }}</h3>

    <form
      class="contact-form"
      :aria-label="$t('contacts.aria_label')"
      @submit.prevent="submitForm"
    >
      <label>
        {{ $t('contacts.name') }} *
        <input
          v-model="form.name"
          type="text"
          name="name"
          required
          :aria-label="$t('contacts.name')"
          minlength="2"
          pattern="^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]{2,}$"
          :title="$t('contacts.name_title')"
        />
      </label>

      <label>
        {{ $t('contacts.email') }} *
        <input
          v-model="form.email"
          type="email"
          name="email"
          required
          :aria-label="$t('contacts.email')"
          :title="$t('contacts.email_title')"
        />
      </label>

      <label>
        {{ $t('contacts.phone') }} *
        <input
          v-model="form.phone"
          type="tel"
          name="phone"
          required
          pattern="^\+?[0-9\s\-()]{7,20}$"
          :aria-label="$t('contacts.phone')"
          :title="$t('contacts.phone_title')"
        />
      </label>

      <label>
        {{ $t('contacts.type') }} *
        <select
          v-model="form.type"
          name="type"
          required
          :aria-label="$t('contacts.type')"
          :title="$t('contacts.type_title')"
        >
          <option disabled value="">{{ $t('contacts.choose') }}</option>
          <option value="general">{{ $t('contacts.type_general') }}</option>
          <option value="support">{{ $t('contacts.type_support') }}</option>
          <option value="feedback">{{ $t('contacts.type_feedback') }}</option>
        </select>
      </label>

      <label>
        {{ $t('contacts.notes') }}
        <input
          v-model="form.notes"
          type="text" name="notes"
          maxlength="500"
          :aria-label="$t('contacts.notes')"
          :title="$t('contacts.notes_title')"
        />
      </label>

      <button type="submit">{{ $t('contacts.send') }}</button>
    </form>

    <ThankYou v-if="showThanks" :set-show-thanks />
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: '',
  type: '',
  notes: ''
})

const showThanks = ref(false)
const setShowThanks = (value) => showThanks.value = value

const submitForm = async () => {
  try {
    const response = await fetch('https://formsubmit.co/ajax/vadim4web@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    if (response.ok) {
      showThanks.value = true
      form.value = {
        name: '',
        email: '',
        phone: '',
        type: '',
        notes: ''
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
  padding: 3.75rem;

  h3 {
    font-size: 2.25rem;
  }

  @media (orientation: portrait) {
    width: max(65%, 65ch);
    margin-inline: auto;
  }

  .contact-form {
    color: var(--text-main);
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    gap: 1.5rem;
    padding-top: 0.5rem;

    font-size: 1.25rem;
    font-weight: 400;

    & > * {
      min-height: 3.75rem;
    }

    & > *:not(button) {
      display: grid;
      grid-template-columns: 50% 50%;
      align-items: center;

      border-bottom: 1px solid var(--text-main);
    }

    button {
      background: var(--accent);
      color: var(--white);
      width: max-content;
      text-transform: uppercase;
      justify-self: center;
      padding: 0.5rem 3.75rem;
    }
  }
}
</style>
