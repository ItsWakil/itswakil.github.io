---
title: "Writing Posts in Markdown"
description: "A quick reference for the Markdown features this theme supports out of the box."
pubDate: 2026-01-20
tags: ["meta", "markdown"]
---

Every post in this theme is a Markdown file in `src/content/blog/`. Here's a
quick tour of what's supported.

## Headings

Use `##` and `###` for section headings — they inherit the theme's colors
automatically.

## Code blocks

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

## Blockquotes

> A good blog post says one thing well.

## Lists

- Fast
- Simple
- Yours to customize

## Front matter fields

Each post needs:

- `title` — shown as the page and card heading
- `description` — used for previews and SEO
- `pubDate` — controls sort order on the front page
- `tags` — optional, shown as little pills
- `draft` — set to `true` to hide a post from the site while you work on it
