import Link from "next/link";
import React from "react";

const TopMenus = () => {
  const menus = [
    { name: "বিজ্ঞাপন", href: "/advertisement" },
    { name: "ই-পেপার", href: "/epaper" },
    { name: "আর্কাইভ", href: "/archive" },
    { name: "বিজ্ঞাপনের মূল্য", href: "/advertisement-pricing" },
  ];

  return (
    <div className="flex space-x-6 text-sm text-white">
      {menus.map((menu) => (
        <Link
          key={menu.name}
          href={menu.href}
          className="hover:text-gray-300 transition-colors"
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
};

export default TopMenus;
