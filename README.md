# Sito vetrina di RadioPanel

Landing page pubblica di RadioPanel (radiopanel.app): cos'è il pannello, cosa offre, compatibilità con AzuraCast e MB Studio, licenza e contatti. Sito statico in [Astro](https://astro.build), con gli stessi token grafici del pannello. Sul server del pannello la cartella è bloccata dal `.htaccess`: si pubblica a parte su Cloudflare Pages.

## Comandi

Da questa cartella (`sito/`), con Node.js 22 o più recente:

```bash
npm install        # una volta
npm run dev        # anteprima su http://localhost:4321 con ricarica automatica
npm run build      # sito finale in dist/
npm run preview    # anteprima della build
```

## Struttura

- `src/pages/index.astro`: la pagina, con indirizzi del pannello e della documentazione, email di contatto ed elenco delle funzioni in alto nel frontmatter.
- `src/styles/sito.css`: lo stile. I token `--rp-*` sono una copia di quelli di `_css/style.css`: tenerli allineati.
- `public/`: logo e favicon.
- `astro.config.mjs`: indirizzo pubblico del sito (`site`, oppure la variabile `SITE_URL`).

Quando l'elenco delle funzioni nel pannello cambia in modo importante, aggiornare anche la tabella "Cosa offre".

## Pubblicazione su Cloudflare Pages

1. Mettere il sito in un repository GitHub (vedi sotto).
2. In Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**, scegliere il repository.
3. Impostazioni di build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `sito` se il repository contiene tutto il pannello, vuoto se contiene solo il sito
   - Variabile d'ambiente `NODE_VERSION` = `22`
4. In **Custom domains** aggiungere `radiopanel.app` (e, se serve, `www.radiopanel.app` con reindirizzamento a `radiopanel.app`).

### Portare solo il sito su GitHub

Su GitHub va solo questa cartella, con la sua storia:

```bash
# dalla radice del repository del pannello
git subtree split --prefix=sito -b sito-publish
git push git@github.com:ORGANIZZAZIONE/radiopanel-sito.git sito-publish:main
```

Per pubblicare gli aggiornamenti si ripetono gli stessi due comandi. In alternativa, senza GitHub: `npx wrangler pages deploy dist --project-name radiopanel-sito`.
