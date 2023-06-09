import React from "react";
import Image from "next/image";

export default function SocialMedia() {
  return (
    <div className="flex gap-x-10 w-full flex-wrap max-h-[200px] justify-center mb-10">
      <div className="social-media-tile">
        <Image
          className="p-5 lg:p-10"
          src="/facebooklogo.png"
          width={1000}
          height={1000}
          alt=""
        />
      </div>
      <div className="social-media-tile">
        <Image
          className="p-5 lg:p-10"
          src="/instagram.png"
          width={1000}
          height={1000}
          alt=""
        />
      </div>
      <div className="social-media-tile">
        <Image
          className="p-5 lg:p-10"
          src="/linkedin.png"
          width={1000}
          height={1000}
          alt=""
        />
      </div>
    </div>
  );
}
