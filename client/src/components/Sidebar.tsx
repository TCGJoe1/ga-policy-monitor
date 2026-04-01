import { Link, useLocation } from "wouter";
import { LayoutDashboard, Zap } from "lucide-react";

const NAV = [
  { href: "/", label: "Policy Feed", icon: LayoutDashboard },
  { href: "/opportunities", label: "Opportunities", icon: Zap },
];

const CATEGORIES = [
  { key: "all",              label: "All Categories",   dot: "bg-muted-foreground/40" },
  { key: "tort_reform",      label: "Tort Reform",      dot: "bg-purple-500/70" },
  { key: "zoning",           label: "Zoning",           dot: "bg-sky-500/70" },
  { key: "tax_incentive",    label: "Tax Incentive",    dot: "bg-amber-500/70" },
  { key: "opportunity_zone", label: "Opportunity Zone", dot: "bg-emerald-500/70" },
  { key: "housing",          label: "Housing",          dot: "bg-orange-500/70" },
];

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  lastUpdated: string;
}

export default function Sidebar({ activeCategory, onCategoryChange, lastUpdated }: SidebarProps) {
  const [location] = useLocation();
  return (
    <aside className="w-56 shrink-0 h-dvh flex flex-col bg-card border-r border-border overflow-y-auto overscroll-contain">
      {/* Logo */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2.5">
          <svg aria-label="GA CRE Policy Monitor" viewBox="0 0 32 32" width="28" height="28" fill="none">
            <rect width="32" height="32" rx="6" fill="hsl(43 85% 52% / 0.15)"/>
            <path d="M8 23 L16 9 L24 23 Z" stroke="hsl(43 85% 52%)" strokeWidth="2" strokeLinejoin="round"/>
            <circle cx="16" cy="19" r="2.2" fill="hsl(43 85% 52%)"/>
          </svg>
          <div>
            <div className="text-xs font-semibold text-foreground leading-tight">GA Policy</div>
            <div className="text-xs text-muted-foreground leading-tight">CRE Monitor</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="p-2 space-y-0.5">
        {NAV.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href}>
            <a className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors cursor-pointer ${
              location === href
                ? "bg-primary/10 text-primary border-l-2 border-primary -ml-px pl-[11px]"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}>
              <Icon size={15}/>{label}
            </a>
          </Link>
        ))}
      </nav>

      {/* Category filter */}
      {location === "/" && (
        <div className="px-2 mt-4">
          <div className="px-3 mb-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Filter</div>
          <div className="space-y-0.5">
            {CATEGORIES.map(cat => (
              <button key={cat.key} onClick={() => onCategoryChange(cat.key)}
                className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-left transition-colors ${
                  activeCategory === cat.key
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}>
                <span className={`w-2 h-2 rounded-full ${cat.dot}`}/>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1"/>

      <div className="p-3 border-t border-border text-center">
        <p className="text-xs text-muted-foreground/60">Updated {lastUpdated}</p>
        <p className="text-xs text-muted-foreground/40 mt-0.5">Auto-refreshes weekly</p>
      </div>
    </aside>
  );
}
