// app/category/[id]/news/[newsId]/page.tsx
import React from "react";
import { Metadata } from "next";
import NewsDetails from "@/components/NewsDetails/NewsDetails";

interface NewsDetailItem {
  id: number;
  news_title: string;
  news_detail: string;
  title_img: string;
  category_name_bangla: string;
  news_time: string;
}

interface NewsDetailResponse {
  data: NewsDetailItem;
}

// ---------------------------
// Helper: Fetch news detail once
// ---------------------------
async function fetchNewsDetail(newsId: string): Promise<NewsDetailItem | null> {
  try {
    const res = await fetch(
      `https://backoffice.ajkal.us/news-detail/${newsId}`,
      {
        next: { revalidate: 1 }, // cache revalidation
      }
    );

    if (!res.ok) return null;

    const json: NewsDetailResponse = await res.json();
    return json.data;
  } catch (error) {
    return null;
  }
}

// ---------------------------
// Dynamic Metadata
// ---------------------------
export async function generateMetadata({
  params,
}: {
  params: { newsId: string };
}): Promise<Metadata> {
  const { newsId } =await params; // <-- just destructure, no await
  const news = await fetchNewsDetail(newsId);

  if (!news) {
    return {
      title: "সংবাদ বিস্তারিত - Error",
      description: "সংবাদ ডেটা পাওয়া যায়নি।",
    };
  }

  return {
    title: news.news_title,
    description: news.news_detail.slice(0, 160),
    keywords: ["সংবাদ", "বাংলা", "নিউজ", "বাংলাদেশ"],
    openGraph: {
      title: news.news_title,
      description: news.news_detail.slice(0, 160),
      images: [
        {
          url: news.title_img
            ? `https://ajkal.us/img/news/${news.title_img}`
            : "/images/placeholderImage.webp",
          alt: news.category_name_bangla,
        },
      ],
    },
  };
}

// ---------------------------
// Page Component
// ---------------------------
export default async function NewsDetailPage({
  params,
}: {
  params: { newsId: string };
}) {
  const { newsId } = await params; // <-- synchronous, no await
  const news = await fetchNewsDetail(newsId);

  if (!news) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-4xl font-bold">কোনো সংবাদ পাওয়া যায়নি</h2>
      </div>
    );
  }

  return <NewsDetails item={news} />;
}
