export function useAssetUrl(path: string) {
  const baseURL = useRuntimeConfig().app.baseURL

  return `${baseURL}${path.replace(/^\/+/, '')}`
}
