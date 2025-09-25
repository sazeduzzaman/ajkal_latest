import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";

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
  title: "সাপ্তাহিক আজকাল || Weekly Ajkal",
  description:
    "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
  keywords: [
    "সাপ্তাহিক আজকাল",
    "Weekly Ajkal",
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
    title: "সাপ্তাহিক আজকাল || Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ এর সর্বশেষ খবর পড়ুন সাপ্তাহিক আজকাল এ। সব সময় আপডেট থাকুন।",
    url: "https://weeklyajkal.com",
    siteName: "সাপ্তাহিক আজকাল || Weekly Ajkal",
    type: "website",
    images: [
      {
        url: "/images/og-banner.webp", // ✅ replace with real image
        alt: "সাপ্তাহিক আজকাল || Weekly Ajkal - বাংলা সংবাদ",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "সাপ্তাহিক আজকাল || Weekly Ajkal",
    description:
      "সাপ্তাহিক আজকাল এ সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা, চাকরি ও বিনোদনের খবর পড়ুন।",
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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
