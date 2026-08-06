---
title: "Writing Posts in Markdown"
description: "A quick reference for the Markdown features this theme supports out of the box — headings, images, tables, task lists, and more."
pubDate: 2026-01-20
tags: ["meta", "markdown"]
---

Every post in this theme is a Markdown file in `src/content/blog/`. Here's a
tour of what's supported, image and all.

## Headings

Use `##` and `###` for section headings — they inherit the theme's colors
automatically.

## Images

Drop image files into `public/images/` and reference them with a
site-root-relative path:

```md
![A little skyline in the theme's colors](/images/ocean-skyline.svg)
```

![A little skyline in the theme's colors](/images/ocean-skyline.svg)

Images automatically get rounded corners and scale to fit the content width
— see `.post-content img` in `src/styles/global.css` if you want to change
that (add a caption, a border, a shadow, whatever fits your taste).

## Code blocks

Fenced code blocks get a background, border, and horizontal scroll for long
lines:

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

Inline code like `npm run dev` uses the same styling, just smaller.

## Blockquotes

> A good blog post says one thing well.

## Lists

Unordered:

- Fast
- Simple
- Yours to customize

Ordered, with nesting:

1. Write your post in Markdown
2. Add front matter
   - `title`, `description`, `pubDate` are required
   - `tags` and `draft` are optional
3. Push to `main` and let the Action deploy it

Task lists (handy for draft outlines or changelogs):

- [x] Set up the theme
- [x] Write a first post
- [ ] Publish it

## Tables

| Feature | Supported | Notes |
| --- | --- | --- |
| Tables | Yes | Styled to match the theme |
| Task lists | Yes | Rendered as real checkboxes |
| Strikethrough | Yes | `~~like this~~` renders struck through |
| Images | Yes | Just drop files in `public/images/` |

## Links and emphasis

Regular [links](/about/) work as expected, along with **bold**, *italic*,
and ~~strikethrough~~ text.

## Horizontal rule

Use three dashes on their own line to add a section break:

---

## Front matter fields

Each post needs:

- `title` — shown as the page and card heading
- `description` — used for previews and SEO
- `pubDate` — controls sort order on the front page
- `tags` — optional, shown as little pills
- `draft` — set to `true` to hide a post from the site while you work on it
