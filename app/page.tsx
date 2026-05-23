"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { propFirms } from "@/data/propfirms";
import { PropFirm, FilterState } from "@/types/propfirm";
import NewsletterSignup from "@/components/NewsletterSignup";

function RatingBar({ label, value, max = 100 }: { label: string; value: number; max?: number }) {
  const percentage = (value / max) * 100;
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-400 w-24 flex-shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-surface-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-amber-400 w-12 text-right">{value}{typeof value === 'number' && value <= 100 ? '%' : ''}</span>
    </div>
  );
}

function StarRating({ score, max = 10 }: { score: number; max?: number }) {
  const filled = Math.round((score / max) * 5);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= filled ? "text-amber-400" : "text-surface-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm text-gray-400">{score}/{max}</span>
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
      className="copy-btn bg-amber-500/20 hover:bg-amber-500 text-amber-400 hover:text-surface-950 px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all duration-200 flex items-center gap-1"
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          COPIED
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="firm-card bg-surface-800 border border-surface-700 rounded-2xl p-6 hover:border-amber-500/40 group relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full" />
        
        <div className="flex items-start justify-between mb-5 relative">
          <div className="flex items-center gap-4">
            <img
              src={firm.logo}
              alt={firm.name}
              className="w-14 h-14 rounded-xl object-cover bg-surface-700 border border-surface-600"
            />
            <div>
              <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                {firm.name}
              </h3>
              <p className="text-sm text-gray-500">Est. {firm.established}</p>
            </div>
          </div>
          <div className="text-right flex-shrink-0 ml-4">
            <div className="text-3xl font-extrabold text-gradient">{firm.overallScore}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">Overall</div>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-5 line-clamp-2 leading-relaxed">{firm.description}</p>

        {/* Rating Bars */}
        <div className="space-y-2 mb-5">
          <RatingBar label="Profit Split" value={firm.rating["Profit Split"]} />
          <RatingBar label="Payout Speed" value={firm.rating["Payout Speed"]} />
          <RatingBar label="Eval Cost" value={100 - firm.rating["Evaluation Cost"]} />
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-surface-700/50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Profit Split</p>
            <p className="font-bold text-amber-400">{firm.rating["Profit Split"]}%</p>
          </div>
          <div className="bg-surface-700/50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Max Funding</p>
            <p className="font-bold text-white">{firm.maxFunding}</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {firm.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-surface-700 text-gray-300 px-2.5 py-1 rounded-full border border-surface-600"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-surface-700/50">
          <div>
            {firm.promoCodes.length > 0 && (
              <span className="inline-flex items-center gap-1.5 text-xs bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded-full border border-amber-500/30">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                {firm.promoCodes.length} promo{firm.promoCodes.length > 1 ? "s" : ""} available
              </span>
            )}
          </div>
          <span className="text-sm text-gray-400 group-hover:text-amber-400 transition-colors flex items-center gap-1">
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className="bg-surface-800/80 border border-surface-700 backdrop-blur-sm rounded-2xl p-5 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search firms..."
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="w-full bg-surface-900 border border-surface-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onChange({ ...filters, sortBy: e.target.value as FilterState["sortBy"] })
            }
            className="bg-surface-900 border border-surface-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all cursor-pointer"
          >
            <option value="overallScore">Overall Score</option>
            <option value="profitSplit">Profit Split</option>
            <option value="evalCost">Eval Cost</option>
            <option value="payoutSpeed">Payout Speed</option>
          </select>
          <select
            value={filters.sortOrder}
            onChange={(e) =>
              onChange({ ...filters, sortOrder: e.target.value as FilterState["sortOrder"] })
            }
            className="bg-surface-900 border border-surface-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all cursor-pointer"
          >
            <option value="desc">Highest</option>
            <option value="asc">Lowest</option>
          </select>
        </div>
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

  const featuredPromo = useMemo(() => {
    const firmsWithPromos = propFirms.filter((f) => f.promoCodes.length > 0);
    if (firmsWithPromos.length === 0) return null;
    const firm = firmsWithPromos[0];
    return { firm, promo: firm.promoCodes[0] };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg relative pt-12 pb-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Logo & Brand */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                <svg className="w-8 h-8 text-surface-950" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold">
                <span className="text-gradient">PropBargains</span>
              </h1>
            </div>
            <div className="flex items-center justify-center gap-6 mb-6">
              <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                Blog
              </Link>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-3">
              Your one stop shop for Prop Traders
            </p>
            <p className="text-gray-500 max-w-xl mx-auto">
              Compare top prop trading firms, find exclusive promo codes, and maximize your trading profits with the best deals in the industry.
            </p>
          </div>

          {/* Featured Promo Banner */}
          {featuredPromo && (
            <div className="max-w-2xl mx-auto mb-10">
              <Link href={`/firm/${featuredPromo.firm.slug}`}>
                <div className="promo-card-glow bg-gradient-to-r from-amber-500/20 via-surface-800 to-surface-800 border border-amber-500/30 rounded-2xl p-5 hover:border-amber-500/50 transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-700">
                        <img src={featuredPromo.firm.logo} alt={featuredPromo.firm.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-xs text-amber-400 uppercase tracking-wider font-semibold mb-1">🔥 Featured Deal</p>
                        <p className="font-bold text-white text-lg">{featuredPromo.firm.name}</p>
                        <p className="text-amber-400 font-mono font-bold text-lg">{featuredPromo.promo.code}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-gradient">{featuredPromo.promo.discount}</p>
                      <p className="text-xs text-gray-500">Limited time</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search for prop firms..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full bg-surface-800/80 border border-surface-700 rounded-2xl pl-14 pr-6 py-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/10 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 pb-10 max-w-6xl mx-auto">
        <NewsletterSignup />
      </section>

      {/* Active Promos Section */}
      <section className="px-4 pb-8 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
          <span>🔥</span> 
          <span className="text-white">Active Promotions</span>
          <span className="text-gray-500 font-normal text-base ml-2">— click to copy</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {propFirms
            .filter((f) => f.promoCodes.length > 0)
            .flatMap((firm) =>
              firm.promoCodes.map((promo) => (
                <Link key={`${firm.id}-${promo.code}`} href={`/firm/${firm.slug}`}>
                  <div className="promo-card-glow bg-surface-800 border border-surface-700 rounded-xl p-4 hover:border-amber-500/40 transition-all group flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={firm.logo} alt={firm.name} className="w-10 h-10 rounded-lg object-cover bg-surface-700" />
                      <div>
                        <p className="font-semibold text-white text-sm">{firm.name}</p>
                        <p className="text-amber-400 font-mono font-bold">{promo.code}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-lg font-extrabold text-gradient">{promo.discount}</p>
                        <p className="text-xs text-gray-500">Exp: {promo.expiryDate}</p>
                      </div>
                      <CopyButton code={promo.code} />
                    </div>
                  </div>
                </Link>
              ))
            )}
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-16 max-w-6xl mx-auto">
        {/* Filters */}
        <FilterBar filters={filters} onChange={setFilters} />

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredFirms.length}</span> firms
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Sorted by {filters.sortBy.replace(/([A-Z])/g, ' $1').trim()}
          </div>
        </div>

        {/* Firm Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFirms.map((firm) => (
            <FirmCard key={firm.id} firm={firm} />
          ))}
        </div>

        {filteredFirms.length === 0 && (
          <div className="text-center py-16 bg-surface-800/50 rounded-2xl border border-surface-700">
            <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-400 text-lg mb-2">No firms match your search</p>
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
              className="mt-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-800 py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-surface-950" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="font-bold text-white">PropBargains</span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2026 PropBargains — Your one stop shop for Prop Traders
        </p>
        <p className="text-gray-600 text-xs mt-2">
          We may earn a commission when you sign up through our links. Results may vary.
        </p>
      </footer>
    </main>
  );
}