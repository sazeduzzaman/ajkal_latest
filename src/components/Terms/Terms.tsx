"use client";
import React, { useState } from "react";

const Terms = () => {
  const [activeTab, setActiveTab] = useState<"bangla" | "english">("bangla");

  const banglaContent = (
    <div className="space-y-8 text-gray-800">
      <h1 className="text-3xl font-bold text-primary border-b-2 border-primary pb-2">
        শর্তাবলী
      </h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">
          সেবা ব্যবহারের শর্ত
        </h2>
        <p>
          সাপ্তাহিক আজকাল এর ওয়েবসাইট এবং পরিষেবাগুলি ব্যবহারের মাধ্যমে,
          ব্যবহারকারী এই শর্তাবলী মেনে চলতে সম্মত হন। ব্যবহারকারী কেবল বৈধ
          উদ্দেশ্যে ওয়েবসাইট ব্যবহার করবেন এবং কোনো অবৈধ বা ক্ষতিকর কার্যকলাপে
          জড়িত থাকবেন না।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">
          মুল্য এবং পেমেন্ট
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            কোনও সাবস্ক্রিপশন বা পরিষেবার জন্য পেমেন্ট করলে তা নির্দিষ্ট শর্ত
            অনুযায়ী প্রযোজ্য হবে।
          </li>
          <li>
            পেমেন্ট পদ্ধতি নিরাপদ এবং অনুমোদিত গেটওয়ে দ্বারা সম্পন্ন হতে হবে।
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">
          কপিরাইট এবং কন্টেন্ট ব্যবহার
        </h2>
        <p>
          ওয়েবসাইটে প্রকাশিত সমস্ত কনটেন্ট (সংবাদ, ছবি, ভিডিও) কপিরাইট দ্বারা
          সুরক্ষিত। ব্যবহারকারীরা শুধুমাত্র ব্যক্তিগত এবং অ-কমার্শিয়াল
          উদ্দেশ্যে কনটেন্ট ব্যবহার করতে পারবেন। যেকোনো বাণিজ্যিক ব্যবহারের জন্য
          অনুমোদন প্রয়োজন।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">জবাবদিহিতা</h2>
        <p>
          সাপ্তাহিক আজকাল ওয়েবসাইটের তথ্যের সঠিকতার জন্য সর্বোচ্চ চেষ্টা করে।
          তবে, আমরা কোনো তথ্যের সম্পূর্ণতা বা নির্ভুলতার নিশ্চয়তা দিই না।
          ব্যবহারকারী তথ্যের ব্যবহার নিজ দায়িত্বে করবেন।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">গোপনীয়তা</h2>
        <p>
          ব্যবহারকারীর তথ্য সুরক্ষিত এবং আমাদের <strong>গোপনীয়তা নীতি</strong>{" "}
          অনুযায়ী ব্যবহার করা হবে। ব্যবহারকারীরা তাদের তথ্য সংক্রান্ত যে কোনো
          প্রশ্ন বা উদ্বেগ আমাদের ইমেইলে জানাতে পারবেন।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">নীতি পরিবর্তন</h2>
        <p>
          এই শর্তাবলী সময়ে সময়ে পরিবর্তিত হতে পারে। নতুন শর্তাবলী ওয়েবসাইটে
          প্রকাশ করা হবে। নিয়মিত যাচাই করার জন্য আমরা ব্যবহারকারীদের উৎসাহিত
          করি।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">যোগাযোগ</h2>
        <p>
          শর্তাবলী সংক্রান্ত যে কোনো প্রশ্নের জন্য আমাদের{" "}
          <strong>info@ajkalusa.com</strong> ইমেইলে যোগাযোগ করুন।
        </p>
      </section>
    </div>
  );

  const englishContent = (
    <div className="space-y-8 text-gray-800">
      <h1 className="text-3xl font-bold text-primary border-b-2 border-primary pb-2">
        Terms & Conditions
      </h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Use of Service</h2>
        <p>
          By accessing and using the Weekly Ajkal website and services, users
          agree to comply with these terms. Users shall use the website for
          lawful purposes only and not engage in any unlawful or harmful
          activities.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">
          Payment and Pricing
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Payments for subscriptions or services are subject to specified
            terms.
          </li>
          <li>
            Payment methods must be completed securely through authorized
            gateways.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">
          Copyright and Content Use
        </h2>
        <p>
          All content on the website (news, images, videos) is protected by
          copyright. Users may only use content for personal and non-commercial
          purposes. Commercial use requires permission.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Liability</h2>
        <p>
          Weekly Ajkal strives for accuracy in all published content. However,
          we do not guarantee the completeness or accuracy of information. Users
          access and use content at their own risk.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Privacy</h2>
        <p>
          User data is protected and handled according to our{" "}
          <strong>Privacy Policy</strong>. Users may contact us via email
          regarding questions or concerns about their data.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Policy Changes</h2>
        <p>
          These terms may be updated from time to time. Updated terms will be
          posted on the website. Users are encouraged to review the terms
          regularly.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Contact</h2>
        <p>
          For any questions regarding these terms, please contact us at{" "}
          <strong>info@ajkalusa.com</strong>.
        </p>
      </section>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex justify-start mb-10 gap-4 border-b border-gray-300">
        <button
          onClick={() => setActiveTab("bangla")}
          className={`px-6 py-3 font-semibold rounded-t-lg transition-colors ${
            activeTab === "bangla"
              ? "bg-primary text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          বাংলা
        </button>
        <button
          onClick={() => setActiveTab("english")}
          className={`px-6 py-3 font-semibold rounded-t-lg transition-colors ${
            activeTab === "english"
              ? "bg-primary text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          English
        </button>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === "bangla" ? banglaContent : englishContent}
      </div>
    </div>
  );
};

export default Terms;
