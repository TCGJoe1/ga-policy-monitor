import { useParams, Link } from "wouter";
import { POLICIES, OPPORTUNITIES } from "../data";
import { ArrowLeft, ExternalLink, MapPin, Calendar, CheckCircle2, Zap, TrendingUp } from "lucide-react";

const CATEGORY_LABELS: Record<string, string> = {
  tort_reform: "Tort Reform", zoning: "Zoning", tax_incentive: "Tax Incentive",
  opportunity_zone: "Opportunity Zone", housing: "Housing",
};
const GEO_LABELS: Record<string, string> = {
  statewide: "Statewide", savannah: "Savannah", atlanta: "Atlanta",
  chatham_county: "Chatham County", coastal_georgia: "Coastal Georgia",
};
const PROP_LABELS: Record<string, string> = {
  industrial: "Industrial", retail: "Retail", office: "Office",
  multifamily: "Multifamily", land: "Land", mixed_use: "Mixed-Use", flex: "Flex",
};
const URGENCY_LABELS: Record<string, string> = {
  immediate: "Act Now", near_term: "Near Term", long_term: "Long Term",
};

export default function PolicyDetail() {
  const { id } = useParams<{ id: string }>();
  const policy = POLICIES.find(p => p.id === Number(id));
  const opps = OPPORTUNITIES.filter(o => o.policyId === Number(id));

  if (!policy) {
    return (
      <div className="flex h-dvh overflow-hidden bg-background">
        <main className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
          <p className="text-sm">Policy not found.</p>
          <Link href="/">
            <a className="flex items-center gap-1.5 text-xs text-primary hover:underline">
              <ArrowLeft size={13}/> Back to feed
            </a>
          </Link>
        </main>
      </div>
    );
  }

  const fmt = (d: string) => {
    try { return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(d)); }
    catch { return d; }
  };

  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <main className="flex-1 overflow-y-auto overscroll-contain">
        <div className="ga-header-bar sticky top-0 z-10 px-6 py-3.5">
          <Link href="/">
            <a className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={13}/> Back to Feed
            </a>
          </Link>
        </div>

        <div className="p-6 max-w-3xl mx-auto pb-16">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium cat-${policy.category}`}>
              {CATEGORY_LABELS[policy.category] ?? policy.category}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium impact-${policy.impact}`}>
              {policy.impact.toUpperCase()} IMPACT
            </span>
            {policy.status === "pending" && (
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/30">
                PENDING PASSAGE
              </span>
            )}
          </div>

          <h1 className="text-lg font-bold text-foreground leading-snug mb-4">{policy.title}</h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-5 pb-5 border-b border-border">
            <span className="flex items-center gap-1.5"><Calendar size={12}/>Effective {fmt(policy.effectiveDate)}</span>
            <span className="flex items-center gap-1.5"><MapPin size={12}/>{GEO_LABELS[policy.geography] ?? policy.geography}</span>
            {policy.billNumber && <span className="text-muted-foreground/70">{policy.billNumber}</span>}
            {policy.sourceName && policy.sourceUrl && (
              <a href={policy.sourceUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors">
                <ExternalLink size={12}/>Source: {policy.sourceName}
              </a>
            )}
          </div>

          {/* Summary */}
          <div className="mb-5">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Summary</h2>
            <p className="text-sm text-foreground leading-relaxed">{policy.summary}</p>
          </div>

          {/* Detail */}
          <div className="mb-5">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Policy Detail</h2>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{policy.detail}</p>
          </div>

          {/* Asset classes */}
          {policy.propertyTypes.length > 0 && (
            <div className="mb-5">
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Affected Asset Classes</h2>
              <div className="flex flex-wrap gap-2">
                {policy.propertyTypes.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded text-xs bg-secondary text-foreground">
                    {PROP_LABELS[t] ?? t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Deal angles */}
          {opps.length > 0 && (
            <div>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Deal Angles ({opps.length})
              </h2>
              <div className="space-y-4">
                {opps.map(opp => (
                  <div key={opp.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <Zap size={14} className="text-primary shrink-0"/>
                        <h3 className="text-sm font-semibold text-foreground">{opp.title}</h3>
                      </div>
                      <span className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-medium urgency-${opp.urgency}`}>
                        {URGENCY_LABELS[opp.urgency] ?? opp.urgency}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{opp.description}</p>

                    {opp.estimatedValue && (
                      <div className="flex items-center gap-1.5 text-xs text-primary mb-3 bg-primary/5 border border-primary/20 rounded px-2.5 py-1.5">
                        <TrendingUp size={11}/>{opp.estimatedValue}
                      </div>
                    )}

                    <p className="text-xs font-medium text-muted-foreground mb-2">Action Plan:</p>
                    <ul className="space-y-1.5">
                      {opp.actionItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 size={12} className="text-primary/60 mt-0.5 shrink-0"/>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {opp.propertyTypes.map(t => (
                        <span key={t} className="px-1.5 py-0.5 rounded text-xs bg-secondary text-muted-foreground">
                          {PROP_LABELS[t] ?? t}
                        </span>
                      ))}
                      <span className="px-1.5 py-0.5 rounded text-xs bg-secondary text-muted-foreground">
                        {GEO_LABELS[opp.geography] ?? opp.geography}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
