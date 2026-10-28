# Personal website

Live URL: https://duncanjunegong.github.io/

The website is plain HTML, CSS, and JavaScript and is published with GitHub Pages. There is no build step or third-party runtime dependency.

## Publishing

GitHub Pages should publish the root (`/`) of the `main` branch. The `.nojekyll` file tells Pages to serve the static files directly. Changes committed to this source are published automatically by GitHub Pages.

## Content and files

- `index.html`: page structure, default English text, and search metadata.
- `app.js`: English and Chinese content, publications, filtering, and language switching.
- `style.css`: desktop, mobile, and print styles.
- `assets/`: molecular illustration, icon, and downloadable CV files.
- `robots.txt` and `sitemap.xml`: search engine discovery configuration.

The CV content reflects the October 2026 CV, updated October 26, 2026. The PDF was generated from the latest Word CV. Publication statuses should be updated when they change.

The existing `README.md`, `_config.yml`, and `imgs/` files have been retained. The original Jekyll theme configuration does not affect the new static site while `.nojekyll` is present.

Public hosting makes the page and CV downloads available to all visitors. Search engines may index the site, but inclusion and timing are determined by each search engine.
