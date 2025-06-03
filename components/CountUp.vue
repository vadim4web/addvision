<template>
  <span ref="counterEl">{{ startVal }}{{ postfix }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  endVal: { type: Number, required: true },
  startVal: { type: Number, default: 1 },
  duration: { type: Number, default: 2 },
  trigger: { type: String, default: '.countup-trigger' },
  postfix: { type: String, default: '' },
})

const counterEl = ref(null)

onMounted(() => {
  const obj = { val: props.startVal }

  gsap.to(obj, {
    val: props.endVal,
    duration: props.duration,
    ease: 'power2.out',
    snap: { val: 1 },
    scrollTrigger: {
      trigger: props.trigger,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      counterEl.value.innerText = `${Math.floor(obj.val)}${props.postfix}`
    },
    onComplete: () => {
      counterEl.value.innerText = `${props.endVal}${props.postfix}`
    }
  })
})
</script>

<style scoped lang="scss">
span {
  font-weight: bold;
  font-size: 2.5rem;
  color: var(--accent);
}
</style>
