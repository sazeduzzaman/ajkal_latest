"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [activeTab, setActiveTab] = useState<"bangla" | "english">("bangla");

  const banglaContacts = [
    {
      title: "প্রধান কার্যালয়",
      address:
        "৭১-১৬ ৩৫ অ্যাভিনিউ, জ্যাকসন হাইটস, নিউ ইয়র্ক ১১৩৭২, মার্কিন যুক্তরাষ্ট্র",
      phones: ["+১৬৪৬ ২৬৭-৭৭৫১"],
      emails: ["info@ajkalusa.com"],
    },
    {
      title: "বিজ্ঞাপন বিভাগ",
      phones: ["+১৬৪৬ ২৬৭-৭৭৫১"],
      emails: ["adsales@ajkalusa.com"],
    },
  ];

  const englishContacts = [
    {
      title: "Head Office",
      address: "71-16 35th Ave, Jackson Heights, NY 11372, USA",
      phones: ["+1 646-267-7751"],
      emails: ["info@ajkalusa.com"],
    },
    {
      title: "Advertisement",
      phones: ["+1 646-267-7751"],
      emails: ["ad@ajkalusa.com", "adsales@ajkalusa.com"],
    },
  ];

  const socials = [
    { icon: <FaFacebookF />, link: "https://facebook.com/Dailyajkalusa" },
    { icon: <FaTwitter />, link: "https://twitter.com/ajkalusa" },
    { icon: <FaInstagram />, link: "https://instagram.com/ajkalusa" },
    { icon: <FaYoutube />, link: "https://youtube.com/ajkalusa" },
  ];

  const renderContacts = (contacts: typeof banglaContacts) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {contacts.map((c, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">{c.title}</h3>
          {c.address && (
            <p className="flex items-center gap-2 mb-4 text-gray-700">
              <FaMapMarkerAlt /> {c.address}
            </p>
          )}
          {c.phones && (
            <div className="mb-4">
              <h4 className="font-semibold flex items-center gap-2 text-gray-800">
                <FaPhone /> ফোন
              </h4>
              {c.phones.map((p, i) => (
                <p key={i} className="ml-6 text-gray-600">
                  <Link href={`tel:${p}`} className="hover:text-primary">
                    {p}
                  </Link>
                </p>
              ))}
            </div>
          )}
          {c.emails && (
            <div className="mb-4">
              <h4 className="font-semibold flex items-center gap-2 text-gray-800">
                <FaEnvelope /> ইমেইল
              </h4>
              {c.emails.map((e, i) => (
                <p key={i} className="ml-6 text-gray-600">
                  <Link href={`mailto:${e}`} className="hover:text-primary">
                    {e}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto py-12">
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

      {/* Contact Cards */}
      <div className="space-y-10">
        {activeTab === "bangla"
          ? renderContacts(banglaContacts)
          : renderContacts(englishContacts)}

        {/* Social Links */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold text-primary mb-4">
            আমাদের অনুসরণ করুন / Follow Us
          </h3>
          <div className="flex gap-6 text-3xl text-gray-600">
            {socials.map((s, idx) => (
              <Link
                key={idx}
                href={s.link}
                target="_blank"
                className="hover:text-primary transition"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.849538831876!2d-73.89066258459303!3d40.75119637932769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b02d3f43df%3A0x7c8d2d7adf1b2a3c!2s71-16%2035th%20Ave%2C%20Queens%2C%20NY%2011372%2C%20USA!5e0!3m2!1sen!2sbd!4v1695822396721!5m2!1sen!2sbd"
            width="100%"
            height="400"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
