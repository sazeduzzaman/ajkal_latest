"use client";

import React from "react";
import { FaRegCopy } from "react-icons/fa";
import toast from "react-hot-toast";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

interface ShareToolbarProps {
  title: string | undefined;
  slug: string;
  category?: string | undefined;
  handlePrint?: () => void;
}

const ShareToolbar: React.FC<ShareToolbarProps> = ({
  title,
  slug,
  category,
  handlePrint,
}) => {
  const link = `https://ajkal.us/category/${
    category ?? "uncategory"
  }/news/${slug}`;

  const iconSize = 26; // unified size
  const btnClasses =
    "flex items-center justify-center w-[30px] h-[30px] bg-white rounded-full shadow-sm border border-gray-300 cursor-pointer";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-gray-500">
      <span className="mb-2 sm:mb-0 font-medium">শেয়ার করুন:</span>

      <div className="flex items-center ">
        {/* Facebook */}
        <div className="relative group">
          <FacebookShareButton url={link} title={title} className={btnClasses}>
            <FacebookIcon size={iconSize} round />
          </FacebookShareButton>
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            ফেসবুকে শেয়ার করুন
          </span>
        </div>

        {/* Twitter */}
        <div className="relative group">
          <TwitterShareButton url={link} title={title} className={btnClasses}>
            <TwitterIcon size={iconSize} round />
          </TwitterShareButton>
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            টুইট করুন
          </span>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <LinkedinShareButton url={link} title={title} className={btnClasses}>
            <LinkedinIcon size={iconSize} round />
          </LinkedinShareButton>
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            লিঙ্কডিনে শেয়ার করুন
          </span>
        </div>

        {/* Copy Link */}
        <div className="relative group">
          <button
            className={btnClasses}
            onClick={() => {
              if (!link) return toast.error("❌ লিংক পাওয়া যায়নি");
              navigator.clipboard
                .writeText(link)
                .then(() => toast.success("✅ লিংক কপি হয়েছে!"))
                .catch(() => toast.error("❌ কপি করা যায়নি"));
            }}
          >
            <FaRegCopy size={18} />
          </button>
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            লিংক কপি করুন
          </span>
        </div>

        {/* Print */}
        {handlePrint && (
          <div className="relative group">
            <button className={btnClasses} onClick={handlePrint}>
              🖨️
            </button>
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              প্রিন্ট করুন
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareToolbar;
