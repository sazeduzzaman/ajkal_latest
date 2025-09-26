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
  title: string;
  slug: string;
  category?: string;
  handlePrint?: () => void;
}

const ShareToolbar: React.FC<ShareToolbarProps> = ({
  title,
  slug,
  category,
  handlePrint,
}) => {
  const link = `https://weeklyinqilab.com/details/${
    category ?? "uncategory"
  }/${slug}`;

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-3 text-gray-500">
      <span className="mb-2 sm:mb-0 font-medium">নিউজটি শেয়ার করুন:</span>

      <div className="flex items-center gap-2">
        {/* Facebook */}
        <div className="relative group">
          <FacebookShareButton url={link} title={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            ফেসবুকে শেয়ার করুন
          </span>
        </div>

        {/* Twitter */}
        <div className="relative group">
          <TwitterShareButton url={link} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            টুইট করুন
          </span>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <LinkedinShareButton url={link} title={title}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            লিঙ্কডিনে শেয়ার করুন
          </span>
        </div>

        {/* Copy Link */}
        <div className="relative group">
          <button
            className="btn btn-circle btn-sm"
            onClick={() => {
              navigator.clipboard
                .writeText(link)
                .then(() => toast.success("✅ লিংক কপি হয়েছে!"))
                .catch(() => toast.error("❌ লিংক কপি করা যায়নি"));
            }}
          >
            <FaRegCopy size={18} />
          </button>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            লিংক কপি করুন
          </span>
        </div>

        {/* Print */}
        {handlePrint && (
          <div className="relative group">
            <button className="btn btn-circle btn-sm" onClick={handlePrint}>
              🖨️
            </button>
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              প্রিন্ট করুন
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareToolbar;
