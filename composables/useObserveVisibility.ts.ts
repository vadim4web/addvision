export function useObserveVisibility(
	target: Ref<HTMLElement | null>,
	callback: (visible: boolean) => void
) {
	const observer = new IntersectionObserver(
		([entry]) => {
			callback(entry.isIntersecting)
		},
		{ threshold: 0.1 }
	)

	onMounted(() => {
		if (target.value) observer.observe(target.value)
	})

	onBeforeUnmount(() => {
		if (target.value) observer.unobserve(target.value)
	})
}
