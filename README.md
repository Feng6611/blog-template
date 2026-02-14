# blog-template

Reusable bilingual (zh/en) Next.js markdown blog template.

## What this template includes

- Chinese default route flow (`/` -> `/zh` rewrite + `defaultLocale = zh`)
- Non-mutating build validation (`npm run build` runs `postids:check`)
- Wiki link rendering with unresolved links styled as internal links
- Content index generation for fast post lookup

## Configure site metadata

Edit `site.config.ts`:

```ts
const siteConfig = {
  domain: 'https://kkuk.dev',
  title: 'Blog Template',
  description: 'A bilingual markdown blog template powered by Next.js.',
}
```

You can also override domain at runtime with `NEXT_PUBLIC_SITE_URL`.

## Content layout

- `blog/home/*.md`: long posts
- `blog/daily/*.md`: daily posts
- `blog/about.md`: about page markdown

Frontmatter date should be quoted as a string:

```yaml
date: '2026-02-14'
```

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Syncing template updates into a content repo

Recommended downstream flow is cloning this repo first, then keeping this repo as a `template` remote and syncing with:

```bash
git fetch template
git subtree pull --prefix=. template main
```

Then resolve conflicts (if any), run checks, and commit.
