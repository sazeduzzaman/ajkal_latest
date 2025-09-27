import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";
import ScrollToTop from "@/utils/ScrollToTop/ScrollToTop";
import BackToTopButton from "@/utils/ScrollToTop/BackToTopButton";

// ✅ Local Bangla font setup
const shurjo = localFont({
  display: "swap", // bonus tip: improves font loading
  src: [
    {
      path: "./Font/Shurjo/Shurjo-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Font/Shurjo/Shurjo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

// ✅ SEO & social metadata
export const metadata: Metadata = {
  title: "আজকাল || Ajkal",
  description:
    "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
  keywords: [
    "আজকাল",
    "Ajkal",
    "বাংলা খবর",
    "বাংলাদেশ সংবাদ",
    "খেলাধুলা",
    "রাজনীতি",
    "চাকরি",
    "বিনোদন",
    "স্বাস্থ্য",
    "লাইফস্টাইল",
  ],
  metadataBase: new URL("https://weeklyajkal.com"),
  openGraph: {
    title: "আজকাল || Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ এর সর্বশেষ খবর পড়ুন আজকাল এ। সব সময় আপডেট থাকুন।",
    url: "https://weeklyajkal.com",
    siteName: "আজকাল || Ajkal",
    type: "website",
    images: [
      {
        url: "/images/og-banner.webp", // ✅ replace with real image
        alt: "আজকাল || Ajkal - বাংলা সংবাদ",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "আজকাল || Ajkal",
    description:
      "আজকাল এ সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা, চাকরি ও বিনোদনের খবর পড়ুন।",
    images: ["/images/og-banner.webp"], // ✅ same image for Twitter
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ✅ Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className={`${shurjo.className} antialiased overflow-x-hidden`}>
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollToTop />
        <Header />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
