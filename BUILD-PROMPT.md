# Cube.Media — Concept & Phase-Wise Build Prompt

## 1. The winning idea

**Cube.Media — The Creator Economy Hub.** One destination where creators learn, grow, earn and get hired, and where brands find creators. The "cube" is the brand system: **six faces = six pillars**.

| Face | Pillar | Traffic engine | Money engine |
|---|---|---|---|
| 1 | **Tools** — free calculators (YouTube money, CPM/RPM, engagement rate, sponsorship rate, TikTok/Instagram earnings, specs cheat-sheet) | Evergreen, high-volume search queries; repeat use | AdSense beside results (high-CPM marketing/finance intent) |
| 2 | **Learn** — guides on monetization, growth, gear, AI workflows | SEO long-tail | AdSense in-article, affiliate links |
| 3 | **Watch** — curated video hub + own YouTube channel | YouTube search + embeds | YouTube Partner revenue, watch-time |
| 4 | **Grow** — lead-gen service desk (brand campaigns, creator management, video production, channel audits) | CTAs from every tool/guide | Qualified B2B leads ($50–$500 each to service or sell to agencies) |
| 5 | **Talent** — hire creators/editors, creator applications, job board | Creator + employer searches | Paid job posts, placement fees |
| 6 | **Compete** — monthly contests with prizes | Social virality, backlinks | Contest sponsorships |

Plus: **Support** (donations/memberships), **Advertise** (media kit, sponsorship packages), newsletter.

### Why this beats the alternatives
- **Speedcubing / Rubik's hub:** strong search volume, but the audience skews young. That means low RPM ($1–$3) and COPPA ad restrictions.
- **Generic "media agency" site:** almost no organic traffic.
- **Creator-economy hub:** marketing and business intent gives AdSense RPMs typically **$8–$25**. The calculator queries are high-volume and evergreen. The lead values are B2B-sized. Every monetization rail you asked for (ads, video, leads, donations, contests, hiring) fits the niche without forcing it.

### Revenue model (month-12 target, assumptions shown)
| Stream | Assumption | Monthly |
|---|---|---|
| AdSense | 150k pageviews × $12 RPM | ~$1,800 |
| Leads | 1.5% of 50k tool users submit; 20% qualified × $150 | ~$2,250 |
| Sponsorships / newsletter ads | 2 slots × $500 | ~$1,000 |
| Job posts | 15 × $49 | ~$735 |
| Donations / members | 60 × $7 | ~$420 |
| Contest sponsors | 1 × $750 | ~$750 |
| **Total** | | **≈ $6,900 / mo** |

These are planning numbers, not guarantees. The tools pages carry the model: if they don't rank, AdSense and lead volume both collapse.

## 2. Competitive research — 37 sites visited
**Media and news:** Tubefilter, Digiday, Social Media Today, Later, Buffer, Sprout Social, Hootsuite, Net Influencer, Publish Press, Passionfruit, The Tilt.

**Tools and analytics:** Influencer Marketing Hub, NoxInfluencer, vidIQ, TubeBuddy, Playboard, HypeAuditor, Modash, Upfluence, GRIN, Aspire, CreatorIQ.

**Monetization, contests and talent:** Patreon, Ko-fi, Buy Me a Coffee, Gumroad, beehiiv, Substack, Kajabi, Devpost, 99designs, FilmFreeway, Kickstarter, Wefunder, Contra, Upwork.

**Features adopted**
- **Navigation:** audience split (Brands / Creators).
- **Home page:** hero → numbered Top Stories → latest feed.
- **Tools:** calculators that give ranges rather than single figures, with benchmark labels. Engagement rates are graded against follower-tier bands.
- **Lead generation:** multi-step qualified form covering Role, Goal, Budget, Timeline, Company size and Country, with a testimonial beside it.
- **Newsletter:** a named newsletter with a stated cadence, placed three times per page.
- **Donations:** coffee-unit quick picks (1/3/5), 3 membership tiers, a goal progress bar and a supporters wall.
- **Contests:** cards showing prize, days left, entries, themes and status. Each contest has tabs for Overview, Rules, Prizes, Judging and Timeline.
- **Talent:** cards showing role, rate, rating and skills. Hire / Work split. Job fields: title, skills, budget type, level and duration.
- **Media kit:** audience stats, placements, CPM or flat rate card, inquiry form.
- **Trust signals:** stat counters, logo strip, testimonials with numbers.

## 3. Phase-wise build prompt (hand this to any builder / AI)

