// Indirizzi, contatti e sezioni usati da tutte le pagine del sito vetrina.
export const PANEL_URL = 'https://client.radiopanel.app';
export const DOCS_URL = 'https://docs.radiopanel.app';
// Gli stessi indirizzi senza "https://", per mostrarli nel testo
export const PANEL_HOST = new URL(PANEL_URL).host;
export const DOCS_HOST = new URL(DOCS_URL).host;
export const OWNER = 'A.S.V. Studios APPS';
// App desktop: Windows dal Microsoft Store, macOS con l'immagine disco caricata insieme agli aggiornamenti dell'app
// (radiopanelapp: package.json → build.dmg.artifactName "RadioPanel.dmg", nome fisso a ogni versione)
export const WINDOWS_URL = 'https://apps.microsoft.com/detail/9n9n8v9g98s6';
export const MAC_URL = `${PANEL_URL}/autoupdate/RadioPanel.dmg`;
export const INFO_MAIL = 'info@asvstudios.it';
export const SUPPORT_MAIL = 'support@asvhosting.com';

export const infoMail = `mailto:${INFO_MAIL}?subject=${encodeURIComponent('Informazioni su RadioPanel')}`;
export const supportMail = `mailto:${SUPPORT_MAIL}?subject=${encodeURIComponent('Supporto RadioPanel')}`;

// Pagine del pannello aperte dal sito (indirizzi senza .php, come nel pannello)
export const PANEL = {
	termini: `${PANEL_URL}/termini-condizioni`,
	webmail: `${PANEL_URL}/public/areapersonale/email`,
};

// Pagine della documentazione aperte dal sito. Se in docs/ una pagina o un titolo cambia nome, si corregge qui:
// l'ancora di `primoAvvioMac` viene dal titolo "Il primo avvio sul Mac" di app-desktop/installazione.mdx.
export const DOCS = {
	direttaVideo: `${DOCS_URL}/radio/diretta-video/`,
	visualRadio: `${DOCS_URL}/pubbliche/visual-radio/`,
	installazione: `${DOCS_URL}/app-desktop/installazione/`,
	primoAvvioMac: `${DOCS_URL}/app-desktop/installazione/#il-primo-avvio-sul-mac`,
	email: `${DOCS_URL}/utente/email/`,
	emailBrowser: `${DOCS_URL}/pubbliche/email-dal-browser/`,
};

// Sezioni della pagina principale, nell'ordine del menu in alto. Gli `id` delle sezioni in index.astro
// si scrivono con sectionId(): un nome che non è in questo elenco ferma la build invece di lasciare un link morto.
export const SECTIONS = [
	{ id: 'funzioni', label: 'Funzioni' },
	{ id: 'visual-radio', label: 'Visual Radio' },
	{ id: 'compatibilita', label: 'Compatibilità' },
	{ id: 'su-misura', label: 'Su misura' },
	{ id: 'app', label: 'App' },
	{ id: 'licenza', label: 'Licenza' },
	{ id: 'contatti', label: 'Contatti' },
] as const;

export type SectionId = (typeof SECTIONS)[number]['id'];

export function sectionId(id: SectionId): SectionId {
	if (!SECTIONS.some((s) => s.id === id)) throw new Error(`Sezione "${id}" non elencata in SECTIONS (src/links.ts)`);
	return id;
}
