import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shuyu-c.github.io"),
  title: "陈姝宇 Shuyu Chen · Privacy-Preserving Machine Learning",
  description:
    "Shuyu Chen received her Ph.D. in Data Science from Fudan University and researches secure multi-party computation and privacy-preserving machine learning.",
  icons: {
    icon: "/portrait.jpg",
    shortcut: "/portrait.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://shuyu-c.github.io",
    title: "Shuyu Chen · Privacy-Preserving Machine Learning",
    description: "Secure multi-party computation, vulnerability detection, privacy-preserving machine learning, and secure data alignment.",
    images: [{ url: "/og.png", width: 1792, height: 1024, alt: "Shuyu Chen — Privacy-Preserving Machine Learning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shuyu Chen · Privacy-Preserving Machine Learning",
    description: "Secure multi-party computation, vulnerability detection, privacy-preserving machine learning, and secure data alignment.",
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
