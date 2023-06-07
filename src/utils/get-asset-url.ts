export const getAssetURL = ({
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
}): string => {
  const params = [
    `w-${width}`,
    "f-webp",
    `q-${quality ?? 80}`,
    height ? `h-${height}` : "",
  ];
  const paramsString = params.join(",");

  return `${import.meta.env.PUBLIC_DIRECTUS_URL}/${id}?tr:${paramsString}`;
};
