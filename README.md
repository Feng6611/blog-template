# blog-template

Reusable bilingual (zh/en) Next.js markdown blog template.

## Overview

- Next.js App Router blog with `zh` as default locale and `en` as secondary locale
- Markdown content under `content/`
- Route UI under `src/app/` and reusable components under `src/components/`
- Build helpers under `scripts/`
- Generic template defaults only; add your own content, metadata, and images

## Project Map

```text
src/app/         routes, layouts, metadata
src/components/  layout, navigation, content, ui
src/content/     loaders, queries, transforms, schemas
src/config/      site config
src/i18n/        locale config and loaders
src/lib/         shared utilities
src/types/       shared types
content/         markdown content
public/          icons, locales, user-supplied images
scripts/         content validation and index generation
AGENTS.md        repo instructions for coding agents
```

## Key Behavior

- `/` redirects to `/zh`
- `content/posts/*.md` renders long posts
- `content/daily/*.md` renders short daily entries
- `content/pages/about.md` renders the about page
- `npm run build` validates frontmatter and regenerates the content index before Next.js build

## Editing Guide

- Update site metadata in `src/config/site.ts`
- Put your markdown content in `content/`
- Put your own images in `public/image/`
- Update locale strings in `public/locales/`

Frontmatter example:

```yaml
slug: getting-started
date: '2026-02-14'
description: Welcome post
```

## Configure site metadata

Edit `src/config/site.ts`:

```ts
const siteConfig = {
  domain: 'https://example.com',
  title: 'Blog Template',
  description: 'A bilingual markdown blog template powered by Next.js.',
}
```

You can also override the domain at runtime with `NEXT_PUBLIC_SITE_URL`.

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Agent Notes

- Read `README.md` first for project overview
- Read `AGENTS.md` before making non-trivial changes
- Prefer minimal scoped edits over wide refactors
- Keep the template generic; do not add personal data or local-only files
- For content work, check `content/` before changing route code

## Syncing template updates into a content repo

Recommended downstream flow is cloning this repo first, then keeping this repo as a `template` remote and syncing with:

```bash
git fetch template
git subtree pull --prefix=. template main
```

Then resolve conflicts, run checks, and commit.
