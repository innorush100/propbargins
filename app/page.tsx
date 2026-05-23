"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { propFirms } from "@/data/propfirms";
import { PropFirm, FilterState } from "@/types/propfirm";

function RatingBar({ label, value, max = 100 }: { label: string; value: number; max?: number }) {
  const percentage = (value / max) * 100;
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 w-20 flex-shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-surface-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-amber-400 w-10 text-right">{value}%</span>
    </div>
  );
}

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="copy-btn bg-amber-500/20 hover:bg-amber-500 text-amber-400 hover:text-surface-950 px-2.5 py-1 rounded-lg text-xs font-bold font-mono transition-all duration-200 flex items-center gap-1"
    >
      {copied ? (
        <>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          COPIED
        </>
      ) : (
        <>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          COPY
        </>
      )}
    </button>
  );
}

function FirmCard({ firm }: { firm: PropFirm }) {
  return (
    <Link href={`/firm/${firm.slug}`}>
      <div className="firm-card bg-surface-800 border border-surface-700 rounded-xl p-4 hover:border-amber-500/40 group relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full" />
        
        <div className="flex items-start justify-between mb-3 relative">
          <div className="flex items-center gap-3">
            <img
              src={firm.logo}
              alt={firm.name}
              className="w-10 h-10 rounded-lg object-cover bg-surface-700 border border-surface-600"
            />
            <div>
              <h3 className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors">
                {firm.name}
              </h3>
              <p className="text-xs text-gray-500">Est. {firm.established}</p>
            </div>
          </div>
          <div className="text-right flex-shrink-0 ml-3">
            <div className="text-2xl font-extrabold text-gradient">{firm.overallScore}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">Overall</div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-3 line-clamp-2 leading-relaxed">{firm.description}</p>

        <div className="space-y-1 mb-3">
          <RatingBar label="Profit Split" value={firm.rating["Profit Split"]} />
          <RatingBar label="Payout Speed" value={firm.rating["Payout Speed"]} />
          <RatingBar label="Eval Cost" value={100 - firm.rating["Evaluation Cost"]} />
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-surface-700/50 rounded-lg p-2">
            <p className="text-xs text-gray-500 mb-0.5">Profit Split</p>
            <p className="font-bold text-amber-400 text-sm">{firm.rating["Profit Split"]}%</p>
          </div>
          <div className="bg-surface-700/50 rounded-lg p-2">
            <p className="text-xs text-gray-500 mb-0.5">Max Funding</p>
            <p className="font-bold text-white text-sm">{firm.maxFunding}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {firm.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-surface-700 text-gray-300 px-2 py-0.5 rounded-full border border-surface-600"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-surface-700/50">
          <div>
            {firm.promoCodes.length > 0 && (
              <span className="inline-flex items-center gap-1 text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/30">
                <span className="w-1 h-1 bg-amber-400 rounded-full" />
                {firm.promoCodes.length} promo{firm.promoCodes.length > 1 ? "s" : ""}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-400 group-hover:text-amber-400 transition-colors flex items-center gap-1">
            View
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

function FilterBar({
  filters,
  onChange,
}: {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <div className="flex-1 relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search firms..."
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          className="w-full bg-surface-800 border border-surface-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
        />
      </div>
      <div className="flex gap-2">
        <select
          value={filters.sortBy}
          onChange={(e) =>
            onChange({ ...filters, sortBy: e.target.value as FilterState["sortBy"] })
          }
          className="bg-surface-800 border border-surface-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all cursor-pointer"
        >
          <option value="overallScore">Score</option>
          <option value="profitSplit">Profit Split</option>
          <option value="evalCost">Eval Cost</option>
          <option value="payoutSpeed">Payout Speed</option>
        </select>
        <select
          value={filters.sortOrder}
          onChange={(e) =>
            onChange({ ...filters, sortOrder: e.target.value as FilterState["sortOrder"] })
          }
          className="bg-surface-800 border border-surface-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all cursor-pointer"
        >
          <option value="desc">High</option>
          <option value="asc">Low</option>
        </select>
      </div>
    </div>
  );
}

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    minProfitSplit: 0,
    maxDrawdown: 10,
    minPayoutSpeed: 0,
    sortBy: "overallScore",
    sortOrder: "desc",
  });

  const filteredFirms = useMemo(() => {
    let firms = [...propFirms];

    if (filters.search) {
      const search = filters.search.toLowerCase();
      firms = firms.filter(
        (f) =>
          f.name.toLowerCase().includes(search) ||
          f.description.toLowerCase().includes(search) ||
          f.features.some((feat) => feat.toLowerCase().includes(search))
      );
    }

    firms = firms.filter((f) => f.rating["Profit Split"] >= filters.minProfitSplit);

    firms.sort((a, b) => {
      let comparison = 0;
      switch (filters.sortBy) {
        case "overallScore":
          comparison = a.overallScore - b.overallScore;
          break;
        case "profitSplit":
          comparison = a.rating["Profit Split"] - b.rating["Profit Split"];
          break;
        case "evalCost":
          comparison = a.rating["Evaluation Cost"] - b.rating["Evaluation Cost"];
          break;
        case "payoutSpeed":
          comparison = a.rating["Payout Speed"] - b.rating["Payout Speed"];
          break;
      }
      return filters.sortOrder === "desc" ? -comparison : comparison;
    });

    return firms;
  }, [filters]);

  // Get top promos for above-fold display
  const topPromos = useMemo(() => {
    return propFirms
      .filter((f) => f.promoCodes.length > 0)
      .flatMap((firm) =>
        firm.promoCodes.map((promo) => ({ firm, promo }))
      )
      .slice(0, 3);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Compact Hero */}
      <section className="hero-bg relative pt-8 pb-6 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <svg className="w-5 h-5 text-surface-950" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h1 className="text-2xl font-extrabold">
                <span className="text-gradient">PropBargains</span>
              </h1>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/" className="text-amber-400 font-medium text-sm">Home</Link>
              <Link href="/blog" className="text-gray-400 hover:text-amber-400 font-medium text-sm transition-colors">Blog</Link>
            </nav>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-sm mb-4">
            Your one stop shop for Prop Traders — compare firms, find promo codes, maximize profits.
          </p>

          {/* Compact Search */}
          <div className="max-w-xl">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search prop firms..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full bg-surface-800/80 border border-surface-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/10 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promos - ABOVE FOLD, immediately visible */}
      <section className="px-4 pb-6 max-w-5xl mx-auto">
        <h2 className="text-sm font-bold mb-3 flex items-center gap-2">
          <span>🔥</span> 
          <span className="text-white">Active Promotions</span>
          <span className="text-gray-500 font-normal">— click code to copy</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {topPromos.map(({ firm, promo }) => (
            <Link key={`${firm.id}-${promo.code}`} href={`/firm/${firm.slug}`}>
              <div className="bg-surface-800 border border-surface-700 rounded-xl p-3 hover:border-amber-500/40 transition-all group flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src={firm.logo} alt={firm.name} className="w-8 h-8 rounded-lg object-cover bg-surface-700" />
                  <div>
                    <p className="font-semibold text-white text-xs">{firm.name}</p>
                    <p className="text-amber-400 font-mono font-bold text-xs">{promo.code}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-sm font-extrabold text-gradient">{promo.discount}</p>
                    <p className="text-xs text-gray-500">Exp: {promo.expiryDate}</p>
                  </div>
                  <CopyButton code={promo.code} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 max-w-5xl mx-auto mb-6">
        <div className="border-t border-surface-800" />
      </div>

      {/* Main Content - Firm Listings */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        {/* Filters - compact inline bar */}
        <FilterBar filters={filters} onChange={setFilters} />

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-400 text-sm">
            Showing <span className="text-white font-semibold">{filteredFirms.length}</span> firms
          </p>
          <p className="text-gray-500 text-xs">Sorted by {filters.sortBy.replace(/([A-Z])/g, ' $1').trim()}</p>
        </div>

        {/* Firm Grid - tighter cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFirms.map((firm) => (
            <FirmCard key={firm.id} firm={firm} />
          ))}
        </div>

        {filteredFirms.length === 0 && (
          <div className="text-center py-12 bg-surface-800/50 rounded-xl border border-surface-700">
            <p className="text-gray-400 mb-2">No firms match your search</p>
            <button
              onClick={() =>
                setFilters({
                  search: "",
                  minProfitSplit: 0,
                  maxDrawdown: 10,
                  minPayoutSpeed: 0,
                  sortBy: "overallScore",
                  sortOrder: "desc",
                })
              }
              className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Tiny Newsletter - inline single line */}
      <section className="px-4 pb-8 max-w-5xl mx-auto">
        <div className="bg-surface-800/50 border border-surface-700 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-3">
          <p className="text-gray-400 text-xs shrink-0">📬 Get weekly deals:</p>
          <form className="flex-1 flex gap-2 w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-surface-900 border border-surface-700 rounded-lg px-3 py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 text-surface-950 font-bold px-4 py-1.5 rounded-lg text-sm transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-800 py-6 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-surface-950" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="font-bold text-white text-sm">PropBargains</span>
        </div>
        <p className="text-gray-500 text-xs">
          © 2026 PropBargains — Your one stop shop for Prop Traders
        </p>
      </footer>
    </main>
  );
}