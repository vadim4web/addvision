<template>
  <div class="form-container glow-on-hover-light box-shade">
    <h3 class="text-shade font-inter-semibold font-36">{{ $t("contacts.emailUs") }}</h3>

    <form
      :aria-label="$t('contacts.aria_label')"
      class="contact-form font-inter-regular font-24"
      @submit.prevent="submitForm"
    >
      <label>
        {{ $t("contacts.name") }} *
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
        {{ $t("contacts.email") }} *
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
        {{ $t("contacts.phone") }} *
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
        {{ $t("contacts.type") }} *
        <CustomSelect
          v-model="form.type"
          :options="options"
          :placeholder="$t('contacts.choose')"
        />
      </label>

      <label>
        {{ $t("contacts.notes") }}
        <input
          v-model="form.notes"
          :aria-label="$t('contacts.notes')"
          maxlength="500"
          name="notes"
          :title="$t('contacts.notes_title')"
          type="text"
        />
      </label>

      <button
        class="form-submit glow-on-hover-light text-shade font-montserrat-medium font-24"
        type="submit"
      >
        {{ $t("contacts.send") }}
      </button>
    </form>
  </div>
</template>

<script setup>
const { t } = useI18n();

const { setShowThanks } = defineProps({
  setShowThanks: {
    type: Function,
    required: true,
  },
});

const form = ref({
  name: "",
  email: "",
  phone: "",
  type: "",
  notes: "",
});

const options = computed(() => [
  { label: t("contacts.type_general"), value: "general" },
  { label: t("contacts.type_support"), value: "support" },
  { label: t("contacts.type_feedback"), value: "feedback" },
]);

const submitForm = async () => {
  try {
    const response = await fetch("https://formsubmit.co/ajax/vadim4web@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form.value),
    });

    if (response.ok) {
      setShowThanks(true);
      form.value = {
        name: "",
        email: "",
        phone: "",
        type: "",
        notes: "",
      };
    } else {
      console.error("Submission failed.");
    }
  } catch (err) {
    console.error("Error:", err);
  }
};
</script>

<style lang="scss">
.form-container {
  display: grid;
  grid-template-rows: 1fr 6fr;
  background: var(--text-main);
  padding: 6em;
  color: var(--bg);

  @media (max-width: 480px) {
    padding: 4em;
  }

  @media (max-width: 1080px) {
    margin-inline: auto;
  }

  .contact-form {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    gap: 2.5rem;
    padding-top: 1rem;

    @media (max-width: 480px) {
      padding: 0;
    }

    label {
      position: relative;
    }

    label::after {
      position: absolute;
      width: 100%;
      bottom: 0;
      content: "";
      height: 1px;
      background: var(--bg);
      box-shadow: 0 0 0.25vmin 0.05vmin var(--bg75);
    }

    & > * {
      min-height: 6rem;
    }

    input {
      padding: 1em 2em;
    }

    & > *:not(button) {
      display: grid;
      grid-template-columns: 50% 50%;
      align-items: center;
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
      width: max-content;
      text-transform: uppercase;
      justify-self: center;
      padding: 1em 6em;
    }
  }
}
</style>
