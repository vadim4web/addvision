// composables/useMenuVisibility.ts
export const useMenuVisibility = () =>
  useState<boolean>('menu-visible', () => true)
