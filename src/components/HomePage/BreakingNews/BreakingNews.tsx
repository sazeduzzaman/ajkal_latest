import { NewsItem } from "@/types/CategoryDataType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryNewsProps {
  items: NewsItem[];
}
const BreakingNews: React.FC<CategoryNewsProps> = ({ items }) => {
  // Take only first 6 items
  const breakingNewsItems = items.slice(0, 4);

  const fallbackImage = "/images/placeholder.webp";
  return (
    <div className="px-4 md:px-0">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-primary">বিশেষ প্রতিবেদন</h1>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
            {breakingNewsItems.map((item) => (
              <Link
                key={item.id}
                href={`/${item.category_name}/${item.category_id}/news/${item.id}`}
                className="group flex flex-col overflow-hidden bg-transparent border border-gray-200"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 lg:h-50 w-full">
                  <Image
                    src={
                      item.title_img
                        ? `https://ajkal.us/img/news/${item.title_img}`
                        : "/images/placeholder.webp"
                    }
                    alt={item.news_title || "News"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between p-3">
                  {/* Title */}
                  <h3 className="text-xl mb-1 text-black font-semibold">
                    {item.news_title}
                  </h3>

                  {/* Short description */}
                  <p className="text-lg text-gray-700 mb-2 line-clamp-2">
                    {item.news_short_brief || ""}
                  </p>

                  {/* Category name always at bottom */}
                  <p className="text-xs text-gray-500 mt-auto">
                    {item.category_name_bangla || "Category"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
