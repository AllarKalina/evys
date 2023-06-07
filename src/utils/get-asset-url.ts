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
  return `${import.meta.env.PUBLIC_DIRECTUS_URL}/assets/${id}`;
};
