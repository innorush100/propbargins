"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const ACCOUNT_SIZES = [
  { value: 10000, label: "$10,000" },
  { value: 25000, label: "$25,000" },
  { value: 50000, label: "$50,000" },
  { value: 100000, label: "$100,000" },
  { value: 150000, label: "$150,000" },
  { value: 200000, label: "$200,000" },
];

const PROFIT_SPLITS = [
  { value: 70, label: "70%" },
  { value: 75, label: "75%" },
  { value: 80, label: "80%" },
  { value: 85, label: "85%" },
  { value: 90, label: "90%" },
  { value: 95, label: "95%" },
];

const WIN_RATES = [
  { value: 30, label: "30% — Conservative" },
  { value: 40, label: "40% — Average" },
  { value: 50, label: "50% — Solid" },
  { value: 60, label: "60% — Good" },
  { value: 70, label: "70% — Great" },
];

interface ComparisonRow {
  accountSize: number;
  monthlyProfit: number;
  profitSplit: number;
  earnings: number;
}

export default function CalculatorPage() {
  const [accountSize, setAccountSize] = useState(50000);
  const [profitSplit, setProfitSplit] = useState(80);
  const [profitTargetType, setProfitTargetType] = useState<"percent" | "dollar">("percent");
  const [profitTarget, setProfitTarget] = useState(10);
  const [winRate, setWinRate] = useState(50);
  const [showComparison, setShowComparison] = useState(true);

  const monthlyEarnings = useMemo(() => {
    let grossProfit: number;
    if (profitTargetType === "percent") {
      grossProfit = accountSize * (profitTarget / 100);
    } else {
      grossProfit = profitTarget;
    }
    return grossProfit * (profitSplit / 100);
  }, [accountSize, profitSplit, profitTarget, profitTargetType]);

  const comparisonData = useMemo((): ComparisonRow[] => {
    const grossProfit =
      profitTargetType === "percent"
        ? accountSize * (profitTarget / 100)
        : profitTarget;

    return ACCOUNT_SIZES.map((size) => {
      const monthlyProfit =
        profitTargetType === "percent"
          ? size.value * (profitTarget / 100)
          : profitTarget;
      return {
        accountSize: size.value,
        monthlyProfit,
        profitSplit,
        earnings: monthlyProfit * (profitSplit / 100),
      };
    });
  }, [accountSize, profitSplit, profitTarget, profitTargetType]);

  const suggestedProfitPercent = useMemo(() => {
    const riskScore = winRate / 100;
    const conservative = 3 + riskScore * 12;
    return Math.round(conservative * 10) / 10;
  }, [winRate]);

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-surface-700 bg-surface-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
              <svg className="w-5 h-5 text-surface-950" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="font-bold text-xl">
              <span className="text-gradient">PropBargains</span>
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-surface-800 transition-all">
              Home
            </Link>
            <Link href="/calculator" className="px-4 py-2 text-sm bg-amber-500/20 text-amber-400 font-semibold rounded-lg border border-amber-500/30">
              Calculator
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-12 pb-10 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-amber-500/8 via-transparent to-transparent" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-400 text-sm font-semibold">💰 New Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-gradient">Prop Firm Profit Calculator</span>
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            Your one stop shop for Prop Traders
          </p>
          <p className="text-gray-500 max-w-xl mx-auto">
            See how much you could earn with a funded account. Enter your numbers and discover your potential monthly profits.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Inputs Panel */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-surface-800 border border-surface-700 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 text-sm">1</span>
                Account Size
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {ACCOUNT_SIZES.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setAccountSize(size.value)}
                    className={`py-3 rounded-xl text-sm font-semibold transition-all border ${
                      accountSize === size.value
                        ? "bg-amber-500 text-surface-950 border-amber-500 shadow-lg shadow-amber-500/20"
                        : "bg-surface-700 text-gray-300 border-surface-600 hover:border-amber-500/40"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-surface-800 border border-surface-700 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 text-sm">2</span>
                Profit Split
              </h2>
              <div className="grid grid-cols-3 gap-2">
                {PROFIT_SPLITS.map((split) => (
                  <button
                    key={split.value}
                    onClick={() => setProfitSplit(split.value)}
                    className={`py-3 rounded-xl text-sm font-semibold transition-all border ${
                      profitSplit === split.value
                        ? "bg-amber-500 text-surface-950 border-amber-500 shadow-lg shadow-amber-500/20"
                        : "bg-surface-700 text-gray-300 border-surface-600 hover:border-amber-500/40"
                    }`}
                  >
                    {split.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-surface-800 border border-surface-700 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 text-sm">3</span>
                Monthly Profit Target
              </h2>
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setProfitTargetType("percent")}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                    profitTargetType === "percent"
                      ? "bg-amber-500 text-surface-950 border-amber-500"
                      : "bg-surface-700 text-gray-400 border-surface-600 hover:border-amber-500/40"
                  }`}
                >
                  %
                </button>
                <button
                  onClick={() => setProfitTargetType("dollar")}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                    profitTargetType === "dollar"
                      ? "bg-amber-500 text-surface-950 border-amber-500"
                      : "bg-surface-700 text-gray-400 border-surface-600 hover:border-amber-500/40"
                  }`}
                >
                  $
                </button>
              </div>
              {profitTargetType === "percent" ? (
                <div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={profitTarget}
                    onChange={(e) => setProfitTarget(Number(e.target.value))}
                    className="w-full h-2 bg-surface-700 rounded-full appearance-none cursor-pointer accent-amber-500 mb-3"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mb-3">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                  <div className="bg-surface-900 rounded-xl p-4 text-center">
                    <span className="text-3xl font-extrabold text-gradient">{profitTarget}%</span>
                    <p className="text-xs text-gray-500 mt-1">of {accountSize.toLocaleString()} = ${(accountSize * profitTarget / 100).toLocaleString()} gross</p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                  <input
                    type="number"
                    value={profitTarget}
                    onChange={(e) => setProfitTarget(Number(e.target.value))}
                    className="w-full bg-surface-900 border border-surface-700 rounded-xl pl-8 pr-4 py-3 text-white text-center font-bold focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="5000"
                    min={0}
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">Enter your monthly profit goal in dollars</p>
                </div>
              )}
            </div>

            <div className="bg-surface-800 border border-surface-700 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 text-sm">4</span>
                Win Rate
                <span className="text-xs text-gray-500 font-normal ml-1">(optional)</span>
              </h2>
              <div className="space-y-2">
                {WIN_RATES.map((rate) => (
                  <button
                    key={rate.value}
                    onClick={() => setWinRate(rate.value)}
                    className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all border text-left px-4 ${
                      winRate === rate.value
                        ? "bg-amber-500/20 text-amber-400 border-amber-500/40"
                        : "bg-surface-700/50 text-gray-400 border-surface-600/50 hover:border-amber-500/30"
                    }`}
                  >
                    {rate.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 p-3 bg-surface-900/50 rounded-xl border border-surface-700/50">
                <p className="text-xs text-gray-500 mb-1">Suggested target based on win rate:</p>
                <p className="font-semibold text-amber-400">{suggestedProfitPercent}% monthly</p>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-3 space-y-5">

            {/* Hero Result Card */}
            <div className="bg-gradient-to-br from-surface-800 to-surface-900 border-2 border-amber-500/30 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent pointer-events-none" />
              <div className="relative">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Estimated Monthly Earnings</p>
                <p className="text-5xl md:text-6xl font-extrabold text-gradient mb-2">
                  ${monthlyEarnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  after {profitSplit}% profit split on {accountSize.toLocaleString()} account
                </p>
                <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-5 py-2.5">
                  <span className="text-amber-400 font-bold text-lg">
                    You could earn ${monthlyEarnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}/month
                  </span>
                </div>
                <p className="text-gray-600 text-xs mt-4">
                  with {profitSplit}% profit split
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-surface-800 border border-surface-700 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Earnings Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-surface-700/50">
                  <span className="text-gray-400">Account Size</span>
                  <span className="font-semibold text-white">${accountSize.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-surface-700/50">
                  <span className="text-gray-400">Monthly Profit Target</span>
                  <span className="font-semibold text-white">
                    {profitTargetType === "percent" ? `${profitTarget}%` : `$${profitTarget.toLocaleString()}`}
                    <span className="text-gray-500 text-sm ml-1">
                      (${(profitTargetType === "percent" ? accountSize * profitTarget / 100 : profitTarget).toLocaleString(undefined, { maximumFractionDigits: 0 })})
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-surface-700/50">
                  <span className="text-gray-400">Your Share ({profitSplit}%)</span>
                  <span className="font-semibold text-amber-400">${monthlyEarnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-400">Prop Firm Share ({100 - profitSplit}%)</span>
                  <span className="font-semibold text-gray-400">
                    ${((profitTargetType === "percent" ? accountSize * profitTarget / 100 : profitTarget) * (100 - profitSplit) / 100).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>

            {/* Annual Projection */}
            <div className="bg-surface-800 border border-surface-700 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3">Yearly Projection</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-900/50 rounded-xl p-4 text-center border border-surface-700/50">
                  <p className="text-xs text-gray-500 mb-1">Per Month</p>
                  <p className="text-2xl font-extrabold text-amber-400">${monthlyEarnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-surface-900/50 rounded-xl p-4 text-center border border-surface-700/50">
                  <p className="text-xs text-gray-500 mb-1">Per Year</p>
                  <p className="text-2xl font-extrabold text-gradient">${(monthlyEarnings * 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            {showComparison && (
              <div className="bg-surface-800 border border-surface-700 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold">Compare Account Sizes</h3>
                  <button
                    onClick={() => setShowComparison(false)}
                    className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
                  >
                    Hide
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-surface-700">
                        <th className="text-left py-3 text-xs text-gray-500 font-medium">Account</th>
                        <th className="text-right py-3 text-xs text-gray-500 font-medium">Gross Profit</th>
                        <th className="text-right py-3 text-xs text-gray-500 font-medium">Your Share</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row) => (
                        <tr
                          key={row.accountSize}
                          className={`border-b border-surface-700/30 ${row.accountSize === accountSize ? "bg-amber-500/10" : ""}`}
                        >
                          <td className="py-3 text-sm font-semibold text-white">
                            ${row.accountSize.toLocaleString()}
                            {row.accountSize === accountSize && (
                              <span className="ml-2 text-xs text-amber-400">← yours</span>
                            )}
                          </td>
                          <td className="py-3 text-sm text-gray-400 text-right">
                            ${row.monthlyProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </td>
                          <td className="py-3 text-sm font-bold text-amber-400 text-right">
                            ${row.earnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {!showComparison && (
              <button
                onClick={() => setShowComparison(true)}
                className="w-full bg-surface-800 border border-surface-700 rounded-2xl p-4 text-center text-gray-400 hover:text-white hover:border-amber-500/30 transition-all text-sm font-medium"
              >
                Show account size comparison ↕
              </button>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-amber-500/20 via-surface-800 to-surface-800 border border-amber-500/30 rounded-2xl p-6 text-center">
              <p className="text-white font-bold mb-1">Ready to start trading?</p>
              <p className="text-gray-400 text-sm mb-4">
                Browse the best prop firms and find your perfect match.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-surface-950 font-bold px-6 py-3 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
              >
                View Prop Firms
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
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
          Calculator estimates are for illustration only. Actual results may vary.
        </p>
      </footer>
    </main>
  );
}