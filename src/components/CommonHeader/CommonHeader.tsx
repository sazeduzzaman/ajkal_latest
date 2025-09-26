import React from "react";

const CommonHeader = ({title}:any) => {
  return (
    <div className="post-header-box mt-4">
      <div className="post-header-title text-white">
        <div>
          <img
            alt="test"
            title="test"
            loading="lazy"
            width={40}
            height={30}
            decoding="async"
            data-nimg={1}
            className="pe-2"
            style={{ color: "transparent" }}
            srcSet="/_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fsettings%2FAsset-2.png&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fsettings%2FAsset-2.png&w=128&q=75 2x"
            src="/_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fsettings%2FAsset-2.png&w=128&q=75"
          />
        </div>
        <h4 className="mb-0 section-header ps-3">{title}</h4>
      </div>
    </div>
  );
};

export default CommonHeader;
