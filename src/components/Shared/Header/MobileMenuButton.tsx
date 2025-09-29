"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MobileMenuButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showLayer1, setShowLayer1] = useState(false);
  const [showLayer2, setShowLayer2] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  // Staggered animation
  useEffect(() => {
    if (open) {
      setTimeout(() => setShowLayer1(true), 100);
      setTimeout(() => setShowLayer2(true), 250);
      setTimeout(() => setShowOverlay(true), 400);
      setTimeout(() => setShowDrawer(true), 600);
    } else {
      setShowDrawer(false);
      setShowOverlay(false);
      setShowLayer2(false);
      setShowLayer1(false);
    }
  }, [open]);

  const handleNavigate = (path: string) => {
    setOpen(false); // Close the drawer first
    router.push(path); // Navigate programmatically
  };

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="btn btn-info bg-site border-0 text-white h-21 px-3 flex items-center justify-center"
      >
        {open ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      {/* Layered Drawer */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        {/* Layer 1 */}
        <div
          className={`absolute top-0 left-0 h-full w-full bg-gray-200/30 transform transition-transform duration-700 ${
            showLayer1 ? "translate-x-0" : "-translate-x-full"
          } pointer-events-none`}
        />
        {/* Layer 2 */}
        <div
          className={`absolute top-0 left-0 h-full w-full bg-gray-300/50 transform transition-transform duration-700 ${
            showLayer2 ? "translate-x-0" : "-translate-x-full"
          } pointer-events-none`}
        />
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
            showOverlay ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 left-0 h-full w-80 bg-white backdrop-blur-md shadow-2xl rounded-r-3xl transform transition-transform duration-500 pointer-events-auto ${
            showDrawer ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="p-6 flex justify-between items-center border-b border-gray-200">
            <Image
              src="/images/logo_red.webp"
              alt="Logo"
              width={160}
              height={50}
              priority
            />
            <button
              onClick={() => setOpen(false)}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Scrollable Menu */}
          <ul className="menu p-6 flex flex-col gap-4 overflow-y-auto max-h-[calc(100%-100px)]">
            <li>
              <button
                onClick={() => handleNavigate("/archive")}
                className="text-gray-700 hover:text-red-500 font-medium transition text-left w-full"
              >
                Archive
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("/about")}
                className="text-gray-700 hover:text-red-500 font-medium transition text-left w-full"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("/contact")}
                className="text-gray-700 hover:text-red-500 font-medium transition text-left w-full"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("/privacy")}
                className="text-gray-700 hover:text-red-500 font-medium transition text-left w-full"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("/terms")}
                className="text-gray-700 hover:text-red-500 font-medium transition text-left w-full"
              >
                Terms & Conditions
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
