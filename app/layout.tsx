import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://builtby.vin"),
  title: "Vincent Mukuna | Full-Stack Developer for Web, Mobile & AI",
  description:
    "Full-stack developer in Nairobi helping founders and product teams launch web and mobile products, improve live software, and build practical AI workflows.",
  openGraph: {
    title: "Vincent Mukuna | Full-Stack Developer for Web, Mobile & AI",
    description:
      "Full-stack developer in Nairobi helping founders and product teams launch web and mobile products, improve live software, and build practical AI workflows.",
    type: "website",
    url: "https://builtby.vin",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Built by Vin, the portfolio of product developer Vincent Mukuna.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Mukuna | Full-Stack Developer for Web, Mobile & AI",
    description:
      "Full-stack developer in Nairobi helping founders and product teams launch web and mobile products, improve live software, and build practical AI workflows.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
