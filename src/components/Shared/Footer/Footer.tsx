import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import FooterMenu from "./FooterMenu";
import { getCategories } from "@/services/categoryData";

export default async function Footer() {
  const categories = await getCategories();
  const currentYearBangla = new Date()
    .getFullYear()
    .toString()
    .replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);

  return (
    <footer className="bg-black text-white">
      {/* Top Logo */}
      <div className="bg-site ">
        <div className="max-w-7xl mx-auto text-center hidden md:block">
          <Image
            src="/images/logo_red.webp"
            alt="আজকাল || Logo"
            width={200}
            height={50}
            priority
            className="bg-white py-4 px-5 "
          />
        </div>
        <div className="max-w-7xl text-center block lg:hidden items-center flex justify-center">
          <Image
            src="/images/logo_red.webp"
            alt="আজকাল || Logo"
            width={200}
            height={50}
            priority
            className="bg-white py-4 px-5 "
          />
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
          {/* Column 1 - Footer Menu */}
          <div className="sm:col-span-1 md:col-span-10">
            <FooterMenu items={categories} />
          </div>

          {/* Column 2 - App Download */}
          <div className="sm:col-span-1 md:col-span-2">
            <div className="flex flex-col gap-3 items-center md:items-end">
              <h2 className="text-2xl">ডাউনলোড করুন</h2>
              <Image
                src="/images/play.png"
                alt="Play Store"
                width={160}
                height={160}
                className="rounded-0"
              />
              <Image
                src="/images/applestore.png"
                alt="Apple Store"
                width={160}
                height={160}
                className="rounded-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Publisher & Social Media */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center text-center md:text-left p-3 md:p-0">
        {/* Publisher */}
        <div>
          <h2 className="text-3xl mb-5">সম্পাদক ও প্রকাশক: শাহ্‌ নেওয়াজ</h2>
          <p>ফোন: +১৬৪৬ ২৬৭-৭৭৫১, ফ্যাক্স: ৭১৮-৮৬৫-৯১৩০</p>
          <p>
            ঠিকানাঃ ৭১-১৬ ৩৫ অ্যাভিনিউ, জ্যাকসন হাইটস, নিউ ইয়র্ক ১১৩৭২, মার্কিন
            যুক্তরাষ্ট্র
          </p>
          <p>ইমেইল: ajkalnews@gmail.com , editor@ajkalusa.com</p>
          <p>
            কপিরাইট © {currentYearBangla} আজকাল কর্তৃক সর্বস্বত্ব ® সংরক্ষিত
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center sm:items-end md:items-start gap-3 justify-end md:justify-start">
          <p>অনুসরণ করুন</p>
          <SocialMedia />
        </div>
      </div>

      {/* Legal & Developed By */}
      <div className="bg-red-500 mt-10 px-4 md:px-0 text-center md:text-left">
        <div className="max-w-7xl mx-auto py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-white">
          <p className="text-sm">
            এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি ছাড়া ব্যবহার
            বেআইনি।
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm">Developed With Love By</p>
            <Link
              href="https://flixza.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://control.ajkal.us/flixzaglobal.webp"
                width={60}
                height={60}
                alt="Flixza Global"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
