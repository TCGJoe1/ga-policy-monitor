# Georgia CRE Policy Monitor

A personal dashboard for tracking Georgia commercial real estate policy changes and the deal angles they create. Fully static — no server, no database, no API keys. Runs locally by opening `index.html` in a browser or deploy free to GitHub Pages.

## Run Locally (Fastest)

```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

## Build for Production / GitHub Pages

```bash
npm install
npx vite build --outDir dist/public
```
The `dist/public/` folder is your static site. Open `dist/public/index.html` directly in any browser — no server needed.

## Deploy to GitHub Pages (Free Hosting)

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source → GitHub Actions**
3. The `.github/workflows/deploy.yml` workflow deploys automatically on every push to `main`

Your site will be live at `https://yourusername.github.io/your-repo-name`

## Adding New Policies

All data lives in one file: `client/src/data.ts`

Add a new policy to the `POLICIES` array:

```ts
{
  id: 11,                          // next sequential ID
  title: "Your Policy Title",
  summary: "One-sentence summary for the feed card",
  detail: `Full detail text shown on the policy page.
           Can be multi-paragraph.`,
  category: "zoning",              // tort_reform | zoning | tax_incentive | opportunity_zone | housing
  status: "active",                // active | pending | expired
  effectiveDate: "2026-03-15",
  sourceUrl: "https://...",
  sourceName: "Source Name",
  billNumber: "HB 123",
  impact: "high",                  // high | medium | low
  propertyTypes: ["industrial", "retail"],
  geography: "savannah",           // statewide | savannah | atlanta | chatham_county | coastal_georgia
},
```

Then add a matching opportunity to `OPPORTUNITIES`:

```ts
{
  id: 8,
  policyId: 11,                    // must match policy id above
  title: "Deal angle title",
  description: "What the opportunity is and why it exists",
  actionItems: [
    "Step 1",
    "Step 2",
  ],
  propertyTypes: ["industrial"],
  geography: "savannah",
  urgency: "immediate",            // immediate | near_term | long_term
  estimatedValue: "Optional metric or value quantification",
},
```

Update the `LAST_UPDATED` date at the top of `data.ts`.

## Tech Stack

- React + TypeScript
- Vite (build tool)
- Tailwind CSS + shadcn/ui
- Wouter (hash-based routing — works without a server)
- Zero backend, zero database
