# CrossroadsCX website (crossroadscx.com)

Marketing site for CrossroadsCX, Chris Birk's boutique consultancy. Next.js 12 (pages router), React 18, Tailwind 3, TypeScript.

## Commands
Package manager is **pnpm** (pinned via `packageManager`; Node 24.x, pinned via `engines`, which Vercel uses over the dashboard setting). Do not use npm or yarn.

```bash
pnpm install
pnpm dev         # http://localhost:3000
pnpm typecheck   # tsc --noEmit
pnpm lint        # next lint
pnpm build       # run before calling any change done
```

## Deployment
- Vercel team `crossroadscx`, project `crossroadscx-nextjs`. Pushing to `main` deploys to production; other branches get preview URLs.
- Env vars live in Vercel (Production + Preview) and `.env.local` (gitignored):
  - `RESEND_API_KEY`: sending-only Resend key for the contact form.
  - `NEXT_PUBLIC_GA_ID`: GA4 measurement ID (`G-…`). Analytics is skipped when unset.

## Architecture notes
- The home page (`pages/index.tsx`) is a single scrolling page composed of `components/*Section.tsx`.
- `pages/engineering.tsx` is a standalone page for technical buyers (CTOs, platform and data leads, startups). `/services` redirects to `/#services`.
- Section ids. Home: `home`, `when-to-call`, `services`, `examples`, `team`, `faq`, `contact-us`. Engineering: `engineering`, `eng-triggers`, `eng-capabilities`, `eng-how-we-work`, `eng-examples`, `eng-team`, `eng-faq`, `contact-us`. `TeamSection`, `FAQSection` and `ContactSection` take props so both pages reuse them.
- Navigation (`components/NavBar.tsx`): the header links are **page-local**. The `NAV` table gives both pages the same five labels (When to call, Services, Examples, Team, FAQ), each scrolling to that page's section, and "Get in touch" scrolls to the current page's form. Only the audience switch ("For business leaders" / "For engineering teams & startups", with `aria-current`) and the logo change pages. The footer is the cross-page site map, one labeled column per page. Add a page's sections to `NAV` and the footer together.
- The header is 72px, plus a 36px audience bar at `lg`. `scroll-padding-top` in `styles/globals.css` must match it; change both together. Smooth scrolling is wrapped in `prefers-reduced-motion`. Next 12 `Link` requires a child `<a>`.
- The site has no dark theme. Don't reintroduce `prefers-color-scheme: dark` styles.
- Images use `next/future/image` (Next 12 experimental flag in `next.config.js`). Always give meaningful `alt` text.
- Third-party scripts go in `pages/_app.tsx` via `next/script`, never raw `<script>`.
- Contact form: `components/ContactSection.tsx` → `POST /api/contact` (`pages/api/contact.ts`) → Resend REST API via `fetch`, sending to hello@crossroadscx.com with `reply_to` set to the visitor. It has a `company` honeypot field. The UI must only show success after a 2xx response. The previous Brevo integration failed silently for over a year, so never let failures be swallowed.
- The site began as a TailGrids template. `BrandsSection`, `PricingSection`, `VideoSection`, `CallToActionSection` and `TestimonialsSection` are unused template leftovers (lorem ipsum and placeholder brands). Don't render them without real content.

## Content facts (must stay accurate)
- Team: **Chris Birk** (CEO / Co-Founder) and **Mario Medina** (Developer). No one else.
- Location: **Chicago, IL** only.
- Contact: hello@crossroadscx.com. No phone number is published, and the contact form doesn't ask for one.
- Discovery calls are free ("no cost for discovery, we're happy to advise"). Don't promise a reply time.
- Offerings: cloud architecture and DevOps, custom software and application development, practical AI and automation (assistants, agents, workflow automation, evaluation and guardrails, AI-assisted engineering practices), data and analytics (pipelines, models, dashboards), systems integration (CRM, e-commerce, membership, APIs), and security hardening for client platforms. Engagements are hourly, project or retainer, either augmenting a team or fully outsourced. **No general IT support** (DevOps means infrastructure and CI/CD for the client's product, not help desk).
- Audiences: the home page speaks to non-technical buyers and referrers; `/engineering` speaks to engineering leaders. Both stay plain-spoken; the engineering page earns trust with concrete stack detail.
- Credentials: Chris's Google Cloud Professional Cloud Architect certification has **expired**. Don't state or imply it's current. Don't claim Google Cloud partner status.
- Chris's pre-CrossroadsCX work (led a 15+ engineer GCP migration team; civic-tech nonprofit serving Congress) may be described as his prior experience, never as a CrossroadsCX engagement, and never with employer names.
- Don't name clients without Chris's explicit OK.
- Industries served: manufacturing, restaurants, non-profits, e-commerce, finance, government, legal, logistics.
- Featured tools (toolset row): Claude, OpenAI, Google ADK, React, Google Cloud, Snowflake, Tableau, GraphQL, Next.js.
- No blog. The old Medium blog is inactive and isn't linked.

## Voice
Plain-spoken, warm, a little wry. "We're also human beings." No sales jargon, no AI hype, no buzzword stacks. Short sentences. Write from the client's pain point first (the quotes in `WhenToCallSection` and the engineering triggers), then what we do about it.

## Planning
`docs/PLANNING.md` holds deferred work and content we're waiting on (e.g. real results for the examples). Check it before adding similar features.

## Subagents (`.claude/agents/`)
- `content-editor`: drafts and reviews site copy against the facts and voice above.
- `code-reviewer`: reviews diffs for this stack (Next 12, pnpm, Tailwind, API route safety).
- `seo-a11y-auditor`: meta tags, alt text, headings, anchors, accessibility.
- `design-reviewer`: layout, navigation and wayfinding, visual hierarchy, readability, responsiveness, engagement, and general design best practices.
