// @ts-check
import { defineConfig } from 'astro/config';

// Indirizzo pubblico del sito vetrina (Cloudflare Pages). Si può cambiare con la variabile SITE_URL.
const site = process.env.SITE_URL ?? 'https://radiopanel.app';

export default defineConfig({
	site,
});
