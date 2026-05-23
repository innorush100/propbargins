import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropFirm Rank | Compare & Find the Best Prop Trading Firms",
  description: "Compare top prop trading firms by evaluation cost, profit split, drawdown rules, and payout speed. Find the best promo codes and maximize your trading profits.",
  keywords: "prop firm, prop trading, funded trading, trading firms, prop firm review, forex prop firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-950 text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}