import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amirtha-varshini-sugumaran.github.io/portfolio"),
  title: "Amirtha Varshini Sugumaran | Java Junior Software Engineer Portfolio",
  description:
    "Recruiter-focused portfolio for Amirtha Varshini Sugumaran, a Dublin-based Java-oriented Junior Software Engineer and backend developer with API, PostgreSQL, full-stack exposure and business analytics experience.",
  keywords: [
    "Java Junior Software Engineer",
    "Backend Developer",
    "Software Engineer Portfolio",
    "Full Stack Developer",
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
    title: "Amirtha Varshini Sugumaran | Java Junior Software Engineer",
    description:
      "Backend-focused, Java-oriented software engineer portfolio covering APIs, databases, full-stack collaboration and business analytics delivery.",
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
    title: "Amirtha Varshini Sugumaran | Java Junior Software Engineer",
    description:
      "Backend systems, APIs, databases, full-stack exposure and analytics-backed delivery in Dublin, Ireland.",
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
