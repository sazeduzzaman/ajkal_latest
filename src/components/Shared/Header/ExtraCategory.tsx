"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import { CategoryDataType } from "@/types/CategoryDataType";

interface ExtraCategoryProps {
  categories: CategoryDataType[];
}

const ExtraCategory: React.FC<ExtraCategoryProps> = ({ categories }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="dropdown relative dropdown-hover pt-3 dropdown-end"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="text-white flex items-center cursor-pointer">
        অন্যান্য <HiChevronDown className="ms-1" />
      </span>

      <ul
        className={`dropdown-content menu bg-white rounded-box z-50 w-52 p-2 shadow-lg absolute transition-all duration-200 ${
          open ? "block" : "hidden"
        }`}
      >
        {categories.map((cat) => (
          <li key={cat.id}>
            <a
              href={`/category/${cat.name.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:bg-gray-200 rounded"
            >
              {cat.name_bangla}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraCategory;
