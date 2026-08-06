# Ocean Breeze

A small, fast Astro blog theme — inspired by the simplicity of
[AstroPaper](https://github.com/satnaing/astro-paper) — with a "Summer Ocean
Breeze" light mode and a "Warm Autumn Glow" dark mode.

- 🎨 Two hand-picked color palettes, switchable with one click
- 📝 Markdown blog posts, listed on the front page
- 👤 About page
- ✉️ Contact page that **never prints your email address in the page HTML**
- ⚡ No client-side JS framework — just fast, static HTML
- 🚀 One-push deploy to GitHub Pages via GitHub Actions

## Colors

**Light mode — Summer Ocean Breeze**
| Role | Color | Hex |
|---|---|---|
| Background | Frosted Blue | `#A8DADC` |
| Card / surface | Honeydew | `#F1FAEE` |
| Text | Deep Space Blue | `#1D3557` |
| Muted text | Steel Blue | `#457B9D` |
| Accent (links, buttons, tags) | Strawberry Red | `#E63946` |

**Dark mode — Warm Autumn Glow**
| Role | Color | Hex |
|---|---|---|
| Background | Deep Navy | `#003049` |
| Text | Vanilla Custard | `#EAE2B7` |
| Muted text / secondary accent | Sunflower Gold | `#FCBF49` |
| Accent (links, buttons, tags) | Princeton Orange | `#F77F00` |
| Error / strong CTA | Flag Red | `#D62828` |

All of these live as CSS custom properties in `src/styles/global.css` under
`:root` (light) and `:root[data-theme="dark"]` (dark) — change any of them
in one place and the whole site updates.

> I used **Frosted Blue** as the background rather than Strawberry Red —
> a saturated red as a full-page background fights with body text
> readability, whereas the soft blue reads calmly at length and lets the red
> pop as an accent. If you'd rather have the red background, it's a one-line
> swap: in `global.css`, set `--color-bg: var(--strawberry-red);` and
> `--color-text: var(--honeydew);` under `:root`.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Writing posts

Add a new Markdown file to `src/content/blog/`:

```md
---
title: "My Post Title"
description: "One sentence describing the post."
pubDate: 2026-03-01
tags: ["life", "notes"]
---

Your content here, in Markdown.
```

Set `draft: true` in the front matter to hide a post while you work on it.

## Customizing

- **Site title / nav links** — `src/components/Header.astro`
- **About page copy** — `src/pages/about/index.astro`
- **Colors** — `src/styles/global.css`
- **Footer text** — `src/components/Footer.astro`

## Setting up the contact form (without exposing your email)

The contact page (`src/pages/contact/index.astro`) posts to
[Web3Forms](https://web3forms.com), a free service made for static sites —
it relays messages to your inbox and your email address never appears
anywhere in the page's HTML or JavaScript.

1. Go to [web3forms.com](https://web3forms.com) and enter the email address
   you want submissions sent to. You'll get an **access key** back
   immediately — no account needed.
2. Open `src/pages/contact/index.astro` and replace
   `YOUR-WEB3FORMS-ACCESS-KEY` with that key.
3. That's it — the access key is safe to have in public source code; it
   only identifies *which* form is submitting, not your email address.

Prefer a different provider? [Formspree](https://formspree.io) and
[Getform](https://getform.io) work the same way — swap the `fetch()` URL
and field names in the `<script>` at the bottom of that file.

## Deploying to GitHub Pages

1. **Create a new GitHub repository** and push this project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

2. **Set your site URL** in `astro.config.mjs`:

   - If this repo will be your user site (`YOUR-USERNAME.github.io`):
     ```js
     site: "https://YOUR-USERNAME.github.io",
     ```
   - If it's a project site (`YOUR-USERNAME.github.io/YOUR-REPO`):
     ```js
     site: "https://YOUR-USERNAME.github.io/YOUR-REPO",
     base: "/YOUR-REPO",
     ```
     (uncomment the `base` line in the file)

   Also update the `Sitemap:` URL in `public/robots.txt` to match.

3. **Enable GitHub Pages via Actions**: in your repo, go to
   **Settings → Pages → Build and deployment → Source**, and choose
   **GitHub Actions**.

4. **Push to `main`.** The included workflow
   (`.github/workflows/deploy.yml`) will build the site and deploy it
   automatically. Check the **Actions** tab for progress; once it's green,
   your site is live at the URL from step 2.

Every subsequent push to `main` redeploys automatically.

## Project structure

```
src/
  components/       Header, Footer, ThemeToggle, PostCard
  content/blog/      Your Markdown posts
  layouts/           BaseLayout.astro (head, theme init script)
  pages/
    index.astro       Front page — post listing
    about/index.astro
    contact/index.astro
    posts/[...slug].astro   Individual post template
  styles/global.css   All colors + layout styling
public/               favicon, robots.txt
.github/workflows/    GitHub Pages deploy workflow
```
