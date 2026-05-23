import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropBargains - Your One Stop Shop for Prop Traders",
  description: "Compare the best prop trading firms side-by-side. Find exclusive promo codes, compare profit splits up to 95%, and choose the perfect funded trading firm for your strategy.",
  keywords: "prop firm, prop trading, funded trader, prop firm promo code, best prop firm, trading firms, profit split, forex prop firm, funded account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0A0E1A] text-gray-100 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
