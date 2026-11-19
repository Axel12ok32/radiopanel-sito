// Indirizzi e contatti usati da tutte le pagine del sito vetrina.
export const PANEL_URL = 'https://client.radiopanel.app';
export const DOCS_URL = 'https://docs.radiopanel.app';
export const OWNER = 'A.S.V. Studios APPS';
// App desktop: Windows dal Microsoft Store, macOS con l'immagine disco caricata insieme agli aggiornamenti dell'app
// (radiopanelapp: package.json → build.dmg.artifactName "RadioPanel.dmg", nome fisso a ogni versione)
export const WINDOWS_URL = 'https://apps.microsoft.com/detail/9n9n8v9g98s6';
export const MAC_URL = `${PANEL_URL}/autoupdate/RadioPanel.dmg`;
export const INFO_MAIL = 'info@asvstudios.it';
export const SUPPORT_MAIL = 'support@asvhosting.com';

export const infoMail = `mailto:${INFO_MAIL}?subject=${encodeURIComponent('Informazioni su RadioPanel')}`;
export const supportMail = `mailto:${SUPPORT_MAIL}?subject=${encodeURIComponent('Supporto RadioPanel')}`;
