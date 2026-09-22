# Cube.Media — The Creator Economy Hub

A static, responsive, monetization-ready website for **Cube.Media**. It includes free creator calculators, guides, a video hub, a lead-generation desk, a talent network and job board, contests, a donations/support page and an advertising media kit.

Built with plain HTML, CSS and JS. There is no build step, and it runs on the **GitHub Pages free plan**.

## Live site
- GitHub Pages: https://webworksa1.github.io/cube-media/
- Custom domain: to serve the site on `cube.media`, add a `CNAME` file containing `cube.media`. Then point DNS to GitHub Pages: A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` and CNAME `www` → `webworksa1.github.io`. Finally, enable "Enforce HTTPS" in Settings → Pages.

## Configure monetization (`assets/js/config.js`)
| Key | What it does |
|---|---|
| `adsenseClient`, `adSlots` | AdSense publisher ID and slot IDs. When these are empty, the slots show "Advertise here" house ads. |
| `ga4` | Google Analytics 4 ID. It loads only after the visitor accepts cookies. |
| `donate.*` | PayPal, Stripe Payment Link, Buy Me a Coffee, Ko-fi and GitHub Sponsors URLs. When these are empty, the pledge form is used instead. |
| `goal` | Support goal bar: `raised`, `target` and `supporters`. Update these manually. |
| `youtubeChannel` | URL behind the "Subscribe" buttons. |

After AdSense approval, also update `ads.txt` with your publisher ID.

## Forms & inbox
Every form (lead gen, talent, jobs, contests, pledges, advertising, newsletter, contact) posts to one inbox through FormSubmit's AJAX endpoint.
- The address is assembled at runtime from obfuscated character codes. It never appears in the HTML, the visible text or as a plain string in the source.
- **One-time step:** the first submission triggers an activation email from FormSubmit. Click "Activate" in that email, and all later submissions will arrive.

## Structure
```
index.html        Home (3D cube hero, pillars, tools, guides, videos, CTAs)
tools.html        6 calculators + platform specs cheat-sheet
guides.html       Learn hub + 4 long-form guide pages
videos.html       Curated video hub (lite YouTube embeds)
growth.html       Lead generation: 4-step qualified form, packages, FAQ
talent.html       Talent roles, hiring brief, creator application, job board
contests.html     Contests with countdowns, details modal, entry + sponsor forms
support.html      Donations: coffee picks, tiers, goal bar, pledge form
advertise.html    Media kit, rate card, packages, inquiry form
about / contact / privacy / terms / disclaimer / 404
BUILD-PROMPT.md   Concept, revenue model and phase-wise build prompt
```

## Trademark notice
"Cube.Media" is an independent publication. It is not affiliated with any other entity using a similar name. See `disclaimer.html`.
