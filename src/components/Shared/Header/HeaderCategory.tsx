import Link from "next/link";
import React from "react";

const categories = [
  { name: "সংবাদ", href: "/category/news" },
  { name: "খেলাধুলা", href: "/category/sports" },
  { name: "বিনোদন", href: "/category/entertainment" },
  { name: "প্রযুক্তি", href: "/category/technology" },
  { name: "চাকরি", href: "/category/jobs" },
  { name: "স্বাস্থ্য", href: "/category/health" },
  { name: "লাইফস্টাইল", href: "/category/lifestyle" },
  { name: "রাজনীতি", href: "/category/politics" },
  { name: "অর্থনীতি", href: "/category/economy" },
  { name: "শিক্ষা", href: "/category/education" },
  { name: "ভ্রমণ", href: "/category/travel" },
  { name: "ফিচার", href: "/category/features" },
];

const HeaderCategory = () => {
  return (
    <nav className="bg-white shadow bg-site mobile-none">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-6 justify-center">
          {categories.map((cat) => (
            <div key={cat.name} className="menu-border pe-6 py-3">
              <Link
                href={cat.href}
                className="text-white  transition-colors font-medium"
              >
                {cat.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default HeaderCategory;
