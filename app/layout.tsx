import type { Metadata } from "next";
import { Crimson_Pro, DM_Sans } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Turan Almammadov",
    template: "%s · Turan Almammadov",
  },
  description:
    "Entrepreneur, futurist, product manager, and maker at the intersection of finance, technology, and regulation.",
  metadataBase: new URL("https://turanalmammadov.com"),
  openGraph: {
    title: "Turan Almammadov",
    description:
      "Platforms, infrastructure, and strategy at the intersection of economics, technology, and regulation.",
    url: "https://turanalmammadov.com",
    siteName: "Turan Almammadov",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turan Almammadov",
    description:
      "Entrepreneur, futurist, product manager — economics, computer science, and systems that scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimson.variable} ${dmSans.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
