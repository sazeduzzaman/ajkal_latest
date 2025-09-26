"use client";

import React from "react";
import { BsShare } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import {
  MdOutlineTextIncrease,
  MdOutlineTextDecrease,
  MdTextFormat,
} from "react-icons/md";
import toast from "react-hot-toast";
import ShareNews from "./ShareNews";

interface ShareToolbarProps {
  title: string;
  slug: string;
  category?: string;
  fontSize: number;
  handlePrint: () => void;
  increaseFont?: () => void;
  decreaseFont?: () => void;
  resetFont?: () => void;
}

const ShareToolbar: React.FC<ShareToolbarProps> = ({
  title,
  slug,
  category,
  fontSize,
  handlePrint,
}) => {
  const link = `https://weeklyinqilab.com/details/${
    category ?? "uncategory"
  }/${slug}`;

  return (
    <div
      className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-3 text-gray-500"
      style={{ fontSize: `${fontSize * 0.85}px` }}
    >
      <span className="mb-2 sm:mb-0 font-medium">নিউজটি শেয়ার করুন:</span>

      <div className="flex items-center gap-2">
        {/* Social Share */}
        <ShareNews url={link} title={title} />

        {/* Copy Link */}
        <button
          title="লিংক কপি করুন"
          onClick={() => {
            navigator.clipboard
              .writeText(link)
              .then(() => toast.success("✅ লিংক কপি হয়েছে!"))
              .catch(() => toast.error("❌ লিংক কপি করা যায়নি"));
          }}
          className="btn btn-circle btn-sm"
          style={{ fontSize: `${fontSize * 0.85}px` }}
        >
          <FaRegCopy size={fontSize * 0.9} />
        </button>

        {/* Print */}
        <button
          title="প্রিন্ট করুন"
          onClick={handlePrint}
          className="btn btn-circle btn-sm"
          style={{ fontSize: `${fontSize * 0.85}px` }}
        >
          🖨️
        </button>
      </div>
    </div>
  );
};

export default ShareToolbar;
