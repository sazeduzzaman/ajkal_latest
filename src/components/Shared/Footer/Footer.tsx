import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <div>
      <div className="bg-site">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <Image
            src="/images/logo_red.webp"
            alt="সাপ্তাহিক আজকাল || Logo"
            width={200}
            height={50}
            priority
            className="bg-white py-3"
          />
        </div>
      </div>
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/category/news" className="text-lg mb-1">
                  সংবাদ
                </Link>
              </li>
              <li>
                <Link href="/category/sports" className="text-lg mb-1">
                  খেলাধুলা
                </Link>
              </li>
              <li>
                <Link href="/category/entertainment" className="text-lg mb-1">
                  বিনোদন
                </Link>
              </li>
              <li>
                <Link href="/category/technology" className="text-lg mb-1">
                  প্রযুক্তি
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/category/news" className="text-lg mb-1">
                  সংবাদ
                </Link>
              </li>
              <li>
                <Link href="/category/sports" className="text-lg mb-1">
                  খেলাধুলা
                </Link>
              </li>
              <li>
                <Link href="/category/entertainment" className="text-lg mb-1">
                  বিনোদন
                </Link>
              </li>
              <li>
                <Link href="/category/technology" className="text-lg mb-1">
                  প্রযুক্তি
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/epaper" className="text-lg mb-1">
                  ই-পেপার
                </Link>
              </li>
              <li>
                <Link href="/advertisement" className="text-lg mb-1">
                  বিজ্ঞাপন
                </Link>
              </li>
              <li>
                <Link href="/advertisement-pricing" className="text-lg mb-1">
                  বিজ্ঞাপনের মূল্য
                </Link>
              </li>
              <li>
                <Link href="/archive" className="text-lg mb-1">
                  আর্কাইভ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/about" className="text-lg mb-1">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg mb-1">
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-lg mb-1">
                  গোপনীয়তা নীতি
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-lg mb-1">
                  শর্তাবলী
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="text-end">
            <h1 className="text-2xl">ডাউনলোড করুন</h1>
            <div className="flex justify-end items-end gap-3 mt-4 flex-col">
              <Image
                src="/images/play.png" // local path inside public/
                alt="Flixza Global"
                width={160}
                height={160}
                className=""
              />
              <Image
                src="/images/applestore.png" // local path inside public/
                alt="Flixza Global"
                width={160}
                height={160}
                className=""
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto  mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Column 1 */}
          <div>
            <h2 className="text-3xl mb-5">সম্পাদক ও প্রকাশক : শাহ্‌ নেওয়াজ</h2>
            <p>ফোন: +১৬৪৬ ২৬৭-৭৭৫১, ফ্যাক্স: ৭১৮-৮৬৫-৯১৩০</p>
            <p>
              ঠিকানাঃ ৭১-১৬ ৩৫তম অ্যাভিনিউ, জ্যাকসন হাইটস, নিউ ইয়র্ক ১১৩৭২,
              মার্কিন যুক্তরাষ্ট্র
            </p>
            <p>ইমেইল: ajkalnews@gmail.com , editor@ajkalusa.com</p>
            <p>
              কপিরাইট ©{" "}
              {new Date()
                .getFullYear()
                .toString()
                .replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)])}{" "}
              সাপ্তাহিক আজকাল কর্তৃক সর্বস্বত্ব ® সংরক্ষিত
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-end flex justify-end items-end flex-col">
            <p className="mb-4">অনুসরণ করুন</p>
            <SocialMedia />
          </div>
        </div>
      </footer>
      <div className="bg-red-500">
        <div className="max-w-7xl text-white py-4 mx-auto text-center flex justify-between items-center">
          <p className="text-sm">
            এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি ছাড়া ব্যবহার
            বেআইনি।
          </p>
          <div className="flex justify-center items-center">
            <p className="text-sm pe-2">Developed With Love By</p>
            <Image
              src="https://control.ajkal.us/flixzaglobal.webp" // local path inside public/
              alt="Flixza Global"
              width={60}
              height={60}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
