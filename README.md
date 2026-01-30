# NetStatMan Website

Official website for NetStatMan network tools.

**Live:** https://netstatman.com

## Development

This is a static site deployed via Cloudflare Pages.

```bash
# Local preview (any static server works)
npx serve .
```

## Deployment

Push to `main` branch → Cloudflare Pages auto-deploys.

## Structure

```
/
├── index.html          # Landing page
├── tools/
│   ├── config-scraper/ # Config Scraper tool page
│   ├── subnet-calc/    # Subnet Calculator page
│   └── netdiagram/     # NetDiagram page
└── assets/             # Images, downloads
```

## Adding a New Tool

1. Create folder: `tools/[tool-name]/`
2. Add `index.html` (copy from existing tool page)
3. Add card to main `index.html`
4. Push to deploy
