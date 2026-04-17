import { Link } from "wouter";
import { CHANGELOG, LAST_UPDATED } from "../data";
import Sidebar from "@/components/Sidebar";
import { Sparkles, FileText, Zap, Monitor } from "lucide-react";

const TYPE_CONFIG = {
  policy: {
    label: "Policy",
    icon: FileText,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    dot: "bg-sky-400",
  },
  opportunity: {
    label: "Opportunity",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    dot: "bg-amber-400",
  },
  site: {
    label: "Site Update",
    icon: Monitor,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400",
  },
};

export default function WhatsNew() {
  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <Sidebar activeCategory="all" onCategoryChange={() => {}} lastUpdated={LAST_UPDATED} />
      <main className="flex-1 overflow-y-auto overscroll-contain">
        <div className="ga-header-bar sticky top-0 z-10 px-6 py-3.5">
          <h1 className="text-sm font-semibold text-foreground">What's New</h1>
          <p className="text-xs text-muted-foreground">Recent policy additions, updates, and site changes</p>
        </div>

        <div className="p-5 max-w-2xl">
          <div className="space-y-8">
            {CHANGELOG.map((entry, i) => (
              <div key={i} className="relative">
                {/* Date header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles size={13} className="text-primary/60" />
                    <span className="text-xs font-semibold text-foreground">{entry.date}</span>
                  </div>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Changes */}
                <div className="space-y-2.5 ml-4">
                  {entry.changes.map((change, j) => {
                    const cfg = TYPE_CONFIG[change.type];
                    const Icon = cfg.icon;
                    return (
                      <div
                        key={j}
                        className={`rounded-lg border ${cfg.border} ${cfg.bg} p-3.5`}
                      >
                        <div className="flex items-start gap-2.5">
                          <Icon size={14} className={`${cfg.color} mt-0.5 shrink-0`} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className={`text-xs font-medium ${cfg.color} uppercase tracking-wider`}>
                                {cfg.label}
                              </span>
                            </div>
                            <p className="text-sm font-medium text-foreground leading-snug mb-1">
                              {change.title}
                            </p>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {change.description}
                            </p>
                            {change.policyId && (
                              <Link href={`/policy/${change.policyId}`}>
                                <a className="inline-block mt-2 text-xs text-primary/60 hover:text-primary transition-colors">
                                  View policy →
                                </a>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
