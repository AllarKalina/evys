import { Directus } from "@directus/sdk";

export const getDirectusClient = async () => {
  const directus = new Directus(import.meta.env.PUBLIC_DIRECTUS_URL);

  if (await directus.auth.token) return directus;

  console.log("wtf");

  if (import.meta.env.DIRECTUS_EMAIL && import.meta.env.DIRECTUS_PASSWORD) {
    await directus.auth.login({
      email: import.meta.env.DIRECTUS_EMAIL,
      password: import.meta.env.DIRECTUS_PASSWORD,
    });
  } else if (import.meta.env.DIRECTUS_STATIC_TOKEN) {
    await directus.auth.static(import.meta.env.DIRECTUS_STATIC_TOKEN);
  }

  return directus;
};
