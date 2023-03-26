export function getAssetURL({
  id,
  key,
  fit,
  width,
  height,
  quality,
}: {
  id: string;
  fit?: string;
  key?: string;
  width: number;
  height?: number;
  quality?: number;
}) {
  if (!id) return null;

  const params = [
    `width=${width}`,
    `fit=${fit}`,
    "format=webp",
    `quality=${quality ?? 75}`,
    `height=${height}`,
  ];
  const paramsString = params.join("&");

  return `${import.meta.env.PUBLIC_DIRECTUS_URL}/assets/${id}?${
    key ? `key=${key}` : ""
  }${paramsString}`;
}
