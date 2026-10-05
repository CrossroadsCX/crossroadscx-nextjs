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
- The home page (`pages/index.tsx`) is a single scrolling page composed of `components/*Section.tsx`. `pages/services.tsx` reuses `ServicesSection`.
- Each section's root element has an `id` (`home`, `services`, `team`, `faq`, `contact-us`). Nav, footer and CTA links are `next/link` to `/#id`, so they work from any page. The Next router scrolls to the matching `id`, and `html { scroll-behavior: smooth }` in `styles/globals.css` animates it. Next 12 `Link` requires a child `<a>`.
- Images use `next/future/image` (Next 12 experimental flag in `next.config.js`). Always give meaningful `alt` text.
- Third-party scripts go in `pages/_app.tsx` via `next/script`, never raw `<script>`.
- Contact form: `components/ContactSection.tsx` → `POST /api/contact` (`pages/api/contact.ts`) → Resend REST API via `fetch`, sending to hello@crossroadscx.com with `reply_to` set to the visitor. It has a `company` honeypot field. The UI must only show success after a 2xx response. The previous Brevo integration failed silently for over a year, so never let failures be swallowed.
- The site began as a TailGrids template. `BrandsSection`, `PricingSection`, `VideoSection`, `CallToActionSection` and `TestimonialsSection` are unused template leftovers (lorem ipsum and placeholder brands). Don't render them without real content.

## Content facts (must stay accurate)
- Team: **Chris Birk** (CEO / Co-Founder) and **Mario Medina** (Developer). No one else.
- Location: **Chicago, IL** only.
- Contact: hello@crossroadscx.com. No phone number is published.
- Offerings: practical AI and automation (assistants, agents, workflow automation, evaluation and guardrails), data and analytics (pipelines, models, dashboards), systems integration (CRM, e-commerce, membership, APIs), and custom web software. Engagements are hourly, project or retainer, either augmenting a team or fully outsourced. **No general IT support.**
- Don't name clients without Chris's explicit OK.
- Industries served: manufacturing, restaurants, non-profits, e-commerce, finance, government, legal, logistics.
- Featured tools (toolset row): Claude, OpenAI, Google ADK, React, Google Cloud, Snowflake, Tableau, GraphQL, Next.js.
- No blog. The old Medium blog is inactive and isn't linked.

## Voice
Plain-spoken, warm, a little wry. "We're also human beings." No sales jargon, no AI hype, no buzzword stacks. Short sentences. Write from the client's pain point first (the persona quotes in `ServicesSection`), then what we do about it.

## Subagents (`.claude/agents/`)
- `content-editor`: drafts and reviews site copy against the facts and voice above.
- `code-reviewer`: reviews diffs for this stack (Next 12, pnpm, Tailwind, API route safety).
- `seo-a11y-auditor`: meta tags, alt text, headings, anchors, accessibility.
