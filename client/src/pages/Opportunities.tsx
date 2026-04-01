import { useState } from "react";
import { Link } from "wouter";
import { OPPORTUNITIES, LAST_UPDATED } from "../data";
import Sidebar from "@/components/Sidebar";
import { Zap, CheckCircle2, MapPin, TrendingUp } from "lucide-react";

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
const URGENCY_ORDER = { immediate: 0, near_term: 1, long_term: 2 };

export default function Opportunities() {
  const [geo, setGeo] = useState("all");
  const [urgency, setUrgency] = useState("all");

  const filtered = OPPORTUNITIES
    .filter(o => geo === "all" || o.geography === geo || o.geography === "statewide")
    .filter(o => urgency === "all" || o.urgency === urgency)
    .sort((a, b) => (URGENCY_ORDER[a.urgency as keyof typeof URGENCY_ORDER] ?? 3) - (URGENCY_ORDER[b.urgency as keyof typeof URGENCY_ORDER] ?? 3));

  const sections = [
    { key: "immediate", label: "Act Now",   color: "text-orange-400", borderColor: "border-orange-500/30", opps: filtered.filter(o => o.urgency === "immediate") },
    { key: "near_term", label: "Near Term", color: "text-primary",     borderColor: "border-primary/30",   opps: filtered.filter(o => o.urgency === "near_term") },
    { key: "long_term", label: "Long Term", color: "text-emerald-400", borderColor: "border-emerald-500/30",opps: filtered.filter(o => o.urgency === "long_term") },
  ].filter(s => s.opps.length > 0);

  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <Sidebar activeCategory="all" onCategoryChange={() => {}} lastUpdated={LAST_UPDATED}/>
      <main className="flex-1 overflow-y-auto overscroll-contain">
        <div className="ga-header-bar sticky top-0 z-10 px-6 py-3.5">
          <h1 className="text-sm font-semibold text-foreground">Deal Opportunities</h1>
          <p className="text-xs text-muted-foreground">CRE angles sourced from Georgia policy changes</p>
        </div>

        <div className="p-5">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-5">
            <div className="flex gap-1">
              {["all","savannah","chatham_county","statewide"].map(g => (
                <button key={g} onClick={() => setGeo(g)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    geo === g ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}>
                  {g === "all" ? "All Areas" : GEO_LABELS[g] ?? g}
                </button>
              ))}
            </div>
            <div className="flex gap-1">
              {["all","immediate","near_term","long_term"].map(u => (
                <button key={u} onClick={() => setUrgency(u)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    urgency === u ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}>
                  {u === "all" ? "All Urgency" : URGENCY_LABELS[u] ?? u}
                </button>
              ))}
            </div>
          </div>

          {sections.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <Zap size={32} className="mb-3 opacity-30"/>
              <p className="text-sm">No opportunities match your filter</p>
            </div>
          )}

          <div className="space-y-8">
            {sections.map(({ key, label, color, borderColor, opps }) => (
              <div key={key}>
                <div className={`flex items-center gap-2 mb-3 pb-2 border-b ${borderColor}`}>
                  <Zap size={13} className={color}/>
                  <h2 className={`text-xs font-semibold uppercase tracking-wider ${color}`}>
                    {label} — {opps.length} {opps.length === 1 ? "opportunity" : "opportunities"}
                  </h2>
                </div>
                <div className="space-y-3">
                  {opps.map(opp => (
                    <div key={opp.id} className="policy-card border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-sm font-semibold text-foreground leading-snug">{opp.title}</h3>
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

                      <details className="group">
                        <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground flex items-center gap-1 list-none">
                          <span className="text-primary group-open:hidden">▶</span>
                          <span className="text-primary hidden group-open:inline">▼</span>
                          <span className="group-open:hidden">Show {opp.actionItems.length} action steps</span>
                          <span className="hidden group-open:inline">Hide action steps</span>
                        </summary>
                        <ul className="mt-2 space-y-1.5">
                          {opp.actionItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle2 size={12} className="text-primary/60 mt-0.5 shrink-0"/>{item}
                            </li>
                          ))}
                        </ul>
                      </details>

                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground/70">
                          <MapPin size={10}/>{GEO_LABELS[opp.geography] ?? opp.geography}
                        </span>
                        {opp.propertyTypes.map(t => (
                          <span key={t} className="px-1.5 py-0.5 rounded text-xs bg-secondary text-muted-foreground">
                            {PROP_LABELS[t] ?? t}
                          </span>
                        ))}
                        <Link href={`/policy/${opp.policyId}`}>
                          <a className="ml-auto text-xs text-primary/60 hover:text-primary transition-colors">
                            View policy →
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
