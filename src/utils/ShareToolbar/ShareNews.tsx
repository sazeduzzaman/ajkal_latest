"use client";

import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

interface ShareNewsProps {
  url: string;
  title?: string;
}

const ShareNews: React.FC<ShareNewsProps> = ({ url, title }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Facebook */}
      <div className="relative group">
        <FacebookShareButton url={url} title={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ফেসবুকে শেয়ার করুন
        </span>
      </div>

      {/* Twitter */}
      <div className="relative group">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          টুইট করুন
        </span>
      </div>

      {/* LinkedIn */}
      <div className="relative group">
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          লিঙ্কডিনে শেয়ার করুন
        </span>
      </div>
    </div>
  );
};

export default ShareNews;
