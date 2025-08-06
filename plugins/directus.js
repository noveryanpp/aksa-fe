import { createDirectus, rest, readItem, readItems } from "@directus/sdk";
const directus = createDirectus(import.meta.env.VITE_DIRECTUS_URL).with(rest());

export default defineNuxtPlugin(() => {
    return {
        provide: { directus, readItem, readItems },
    };
});