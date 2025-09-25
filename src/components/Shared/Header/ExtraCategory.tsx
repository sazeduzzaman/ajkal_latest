"use client";
import React, { useState, useEffect, useRef } from "react";
import { HiChevronDown } from "react-icons/hi";

const ExtraCategory = () => {
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="dropdown relative dropdown-hover pt-3 dropdown-end"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="text-white flex items-center">
        অন্যান্য <HiChevronDown className="ms-1" />
      </span>

      <ul
        className={`dropdown-content menu bg-white rounded-box z-50 w-52 p-2 shadow-lg absolute transition-all duration-200 ${
          open ? "block" : "hidden"
        }`}
      >
        <li>
          <a
            onClick={() => setOpen(false)}
            className="hover:bg-gray-200 rounded"
          >
            Item 1
          </a>
        </li>
        <li>
          <a
            onClick={() => setOpen(false)}
            className="hover:bg-gray-200 rounded"
          >
            Item 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ExtraCategory;
