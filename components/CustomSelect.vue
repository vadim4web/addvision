<!-- CustomSelect.vue -->
<template>
	<div
		ref="wrapper"
		v-click-outside="close"
		class="custom-select"
		@keydown.down.prevent="nextOption"
		@keydown.enter.prevent="selectFocusedOption"
		@keydown.up.prevent="prevOption"
	>
		<button
			:aria-controls="dropdownId"
			:aria-expanded="isOpen.toString()"
			class="select-button text-shade"
			type="button"
			@click="toggle"
		>
			<span>{{ selectedLabel || placeholder }}</span>
			<svg class="arrow" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
		</button>

		<ul v-show="isOpen" :id="dropdownId" class="options-list" role="listbox">
			<li
				v-for="(option, i) in options"
				:key="option.value"
				:aria-selected="option.value === modelValue"
				:class="{
					selected: option.value === modelValue,
					focused: focusedIndex === i,
				}"
				role="option"
				@click="select(option.value)"
				@mouseenter="focusedIndex = i"
			>
				{{ option.label }}
			</li>
		</ul>
	</div>
</template>

<script setup>
const props = defineProps({
	options: {
		type: Array,
		required: true,
		validator: opts => opts.every(o => 'label' in o && 'value' in o),
	},
	placeholder: {
		type: String,
		default: 'Select...',
	},
	modelValue: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const focusedIndex = ref(-1)
const wrapper = ref()
const dropdownId = `dropdown-${Math.random().toString(36).slice(2)}`

const selectedLabel = computed(() => {
	const selected = props.options.find(o => o.value === props.modelValue)
	return selected?.label || ''
})

const toggle = () => {
	isOpen.value = !isOpen.value
	if (isOpen.value)
		focusedIndex.value = props.options.findIndex(
			o => o.value === props.modelValue
		)
}

const close = () => {
	isOpen.value = false
	focusedIndex.value = -1
}

const select = async value => {
	emit('update:modelValue', value)
	await this.$nextTick()
	close()
}

const nextOption = () => {
	if (!isOpen.value) toggle()
	else focusedIndex.value = (focusedIndex.value + 1) % props.options.length
}

const prevOption = () => {
	if (!isOpen.value) toggle()
	else
		focusedIndex.value =
			(focusedIndex.value - 1 + props.options.length) % props.options.length
}

const selectFocusedOption = () => {
	if (focusedIndex.value >= 0) select(props.options[focusedIndex.value].value)
}
</script>

<style>
.custom-select {
	position: relative;
	width: 100%;
}

.select-button {
	width: 100%;
	color: var(--bg);
	padding: 0.5rem 1rem;
	text-align: left;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
}

.select-button .arrow {
	width: 1rem;
	height: 1rem;
	fill: currentColor;
}

.options-list {
	position: absolute;
	top: 100%;
	left: 0;
	background: white;
	border: 1px solid var(--accent);
	width: 100%;
	max-height: 200px;
	overflow-y: auto;
	box-shadow: 0 0.1em 0.5em var(--bg25);
	margin-top: 0.25rem;
}

.options-list li {
	padding: 0.5rem 1rem;
	cursor: pointer;
}

.options-list li:hover,
.options-list li.focused {
	background: var(--accent);
	color: var(--text-main);
}

.options-list li.selected {
	font-weight: bold;
}
</style>
