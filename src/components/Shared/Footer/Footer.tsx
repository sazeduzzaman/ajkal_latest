import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

const Footer = () => {
  const currentYearBangla = new Date()
    .getFullYear()
    .toString()
    .replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);

  return (
    <footer className="bg-black text-white">
      {/* Top Logo */}
      <div className="bg-site">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Image
            src="/images/logo_red.webp"
            alt="সাপ্তাহিক আজকাল || Logo"
            width={200}
            height={50}
            priority
            className="bg-white py-4 px-5"
          />
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div>
          <ul className="space-y-2">
            <li>
              <Link href="/category/news" className="text-lg hover:underline">
                সংবাদ
              </Link>
            </li>
            <li>
              <Link href="/category/sports" className="text-lg hover:underline">
                খেলাধুলা
              </Link>
            </li>
            <li>
              <Link href="/category/entertainment" className="text-lg hover:underline">
                বিনোদন
              </Link>
            </li>
            <li>
              <Link href="/category/technology" className="text-lg hover:underline">
                প্রযুক্তি
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-2">
            <li>
              <Link href="/category/news" className="text-lg hover:underline">
                সংবাদ
              </Link>
            </li>
            <li>
              <Link href="/category/sports" className="text-lg hover:underline">
                খেলাধুলা
              </Link>
            </li>
            <li>
              <Link href="/category/entertainment" className="text-lg hover:underline">
                বিনোদন
              </Link>
            </li>
            <li>
              <Link href="/category/technology" className="text-lg hover:underline">
                প্রযুক্তি
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-2">
            <li>
              <Link href="/epaper" className="text-lg hover:underline">
                ই-পেপার
              </Link>
            </li>
            <li>
              <Link href="/advertisement" className="text-lg hover:underline">
                বিজ্ঞাপন
              </Link>
            </li>
            <li>
              <Link href="/advertisement-pricing" className="text-lg hover:underline">
                বিজ্ঞাপনের মূল্য
              </Link>
            </li>
            <li>
              <Link href="/archive" className="text-lg hover:underline">
                আর্কাইভ
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-lg hover:underline">
                আমাদের সম্পর্কে
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg hover:underline">
                যোগাযোগ
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-lg hover:underline">
                গোপনীয়তা নীতি
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-lg hover:underline">
                শর্তাবলী
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5 - App Download */}
        <div className="flex flex-col gap-3 items-start lg:items-end">
          <h2 className="text-2xl">ডাউনলোড করুন</h2>
          <Image
            src="/images/play.png"
            alt="Play Store"
            width={160}
            height={160}
            className="rounded"
          />
          <Image
            src="/images/applestore.png"
            alt="Apple Store"
            width={160}
            height={160}
            className="rounded"
          />
        </div>
      </div>

      {/* Publisher & Social Media */}
      <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        {/* Publisher */}
        <div>
          <h2 className="text-3xl mb-5">সম্পাদক ও প্রকাশক: শাহ্‌ নেওয়াজ</h2>
          <p>ফোন: +১৬৪৬ ২৬৭-৭৭৫১, ফ্যাক্স: ৭১৮-৮৬৫-৯১৩০</p>
          <p>ঠিকানাঃ ৭১-১৬ ৩৫তম অ্যাভিনিউ, জ্যাকসন হাইটস, নিউ ইয়র্ক ১১৩৭২, মার্কিন যুক্তরাষ্ট্র</p>
          <p>ইমেইল: ajkalnews@gmail.com , editor@ajkalusa.com</p>
          <p>কপিরাইট © {currentYearBangla} সাপ্তাহিক আজকাল কর্তৃক সর্বস্বত্ব ® সংরক্ষিত</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start sm:items-end gap-3">
          <p>অনুসরণ করুন</p>
          <SocialMedia />
        </div>
      </div>

      {/* Legal & Developed By */}
      <div className="bg-red-500 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-white">
          <p className="text-sm">
            এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm">Developed With Love By</p>
            <Link href="https://flixza.com" target="_blank" rel="noopener noreferrer">
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
};

export default Footer;
