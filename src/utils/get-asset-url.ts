export function getAssetURL(id: string, key?: string) {
  if (!id) return null;
  return `${import.meta.env.PUBLIC_DIRECTUS_URL}/assets/${id}${
    key ? `?key=${key}` : ""
  }`;
}
