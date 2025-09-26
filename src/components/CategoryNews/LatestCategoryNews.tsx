import { NewsItem } from "@/types/CategoryDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import Link from "next/link";
import React from "react";

interface CategoryNewsProps {
  items: NewsItem[];
}

const LatestCategoryNews: React.FC<CategoryNewsProps> = ({ items }) => {
  const displayItems = items.slice(0, 5);
  const fallbackImage = "/images/placeholder.webp";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
      {displayItems.map((news) => (
        <div
          key={news.id}
          className="relative h-70 overflow-hidden group cursor-pointer shadow-lg"
        >
          <Link href={`/category/${news.category_id}/news/${news.id}`}>
            {/* Background Image with fallback */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(https://ajkal.us/img/news/${news.title_img}), url(${fallbackImage})`,
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

            {/* Title */}
            <div className="absolute bottom-0 p-2 text-white text-xl">
              {news.news_title} <br />
              <span className="text-sm text-gray-300">
                <NewsTimeShower newsTime={news.news_time} />
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LatestCategoryNews;
