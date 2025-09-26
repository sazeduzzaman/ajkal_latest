import { NewsItem } from "@/types/CategoryDataType";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryNewsProps {
  items: NewsItem[];
}

const MonstViewdNews: React.FC<CategoryNewsProps> = ({ items }) => {
  // Take only first 6 items
  const mostViewdItems = items.slice(0, 5);

  const fallbackImage = "/images/placeholder.webp";

  return (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-primary">সর্বাধিক পঠিত</h1>
        <div className="flex-1 " style={{ border: "1px solid #e5e7eb" }}></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4 px-0">
        {mostViewdItems.map((item) => (
          <Link
            key={item.id}
            href={`/category/${item.category_id}/news/${item.id}`}
            className="relative h-48 sm:h-56 lg:h-96 group overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={
                item.title_img
                  ? `https://ajkal.us/img/news/${item.title_img}`
                  : fallbackImage
              }
              alt={item.news_title || "News"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Text Overlay */}
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white text-lg sm:text-xl font-bold">
                {item.news_title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MonstViewdNews;
