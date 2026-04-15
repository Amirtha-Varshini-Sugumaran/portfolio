import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amirtha-varshini-sugumaran.github.io/portfolio"),
  title: "Amirtha Varshini Sugumaran | Software Engineer Portfolio",
  description:
    "Recruiter-focused portfolio for Amirtha Varshini Sugumaran, a Dublin-based Software Engineer with backend systems, PostgreSQL, API development, data analysis and business analysis experience.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Software Engineer Portfolio",
    "Backend Systems",
    "APIs",
    "PostgreSQL",
    "Dublin Ireland",
    "Graduate Software Engineer",
    "Business Analytics Graduate",
    "Technical Analyst"
  ],
  authors: [{ name: "Amirtha Varshini Sugumaran" }],
  creator: "Amirtha Varshini Sugumaran",
  openGraph: {
    title: "Amirtha Varshini Sugumaran | Software Engineer",
    description:
      "Software engineer portfolio covering backend systems, APIs, databases, data analysis and business analytics delivery.",
    url: "https://portfolio.vercel.app",
    siteName: "Amirtha Varshini Sugumaran Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Amirtha Varshini Sugumaran software engineer portfolio"
      }
    ],
    locale: "en_IE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirtha Varshini Sugumaran | Software Engineer",
    description:
      "Backend systems, APIs, databases, data analysis and business-backed delivery in Dublin, Ireland.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
