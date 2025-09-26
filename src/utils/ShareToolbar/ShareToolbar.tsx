"use client";

import React from "react";
import { BsShare } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import toast from "react-hot-toast";
import MemoizedShareNews from "@/components/ShareNews/ShareNews";

interface ShareToolbarProps {
  title: string;
  slug: string;
  category?: string;
  fontSize?: number;
  handlePrint: () => void;
}

const ShareToolbar: React.FC<ShareToolbarProps> = ({
  title,
  slug,
  category = "uncategory",
  fontSize = 16,
  handlePrint,
}) => {
  const link = `https://weeklyinqilab.com/details/${category}/${slug}`;

  const copyLink = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => toast.success("✅ লিংক কপি হয়েছে!"))
      .catch(() => toast.error("❌ লিংক কপি করা যায়নি"));
  };

  return (
    <div
      className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-2 text-gray-500"
      style={{ fontSize: `${fontSize * 0.85}px` }}
    >
      <span className="mb-3 sm:mb-0">নিউজটি শেয়ার করুন:</span>
      <div className="flex items-center gap-2">
        <BsShare className="text-red-500" size={fontSize * 0.9} />

        <button
          title="লিংক কপি করুন"
          onClick={copyLink}
          className="btn btn-circle btn-sm"
          style={{ fontSize: `${fontSize * 0.85}px` }}
        >
          <FaRegCopy size={fontSize * 0.9} />
        </button>

        <button
          title="প্রিন্ট করুন"
          onClick={handlePrint}
          className="btn btn-circle btn-sm"
          style={{ fontSize: `${fontSize * 0.85}px` }}
        >
          🖨️
        </button>

        <MemoizedShareNews title={title} url={link} />
      </div>
    </div>
  );
};

export default ShareToolbar;
