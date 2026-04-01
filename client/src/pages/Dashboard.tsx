import { useState } from "react";
import { Link } from "wouter";
import { POLICIES, OPPORTUNITIES, LAST_UPDATED } from "../data";
import Sidebar from "@/components/Sidebar";
import { AlertTriangle, TrendingUp, FileText, Search, MapPin, Calendar, ExternalLink, ArrowRight } from "lucide-react";

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

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const highImpact = POLICIES.filter(p => p.impact === "high").length;

  const filtered = POLICIES
    .filter(p => activeCategory === "all" || p.category === activeCategory)
    .filter(p => {
      if (!search) return true;
      const q = search.toLowerCase();
      return p.title.toLowerCase().includes(q)
        || p.summary.toLowerCase().includes(q)
        || (p.billNumber ?? "").toLowerCase().includes(q);
    })
    .sort((a, b) => {
      const order = { high: 0, medium: 1, low: 2 };
      const ia = order[a.impact] ?? 3, ib = order[b.impact] ?? 3;
      if (ia !== ib) return ia - ib;
      return new Date(b.effectiveDate).getTime() - new Date(a.effectiveDate).getTime();
    });

  const fmt = (d: string) => {
    try { return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(d)); }
    catch { return d; }
  };

  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} lastUpdated={LAST_UPDATED}/>
      <main className="flex-1 overflow-y-auto overscroll-contain">
        {/* Header */}
        <div className="ga-header-bar sticky top-0 z-10 px-6 py-3.5 flex items-center justify-between">
          <div>
            <h1 className="text-sm font-semibold text-foreground">Georgia CRE Policy Monitor</h1>
            <p className="text-xs text-muted-foreground">Policy changes · last 12 months · updated weekly</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"/>Live
          </div>
        </div>

        <div className="p-5 space-y-5">
          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Active Policies",   val: POLICIES.length,     icon: FileText,     color: "text-sky-400" },
              { label: "High Impact",        val: highImpact,          icon: AlertTriangle, color: "text-orange-400" },
              { label: "Deal Angles",        val: OPPORTUNITIES.length, icon: TrendingUp,   color: "text-primary" },
            ].map(({ label, val, icon: Icon, color }) => (
              <div key={label} className="kpi-card border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">{label}</span>
                  <Icon size={14} className={color}/>
                </div>
                <div className={`text-2xl font-bold ${color}`}>{val}</div>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"/>
            <input
              type="text" placeholder="Search policies, bills, topics..."
              value={search} onChange={e => setSearch(e.target.value)}
              className="w-full bg-secondary border border-border rounded-md pl-8 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>

          {/* Policy list */}
          <div>
            <div className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {filtered.length} {activeCategory === "all" ? "policies" : CATEGORY_LABELS[activeCategory] ?? activeCategory} · last 12 months
            </div>
            <div className="space-y-3">
              {filtered.map(p => {
                const opp = OPPORTUNITIES.find(o => o.policyId === p.id);
                return (
                  <div key={p.id} className="policy-card border border-border rounded-lg p-4">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium cat-${p.category}`}>
                        {CATEGORY_LABELS[p.category] ?? p.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium impact-${p.impact}`}>
                        {p.impact.toUpperCase()} IMPACT
                      </span>
                      {p.status === "pending" && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/30">
                          PENDING
                        </span>
                      )}
                    </div>

                    <Link href={`/policy/${p.id}`}>
                      <a className="block">
                        <h3 className="text-sm font-semibold text-foreground leading-snug mb-1.5 hover:text-primary transition-colors">
                          {p.title}
                        </h3>
                      </a>
                    </Link>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">{p.summary}</p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar size={11}/>{fmt(p.effectiveDate)}</span>
                      <span className="flex items-center gap-1"><MapPin size={11}/>{GEO_LABELS[p.geography] ?? p.geography}</span>
                      {p.sourceName && (
                        <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="flex items-center gap-1 hover:text-primary transition-colors">
                          <ExternalLink size={11}/>{p.sourceName}
                        </a>
                      )}
                      {p.billNumber && <span className="text-muted-foreground/60">{p.billNumber}</span>}
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {p.propertyTypes.map(t => (
                        <span key={t} className="px-1.5 py-0.5 rounded text-xs bg-secondary text-muted-foreground">
                          {PROP_LABELS[t] ?? t}
                        </span>
                      ))}
                    </div>

                    <Link href={`/policy/${p.id}`}>
                      <a className="flex items-center gap-1 mt-3 text-xs text-primary/70 hover:text-primary transition-colors">
                        {opp ? `Deal angle: ${opp.title}` : "View details"} <ArrowRight size={11}/>
                      </a>
                    </Link>
                  </div>
                );
              })}
              {filtered.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
                  <FileText size={32} className="mb-3 opacity-30"/>
                  <p className="text-sm">No policies match your filter</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
