"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { propFirms } from "@/data/propfirms";
import { PropFirm, FilterState } from "@/types/propfirm";

function StarRating({ score, max = 10 }: { score: number; max?: number }) {
  const filled = Math.round((score / max) * 5);
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= filled ? "text-yellow-400" : "text-gray-600"}`}
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

function FirmCard({ firm }: { firm: PropFirm }) {
  return (
    <Link href={`/firm/${firm.slug}`}>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-gray-900/80 transition-all duration-200 group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={firm.logo}
              alt={firm.name}
              className="w-12 h-12 rounded-lg object-cover bg-gray-800"
            />
            <div>
              <h3 className="font-semibold text-lg text-white group-hover:text-emerald-400 transition-colors">
                {firm.name}
              </h3>
              <p className="text-sm text-gray-500">Est. {firm.established}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-400">{firm.overallScore}</div>
            <div className="text-xs text-gray-500">Overall</div>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{firm.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <p className="text-xs text-gray-500">Profit Split</p>
            <p className="font-semibold text-emerald-300">{firm.rating["Profit Split"]}%</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Max Funding</p>
            <p className="font-semibold text-white">{firm.maxFunding}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {firm.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex gap-1">
            {firm.promoCodes.length > 0 && (
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                {firm.promoCodes.length} promo{firm.promoCodes.length > 1 ? "s" : ""}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-400 group-hover:text-emerald-400 transition-colors">
            View Details →
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
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search firms..."
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onChange({ ...filters, sortBy: e.target.value as FilterState["sortBy"] })
            }
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
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
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
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

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-emerald-400">PropFirm</span> Rank
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Compare the best prop trading firms side-by-side. Find the perfect firm for your trading style with our comprehensive ratings and exclusive promo codes.
        </p>
      </header>

      {/* Active Promos Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-emerald-400">🔥</span> Active Promotions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {propFirms
            .filter((f) => f.promoCodes.length > 0)
            .flatMap((firm) =>
              firm.promoCodes.map((promo) => (
                <Link key={`${firm.id}-${promo.code}`} href={`/firm/${firm.slug}`}>
                  <div className="bg-gradient-to-r from-emerald-900/30 to-gray-900 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500/60 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">{firm.name}</p>
                        <p className="text-emerald-400 font-mono text-lg">{promo.code}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-emerald-300">{promo.discount}</p>
                        <p className="text-xs text-gray-500">Expires {promo.expiryDate}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
        </div>
      </section>

      {/* Filters */}
      <FilterBar filters={filters} onChange={setFilters} />

      {/* Results Count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-400">
          Showing <span className="text-white">{filteredFirms.length}</span> firms
        </p>
      </div>

      {/* Firm Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFirms.map((firm) => (
          <FirmCard key={firm.id} firm={firm} />
        ))}
      </div>

      {filteredFirms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No firms match your filters.</p>
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
            className="mt-4 text-emerald-400 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2026 PropFirm Rank. We may earn a commission when you sign up through our links.</p>
      </footer>
    </main>
  );
}