import { Metadata } from "next";
import { getFirmBySlug } from "@/data/propfirms";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const firm = getFirmBySlug(params.slug);
  if (!firm) {
    return { title: "Firm Not Found | PropFirm Rank" };
  }

  return {
    title: `${firm.name} Review | PropFirm Rank`,
    description: `${firm.description} Compare ratings, promo codes, and features.`,
    keywords: [`${firm.name} review`, "prop firm", "funded trading"],
  };
}

export default function FirmPage({ params }: Props) {
  const firm = getFirmBySlug(params.slug);

  if (!firm) {
    return (
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-2xl font-bold text-red-400">Firm not found</h1>
        <a href="/" className="text-emerald-400 hover:underline mt-4 block">
          ← Back to all firms
        </a>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <a href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">
          ← Back to Rankings
        </a>
      </nav>

      {/* Header */}
      <header className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
        <div className="flex items-start gap-4">
          <img
            src={firm.logo}
            alt={firm.name}
            className="w-20 h-20 rounded-xl object-cover bg-gray-800"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">{firm.name}</h1>
                <p className="text-gray-500">Est. {firm.established}</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-emerald-400">{firm.overallScore}</div>
                <div className="text-sm text-gray-500">Overall Score</div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-gray-300">{firm.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {firm.instruments.map((inst) => (
            <span key={inst} className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              {inst}
            </span>
          ))}
        </div>
      </header>

      {/* Ratings Grid */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Ratings & Scores</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(firm.rating).map(([category, score]) => (
            <div key={category} className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">{category}</p>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-white">{score}</div>
                <div className="text-sm text-gray-500">/10</div>
              </div>
              <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                  style={{ width: `${score * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features & Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-2">
            {firm.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Trading Info</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Max Funding</span>
              <span className="font-semibold text-white">{firm.maxFunding}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Platforms</span>
              <span className="text-white">{firm.supportedPlatforms.join(", ")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Profit Split</span>
              <span className="font-semibold text-emerald-400">{firm.rating["Profit Split"]}%</span>
            </div>
          </div>
        </section>
      </div>

      {/* Promo Codes */}
      {firm.promoCodes.length > 0 && (
        <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Active Promo Codes</h2>
          <div className="space-y-4">
            {firm.promoCodes.map((promo) => (
              <div
                key={promo.code}
                className="bg-gradient-to-r from-emerald-900/30 to-gray-800 border border-emerald-500/30 rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-400 font-mono text-xl font-bold">{promo.code}</p>
                    <p className="text-gray-400 text-sm">{promo.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-300">{promo.discount}</p>
                    <p className="text-xs text-gray-500">Valid until {promo.expiryDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-900/50 to-gray-900 border border-emerald-500/30 rounded-xl p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to get funded?</h2>
        <p className="text-gray-400 mb-4">Use our link for the best rates and support the site.</p>
        <a
          href={firm.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors"
        >
          Get Funded with {firm.name} →
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2026 PropFirm Rank. We may earn a commission when you sign up through our links.</p>
      </footer>
    </main>
  );
}