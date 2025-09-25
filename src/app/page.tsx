import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "সাপ্তাহিক আজকাল || Weekly Ajkal - সর্বশেষ বাংলা সংবাদ",
  description:
    "সাপ্তাহিক আজকাল এ পড়ুন সর্বশেষ বাংলা খবর, রাজনীতি, খেলাধুলা, বিনোদন ও আরও অনেক কিছু। বাংলাদেশ ও বিশ্বের আপডেট সংবাদ সবার আগে।",
  keywords: [
    "সাপ্তাহিক আজকাল",
    "Weekly Ajkal",
    "বাংলা খবর",
    "নিউজ",
    "বাংলাদেশ",
    "খেলা",
    "রাজনীতি",
    "বিনোদন",
  ],
  metadataBase: new URL("https://ajkal.us"), // update to your domain
  openGraph: {
    title: "সাপ্তাহিক আজকাল || Weekly Ajkal - বাংলা খবর",
    description:
      "বাংলাদেশ ও বিশ্বের সর্বশেষ সংবাদ পড়ুন সাপ্তাহিক আজকাল এ। সব সময় আপডেট থাকুন।",
    url: "https://ajkal.us",
    siteName: "সাপ্তাহিক আজকাল || Weekly Ajkal",
    type: "website",
    images: [
      {
        url: "/images/placeholderImage.webp",
        alt: "সাপ্তাহিক আজকাল || Weekly Ajkal - বাংলা খবর",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "সাপ্তাহিক আজকাল || Weekly Ajkal - বাংলা সংবাদ",
    description:
      "সাপ্তাহিক আজকাল এ সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা ও বিনোদনের খবর পড়ুন।",
    images: ["/images/placeholderImage.webp"],
  },
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto h-screen">
      Home
    </div>
  );
}
