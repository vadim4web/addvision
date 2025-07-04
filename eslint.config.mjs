// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    "vue/no-v-html": 'off',
    "vue/no-v-text-v-html-on-component": 'off',
    "vue/html-self-closing": 'off',
    "no-unsafe-optional-chaining": 'off',
  },
})
