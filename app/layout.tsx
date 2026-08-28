import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shuyu-c.github.io"),
  title: "陈姝宇 Shuyu Chen · Homepage",
  description:
    "Shuyu Chen is a Ph.D. student in Data Science at Fudan University, working on secure multi-party computation and privacy-preserving machine learning.",
  icons: {
    icon: "/portrait.jpg",
    shortcut: "/portrait.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://shuyu-c.github.io",
    title: "Shuyu Chen · Homepage",
    description: "Ph.D. student at Fudan University working on secure multi-party computation and privacy-preserving machine learning.",
    images: [{ url: "/og.png", width: 1792, height: 1024, alt: "Shuyu Chen — Privacy-Preserving Machine Learning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shuyu Chen · Homepage",
    description: "Ph.D. student at Fudan University working on secure multi-party computation and privacy-preserving machine learning.",
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
