import type { Metadata } from "next";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://garr007.github.io"),
  title: "Muhammad Tegar Abhiram | Data Science & AI Engineer",
  description:
    "Portfolio website showcasing AI, Data Science, and Computer Vision projects. Specialized in TensorFlow, YOLO, and machine learning.",
  keywords: [
    "Data Science",
    "AI Engineer",
    "Computer Vision",
    "Machine Learning",
    "Python",
    "YOLOv11",
    "TensorFlow",
    "Bogor",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Tegar Abhiram" }],
  openGraph: {
    title: "Muhammad Tegar Abhiram | Data Science & AI Engineer",
    description: "Building intelligent systems from data to deployment.",
    url: "https://github.com/garr007",
    siteName: "Tegar Portfolio",
    images: [
      {
        url: "/assets/desktop-view.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Tegar Abhiram Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
