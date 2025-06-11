<template>
  <div class="form-container">
    <h3 class="font-inter-semibold">
      {{ $t('contacts.emailUs') }}
    </h3>

    <form
      action="https://formsubmit.co/vadim4web@gmail.com"
      method="POST"
      class="contact-form font-montserrat-regular"
      :aria-label="$t('contacts.aria_label')"
    >
      <!-- Redirect after submit -->
      <input type="hidden" name="_next" value="https://vadim4web.fvh.is/thanks" />
      <input type="hidden" name="_captcha" value="false" />

      <label>
        {{ $t('contacts.name') }} *
        <input type="text" name="name" required />
      </label>

      <label>
        {{ $t('contacts.email') }} *
        <input type="email" name="email" required />
      </label>

      <label>
        {{ $t('contacts.phone') }} *
        <input type="text" name="phone" required />
      </label>

      <label>
        {{ $t('contacts.type') }} *
        <select name="type" required>
          <option disabled value="">{{ $t('contacts.choose') }}</option>
          <option value="general">{{ $t('contacts.type_general') }}</option>
          <option value="support">{{ $t('contacts.type_support') }}</option>
          <option value="feedback">{{ $t('contacts.type_feedback') }}</option>
        </select>
      </label>

      <label>
        {{ $t('contacts.notes') }}
        <input type="text" name="notes"/>
      </label>

      <button type="submit">{{ $t('contacts.send') }}</button>
    </form>
  </div>
</template>

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
