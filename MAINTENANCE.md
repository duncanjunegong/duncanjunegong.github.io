# Maintaining this academic website

Live English page: https://duncanjunegong.github.io/

Live Chinese page: https://duncanjunegong.github.io/zh/

## Update content

Edit `content.json`. It stores the verified profile, English and Chinese copy, research projects, publication metadata, CV-grounded author lists, appointments, education, and service.

Run `node build.mjs` after editing it. This regenerates both language pages, each article's BibTeX file, the combined citation file, and the bilingual sitemap. Commit the generated files together with the content change. GitHub Pages serves the root of `main`; it does not need to run this build itself.

`app.js` adds publication search, filters, the expandable publication list, mobile navigation, and email copying. The full research content and all publications are present in the generated HTML even without JavaScript. The language switch uses real links; English remains the default root page.

## Publication conventions

- The publication count includes accepted articles in press.
- Manuscripts under revision are a separate section and are excluded from the publication count.
- `authorsFull` follows the CV. A collapsed author summary highlights Gong J without changing the order of authors. Full author lists are available through the native details control.
- Add DOI and other public links only after checking them. Do not invent links for accepted or unpublished work.
- Update the count and the two small publication-count labels in `build.mjs` and `app.js` if the number of publications changes.

## Preserve verification and downloads

Keep the existing Google Search Console verification meta tag. Its public verification value is included in `build.mjs` and emitted on both pages. Removing it may cause Google to revoke ownership verification.

Keep the Word and PDF CV downloads synchronized with their underlying CV. Website appointment details were confirmed by the owner on October 28, 2026; the downloadable CV files retain their October 2026 source content and formatting.

## Hosting and original files

The site is hosted on GitHub Pages. `.nojekyll` preserves the static output. Existing repository history, `README.md`, `_config.yml`, and `imgs/` are retained. The previous Jekyll theme has no effect while `.nojekyll` is present.
