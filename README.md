# StageFlo Website

Marketing site for StageFlo, published on GitHub Pages via static export.

## Stack

- Next.js (App Router)
- TypeScript
- Static export (`out/`)
- GitHub Actions Pages deployment

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build

```bash
npm run build
```

This outputs static files to `out/`.

## Deployment

1. Push to `main`.
2. GitHub Actions runs `.github/workflows/deploy.yml`.
3. The generated `out/` artifact is deployed to GitHub Pages.

## Download Lead Capture (GitHub Pages)

This site is static on GitHub Pages, so downloads can only be gated with a client-side form that posts to an external endpoint.

### Quick Setup With Formspree

The site currently defaults to this Formspree endpoint:

```text
https://formspree.io/f/xpqovjbo
```

Optional override steps:

1. Create your own Formspree form and copy endpoint URL.
2. Add repository secret `NEXT_PUBLIC_DOWNLOAD_LEAD_ENDPOINT` with that URL.
3. Push to `main` to trigger deploy.

Formspree endpoint format:

```text
https://formspree.io/f/xxxxxxxx
```

The deploy workflow already injects this secret into the build via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Other Endpoint Options

You can also use Basin, Google Apps Script, Supabase Edge Function, or your own API.

Expected request payload:

```json
{
	"name": "Jane Doe",
	"email": "jane@example.com",
	"marketingOptIn": true,
	"consent": true,
	"source": "desktop",
	"downloadUrl": "https://...",
	"page": "https://stageflo.app/",
	"submittedAt": "2026-04-11T00:00:00.000Z"
}
```

If `NEXT_PUBLIC_DOWNLOAD_LEAD_ENDPOINT` is not set, the gate appears but downloads are blocked until the endpoint is configured.

## Notes

- No custom domain configured.
- Download links point to StageFlo releases:
	- https://github.com/zacstudios/stageflo/releases/latest
# Restored working homepage