> **Global rules (apply to every phase):** Pure static HTML/CSS/JS, hostable on the GitHub Pages free plan. No backend, no build step, relative links only. Mobile-first, WCAG AA, dark/light themes. Every page must show the top bar *"Contact, if you are interested in this website/domain name/Sponsorship/Advertisement/Partnership"*, linking to https://web.works/contact. All forms and mailto links go to one inbox, built at runtime from obfuscated char codes. The address must never appear in HTML, visible text, or plain-text source. Brand name is written **Cube.Media**, with an original isometric-cube logo, and there is no affiliation with any other "Cube Media" entity.

**Phase 1 — Foundation.** Build a design-token CSS: brand gradient violet→cyan, Inter/Space Grotesk, 8-pt spacing, cards, buttons, and forms. Then build these shared pieces:
- Header: top bar, logo, nav (Tools, Learn, Watch, Grow, Talent, Contests, Advertise, Support), mobile drawer, and theme toggle.
- Footer: a four-column directory, newsletter signup, and legal links.
- Base files: 404 page, favicon.svg, manifest, robots.txt, sitemap.xml, ads.txt, `.nojekyll`.

**Phase 2 — Home.** Build the page in this order:
1. Hero with a 3D rotating CSS cube; each face links to a pillar.
2. Stat counters.
3. "Six faces" pillar grid.
4. Trending tools.
5. Top guides list.
6. Video strip.
7. Lead-gen CTA band.
8. Contest spotlight.
9. Talent preview.
10. Newsletter.
11. Support goal bar.

Place ad slots between sections.

**Phase 3 — Tools.** Build six client-side calculators:
- YouTube earnings, with a range from niche RPM tables.
- CPM/RPM converter.
- Engagement rate graded against follower-tier benchmarks.
- Sponsorship rate estimator.
- TikTok/Instagram earnings.
- Platform specs cheat-sheet.

Every tool needs:
- a range output with a label ("Excellent", "Average")
- a "Get a free growth audit" CTA that leads to the lead form
- an FAQ
- a disclaimer

**Phase 4 — Content.** Build a guides hub with search and category filters, and at least four long-form guides. Each guide needs a TOC, reading time, in-article ads, related tools, and Article JSON-LD.

**Phase 5 — Watch.** Build a video hub with lite YouTube facades (youtube-nocookie, which loads only on click), category filters, and a "Subscribe to our channel" CTA.

**Phase 6 — Grow (lead generation).** Build a dedicated page with:
- a 4-step qualifying form: role → service → budget/timeline → contact
- a progress bar
- validation
- honeypot spam protection
- a UTM/referrer capture field
- a thank-you state

Around the form, add trust stats, a process timeline, service packages, testimonials, an FAQ, and sticky CTAs site-wide.

**Phase 7 — Talent.** Build:
- a talent directory with filters
- a "Hire talent" brief form
- a "Join as creator" application form
- a job board with a "Post a job" form (paid-listing ready)

**Phase 8 — Contests.** Build contest cards with a live countdown, prize, entries, and status. Add a detail modal with tabs (Overview, Rules, Prizes, Judging, Timeline), an entry form, a "Sponsor a contest" form, and a past-winners wall.

**Phase 9 — Support and Advertise.**
- Support page: coffee quick-picks, 3 membership tiers, a one-time/monthly toggle, a goal bar, a "where money goes" breakdown (operations, promotion, marketing, hiring talent, contest prizes), a supporters wall, and payment buttons (PayPal / Buy Me a Coffee / Ko-fi / Stripe, set in `config.js`) with a pledge-form fallback.
- Advertise page: a media kit with audience stats, a placements and rate card, and an inquiry form.

**Phase 10 — Monetization wiring.** Build `config.js` with the AdSense publisher ID, slot IDs, donation links, YouTube channel, and GA4 ID. Ad slots render AdSense when the ID is set; until then they show house ads that sell the slot. Add a consent banner.

**Phase 11 — Legal and trust.** Build three pages:
- Privacy: AdSense cookies, GDPR/CCPA.
- Terms: contest rules and user content.
- Disclaimer: trademark/copyright, affiliate/FTC, earnings estimates.

Add an About page and a Contact page.

**Phase 12 — SEO, performance and launch.** Complete these:
- Meta, Open Graph and Twitter tags, plus canonical URLs
- JSON-LD for Organization, WebSite, FAQPage and Article
- Lighthouse score of 90 or higher
- Push to GitHub, publish on Pages, and point the Cube.Media DNS at it
- Submit the sitemap to Search Console and apply for AdSense once there are 15+ content pages

**Expansion roadmap:** add a weekly guide cadence, a creator rankings page, a newsletter archive, and paid job-post checkout (Stripe Payment Links). Move to Astro or Next.js once there are more than 100 pages.
