# crossroadscx.com

Marketing site for [CrossroadsCX](https://crossroadscx.com). Built with Next.js 12, React 18, Tailwind CSS and TypeScript, and deployed on Vercel.

## Development

Requires Node 22+ and [pnpm](https://pnpm.io) (`corepack enable` will pick up the pinned version).

```bash
pnpm install
cp .env.example .env.local   # then fill in values
pnpm dev                     # http://localhost:3000
```

Before committing, run `pnpm typecheck`, `pnpm lint` and `pnpm build`.

## Environment variables

| Name | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Sending-only Resend API key used by the contact form (`pages/api/contact.ts`) |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (`G-…`). Analytics is disabled when unset |

## Deployment

Pushing to `main` deploys to production on Vercel (team `crossroadscx`, project `crossroadscx-nextjs`). Other branches get preview deployments.

See `CLAUDE.md` for architecture notes, content facts and voice guidelines.
