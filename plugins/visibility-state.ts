// plugins/visibility-state.ts
import { useHeaderVisibility } from '~/composables/useHeaderVisibility'
import { useMenuVisibility } from '~/composables/useMenuVisibility'

export default defineNuxtPlugin(() => {
	if (import.meta.server) {
		useHeaderVisibility()
		useMenuVisibility()
	}
})
