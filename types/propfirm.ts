export interface Rating {
  "Evaluation Cost": number;
  "Profit Split": number;
  "Drawdown Rules": number;
  "Payout Speed": number;
  "Support Quality": number;
  "Platform & Tools": number;
}

export interface PromoCode {
  code: string;
  description: string;
  discount: string;
  expiryDate: string;
  affiliateLink: string;
}

export interface PropFirm {
  id: string;
  name: string;
  slug: string;
  logo: string;
  rating: Rating;
  overallScore: number;
  affiliateLink: string;
  website: string;
  description: string;
  features: string[];
  promoCodes: PromoCode[];
  established: number;
  instruments: string[];
  maxFunding: string;
  supportedPlatforms: string[];
  // Commission info per round trip (when known)
  commissionInfo?: {
    forex?: string;
    futures?: string;
    notes?: string;
  };
}

export interface FilterState {
  search: string;
  minProfitSplit: number;
  maxDrawdown: number;
  minPayoutSpeed: number;
  sortBy: 'overallScore' | 'profitSplit' | 'evalCost' | 'payoutSpeed';
  sortOrder: 'asc' | 'desc';
}