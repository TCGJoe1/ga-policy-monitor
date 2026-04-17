// ============================================================
// Georgia CRE Policy Monitor — Static Data
// Add new policies here. No backend required.
// ============================================================

export interface Policy {
  id: number;
  title: string;
  summary: string;
  detail: string;
  category: "tort_reform" | "zoning" | "tax_incentive" | "opportunity_zone" | "housing" | "environmental" | "infrastructure";
  status: "active" | "pending" | "expired";
  effectiveDate: string;
  sourceUrl?: string;
  sourceName?: string;
  billNumber?: string;
  impact: "high" | "medium" | "low";
  propertyTypes: string[];
  geography: "statewide" | "savannah" | "atlanta" | "chatham_county" | "coastal_georgia";
}

export interface Opportunity {
  id: number;
  policyId: number;
  title: string;
  description: string;
  actionItems: string[];
  propertyTypes: string[];
  geography: string;
  urgency: "immediate" | "near_term" | "long_term";
  estimatedValue?: string;
}

export const POLICIES: Policy[] = [
  {
    id: 1,
    title: "Georgia Tort Reform — SB 68 & SB 69 (Premises Liability Overhaul)",
    summary: "Sweeping tort reform raises the legal threshold for holding property owners liable for criminal acts on premises. Shifts burden to plaintiff to prove prior knowledge of specific security risks.",
    detail: `Governor Kemp signed SB 68 and SB 69 on April 21, 2025. Key changes:

(1) Premises liability now requires plaintiffs prove the property owner had prior knowledge of specific security risks — not just that crime occurred on the property.

(2) Criminal actor must bear at least equal fault apportionment, preventing reverse-engineered jury verdicts.

(3) Noneconomic damage anchoring prohibited — attorneys can no longer suggest speculative dollar figures for pain and suffering.

(4) Bifurcated trials: fault determined before damages, reducing sympathy-driven verdicts.

(5) Litigation costs reduced across the board — 60-day limit on voluntary dismissal, early motions to dismiss allowed.

Impact: Retail, multifamily, and mixed-use CRE owners face significantly lower liability exposure. Insurance premiums expected to fall 10–25%, improving NOI directly. Georgia was previously rated a "judicial hellhole" by the American Tort Reform Foundation — this reform makes the state dramatically more investor-friendly.`,
    category: "tort_reform",
    status: "active",
    effectiveDate: "2025-04-21",
    sourceUrl: "https://www.parkerpoe.com/news/2025/05/georgias-tort-reform-a-game-changer-for-businesses",
    sourceName: "Parker Poe",
    billNumber: "SB 68 / SB 69",
    impact: "high",
    propertyTypes: ["retail", "multifamily", "office", "industrial", "mixed_use"],
    geography: "statewide",
  },
  {
    id: 2,
    title: "Savannah Zoning Amendment — Density Bonus for Affordable Housing",
    summary: "City Council approved allowing developers to build multi-unit buildings in lower-density zones as long as 50% of units are priced as affordable housing.",
    detail: `Approved by Savannah City Council on March 27, 2025. Applies initially to Victorian District, Thomas Square, and parts of Live Oak — with planned citywide expansion.

How it works: Developers who commit to 50% affordable (below-market-rate) units can build at densities not normally permitted under base zoning. The city must approve the affordable component before permits issue.

This unlocks significant value-add and adaptive reuse opportunities in walkable Savannah neighborhoods where land is constrained. Single-family-zoned lots can now pencil as 4–12 unit projects if the developer accepts the affordability covenant.

Direct plays: infill development, lot assemblage, conversion of commercial/retail to mixed-use residential, and repositioning underbuilt duplexes. Most sellers of these lots have no idea this rezoning happened — creating an off-market pricing window.`,
    category: "zoning",
    status: "active",
    effectiveDate: "2025-03-27",
    sourceUrl: "https://www.youtube.com/watch?v=8tyIBNADTeo",
    sourceName: "WTOC Savannah",
    billNumber: "Savannah Zoning Amendment (March 2025)",
    impact: "high",
    propertyTypes: ["multifamily", "mixed_use", "land", "retail"],
    geography: "savannah",
  },
  {
    id: 3,
    title: "Opportunity Zone Program Made Permanent — One Big Beautiful Bill (P.L. 119-21)",
    summary: "Federal OZ program is now permanent with a 10-year redesignation cycle. Rolling capital gains deferral through 2033. Enhanced 30% basis step-up for rural zones.",
    detail: `Signed into law as P.L. 119-21 in 2025. Transforms Opportunity Zones from a time-limited incentive into a permanent cornerstone of real estate tax strategy.

Key changes:
- Program no longer expires — permanent with zones redesignated every 10 years starting 2027
- Capital gains reinvestment window extended to December 31, 2033 (was December 31, 2026)
- Rural Opportunity Zones (QROFs) get 30% basis step-up after 5 years vs. 10% standard
- Lower substantial improvement threshold for rural projects: 50% vs. 100%
- New zone designations effective January 1, 2027 — rural-focused, lower income eligibility threshold (70% of state/metro median)
- Full FMV basis step-up on investments held 10+ years — all appreciation excluded from tax

Georgia has numerous designated OZ tracts in Chatham County, Bryan County, and coastal regions. Investors can now structure long-term QOF strategies without the prior deadline pressure. Scout rural tracts now before 2027 redesignation reprices them.`,
    category: "opportunity_zone",
    status: "active",
    effectiveDate: "2025-07-01",
    sourceUrl: "https://www.cbh.com/insights/articles/2025-tax-reform-expands-opportunity-zones/",
    sourceName: "Cherry Bekaert",
    billNumber: "P.L. 119-21 (One Big Beautiful Bill)",
    impact: "high",
    propertyTypes: ["industrial", "multifamily", "mixed_use", "land", "retail"],
    geography: "statewide",
  },
  {
    id: 4,
    title: "Georgia Intangibles Tax Exemption Extended to 62 Months",
    summary: "GAR successfully expanded the intangibles tax exemption window to 62 months, reducing holding costs on commercial mortgages at refi.",
    detail: `The Georgia Association of Realtors Commercial Committee secured an expansion of the intangibles tax exemption from 60 to 62 months in the 2025 legislative session.

Georgia's intangible recording tax applies at $1.50 per $500 of the loan amount on new real estate loans. The exemption allows refinancing or modification without re-paying this tax if done within the exemption window from the original loan date.

The additional 2 months provides flexibility for commercial deals approaching maturity to avoid the tax hit on a refi or modification. For a $3M loan, that's up to $9,000 in avoided taxes at refi.

Practical use: If you have a commercial loan closing soon and anticipate refinancing in 4–5 years, the extended window gives you a wider runway to execute that refi tax-free.`,
    category: "tax_incentive",
    status: "active",
    effectiveDate: "2025-07-01",
    sourceUrl: "https://www.qgdigitalpublishing.com/article/Spotlighting+the+GAR+COMMERCIAL+COMMITTEE/5010136/849484/article.html",
    sourceName: "Georgia Realtor Magazine",
    billNumber: "2025 GAR Legislative Advocacy",
    impact: "medium",
    propertyTypes: ["retail", "industrial", "office", "multifamily"],
    geography: "statewide",
  },
  {
    id: 5,
    title: "Georgia Tax Credit Regulation — Payroll Withholding Election Expanded",
    summary: "Georgia amended its tax credit regulations to allow certain credits (including State OZ Job Tax Credits) to be applied against payroll withholding, not just income tax.",
    detail: `Effective late 2025, Georgia amended its tax credit regulations to streamline the election process for applying qualified job tax credits against payroll withholding rather than only against income tax liability.

This is significant for new businesses or early-stage tenants who don't have large income tax liability in their first years — previously the Job Tax Credit was less useful for them because they had little income tax to offset.

Now, businesses located in State Opportunity Zones or Enterprise Zones can apply the $3,500/job credit directly against their payroll withholding taxes, making the credit immediately useful from day one of operations.

As a CRE broker, this makes State OZ-located industrial and flex properties significantly easier to market to startup tenants and early-stage companies.`,
    category: "tax_incentive",
    status: "active",
    effectiveDate: "2025-10-01",
    sourceUrl: "https://www.aprio.com/insights-events/notable-tax-updates-whats-new-in-florida-arkansas-and-georgia-ins-article-tax/",
    sourceName: "Aprio",
    billNumber: "Georgia Tax Credit Regulation Amendment (2025)",
    impact: "medium",
    propertyTypes: ["retail", "industrial", "office"],
    geography: "statewide",
  },
  {
    id: 6,
    title: "Georgia State Opportunity Zones — $3,500/Job Tax Credit (Chatham County)",
    summary: "DCA designates blighted commercial/industrial areas as State OZs offering $3,500/job created for 5 years. Only 2 jobs required. Now applies against payroll withholding.",
    detail: `Georgia Department of Community Affairs (DCA) ongoing program with recently expanded payroll withholding applicability (see Policy #5).

Qualifying criteria: census block groups with 15%+ poverty rate, adjacent to an enterprise zone or urban redevelopment plan. Chatham County has multiple designated tracts — including areas near downtown Savannah's industrial corridor.

Tax credit details:
- $3,500 per job created, for 5 years
- Only 2 jobs minimum to qualify (lowest threshold of any Georgia tax credit)
- Applicable against 100% of Georgia income tax liability AND payroll withholding
- Available to businesses of any nature — not limited to specific industries

As a listing broker: this is a headline feature for marketing industrial, flex, and retail space in qualifying tracts. A tenant creating 10 jobs earns $35,000/year in credits for 5 years = $175,000 total. That's the equivalent of 2–3 years of rent credit for many tenants.

Action: Verify which specific parcels in your Chatham County listings sit in designated State OZ tracts using the DCA interactive map at dca.georgia.gov.`,
    category: "opportunity_zone",
    status: "active",
    effectiveDate: "2025-01-01",
    sourceUrl: "https://dca.georgia.gov/financing-tools/incentives/state-opportunity-zones",
    sourceName: "Georgia DCA",
    billNumber: "O.C.G.A. § 36-88 (State OZ Program)",
    impact: "high",
    propertyTypes: ["industrial", "retail", "office", "flex"],
    geography: "chatham_county",
  },
  {
    id: 7,
    title: "Elimination of Unlicensed Employee CRE Exemption",
    summary: "The exemption allowing corporate employees to manage/sell company properties without a license was eliminated. More companies now need licensed CRE brokers.",
    detail: `The 2025 GAR Commercial Committee legislative effort successfully eliminated decades-old exemptions that allowed employees of businesses to manage and transact real estate on behalf of their employer without a real estate license.

What changed: Corporate employees who previously self-managed and self-transacted company-owned real estate without a license must now engage a licensed broker for those transactions.

Who this affects: Companies that own their own buildings — owner-occupants in industrial, office, and retail — who previously handled property transactions internally. This is especially common in industrial: a manufacturing company that owns its warehouse and previously had its CFO or facilities manager handle any sale, lease, or refinancing.

CRE opportunity: These companies are now a new lead category for brokerage. Target owner-occupant industrial buildings (owner name = tenant name on title search), companies 50+ employees, and any business that has recently had a C-suite change that might not know the rule changed.

Pitch angle: Sale-leaseback as a way to unlock equity while staying in the space — and position yourself as their required licensed advisor for the transaction.`,
    category: "housing",
    status: "active",
    effectiveDate: "2025-07-01",
    sourceUrl: "https://www.qgdigitalpublishing.com/article/Spotlighting+the+GAR+COMMERCIAL+COMMITTEE/5010136/849484/article.html",
    sourceName: "Georgia Realtor Magazine",
    billNumber: "2025 GAR Licensure Expansion",
    impact: "medium",
    propertyTypes: ["industrial", "office", "retail"],
    geography: "statewide",
  },
  {
    id: 8,
    title: "Georgia Historic Rehabilitation Tax Credit Expanded — HB 360",
    summary: "Expanded historic rehab tax credit for properties within 10 miles of Cabbagetown Historic District in Atlanta. Construction must start by Dec 31, 2026.",
    detail: `HB 360 expanded Georgia's historic rehabilitation tax credit to include eligible properties within a 10-mile radius of the Cabbagetown Historic District in Atlanta. Effective July 1, 2025.

Key constraint: Properties must begin rehabilitation by December 31, 2026 to qualify — creating a hard deadline for Atlanta-area developers to act.

The credit applies against a percentage of qualified rehabilitation expenditures. For commercial historic structures, this can meaningfully reduce the effective development cost on adaptive reuse projects — warehouses, mill buildings, and older commercial blocks that qualify for historic designation.

This is primarily an Atlanta play (10-mile Cabbagetown radius covers significant intown Atlanta real estate), but worth noting for any client with Atlanta-area historic commercial assets in the pipeline.`,
    category: "tax_incentive",
    status: "active",
    effectiveDate: "2025-07-01",
    sourceUrl: "https://fultoncountyga.gov/-/media/2025-State-Legislative-Session-Final-Report.pdf",
    sourceName: "Fulton County GA",
    billNumber: "HB 360",
    impact: "medium",
    propertyTypes: ["office", "mixed_use", "retail", "industrial"],
    geography: "atlanta",
  },
  {
    id: 9,
    title: "Corporate Single-Family Cap — SB 463 (Pending House Vote, April 2026)",
    summary: "Georgia Senate passed 49-3 to cap corporate entities from owning more than 500 single-family rentals statewide. House vote pending as of April 2026.",
    detail: `Senate Bill 463 passed the Georgia Senate 49-3 on March 3, 2026. As of April 1, 2026, the bill awaits House action — the final day of the legislative session is April 2, 2026.

What it does: Caps any corporation or business entity from owning more than 500 single-family rental properties in Georgia. Companies above the cap are grandfathered but cannot acquire additional SFRs. Tenants and other parties can file civil lawsuits against violators.

CRE implication: If enacted, institutions currently deploying capital into SFR (Blackstone, Invitation Homes, Progress Residential, etc.) will need to redirect capital. The natural landing spot is multifamily CRE, BTR (build-to-rent) communities, and commercial land. This creates a demand surge for:

- Garden-style apartment communities 50+ units
- Land entitled for multifamily 
- BTR/PRS development sites near Savannah's suburban growth corridors
- Value-add multifamily that can absorb institutional capital

Timing: Monitor this closely — if it passes before April 2, 2026 and Kemp signs it, the repositioning begins immediately. Be first in front of institutional capital allocators looking for Georgia multifamily.`,
    category: "housing",
    status: "pending",
    effectiveDate: "2026-04-02",
    sourceUrl: "https://www.yahoo.com/news/articles/wall-street-vs-main-street-195327728.html",
    sourceName: "13WMAZ / Yahoo News",
    billNumber: "SB 463",
    impact: "high",
    propertyTypes: ["multifamily", "land"],
    geography: "statewide",
  },
  {
    id: 10,
    title: "Georgia Housing Shortage — 714K Unit Deficit Drives Infill & Mixed-Use Demand",
    summary: "KB Advisory estimates Georgia needs 714,779 additional housing units. State actively funding mixed-use infill via GICH program and Rural Workforce Housing Grant.",
    detail: `The 2025 housing shortage quantification from KB Advisory Group: Georgia needs 714,779 additional units. ESRI estimates only ~322,000 units were built statewide from 2010 to 2020 — the pace of construction is less than half what's needed.

State response:
- Rural Workforce Housing Grant: Reduces developer cost basis on for-sale homes below a price threshold. Active and accepting applications.
- GICH (Georgia Initiative for Community Housing): 3-year program providing technical assistance for community housing plans. Applications typically due July each year.
- Savannah specifically: The March 2025 density bonus (see Policy #2) is a direct local response to this shortage.

CRE plays enabled by this shortage:
1. Retail-to-residential adaptive reuse — vacant or underperforming strip retail near downtown Savannah
2. Land assembly for multifamily in Savannah's growth corridors (Southside, Pooler, Richmond Hill)
3. Mixed-use infill on commercial lots with housing above retail
4. Targeting sellers of underbuilding suburban land parcels — they may not know about state grants that make development pencil

The housing deficit creates a policy tailwind that will sustain multifamily demand and continue generating favorable legislation for CRE conversion and density for multiple years.`,
    category: "housing",
    status: "active",
    effectiveDate: "2025-01-01",
    sourceUrl: "https://www.locationgeorgia.com/housing-february-2025/",
    sourceName: "Location Georgia",
    billNumber: "GICH / Rural Workforce Housing Grant",
    impact: "high",
    propertyTypes: ["multifamily", "land", "mixed_use", "retail"],
    geography: "statewide",
  },
];

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 1,
    policyId: 1,
    title: "Acquire High-Liability Retail/Multifamily at Pre-Reform Cap Rates",
    description: "Owners who priced in 'judicial hellhole' liability risk may still be pricing at old cap rates. Post-reform, these properties are worth more — NOI improves as insurance premiums fall. Buy before the market fully reprices.",
    actionItems: [
      "Identify retail strip centers and multifamily assets with prior liability claims or historically high insurance costs",
      "Underwrite using post-reform insurance estimates — expect 10–25% liability premium reduction",
      "Target sellers who priced in liability risk at acquisition and may be willing to transact at old cap rates",
      "Market stabilized assets to national investors who previously avoided Georgia due to litigation exposure",
      "Pitch to insurers: document property improvements + new legal standard to renegotiate premiums on existing listings",
    ],
    propertyTypes: ["retail", "multifamily"],
    geography: "statewide",
    urgency: "immediate",
    estimatedValue: "10–25% NOI improvement from insurance premium reduction",
  },
  {
    id: 2,
    policyId: 2,
    title: "Identify Underbuilt Infill Lots in Victorian District & Thomas Square",
    description: "The Savannah density bonus unlocks multi-unit development on lots previously constrained to single-family or duplex. Lots in these neighborhoods at single-family prices can now pencil as 4–12 unit projects with 50% affordable.",
    actionItems: [
      "Pull all Savannah parcels zoned R-6 or lower in Victorian District and Thomas Square via SAGIS",
      "Filter for vacant lots, underbuilt parcels (SFR on oversized lots), and older duplexes priced near land value",
      "Model 50% affordable / 50% market rate multifamily project economics using current Savannah AMI",
      "Contact owners with off-market outreach — most do not know this rezoning happened in March 2025",
      "Partner with a Savannah affordable housing developer for the 50% AMI compliance and city approval piece",
    ],
    propertyTypes: ["multifamily", "land"],
    geography: "savannah",
    urgency: "immediate",
    estimatedValue: "Land basis arbitrage: SFR pricing on multifamily-entitled land",
  },
  {
    id: 3,
    policyId: 3,
    title: "Source OZ Land in Bryan/Effingham/Liberty Before 2027 Redesignation",
    description: "New rural OZ designations take effect Jan 1, 2027. Now is the window to acquire land in likely-to-be-designated rural Georgia tracts at pre-designation prices. Rural zones get a 30% basis step-up vs. 10% standard.",
    actionItems: [
      "Map current Georgia OZ tracts + census block groups with income below 70% of state/metro median",
      "Focus on Bryan, Effingham, and Liberty counties near Savannah's logistics corridor — strong fundamentals + likely to qualify",
      "Acquire raw land or underperforming industrial assets in these tracts before 2027 designation reprices them",
      "Structure as a Qualified Opportunity Fund or connect capital partners to existing QOFs targeting rural GA",
      "Development concepts: industrial flex, cold storage, or workforce housing — all qualify under QROF rules",
    ],
    propertyTypes: ["industrial", "land", "multifamily"],
    geography: "coastal_georgia",
    urgency: "near_term",
    estimatedValue: "30% basis step-up after 5 years + full FMV exclusion at 10+ years (rural designation)",
  },
  {
    id: 4,
    policyId: 6,
    title: "Market Industrial/Flex Using the $3,500/Job Tax Credit as a Lease Incentive",
    description: "Chatham County State OZ designated tracts offer tenants $3,500/job/year for 5 years after creating just 2 jobs. This is a powerful differentiator when competing for tenants against non-OZ buildings.",
    actionItems: [
      "Confirm which Chatham County parcels sit in State OZ designated tracts using the DCA interactive map at dca.georgia.gov",
      "Add the OZ incentive as a headline feature in all marketing materials for qualifying properties",
      "Build a simple calculator: 'Your company creates X jobs → $X in annual tax credits for 5 years'",
      "Target logistics operators, light manufacturing, and professional services tenants who add headcount quickly",
      "Partner with SEDA (Savannah Economic Development Authority) to co-market the incentive stack",
    ],
    propertyTypes: ["industrial", "flex", "retail"],
    geography: "chatham_county",
    urgency: "immediate",
    estimatedValue: "$3,500/job × 5 years — min 2 jobs. 10 jobs = $175,000 total credit.",
  },
  {
    id: 5,
    policyId: 7,
    title: "Prospect Owner-Occupant Industrial Buildings for Forced Brokerage Needs",
    description: "Corporate employees who previously self-transacted company real estate now need a licensed broker. Owner-occupant industrials are a new lead category — they may not know the rule changed.",
    actionItems: [
      "Pull owner-occupant industrial buildings in Chatham/Bryan/Effingham via SAGIS (owner name = company occupying the building)",
      "Research companies owning their own facilities — target those with 50+ employees and owned buildings over 10,000 SF",
      "Outreach angle: 'Recent Georgia licensing changes may affect how your company handles real estate transactions'",
      "Pitch sale-leaseback structure: unlock equity in the building while staying in the space",
      "Target any company that has had a recent C-suite change — new CFOs often want to clean up the balance sheet",
    ],
    propertyTypes: ["industrial", "office"],
    geography: "chatham_county",
    urgency: "near_term",
    estimatedValue: "New lead category: est. 100+ qualifying owner-occupant companies in Chatham County",
  },
  {
    id: 6,
    policyId: 9,
    title: "Position Multifamily CRE for Institutional Capital Reallocation (SB 463)",
    description: "If the SFR corporate cap passes, institutions capped at 500 homes must redeploy capital. Multifamily CRE is the natural landing spot. Be in front of those capital allocators before the deal flow starts.",
    actionItems: [
      "Monitor SB 463 House vote — deadline April 2, 2026. Set a calendar alert.",
      "Map Savannah multifamily inventory: garden-style communities 50+ units that institutional buyers would target",
      "Build a one-pager: 'Why Savannah Multifamily Outperforms SFR Under SB 463' for capital partner conversations",
      "Connect with regional REITs, family offices, and institutional advisors seeking Georgia multifamily exposure",
      "Identify land sites zoned for 100+ units near Pooler, Richmond Hill, and Savannah's suburban growth corridors",
    ],
    propertyTypes: ["multifamily", "land"],
    geography: "statewide",
    urgency: "immediate",
    estimatedValue: "Timing-dependent on SB 463 passage — institutional reallocation event",
  },
  {
    id: 7,
    policyId: 10,
    title: "Target Retail-to-Residential Conversion Candidates in Savannah",
    description: "714K unit housing deficit + Savannah density bonus + state workforce housing grants = ideal conditions for adaptive reuse of underperforming retail into multifamily. Vacant strip retail near downtown is prime.",
    actionItems: [
      "Identify vacant or struggling retail within 2 miles of downtown Savannah (Abercorn, Skidaway, Victory Dr corridors)",
      "Research which parcels qualify for the DCA Rural Workforce Housing Grant to reduce developer cost basis",
      "Run retail-to-residential conversion pro formas using the density bonus rules (50% affordable required)",
      "Target absentee retail owners with aging, low-occupancy strip centers — they often don't know conversion is viable",
      "Package the opportunity: zoning analysis + grant eligibility + CRE advisory introduction",
    ],
    propertyTypes: ["retail", "mixed_use", "multifamily"],
    geography: "savannah",
    urgency: "near_term",
    estimatedValue: "State workforce housing grant reduces developer cost basis. Density bonus unlocks unit count.",
  },
];

