// Elenco delle pagine per i motori di ricerca (/sitemap.xml), dichiarato in /robots.txt.
// Le pagine si prendono da questa cartella: una pagina nuova entra da sola. Resta fuori la 404.
import type { APIRoute } from 'astro';

const pages = Object.keys(import.meta.glob('./*.astro'))
	.map((file) => file.slice(2, -'.astro'.length))
	.filter((name) => name !== '404')
	.map((name) => (name === 'index' ? '/' : `/${name}/`))
	.sort();

export const GET: APIRoute = ({ site, url }) => {
	const urls = pages.map((path) => `\t<url><loc>${new URL(path, site ?? url).href}</loc></url>`).join('\n');
	return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
