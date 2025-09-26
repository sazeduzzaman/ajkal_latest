"use client";

import React from "react";
import {
  MdOutlineTextIncrease,
  MdOutlineTextDecrease,
  MdTextFormat,
} from "react-icons/md";

interface FontSizeControlProps {
  author?: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onReset: () => void;
}

const FontSizeController: React.FC<FontSizeControlProps> = ({
  author,
  onIncrease,
  onDecrease,
  onReset,
}) => {
  const renderButton = (
    onClick: () => void,
    Icon: React.ElementType,
    label: string
  ) => (
    <div className="relative group">
      <button
        className="btn btn-circle bg-white border border-gray-300 shadow-none"
        onClick={onClick}
      >
        <Icon color="black" />
      </button>
      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1  opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </div>
  );

  return (
    <div className=" py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 items-center ">
      {/* Author */}
      <p className="text-red-500 font-bold mb-0">{author}</p>
      {/* Font Size Buttons */}
      <div className="flex gap-3">
        {renderButton(onIncrease, MdOutlineTextIncrease, "Font Increase")}
        {renderButton(onDecrease, MdOutlineTextDecrease, "Font Decrease")}
        {renderButton(onReset, MdTextFormat, "Reset Font")}
      </div>
    </div>
  );
};

export default FontSizeController;