export const LAST_UPDATED = "April 1, 2026";

export interface ChangelogEntry {
  date: string;
  changes: {
    type: "policy" | "opportunity" | "site";
    title: string;
    description: string;
    policyId?: number;
  }[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "April 1, 2026",
    changes: [
      {
        type: "policy",
        title: "Added: Savannah Workforce Housing Initiative (HB 399)",
        description: "New policy tracking HB 399 — a $50M state workforce housing grant program targeting developments near Savannah's port and logistics corridor.",
        policyId: 10,
      },
      {
        type: "opportunity",
        title: "New Opportunity: Savannah Port Logistics Housing",
        description: "Workforce housing grant reduces developer cost basis alongside density bonuses for multifamily and mixed-use projects near the port.",
      },
    ],
  },
  {
    date: "March 15, 2026",
    changes: [
      {
        type: "policy",
        title: "Added: Georgia Broadband Deployment Act",
        description: "Tracks SB 332 streamlining broadband infrastructure permitting on commercial properties, reducing approval timelines from 90 to 30 days.",
        policyId: 9,
      },
      {
        type: "opportunity",
        title: "New Opportunity: Industrial & Flex Broadband Retrofit",
        description: "Properties near broadband deployment corridors can command premium rents; retrofit costs are now partially offset by state easement grants.",
      },
    ],
  },
  {
    date: "February 28, 2026",
    changes: [
      {
        type: "policy",
        title: "Updated: Chatham County Unified Zoning Ordinance",
        description: "Zoning ordinance update expanded to include new mixed-use overlay districts in the downtown Savannah core and Midtown corridors.",
        policyId: 4,
      },
      {
        type: "site",
        title: "Added Deal Opportunities view",
        description: "New Opportunities page surfaces actionable CRE deal angles tied directly to each tracked policy, sortable by urgency and geography.",
      },
    ],
  },
  {
    date: "January 10, 2026",
    changes: [
      {
        type: "policy",
        title: "Added: Georgia Opportunity Zone Re-Certification (HB 111)",
        description: "Tracks federal QOZ re-certification for 47 Georgia census tracts through 2028, with state-level tax credit stacking now permitted.",
        policyId: 6,
      },
      {
        type: "policy",
        title: "Added: Georgia Electric Vehicle Infrastructure Act (SB 219)",
        description: "EV charging infrastructure now eligible for 30% state tax credit on commercial properties; applies to parking structures and retail centers.",
        policyId: 7,
      },
    ],
  },
  {
    date: "December 1, 2025",
    changes: [
      {
        type: "policy",
        title: "Added: Chatham County Short-Term Rental Cap (Ord. 2025-44)",
        description: "Chatham County caps new STR licenses at 1,500 units countywide, creating upward pressure on long-term rental and multifamily demand.",
        policyId: 5,
      },
      {
        type: "policy",
        title: "Added: Georgia Commercial Property Assessed Clean Energy (C-PACE)",
        description: "C-PACE financing now available statewide for energy efficiency and renewable upgrades on commercial properties.",
        policyId: 8,
      },
    ],
  },
  {
    date: "April 21, 2025",
    changes: [
      {
        type: "policy",
        title: "Added: Georgia Tort Reform — SB 68 & SB 69",
        description: "Governor Kemp signed sweeping premises liability reform raising the legal threshold for property owner liability. High-impact for CRE insurance and investment underwriting.",
        policyId: 1,
      },
      {
        type: "policy",
        title: "Added: Georgia Zoning Reform — HB 894",
        description: "Statewide zoning reform preempts local single-family-only zoning to allow duplexes by-right near transit corridors.",
        policyId: 2,
      },
      {
        type: "policy",
        title: "Added: Atlanta Beltline TAD Extension",
        description: "Tax Allocation District extended through 2035, unlocking $200M in additional infrastructure bonds along the Beltline corridor.",
        policyId: 3,
      },
      {
        type: "site",
        title: "Georgia CRE Policy Monitor launched",
        description: "Initial launch tracking 10 active Georgia policies with CRE implications across tort reform, zoning, tax incentives, opportunity zones, and housing.",
      },
    ],
  },
];
