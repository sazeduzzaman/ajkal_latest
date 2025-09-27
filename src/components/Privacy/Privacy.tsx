"use client";
import React, { useState } from "react";

const Privacy = () => {
  const [activeTab, setActiveTab] = useState<"bangla" | "english">("bangla");

  const banglaContent = (
    <div className="space-y-8 text-gray-800">
      <h1 className="text-3xl font-bold text-primary border-b-2 border-primary pb-2">
        গোপনীয়তা নীতি
      </h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">তথ্য সংগ্রহ</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>ব্যক্তিগত তথ্য যেমন নাম, ফোন, ইমেইল, ঠিকানা ইত্যাদি।</li>
          <li>
            ব্যবহারকারীর ওয়েবসাইটে আচরণ: পেজ ভিজিট, সময়কাল, ক্লিক করা লিঙ্ক
            ইত্যাদি।
          </li>
          <li>সার্ভার লগ এবং ব্রাউজার তথ্য যেমন IP ঠিকানা, ডিভাইস প্রকার।</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">তথ্যের ব্যবহার</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>পরিষেবা উন্নয়ন ও নতুন ফিচার তৈরি করা।</li>
          <li>ব্যবহারকারীর অভিজ্ঞতা ব্যক্তিগতকৃত করা।</li>
          <li>বিজ্ঞাপন ও মার্কেটিং বিশ্লেষণ।</li>
          <li>সার্ভিস ইমপ্রুভমেন্ট এবং ইউজার সাপোর্ট।</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">
          তৃতীয় পক্ষের শেয়ারিং
        </h2>
        <p>
          আমরা কোনো ব্যক্তিগত তথ্য তৃতীয় পক্ষের সাথে বিক্রি বা শেয়ার করি না।
          শুধুমাত্র অভ্যন্তরীণ ব্যবহারের জন্য তথ্য সীমাবদ্ধ থাকে। তবে, আইনগত
          বাধ্যবাধকতার ক্ষেত্রে আমরা তথ্য প্রদান করতে পারি।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">
          কুকিজ এবং ট্র্যাকিং
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>কুকিজ ব্যবহার করে আমরা ব্যবহারকারীর অভিজ্ঞতা উন্নত করি।</li>
          <li>
            ট্র্যাকিং পিক্সেল ব্যবহার করে ওয়েবসাইট কার্যকারিতা পর্যবেক্ষণ করা
            হয়।
          </li>
          <li>ব্রাউজারের সেটিংস থেকে কুকিজ নিয়ন্ত্রণ করা যায়।</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">তথ্য সংরক্ষণ</h2>
        <p>
          সমস্ত তথ্য নিরাপদ সার্ভারে সংরক্ষিত হয়। শুধুমাত্র অনুমোদিত কর্মীরা
          অ্যাক্সেস করতে পারে। তথ্য সংরক্ষণ নীতি অনুযায়ী নির্দিষ্ট সময় পর্যন্ত
          তথ্য রাখা হয়।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">
          ব্যবহারকারীর অধিকার
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>আপনি আপনার তথ্য দেখতে, সংশোধন করতে এবং মুছে ফেলতে পারবেন।</li>
          <li>আপনি কুকিজ এবং ট্র্যাকিং সেটিংস নিয়ন্ত্রণ করতে পারবেন।</li>
          <li>
            আপনি আমাদের সাথে যোগাযোগ করে তথ্য সংক্রান্ত যে কোনো প্রশ্ন করতে
            পারবেন।
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">নীতি পরিবর্তন</h2>
        <p>
          আমাদের গোপনীয়তা নীতি সময়ে সময়ে পরিবর্তিত হতে পারে। নতুন নীতি
          ওয়েবসাইটে প্রকাশ করা হবে। নিয়মিত নীতি যাচাই করার জন্য আমরা পাঠকদের
          উৎসাহিত করি।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">যোগাযোগ</h2>
        <p>
          গোপনীয়তা নীতি সংক্রান্ত যে কোনো প্রশ্ন বা উদ্বেগের জন্য আমাদের{" "}
          <strong>info@ajkalusa.com</strong> ইমেইলে যোগাযোগ করতে পারেন।
        </p>
      </section>
    </div>
  );

  const englishContent = (
    <div className="space-y-8 text-gray-800">
      <h1 className="text-3xl font-bold text-primary border-b-2 border-primary pb-2">
        Privacy Policy
      </h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Data Collection</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Personal information such as name, email, phone number, and address.
          </li>
          <li>
            User behavior on the website: page visits, duration, clicked links,
            etc.
          </li>
          <li>
            Server logs and browser information such as IP address, device type.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Use of Data</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To improve services and develop new features.</li>
          <li>To personalize the user experience.</li>
          <li>For advertising and marketing analysis.</li>
          <li>For service improvement and user support.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">
          Third-party Sharing
        </h2>
        <p>
          We never sell or share personal information with third parties.
          Information is limited for internal use only. Disclosure may occur
          only when legally required.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">
          Cookies and Tracking
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>We use cookies to enhance the user experience.</li>
          <li>Tracking pixels are used to monitor website performance.</li>
          <li>
            Cookie preferences can be controlled through browser settings.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Data Storage</h2>
        <p>
          All data is stored securely on our servers and is accessible only to
          authorized personnel. Data is retained according to the data retention
          policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">User Rights</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Users can view, edit, and request deletion of their personal data.
          </li>
          <li>Users can manage cookies and tracking settings.</li>
          <li>
            Users may contact us with questions or concerns about their data.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Policy Changes</h2>
        <p>
          Our privacy policy may be updated periodically. Any updates will be
          posted on the website. Users are encouraged to review the policy
          regularly.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">Contact</h2>
        <p>
          For any questions or concerns regarding the privacy policy, please
          contact us at <strong>info@ajkalusa.com</strong>.
        </p>
      </section>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto  py-12">
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

export default Privacy;
