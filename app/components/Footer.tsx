import React from "react";

import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-screen bg-white px-7 md:px-20 lg:px-40">
      <div className="flex flex-row items-center justify-between py-6">
        <Image src="/be.svg" width={50} height={50} alt="be" />
        <p className="flex justify-center font-titulo text-xl text-black dark:text-white">
          hello@angelasroom.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
