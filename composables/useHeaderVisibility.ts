// composables/useHeaderVisibility.ts
export const useHeaderVisibility = () =>
  useState<boolean>('header-visible', () => false)
