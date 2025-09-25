// app/components/HeaderCategory.tsx
import Link from "next/link";
import React from "react";
import ExtraCategory from "./ExtraCategory";
import { CategoryDataType } from "@/types/CategoryDataType";
import { getCategories } from "@/services/categoryData";

const HeaderCategory = async () => {
  // Fetch categories from API
  const categories: CategoryDataType[] = await getCategories();
  const sortedCategories = categories.slice(0, 10); // Show only first 5 categories
  const extraCategories = categories.slice(10); // Show only first 5 categories

  return (
    <nav className="bg-site mobile-none shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-6 justify-center">
          {sortedCategories.map((cat) => (
            <div key={cat.id} className="menu-border pe-6 py-3">
              <Link
                href={`/category/${cat.name.toLowerCase()}`} // or any slug logic
                className="text-white transition-colors font-medium"
              >
                {cat.name_bangla}
              </Link>
            </div>
          ))}
          <ExtraCategory categories={extraCategories} />
        </div>
      </div>
    </nav>
  );
};

export default HeaderCategory;
