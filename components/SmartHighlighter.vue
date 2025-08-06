<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useDebounceFn } from '@vueuse/core'

let highlightEl: HTMLDivElement | null = null

const updatePosition = (e: MouseEvent | TouchEvent) => {
  const x = 'touches' in e ? e.touches[0].clientX : e.clientX
  const y = 'touches' in e ? e.touches[0].clientY : e.clientY

  if (highlightEl) {
    highlightEl.style.left = `${x}px`
    highlightEl.style.top = `${y}px`
  }
}

const debouncedMove = useDebounceFn(updatePosition, 10)

onMounted(() => {
  // Hide native cursor
  // document.documentElement.style.cursor = 'none'

  // Create the highlighter element
  highlightEl = document.createElement('div')
  highlightEl.id = 'smart-highlighter'
  document.body.appendChild(highlightEl)

  // Add listeners
  window.addEventListener('mousemove', debouncedMove)
  window.addEventListener('touchmove', debouncedMove, { passive: true })
})

onBeforeUnmount(() => {
  // document.documentElement.style.cursor = ''
  highlightEl?.remove()
  window.removeEventListener('mousemove', debouncedMove)
  window.removeEventListener('touchmove', debouncedMove)
})
</script>

<style>
#smart-highlighter {
  position: fixed;
  pointer-events: none;
  width: 10vmin;
  height: 10vmin;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, transparent 0%, var(--accent10), var(--accent) 100%);
  box-shadow:
    0 0 1vmin 0.5vmin var(--accent50),
    inset 0 0 1vmin 0.5vmin var(--anti-accent50);
  /* filter: invert(1); */
  backdrop-filter: invert(1);
  mix-blend-mode: exclusion;
  mix-blend-mode: difference;
  z-index: 10000;
  transition: width 0.2s ease, height 0.2s ease;
  overflow: visible;
}

/* Responsive sizing */
@media (max-width: 768px) {
  #smart-highlighter {
    width: 12vmin;
    height: 12vmin;
  }
}
</style>