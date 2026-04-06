# blog-template

Reusable bilingual (zh/en) Next.js markdown blog template.

## Overview

- Next.js App Router blog with `zh` as default locale and `en` as secondary locale
- Markdown content under `blog/`
- Route UI under `src/app/` and reusable components under `src/components/`
- Build helpers under `scripts/`
- Generic template defaults only; add your own content, metadata, and images

## Project Map

```text
src/app/         routes, layouts, metadata
src/components/  navigation, content, ui
src/lib/         content loading, i18n helpers, remark plugins
src/types/       shared types
blog/            markdown content
public/          icons, locales, user-supplied images
scripts/         content validation and index generation
site.config.ts   site metadata
AGENTS.md        repo instructions for coding agents
```

## Key Behavior

- `/` rewrites to `/zh`
- `blog/home/*.md` renders long posts
- `blog/daily/*.md` renders short daily entries
- `blog/about.md` renders the about page
- `npm run build` validates frontmatter and regenerates the content index before Next.js build

## Editing Guide

- Update site metadata in `site.config.ts`
- Put your markdown content in `blog/`
- Put your own images in `public/image/`
- Update locale strings in `public/locales/`

Frontmatter example:

```yaml
slug: getting-started
date: '2026-02-14'
description: Welcome post
```

## Configure site metadata

Edit `site.config.ts`:

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

## Syncing template updates into a content repo

Recommended downstream flow is cloning this repo first, then keeping this repo as a `template` remote and syncing with:

```bash
git fetch template
git subtree pull --prefix=. template main
```

Then resolve conflicts, run checks, and commit.
