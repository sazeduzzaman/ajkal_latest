import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const HeaderCenter = () => {
  return (
    <div className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center bg-white py-2 px-3 lg:px-0">
          <div className="mt-1">
            <Link href="/">
              <Image
                src="/images/logo_red.webp"
                alt="আজকাল || Logo"
                width={260}
                height={50}
                priority
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block w-full max-w-[950px] pe-3 ">
              <Image
                src="/images/ad-placeholder.webp"
                alt="Advertisement"
                width={950}
                height={60}
                className=" w-full object-contain"
                priority
              />
            </div>
            <div>
              <Link
                href="/archive"
                className="btn btn-info bg-site border-0 text-white h-21  px-3"
              >
                <IoIosSearch className="" size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;
