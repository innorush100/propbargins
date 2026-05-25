import { PropFirm, PromoCode } from "@/types/propfirm";

export const propFirms: PropFirm[] = [
  {
    id: "1",
    name: "Take Profit Trader",
    slug: "take-profit-trader",
    logo: "/logos/tpt-logo-square.png",
    rating: {
      "Profit Split": 80,
      "Drawdown Rules": 80,
      "Payout Speed": 90,
      "Support Quality": 0,
      "Platform & Tools": 75
    },
    overallScore: 81,
    affiliateLink: "https://takeprofittrader.com",
    website: "https://takeprofittrader.com",
    description: "The Best Payout Policy Prop Firm For Funded Futures Trader. Pro accounts offer 80/20 profit split with simulated execution; Pro+ accounts (live) offer 90/10 split.",
    features: ["Futures only", "No Activation Fee", "50% Consistency Rule", "6 days to first payout", "CQG & Rithmic data feed"],
    promoCodes: [
      {
        code: "NOFEE50",
        description: "50% off first month",
        discount: "50%",
        expiryDate: "2026-05-26",
        affiliateLink: "https://takeprofittrader.com/promo/NOFEE50"
      }
    ],
    maxFunding: "$150K",
    established: 2024,
    instruments: ["Futures"],
    supportedPlatforms: ["NinjaTrader", "TradingView", "Tradovate", "RTrader", "Quantower", "Motivewave"],
    commissionInfo: {
      futures: "$0.50/micro round trip, $5.00/mini round trip",
      notes: "Account sizes: 25K ($150/mo), 50K ($170/mo), 75K ($245/mo), 100K ($330/mo), 150K ($360/mo)"
    }
  },
  {
    id: "2",
    name: "Apex Trader Funding",
    slug: "apex-trader-funding",
    logo: "/logos/apex-logo.png",
    rating: {
      "Profit Split": 85,
      "Drawdown Rules": 75,
      "Payout Speed": 85,
      "Support Quality": 80,
      "Platform & Tools": 80
    },
    overallScore: 81,
    affiliateLink: "https://apextraderfunding.com",
    website: "https://apextraderfunding.com",
    description: "Simplicity, Freedom, Fairness, Trust.",
    features: ["EOD Drawdown", "NO Payout Denials", "NO MAE Rule", "NO 5:1 Rule", "Built-in Scaling", "50% Consistency", "20 Max Accounts", "Pass Eval in 1 Day"],
    promoCodes: [
      {
        code: "SAVENOW",
        description: "90% off activation fee",
        discount: "90%",
        expiryDate: "2026-05-26",
        affiliateLink: "https://apextraderfunding.com/promo/SAVENOW"
      }
    ],
    maxFunding: "$150K",
    established: 2021,
    instruments: ["Futures"],
    supportedPlatforms: ["Rithmic", "Tradovate", "Wealthcharts"],
    commissionInfo: {
      futures: "$1.02/micro round trip, $10.20/mini round trip",
      notes: "EOD Accounts: 25K $349, 50K $399, 100K $599, 150K $899 | Intraday Accounts: 25K $249, 50K $299, 100K $449, 150K $699"
    }
  }
];

export function getFirmBySlug(slug: string): PropFirm | undefined {
  return propFirms.find(firm => firm.slug === slug);
}

export function getActivePromos(): { firm: PropFirm; codes: PromoCode[] }[] {
  const now = new Date();
  return propFirms
    .map(firm => ({
      firm,
      codes: firm.promoCodes.filter(promo => new Date(promo.expiryDate) > now)
    }))
    .filter(item => item.codes.length > 0);
}