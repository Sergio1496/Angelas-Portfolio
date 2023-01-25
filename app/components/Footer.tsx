"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={`${
        pathname === "/contact" ? "lg:absolute lg:bg-transparent" : "bg-white"
      } lg:px-40"  bottom-0 z-40 w-screen bg-white px-7 md:px-20`}
    >
      <div className="flex flex-row items-center justify-between py-6">
        <Image
          className="relative z-50"
          src="/be.svg"
          width={50}
          height={50}
          alt="be"
        />
        <Link
          className="flex justify-center font-titulo text-xl text-black dark:text-white"
          href="mailto:hello@angelasroom.com"
        >
          hello@angelasroom.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
