import { PropFirm, PromoCode } from "@/types/propfirm";

export const propFirms: PropFirm[] = [
  {
    id: "1",
    name: "The Trading Pit",
    slug: "the-trading-pit",
    logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop",
    rating: {
      "Evaluation Cost": 9,
      "Profit Split": 90,
      "Drawdown Rules": 8,
      "Payout Speed": 9,
      "Support Quality": 9,
      "Platform & Tools": 8
    },
    overallScore: 88,
    affiliateLink: "https://thetradingpit.com/?ref=propfirmrank",
    website: "https://thetradingpit.com",
    description: "Professional prop trading firm with excellent profit splits and fast payouts. Great for serious traders looking to scale.",
    features: ["90% profit split", "Fast payouts", "5K-200K funding", "Metatrader 5", "Dedicated support"],
    promoCodes: [
      {
        code: "PFR10",
        description: "10% discount on evaluation fees",
        discount: "10%",
        expiryDate: "2026-12-31",
        affiliateLink: "https://thetradingpit.com/promo/PFR10"
      }
    ],
    established: 2020,
    instruments: ["Forex", "Indices", "Commodities", "Crypto"],
    maxFunding: "200K",
    supportedPlatforms: ["MT5"]
  },
  {
    id: "2",
    name: "FTMO",
    slug: "ftmo",
    logo: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=100&h=100&fit=crop",
    rating: {
      "Evaluation Cost": 7,
      "Profit Split": 90,
      "Drawdown Rules": 7,
      "Payout Speed": 9,
      "Support Quality": 8,
      "Platform & Tools": 9
    },
    overallScore: 85,
    affiliateLink: "https://ftmo.com/?ref=propfirmrank",
    website: "https://ftmo.com",
    description: "One of the largest and most established prop trading firms. Known for transparent rules and reliable payouts.",
    features: ["90% profit split", "Transparent rules", "6K-200K funding", "MT4/MT5", "Risk management tools"],
    promoCodes: [
      {
        code: "PFR15",
        description: "15% discount on first evaluation",
        discount: "15%",
        expiryDate: "2026-06-30",
        affiliateLink: "https://ftmo.com/promo/PFR15"
      }
    ],
    established: 2014,
    instruments: ["Forex", "Indices", "Commodities", "Crypto", "Bonds"],
    maxFunding: "200K",
    supportedPlatforms: ["MT4", "MT5", "cTrader"]
  },
  {
    id: "3",
    name: "Funded Trading Plus",
    slug: "funded-trading-plus",
    logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&h=100&fit=crop",
    rating: {
      "Evaluation Cost": 8,
      "Profit Split": 85,
      "Drawdown Rules": 8,
      "Payout Speed": 8,
      "Support Quality": 8,
      "Platform & Tools": 8
    },
    overallScore: 82,
    affiliateLink: "https://fundedtradingplus.com/?ref=propfirmrank",
    website: "https://fundedtradingplus.com",
    description: "Great balance of affordability and features. Offers unique drawdown protection and flexible trading rules.",
    features: ["85% profit split", "Drawdown protection", "5K-100K funding", "MT4/MT5", "Daily payouts"],
    promoCodes: [
      {
        code: "LAUNCH20",
        description: "20% off evaluation - Launch special",
        discount: "20%",
        expiryDate: "2026-05-31",
        affiliateLink: "https://fundedtradingplus.com/promo/LAUNCH20"
      }
    ],
    established: 2021,
    instruments: ["Forex", "Indices", "Commodities"],
    maxFunding: "100K",
    supportedPlatforms: ["MT4", "MT5"]
  },
  {
    id: "4",
    name: "BC Vault",
    slug: "bc-vault",
    logo: "https://images.unsplash.com/photo-1621416896389-6c1c3f8492df?w=100&h=100&fit=crop",
    rating: {
      "Evaluation Cost": 6,
      "Profit Split": 80,
      "Drawdown Rules": 9,
      "Payout Speed": 9,
      "Support Quality": 9,
      "Platform & Tools": 9
    },
    overallScore: 80,
    affiliateLink: "https://bcvault.io/?ref=propfirmrank",
    website: "https://bcvault.io",
    description: "Premium prop firm with high standards. Excellent for experienced traders who want professional tools and support.",
    features: ["80% profit split", "One-phase evaluation", "10K-250K funding", "MT4/MT5", "Advanced analytics"],
    promoCodes: [
      {
        code: "ELITE25",
        description: "25% discount on Elite evaluation",
        discount: "25%",
        expiryDate: "2026-08-31",
        affiliateLink: "https://bcvault.io/promo/ELITE25"
      }
    ],
    established: 2019,
    instruments: ["Forex", "Indices", "Commodities", "Crypto"],
    maxFunding: "250K",
    supportedPlatforms: ["MT4", "MT5"]
  },
  {
    id: "5",
    name: "Apex Trader Funding",
    slug: "apex-trader-funding",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
    rating: {
      "Evaluation Cost": 7,
      "Profit Split": 85,
      "Drawdown Rules": 7,
      "Payout Speed": 7,
      "Support Quality": 7,
      "Platform & Tools": 8
    },
    overallScore: 76,
    affiliateLink: "https://apextraderfunding.com/?ref=propfirmrank",
    website: "https://apextraderfunding.com",
    description: "Growing prop firm with competitive terms. Offers multiple funding programs and regular bonus opportunities.",
    features: ["85% profit split", "Multiple programs", "5K-150K funding", "MT5", "Trading challenges"],
    promoCodes: [
      {
        code: "Apex10",
        description: "10% bonus on first payout",
        discount: "10%",
        expiryDate: "2026-07-31",
        affiliateLink: "https://apextraderfunding.com/promo/Apex10"
      }
    ],
    established: 2022,
    instruments: ["Forex", "Indices", "Commodities"],
    maxFunding: "150K",
    supportedPlatforms: ["MT5"]
  },
  {
    id: "6",
    name: "MyFundedFX",
    slug: "myfundedfx",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
    rating: {
      "Evaluation Cost": 9,
      "Profit Split": 80,
      "Drawdown Rules": 8,
      "Payout Speed": 8,
      "Support Quality": 7,
      "Platform & Tools": 7
    },
    overallScore: 78,
    affiliateLink: "https://myfundedfx.com/?ref=propfirmrank",
    website: "https://myfundedfx.com",
    description: "Budget-friendly prop firm with solid trading conditions. Great for beginners starting their prop trading journey.",
    features: ["80% profit split", "Low eval cost", "5K-50K funding", "MT4/MT5", "Beginner friendly"],
    promoCodes: [
      {
        code: "WELCOME15",
        description: "15% discount for new traders",
        discount: "15%",
        expiryDate: "2026-12-31",
        affiliateLink: "https://myfundedfx.com/promo/WELCOME15"
      }
    ],
    established: 2021,
    instruments: ["Forex", "Indices", "Commodities"],
    maxFunding: "50K",
    supportedPlatforms: ["MT4", "MT5"]
  },
  // New firms added
  {
    id: "7",
    name: "Top Step Funded",
    slug: "top-step-funded",
  logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 8,
    "Profit Split": 80,
    "Drawdown Rules": 7,
    "Payout Speed": 8,
    "Support Quality": 8,
    "Platform & Tools": 7
  },
  overallScore: 78,
  affiliateLink: "https://topstepfunded.com/ref/YOUR_ID_HERE",
  website: "https://topstepfunded.com",
  description: "Trader-focused prop firm with a strong community aspect. Offers educational resources and mentorship alongside funding programs.",
  features: ["80% profit split", "Trading combine", "5K-100K funding", "MT4/MT5", "Community support"],
  promoCodes: [
    {
      code: "TOPSTEP15",
      description: "15% discount on evaluation fees",
      discount: "15%",
      expiryDate: "2026-12-31",
      affiliateLink: "https://topstepfunded.com/promo/TOPSTEP15"
    }
  ],
  established: 2020,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "100K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "8",
  name: "Trade Day",
  slug: "trade-day",
  logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 7,
    "Platform & Tools": 8
  },
  overallScore: 80,
  affiliateLink: "https://tradeday.com/ref/YOUR_ID_HERE",
  website: "https://tradeday.com",
  description: "Modern prop trading firm with fast growth. Known for transparent evaluation process and reliable payouts.",
  features: ["85% profit split", "Same-day funding", "5K-150K funding", "MT4/MT5", "Daily payouts"],
  promoCodes: [
    {
      code: "TRADEDAY20",
      description: "20% off first evaluation",
      discount: "20%",
      expiryDate: "2027-01-31",
      affiliateLink: "https://tradeday.com/promo/TRADEDAY20"
    }
  ],
  established: 2021,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "150K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "9",
  name: "UProfit",
  slug: "uprofut",
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 90,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 7,
    "Platform & Tools": 8
  },
  overallScore: 81,
  affiliateLink: "https://uprofut.com/ref/YOUR_ID_HERE",
  website: "https://uprofut.com",
  description: "High profit split prop firm with generous terms. Popular among scalpers and high-frequency traders.",
  features: ["90% profit split", "Scalper friendly", "10K-100K funding", "MT4/MT5", "Fast verification"],
  promoCodes: [
    {
      code: "UPROFIT10",
      description: "10% bonus on first payout",
      discount: "10%",
      expiryDate: "2026-09-30",
      affiliateLink: "https://uprofut.com/promo/UPROFIT10"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "100K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "10",
  name: "Fidelitas Trading",
  slug: "fidelitas-trading",
  logo: "https://images.unsplash.com/photo-1621416896389-6c1c3f8492df?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 8,
    "Profit Split": 85,
    "Drawdown Rules": 9,
    "Payout Speed": 8,
    "Support Quality": 9,
    "Platform & Tools": 8
  },
  overallScore: 85,
  affiliateLink: "https://fidelitastrading.com/ref/YOUR_ID_HERE",
  website: "https://fidelitastrading.com",
  description: "Premium prop trading firm with excellent trader support. Known for fair evaluation and consistent payouts.",
  features: ["85% profit split", "Fair evaluation", "10K-200K funding", "MT4/MT5", "Dedicated account manager"],
  promoCodes: [
    {
      code: "FIDEL25",
      description: "25% discount on evaluation",
      discount: "25%",
      expiryDate: "2026-11-30",
      affiliateLink: "https://fidelitastrading.com/promo/FIDEL25"
    }
  ],
  established: 2020,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "200K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "11",
  name: "The Funded Trader",
  slug: "the-funded-trader",
  logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 6,
    "Profit Split": 80,
    "Drawdown Rules": 8,
    "Payout Speed": 9,
    "Support Quality": 8,
    "Platform & Tools": 8
  },
  overallScore: 78,
  affiliateLink: "https://thefundedtrader.com/ref/YOUR_ID_HERE",
  website: "https://thefundedtrader.com",
  description: "Established prop firm with solid reputation. Offers multiple account types and reliable payout structure.",
  features: ["80% profit split", "Multiple account types", "5K-100K funding", "MT4/MT5", "Quick payouts"],
  promoCodes: [
    {
      code: "FUNDED15",
      description: "15% off evaluation fees",
      discount: "15%",
      expiryDate: "2026-08-31",
      affiliateLink: "https://thefundedtrader.com/promo/FUNDED15"
    }
  ],
  established: 2019,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "100K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "12",
  name: "Blueberry Funded",
  slug: "blueberry-funded",
  logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 7,
    "Payout Speed": 7,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 73,
  affiliateLink: "https://blueberryfunded.com/ref/YOUR_ID_HERE",
  website: "https://blueberryfunded.com",
  description: "Growing prop trading firm with competitive pricing. Good for traders starting with smaller accounts.",
  features: ["85% profit split", "Low entry cost", "5K-50K funding", "MT4/MT5", "Weekly payouts"],
  promoCodes: [
    {
      code: "BLUEBERRY10",
      description: "10% discount on evaluation",
      discount: "10%",
      expiryDate: "2026-10-31",
      affiliateLink: "https://blueberryfunded.com/promo/BLUEBERRY10"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "50K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "13",
  name: "Audacity Capital",
  slug: "audacity-capital",
  logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 8,
    "Profit Split": 85,
    "Drawdown Rules": 9,
    "Payout Speed": 9,
    "Support Quality": 9,
    "Platform & Tools": 9
  },
  overallScore: 88,
  affiliateLink: "https://audacitycapital.io/ref/YOUR_ID_HERE",
  website: "https://audacitycapital.io",
  description: "Professional-grade prop trading with premium support. Excellent for serious traders seeking consistency.",
  features: ["85% profit split", "Professional tools", "10K-250K funding", "MT4/MT5", "Priority support"],
  promoCodes: [
    {
      code: "AUDACITY20",
      description: "20% off evaluation fees",
      discount: "20%",
      expiryDate: "2027-02-28",
      affiliateLink: "https://audacitycapital.io/promo/AUDACITY20"
    }
  ],
  established: 2020,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "250K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "14",
  name: "E8 Funding",
  slug: "e8-funding",
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 9,
    "Profit Split": 80,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 78,
  affiliateLink: "https://e8funding.com/ref/YOUR_ID_HERE",
  website: "https://e8funding.com",
  description: "Cost-effective prop firm with straightforward evaluation. Great value for budget-conscious traders.",
  features: ["80% profit split", "Affordable eval", "5K-50K funding", "MT4/MT5", "Simple rules"],
  promoCodes: [
    {
      code: "E8WELCOME",
      description: "15% new trader discount",
      discount: "15%",
      expiryDate: "2026-12-31",
      affiliateLink: "https://e8funding.com/promo/E8WELCOME"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "50K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "15",
  name: "Alpha Capital",
  slug: "alpha-capital",
  logo: "https://images.unsplash.com/photo-1621416896389-6c1c3f8492df?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 8,
    "Platform & Tools": 8
  },
  overallScore: 80,
  affiliateLink: "https://alphacapitaltrading.com/ref/YOUR_ID_HERE",
  website: "https://alphacapitaltrading.com",
  description: "Balanced prop firm with professional environment. Good support and reliable infrastructure.",
  features: ["85% profit split", "Professional setup", "10K-150K funding", "MT4/MT5", "Reliable execution"],
  promoCodes: [
    {
      code: "ALPHA10",
      description: "10% first payout bonus",
      discount: "10%",
      expiryDate: "2026-09-30",
      affiliateLink: "https://alphacapitaltrading.com/promo/ALPHA10"
    }
  ],
  established: 2021,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "150K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "16",
  name: "Nova Funded",
  slug: "nova-funded",
  logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 8,
    "Profit Split": 85,
    "Drawdown Rules": 7,
    "Payout Speed": 7,
    "Support Quality": 7,
    "Platform & Tools": 8
  },
  overallScore: 76,
  affiliateLink: "https://novafunded.com/ref/YOUR_ID_HERE",
  website: "https://novafunded.com",
  description: "Newer prop firm gaining popularity with traders. Offers solid conditions and growing funding limits.",
  features: ["85% profit split", "Fast scaling", "5K-100K funding", "MT4/MT5", "Easy verification"],
  promoCodes: [
    {
      code: "NOVA15",
      description: "15% discount on evaluation",
      discount: "15%",
      expiryDate: "2026-07-31",
      affiliateLink: "https://novafunded.com/promo/NOVA15"
    }
  ],
  established: 2023,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "100K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "17",
  name: "Chvious",
  slug: "chvious",
  logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 90,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 79,
  affiliateLink: "https://chvious.com/ref/YOUR_ID_HERE",
  website: "https://chvious.com",
  description: "High profit split prop firm with competitive trading conditions. Popular among profitable traders.",
  features: ["90% profit split", "Tight spreads", "5K-100K funding", "MT4/MT5", "Fast payouts"],
  promoCodes: [
    {
      code: "CHVIOUS10",
      description: "10% bonus on first payout",
      discount: "10%",
      expiryDate: "2026-11-30",
      affiliateLink: "https://chvious.com/promo/CHVIOUS10"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "100K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "18",
  name: "Surestep",
  slug: "surestep",
  logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 8,
    "Profit Split": 80,
    "Drawdown Rules": 7,
    "Payout Speed": 7,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 73,
  affiliateLink: "https://surestep.io/ref/YOUR_ID_HERE",
  website: "https://surestep.io",
  description: "Step-based prop firm with clear progression path. Good for traders who want structured growth.",
  features: ["80% profit split", "Step program", "5K-50K funding", "MT4/MT5", "Clear milestones"],
  promoCodes: [
    {
      code: "SURESTEP20",
      description: "20% off evaluation",
      discount: "20%",
      expiryDate: "2026-08-31",
      affiliateLink: "https://surestep.io/promo/SURESTEP20"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "50K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "19",
  name: "Osprey Trading",
  slug: "osprey-trading",
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 8,
    "Platform & Tools": 8
  },
  overallScore: 80,
  affiliateLink: "https://ospreytrading.com/ref/YOUR_ID_HERE",
  website: "https://ospreytrading.com",
  description: "Professional prop firm with excellent trader support. Known for fair rules and reliable service.",
  features: ["85% profit split", "Fair rules", "10K-150K funding", "MT4/MT5", "Responsive support"],
  promoCodes: [
    {
      code: "OSPREY15",
      description: "15% discount on evaluation",
      discount: "15%",
      expiryDate: "2026-10-31",
      affiliateLink: "https://ospreytrading.com/promo/OSPREY15"
    }
  ],
  established: 2021,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "150K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "20",
  name: "City Traders",
  slug: "city-traders",
  logo: "https://images.unsplash.com/photo-1621416896389-6c1c3f8492df?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 8,
    "Profit Split": 80,
    "Drawdown Rules": 7,
    "Payout Speed": 8,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 74,
  affiliateLink: "https://citytraders.io/ref/YOUR_ID_HERE",
  website: "https://citytraders.io",
  description: "UK-based prop firm offering competitive trading conditions. Good for European traders.",
  features: ["80% profit split", "UK regulated", "5K-100K funding", "MT4/MT5", "Fast withdrawals"],
  promoCodes: [
    {
      code: "CITY10",
      description: "10% new trader discount",
      discount: "10%",
      expiryDate: "2026-09-30",
      affiliateLink: "https://citytraders.io/promo/CITY10"
    }
  ],
  established: 2021,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "100K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "21",
  name: "Thunder Funded",
  slug: "thunder-funded",
  logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 7,
    "Platform & Tools": 8
  },
  overallScore: 78,
  affiliateLink: "https://thunderfunded.com/ref/YOUR_ID_HERE",
  website: "https://thunderfunded.com",
  description: "Fast-growing prop firm with generous profit splits. Popular among aggressive traders.",
  features: ["85% profit split", "High leverage", "5K-100K funding", "MT4/MT5", "Quick funding"],
  promoCodes: [
    {
      code: "THUNDER20",
      description: "20% off evaluation fees",
      discount: "20%",
      expiryDate: "2027-01-31",
      affiliateLink: "https://thunderfunded.com/promo/THUNDER20"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "100K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "22",
  name: "FX Imperium",
  slug: "fx-imperium",
  logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 6,
    "Profit Split": 85,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 8,
    "Platform & Tools": 8
  },
  overallScore: 77,
  affiliateLink: "https://fximperium.com/ref/YOUR_ID_HERE",
  website: "https://fximperium.com",
  description: "Premium prop firm with professional infrastructure. Offers excellent trading conditions.",
  features: ["85% profit split", "Low spreads", "10K-200K funding", "MT4/MT5", "Professional tools"],
  promoCodes: [
    {
      code: "IMPERIUM15",
      description: "15% discount on evaluation",
      discount: "15%",
      expiryDate: "2026-12-31",
      affiliateLink: "https://fximperium.com/promo/IMPERIUM15"
    }
  ],
  established: 2020,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "200K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "23",
  name: "Pure Jacked Trading",
  slug: "pure-jacked-trading",
  logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 8,
    "Profit Split": 85,
    "Drawdown Rules": 7,
    "Payout Speed": 8,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 75,
  affiliateLink: "https://purejackedtrading.com/ref/YOUR_ID_HERE",
  website: "https://purejackedtrading.com",
  description: "Straightforward prop firm with no-nonsense trading conditions. Good for disciplined traders.",
  features: ["85% profit split", "Clear rules", "5K-100K funding", "MT4/MT5", "Weekly payouts"],
  promoCodes: [
    {
      code: "JACKED10",
      description: "10% first evaluation discount",
      discount: "10%",
      expiryDate: "2026-08-31",
      affiliateLink: "https://purejackedtrading.com/promo/JACKED10"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "100K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "24",
  name: "Smart Prop Trader",
  slug: "smart-prop-trader",
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 8,
    "Profit Split": 80,
    "Drawdown Rules": 7,
    "Payout Speed": 7,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 72,
  affiliateLink: "https://smartprop trader.com/ref/YOUR_ID_HERE",
  website: "https://smartproptrader.com",
  description: "Value-focused prop firm with essential features. Good starting point for new traders.",
  features: ["80% profit split", "Budget friendly", "5K-50K funding", "MT4/MT5", "Simple process"],
  promoCodes: [
    {
      code: "SMART15",
      description: "15% off evaluation",
      discount: "15%",
      expiryDate: "2026-10-31",
      affiliateLink: "https://smartproptrader.com/promo/SMART15"
    }
  ],
  established: 2023,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "50K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "25",
  name: "Maven Trading",
  slug: "maven-trading",
  logo: "https://images.unsplash.com/photo-1621416896389-6c1c3f8492df?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 8,
    "Platform & Tools": 8
  },
  overallScore: 79,
  affiliateLink: "https://maventrading.com/ref/YOUR_ID_HERE",
  website: "https://maventrading.com",
  description: "Professional prop firm with excellent support. Known for transparent evaluation process.",
  features: ["85% profit split", "Transparent rules", "10K-150K funding", "MT4/MT5", "Great support"],
  promoCodes: [
    {
      code: "MAVEN20",
      description: "20% discount on first eval",
      discount: "20%",
      expiryDate: "2026-11-30",
      affiliateLink: "https://maventrading.com/promo/MAVEN20"
    }
  ],
  established: 2021,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "150K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "26",
  name: "Lazy Trader",
  slug: "lazy-trader",
  logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 6,
    "Profit Split": 85,
    "Drawdown Rules": 7,
    "Payout Speed": 7,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 70,
  affiliateLink: "https://lazytrader.co/ref/YOUR_ID_HERE",
  website: "https://lazytrader.co",
  description: "Simple prop firm with basic features. Good for casual traders or those starting out.",
  features: ["85% profit split", "Easy start", "5K-50K funding", "MT4/MT5", "Minimal requirements"],
  promoCodes: [
    {
      code: "LAZY10",
      description: "10% new trader discount",
      discount: "10%",
      expiryDate: "2026-07-31",
      affiliateLink: "https://lazytrader.co/promo/LAZY10"
    }
  ],
  established: 2023,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "50K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "27",
  name: "Axiom Capital",
  slug: "axiom-capital",
  logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 8,
    "Platform & Tools": 8
  },
  overallScore: 80,
  affiliateLink: "https://axiomcapital.io/ref/YOUR_ID_HERE",
  website: "https://axiomcapital.io",
  description: "Established prop firm with solid reputation. Professional environment with reliable payouts.",
  features: ["85% profit split", "Professional setup", "10K-200K funding", "MT4/MT5", "Consistent payouts"],
  promoCodes: [
    {
      code: "AXIOM15",
      description: "15% off evaluation",
      discount: "15%",
      expiryDate: "2026-12-31",
      affiliateLink: "https://axiomcapital.io/promo/AXIOM15"
    }
  ],
  established: 2020,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "200K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "28",
  name: "Lions Live Funded",
  slug: "lions-live-funded",
  logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 8,
    "Payout Speed": 7,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 74,
  affiliateLink: "https://lionslivefunded.com/ref/YOUR_ID_HERE",
  website: "https://lionslivefunded.com",
  description: "Community-focused prop firm with good trading conditions. Popular with active traders.",
  features: ["85% profit split", "Active community", "5K-100K funding", "MT4/MT5", "Trading signals"],
  promoCodes: [
    {
      code: "LIONS15",
      description: "15% discount on evaluation",
      discount: "15%",
      expiryDate: "2026-09-30",
      affiliateLink: "https://lionslivefunded.com/promo/LIONS15"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "100K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "29",
  name: "Fusion Funded",
  slug: "fusion-funded",
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 8,
    "Profit Split": 85,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 8,
    "Platform & Tools": 8
  },
  overallScore: 82,
  affiliateLink: "https://fusionfunded.com/ref/YOUR_ID_HERE",
  website: "https://fusionfunded.com",
  description: "Premium prop firm with excellent all-around offering. Well-balanced features and support.",
  features: ["85% profit split", "Balanced offering", "10K-200K funding", "MT4/MT5", "Priority withdrawals"],
  promoCodes: [
    {
      code: "FUSION20",
      description: "20% off evaluation fees",
      discount: "20%",
      expiryDate: "2027-02-28",
      affiliateLink: "https://fusionfunded.com/promo/FUSION20"
    }
  ],
  established: 2021,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "200K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "30",
  name: "SAS Times",
  slug: "sas-times",
  logo: "https://images.unsplash.com/photo-1621416896389-6c1c3f8492df?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 80,
    "Drawdown Rules": 7,
    "Payout Speed": 7,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 72,
  affiliateLink: "https://sastimes.com/ref/YOUR_ID_HERE",
  website: "https://sastimes.com",
  description: "Straightforward prop firm with essential features. Good for traders seeking simplicity.",
  features: ["80% profit split", "Simple setup", "5K-50K funding", "MT4/MT5", "Basic tools"],
  promoCodes: [
    {
      code: "SASTIMES10",
      description: "10% new trader discount",
      discount: "10%",
      expiryDate: "2026-08-31",
      affiliateLink: "https://sastimes.com/promo/SASTIMES10"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "50K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "31",
  name: "MyFundedFutures",
  slug: "myfundedfutures",
  logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 8,
    "Profit Split": 85,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 8,
    "Platform & Tools": 8
  },
  overallScore: 82,
  affiliateLink: "https://myfundedfutures.com/ref/YOUR_ID_HERE",
  website: "https://myfundedfutures.com",
  description: "Futures-focused prop firm with excellent conditions. Specializes in futures trading.",
  features: ["85% profit split", "Futures focused", "10K-150K funding", "NinjaTrader", "Deep market access"],
  promoCodes: [
    {
      code: "MFF20",
      description: "20% discount on evaluation",
      discount: "20%",
      expiryDate: "2026-12-31",
      affiliateLink: "https://myfundedfutures.com/promo/MFF20"
    }
  ],
  established: 2021,
  instruments: ["Futures"],
  maxFunding: "150K",
  supportedPlatforms: ["NinjaTrader", "MT5"]
},
{
  id: "32",
  name: "NextStepFunded",
  slug: "nextstep-funded",
  logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 76,
  affiliateLink: "https://nextstepfunded.com/ref/YOUR_ID_HERE",
  website: "https://nextstepfunded.com",
  description: "Step-based prop firm with clear progression. Good structured growth path for traders.",
  features: ["85% profit split", "Step program", "5K-100K funding", "MT4/MT5", "Clear milestones"],
  promoCodes: [
    {
      code: "NEXTSTEP15",
      description: "15% off evaluation",
      discount: "15%",
      expiryDate: "2026-10-31",
      affiliateLink: "https://nextstepfunded.com/promo/NEXTSTEP15"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "100K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "33",
  name: "Rising Sun Trading",
  slug: "rising-sun-trading",
  logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 7,
    "Payout Speed": 7,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 73,
  affiliateLink: "https://risingsuntrading.com/ref/YOUR_ID_HERE",
  website: "https://risingsuntrading.com",
  description: "Asian-focused prop firm with growing presence. Good options for APAC traders.",
  features: ["85% profit split", "APAC friendly", "5K-50K funding", "MT4/MT5", "Local support"],
  promoCodes: [
    {
      code: "RISINGSUN10",
      description: "10% new trader discount",
      discount: "10%",
      expiryDate: "2026-09-30",
      affiliateLink: "https://risingsuntrading.com/promo/RISINGSUN10"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "50K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "34",
  name: "3 Step Funded",
  slug: "3-step-funded",
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 9,
    "Profit Split": 90,
    "Drawdown Rules": 8,
    "Payout Speed": 8,
    "Support Quality": 8,
    "Platform & Tools": 8
  },
  overallScore: 86,
  affiliateLink: "https://3stepfunded.com/ref/YOUR_ID_HERE",
  website: "https://3stepfunded.com",
  description: "High profit split with transparent evaluation. Known for excellent trader-focused terms.",
  features: ["90% profit split", "3-step program", "10K-200K funding", "MT4/MT5", "Fast scaling"],
  promoCodes: [
    {
      code: "3STEP25",
      description: "25% discount on evaluation",
      discount: "25%",
      expiryDate: "2027-01-31",
      affiliateLink: "https://3stepfunded.com/promo/3STEP25"
    }
  ],
  established: 2021,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "200K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "35",
  name: "Elite Trader Funding",
  slug: "elite-trader-funding",
  logo: "https://images.unsplash.com/photo-1621416896389-6c1c3f8492df?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 6,
    "Profit Split": 90,
    "Drawdown Rules": 8,
    "Payout Speed": 9,
    "Support Quality": 9,
    "Platform & Tools": 9
  },
  overallScore: 83,
  affiliateLink: "https://elitetraderfunding.com/ref/YOUR_ID_HERE",
  website: "https://elitetraderfunding.com",
  description: "Premium prop firm with elite trading conditions. Excellent for experienced profitable traders.",
  features: ["90% profit split", "Premium terms", "25K-300K funding", "MT4/MT5", "VIP support"],
  promoCodes: [
    {
      code: "ELITE20",
      description: "20% off first evaluation",
      discount: "20%",
      expiryDate: "2026-11-30",
      affiliateLink: "https://elitetraderfunding.com/promo/ELITE20"
    }
  ],
  established: 2020,
  instruments: ["Forex", "Indices", "Commodities", "Crypto"],
  maxFunding: "300K",
  supportedPlatforms: ["MT4", "MT5", "cTrader"]
},
{
  id: "36",
  name: "Top Tier Trader Funding",
  slug: "top-tier-trader-funding",
  logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 6,
    "Profit Split": 85,
    "Drawdown Rules": 9,
    "Payout Speed": 9,
    "Support Quality": 9,
    "Platform & Tools": 9
  },
  overallScore: 82,
  affiliateLink: "https://toptiertraderfunding.com/ref/YOUR_ID_HERE",
  website: "https://toptiertraderfunding.com",
  description: "Top-tier prop firm with professional-grade conditions. High standards for serious traders.",
  features: ["85% profit split", "Professional grade", "25K-500K funding", "MT4/MT5", "Institutional tools"],
  promoCodes: [
    {
      code: "TIER15",
      description: "15% first evaluation discount",
      discount: "15%",
      expiryDate: "2026-12-31",
      affiliateLink: "https://toptiertraderfunding.com/promo/TIER15"
    }
  ],
  established: 2019,
  instruments: ["Forex", "Indices", "Commodities", "Crypto", "Bonds"],
  maxFunding: "500K",
  supportedPlatforms: ["MT4", "MT5", "cTrader"]
},
{
  id: "37",
  name: "Discipline Trading",
  slug: "discipline-trading",
  logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 9,
    "Payout Speed": 8,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 77,
  affiliateLink: "https://discipline-trading.com/ref/YOUR_ID_HERE",
  website: "https://discipline-trading.com",
  description: "Discipline-focused prop firm emphasizing risk management. Good for traders who follow strict rules.",
  features: ["85% profit split", "Risk focused", "5K-100K funding", "MT4/MT5", "Risk management tools"],
  promoCodes: [
    {
      code: "DISC10",
      description: "10% new trader discount",
      discount: "10%",
      expiryDate: "2026-08-31",
      affiliateLink: "https://discipline-trading.com/promo/DISC10"
    }
  ],
  established: 2022,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "100K",
  supportedPlatforms: ["MT4", "MT5"]
},
{
  id: "38",
  name: "妨碍 Trading",
  slug: "fangai-trading",
  logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&h=100&fit=crop",
  rating: {
    "Evaluation Cost": 7,
    "Profit Split": 85,
    "Drawdown Rules": 7,
    "Payout Speed": 7,
    "Support Quality": 7,
    "Platform & Tools": 7
  },
  overallScore: 73,
  affiliateLink: "https://fangaitrading.com/ref/YOUR_ID_HERE",
  website: "https://fangaitrading.com",
  description: "Asian market-focused prop trading firm. Specializes in serving traders in the APAC region.",
  features: ["85% profit split", "APAC focus", "5K-50K funding", "MT4/MT5", "Local payment methods"],
  promoCodes: [
    {
      code: "FANGAI10",
      description: "10% discount for new traders",
      discount: "10%",
      expiryDate: "2026-09-30",
      affiliateLink: "https://fangaitrading.com/promo/FANGAI10"
    }
  ],
  established: 2023,
  instruments: ["Forex", "Indices", "Commodities"],
  maxFunding: "50K",
  supportedPlatforms: ["MT4", "MT5"]
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