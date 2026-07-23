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
  title: "Vincent Mukuna | Web, Mobile & AI Product Developer",
  description:
    "Selected web, mobile, SaaS and AI product work by Vincent Mukuna, a full-stack product developer based in Nairobi.",
  openGraph: {
    title: "Web, mobile, and AI products built with care.",
    description:
      "Selected work by Vincent Mukuna, a product-minded full-stack developer based in Nairobi.",
    type: "website",
    url: "https://builtby.vin",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Built by Vin: web, mobile, and AI products built with care.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web, mobile, and AI products built with care.",
    description:
      "Selected work by Vincent Mukuna, a product-minded full-stack developer based in Nairobi.",
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
