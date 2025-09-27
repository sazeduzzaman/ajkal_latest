import React from "react";
import { FaPhoneAlt, FaEnvelope, FaBullhorn } from "react-icons/fa";

const page = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <FaBullhorn className="text-white text-3xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          বিজ্ঞাপনের জন্য যোগাযোগ করুন
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          আপনার ব্যবসা বা সেবার বিজ্ঞাপন আমাদের পত্রিকায় প্রকাশ করতে চান?{" "}
          <br />
          আজই যোগাযোগ করুন এবং আরো মানুষের কাছে পৌঁছে যান।
        </p>

        {/* Contact Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <div className="space-y-4">
            <p className="flex items-center justify-center text-xl font-semibold text-gray-700">
              <FaPhoneAlt className="text-primary mr-2" />
              ফোন: <span className="ml-2 text-primary">০১৭১২৩৪৫৬৭৮</span>
            </p>
            <p className="flex items-center justify-center text-xl font-semibold text-gray-700">
              <FaEnvelope className="text-primary mr-2" />
              ইমেইল:{" "}
              <span className="ml-2 text-primary">advertise@ajkal.us</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="tel:01712345678"
              className="inline-block px-8 py-3 bg-primary text-white text-lg font-bold rounded-full shadow-md hover:bg-blue-700 transition"
            >
              এখনই কল করুন
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-gray-500 text-sm">
          আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে।
        </p>
      </div>
    </div>
  );
};

export default page;
