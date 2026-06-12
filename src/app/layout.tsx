import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K. A. Kaneriya & Associates | Best Legal Services in Rajkot",
  description:
    "Trusted legal services in Rajkot since 2006. Expert advocates for family matters, revenue, property, notary, Section 138, and litigation. Contact K. A. Kaneriya & Associates today.",
  keywords: [
    "law firm Rajkot",
    "advocate Rajkot",
    "Kaushik Kaneriya",
    "revenue lawyer Gujarat",
    "Section 138 lawyer",
    "notary Rajkot",
    "family lawyer Rajkot",
  ],
  openGraph: {
    title: "K. A. Kaneriya & Associates",
    description: "Best Legal Services in Town — Trusted since 2006",
    type: "website",
    locale: "en_IN",
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
