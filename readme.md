My Astro powered slop blog. 

#This is AI slop. 

I'm learning how to work with new things. I have experience with Hugo, Jekyll, Wordpress, Ghost, I wanted to get some experience with Astro so I vibe coded the shit out of this. 

My hope is that as I learn more things only the mundane basic tedious things, and not even all of those, will be all that remains tool assisted. I won't use Gen AI for actual blog or page content, images, videos, etc. 

I want to see what it does well, what it can teach me, what it breaks or does poorly and how I can fix it. 


---

## Running it

```bash
npm install
npm run dev      # http://localhost:4321 (search won't work here)
npm run build    # astro build, then pagefind indexes dist/ for search
npm run preview  # serves the built site, search included
```

## Writing a post

New markdown file in `src/content/blog/`:

```md
---
title: "Post title"
description: "One line, shows on the front page and in link previews."
pubDate: 2026-12-01
tags: ["linux", "pens"]
heroImage: "../../assets/blog/post-slug/cover.jpg"   # optional
heroAlt: "What's in the cover photo"                  # optional
draft: true                                           # optional, hides it
---
```

Images go in `src/assets/blog/<post-slug>/` and are linked with a relative
path (`![alt](../../assets/blog/post-slug/photo.jpg)`). Astro resizes them
and converts to webp at build time. Anything in `public/` is served as-is.

## Where things are

- `src/lib/posts.ts` - post list, reading time, tag helpers
- `src/layouts/BaseLayout.astro` - head tags, link previews
- `src/pages/` - home, posts, archive, tags, search, about, contact, 404, rss.xml
- `src/styles/global.css` - Rosé Pine / Rosé Pine Dawn
- `public/og-default.png` - preview card for pages without a cover image
- The contact form key comes from the `WEB3FORMS_KEY` repo variable at build time
