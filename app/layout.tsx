import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const siteUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(siteUrl),
    title: "Vincent Mukuna | Web, Mobile & AI Product Developer",
    description:
      "Selected web, mobile, SaaS and AI product work by Vincent Mukuna, a full-stack product developer based in Nairobi.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Web, mobile, and AI products built with care.",
      description:
        "Selected work by Vincent Mukuna, a product-minded full-stack developer based in Nairobi.",
      type: "website",
      url: siteUrl,
      images: [
        {
          url: `${siteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "Built by Vin — web, mobile, and AI products built with care.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Web, mobile, and AI products built with care.",
      description:
        "Selected work by Vincent Mukuna, a product-minded full-stack developer based in Nairobi.",
      images: [`${siteUrl}/og.png`],
    },
  };
}

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
      </body>
    </html>
  );
}
