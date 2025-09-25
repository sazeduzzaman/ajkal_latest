import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMenuSharp } from "react-icons/io5";

const HeaderCenter = () => {
  return (
    <div className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center bg-white py-2 px-3 lg:px-0">
          <div className="mt-1">
            <Image
              src="/images/logo_red.webp"
              alt="সাপ্তাহিক আজকাল || Logo"
              width={260}
              height={50}
              priority
            />
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block w-full max-w-[950px] pe-3 ">
              <Image
                src="/images/ad-placeholder.webp"
                alt="Advertisement"
                width={950}
                height={60}
                className="rounded-[5px] w-full object-contain"
                priority
              />
            </div>
            <div>
              <Link href="/epaper" className="btn btn-info bg-site border-0 text-white h-21 rounded-[5px] px-3">
                <IoMenuSharp className="" size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;
