import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  const iconClasses =
    "flex items-center justify-center w-6 h-6 rounded-[2px] transition-colors";

  return (
    <div className="flex space-x-2">
      <Link
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={`${iconClasses} bg-white hover:bg-blue-300 color-site`}
      >
        <FaFacebookF size={16}  />
      </Link>

      <Link
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className={`${iconClasses} bg-white hover:bg-blue-300 color-site 5`}
      >
        <FaTwitter size={16} />
      </Link>

      <Link
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`${iconClasses} bg-white hover:bg-blue-300 color-site 5`}
      >
        <FaInstagram size={16} />
      </Link>

      <Link
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className={`${iconClasses} bg-white hover:bg-blue-300 color-site rounded-5`}
      >
        <FaYoutube size={16} />
      </Link>
    </div>
  );
};

export default SocialMedia;
