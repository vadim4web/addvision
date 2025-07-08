// eslint.config.mjs
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import vueA11y from 'eslint-plugin-vuejs-accessibility'

export default withNuxt({
  plugins: {
    'vuejs-accessibility': vueA11y,
  },
	ignores: [
		'node_modules',
		'.output',
		'.nuxt',
		'dist',
		'public',
		'scripts',
		'server',
	],
	rules: {
    'vuejs-accessibility/img-has-alt': 'off',
		'vue/html-self-closing': 'off',
		'no-unsafe-optional-chaining': 'off',
		'vue/attributes-order': [
			'error',
			{
				order: [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					['UNIQUE', 'SLOT'],
					'TWO_WAY_BINDING',
					'OTHER_DIRECTIVES',
					'OTHER_ATTR',
					'EVENTS',
					'CONTENT',
				],
				alphabetical: true,
			},
		],
	},
})
