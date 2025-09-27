"use client";
import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState<"bangla" | "english">("bangla");

  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Tabs */}
      <div className="flex justify-start mb-8 gap-4 border-b border-gray-300">
        <button
          onClick={() => setActiveTab("bangla")}
          className={`px-6 py-2 font-semibold rounded-t-lg transition-colors ${
            activeTab === "bangla"
              ? "bg-primary text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          বাংলা
        </button>
        <button
          onClick={() => setActiveTab("english")}
          className={`px-6 py-2 font-semibold rounded-t-lg transition-colors ${
            activeTab === "english"
              ? "bg-primary text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          English
        </button>
      </div>

      {/* Content */}
      {activeTab === "bangla" ? (
        <div className="space-y-6 text-gray-800">
          <h1 className="text-3xl font-bold text-primary border-l-4 border-primary pl-4 mb-6">
            আজকাল এর বিষয়ে
          </h1>
          {[
            "আজকাল হলো দেশের একটি স্বনামধন্য মিডিয়া প্রতিষ্ঠান যা সাংবাদিকতার মান, পেশাদারিত্ব ও নিরপেক্ষতার জন্য পরিচিত। আমাদের লক্ষ্য হলো বর্তমান ঘটনা এবং সামাজিক বিষয়াবলীর প্রতি গভীর বিশ্লেষণ এবং সঠিক তথ্য প্রদান করা।",
            "আমরা বিশ্বাস করি যে, তথ্যের শক্তি সমাজের উন্নতি সাধনে গুরুত্বপূর্ণ ভূমিকা পালন করে। আমাদের পেশাদার সাংবাদিক এবং লেখকদল বিশ্বব্যাপী ঘটমান বিষয়াবলী সম্পর্কে সঠিক, নিরপেক্ষ এবং প্রভাবশালী প্রতিবেদন প্রদানে প্রতিশ্রুতিবদ্ধ।",
            "আজকাল এর সামগ্রী বিস্তৃত পরিসরে বিভিন্ন বিষয়বস্তু তুলে ধরে, যা রাজনৈতিক, ব্যবসায়িক, প্রযুক্তিগত, সাংস্কৃতিক এবং ক্রীড়া বিষয়ক খবর নিয়ে আলোচনা করে। আমাদের উদ্দেশ্য হল সমাজের প্রতিটি স্তরের কণ্ঠস্বর তুলে ধরা এবং বিশদ বিশ্লেষণ প্রদান করা।",
            "আমরা জবাবদিহিতা ও স্বচ্ছতার প্রতি আমাদের প্রতিশ্রুতি বজায় রেখে চলি। আমাদের প্রতিবেদনগুলো সঠিক এবং নির্ভরযোগ্য তথ্য প্রদান করে যাতে আমাদের পাঠকরা কোন প্রকার ভুল তথ্য থেকে রক্ষা পেতে পারে।",
            "আজকাল শুধু একটি সংবাদ মাধ্যম নয়; এটি একটি সচেতন ও জ্ঞানমুখী সম্প্রদায়ের অংশ যেখানে আমরা একসাথে বিশ্বের জটিলতা বিশ্লেষণ করে, মানবিক অভিজ্ঞতার সমৃদ্ধি উদযাপন করি এবং আমাদের সম্প্রদায়ে ইতিবাচক প্রভাব ফেলতে চেষ্টা করি।",
            "আমাদের সাথে যুক্ত হওয়ার জন্য ধন্যবাদ। আসুন, আমরা একসাথে প্রতিটি সংস্করণের মাধ্যমে আবিষ্কার, শিক্ষালাভ এবং উন্নয়নের যাত্রা শুরু করি।",
          ].map((text, idx) => (
            <p
              key={idx}
              className="bg-gray-50 p-4 rounded-lg shadow-sm leading-relaxed"
            >
              {text}
            </p>
          ))}
        </div>
      ) : (
        <div className="space-y-6 text-gray-800">
          <h1 className="text-3xl font-bold text-primary border-l-4 border-primary pl-4 mb-6">
            About Ajkal
          </h1>
          {[
            "Welcome to Ajkal, your premier source for insightful news and captivating stories. Established with a vision to provide a comprehensive perspective on the events shaping our world, Ajkal stands as a beacon of journalistic integrity and excellence in today's media landscape.",
            "At Ajkal, we believe in the transformative power of information. As your trusted companion, we endeavor to bring you the latest developments and thought-provoking analyses from around the globe. Our dedicated team of journalists, writers, and editors are committed to delivering accurate, balanced, and impactful reporting that informs, educates, and inspires.",
            "Our coverage spans a wide spectrum of topics, ranging from breaking news and current affairs to in-depth features and cultural highlights. Whether you're interested in politics, business, technology, arts, or sports, Ajkal has something for everyone. We strive to capture the pulse of society, amplifying diverse voices and perspectives to foster greater understanding and empathy.",
            "As advocates for transparency and accountability, we hold ourselves to the highest standards of ethical journalism. Our commitment to truth and accuracy is unwavering, ensuring that our readers can rely on us as a trusted source of information in an era of misinformation and fake news.",
            "Ajkal is more than just a news outlet; it's a community of engaged and informed individuals who share a passion for knowledge and insight. We invite you to join us on this journey as we explore the complexities of our world, celebrate the richness of human experience, and seek to make a positive impact in our communities.",
            "Thank you for choosing Ajkal as your window to the world. Together, let's embark on a journey of discovery, enlightenment, and growth with each edition.",
          ].map((text, idx) => (
            <p
              key={idx}
              className="bg-gray-50 p-4 rounded-lg shadow-sm leading-relaxed"
            >
              {text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
