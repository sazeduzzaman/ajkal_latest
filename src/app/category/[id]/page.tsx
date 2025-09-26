export const dynamic = "force-dynamic";

import CategoryNews from "@/components/CategoryNews/CategoryNews";
import { NewsItem } from "@/types/CategoryDataType";
import CurrentTimeShower from "@/utils/CurrentTimeShower/CurrentTimeShower";

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Use static metadata to avoid extra API fetch
  // const { id } = await params;
  return {
    title: `সাপ্তাহিক ইনকিলাব - সর্বশেষ বাংলা খবর`,
    description: `সাপ্তাহিক ইনকিলাব এ সর্বশেষ বাংলা সংবাদ, রাজনীতি, খেলাধুলা, বিনোদন, এবং আরও অনেক বিষয় পড়ুন। সর্বদা আপডেট থাকুন।`,
    keywords: [
      "সাপ্তাহিক ইনকিলাব",
      "বাংলা সংবাদ",
      "নিউজ",
      "বাংলাদেশ",
      "খেলা",
      "বিনোদন",
    ],
    openGraph: {
      title: `সাপ্তাহিক ইনকিলাব - সর্বশেষ বাংলা খবর`,
      description: `সাপ্তাহিক ইনকিলাব এ সর্বশেষ বাংলা সংবাদ, রাজনীতি, খেলাধুলা, বিনোদন, এবং আরও অনেক বিষয় পড়ুন। সর্বদা আপডেট থাকুন।`,
      images: [
        {
          url: "/images/placeholderImage.webp",
          alt: "সাপ্তাহিক ইনকিলাব - সর্বশেষ বাংলা খবর",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  // Fetch category news with caching
  const res = await fetch(`https://backoffice.ajkal.us/category-news/${id}`, {
    next: { revalidate: 10 }, // Cache for 10 seconds
  });

  if (!res.ok) {
    return (
      <div className="text-center justify-center items-center flex h-screen">
        <div>
          <h2 className="text-4xl font-bold text-gray-700">
            কোনো সংবাদ পাওয়া যায়নি
          </h2>
          <p className="mt-2 text-gray-500">
            অনুগ্রহ করে পরে আবার চেষ্টা করুন অথবা অন্য ক্যাটেগরি নির্বাচন করুন।
          </p>
        </div>
      </div>
    );
  }

  const json = await res.json();
  const categoryName = json.data[0].category_name_bangla ?? {};
  const categoryItems: NewsItem[] = Array.isArray(json.data) ? json.data : [];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-4 mb-4 border-b flex flex-col md:flex-row justify-between">
        <p className="font-semibold text-xl">
          {categoryName ?? "অনির্ধারিত"} নিউজ
        </p>
        <CurrentTimeShower />
      </div>

      {categoryItems.length > 0 ? (
        <CategoryNews items={categoryItems} />
      ) : (
        <div className="text-center justify-center items-center flex h-screen">
          <div>
            <h2 className="text-4xl font-bold text-gray-700">
              কোনো সংবাদ পাওয়া যায়নি
            </h2>
            <p className="mt-2 text-gray-500">
              অনুগ্রহ করে পরে আবার চেষ্টা করুন অথবা অন্য ক্যাটেগরি নির্বাচন
              করুন।
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
