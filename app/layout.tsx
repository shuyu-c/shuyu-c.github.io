import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shuyu-chen-person.github.io"),
  title: "陈姝宇 Shuyu Chen · Privacy-Preserving Machine Learning",
  description:
    "Shuyu Chen is a Ph.D. candidate at Fudan University researching privacy-preserving machine learning, secure data joins, and private LLM adaptation.",
  icons: {
    icon: "/portrait.jpg",
    shortcut: "/portrait.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://shuyu-chen-person.github.io",
    title: "Shuyu Chen · Privacy-Preserving Machine Learning",
    description: "Research on secure machine learning, private data joins, and privacy-preserving LLMs.",
    images: [{ url: "/og.png", width: 1792, height: 1024, alt: "Shuyu Chen — Privacy-Preserving Machine Learning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shuyu Chen · Privacy-Preserving Machine Learning",
    description: "Research on secure machine learning, private data joins, and privacy-preserving LLMs.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
