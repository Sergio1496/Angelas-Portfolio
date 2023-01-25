"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white text-black">
      <div className="flex items-center justify-between px-10 py-10 md:py-10">
        <div className="flex items-center md:hidden">
          <Link href="/" className="font-titulo text-xl">
            Logo
          </Link>
        </div>
        <div className="hidden items-center md:block">
          <Link
            href={
              pathname === "/about"
                ? "/works"
                : pathname === "/works"
                ? "/about"
                : pathname === "/contact"
                ? "/works"
                : "/works"
            }
            className="px-10 font-titulo text-3xl font-semibold"
          >
            {pathname === "/about"
              ? "Works"
              : pathname === "/works"
              ? "About"
              : pathname === "/contact"
              ? "Works"
              : "Works"}
          </Link>
        </div>
        <div className="flex ">
          <Link
            href={"/"}
            className="font-titulo text-2xl font-semibold md:text-5xl md:font-medium"
          >
            Ángela Castro
          </Link>
        </div>
        <div>
          {/* Estos enlaces van en desktop */}
          <ul className="flex items-center">
            <li>
              <Link
                className="ml-8 hidden rounded-md px-10 py-2 font-titulo text-3xl font-semibold md:block"
                href={pathname === "/contact" ? "/about" : "/contact"}
              >
                {pathname === "/contact" ? "About" : "Contact"}
              </Link>
            </li>
            {/* Estos enlaces van en desktop */}
            {/* Botón hamburguesa big mac doble con patatas para abrir el menú responsive */}
            <div className="flex items-center">
              <HiMenu
                className="h-7 w-7 md:hidden"
                onClick={() => setOpen(!open)}
              />
            </div>
            {/* Estos enlaces van en mobile */}
          </ul>
        </div>
      </div>
      {/* Aqui empieza el menú desplegable con un fixed para que se vea en toda la pantalla por encima del navbar "cuidado con los md:hidden para esconder el menu en desktop" */}
      <div
        className={`${
          open ? "z-50 flex" : "hidden"
        } z-90 fixed top-0 h-screen w-screen flex-col items-center justify-between bg-backgroundMenu md:hidden`}
      >
        <div className="flex w-screen flex-row justify-between px-10 py-10">
          <div className="flex items-center ">
            <h1 className=" font-titulo text-xl ">Logo</h1>
          </div>
          <div className="flex items-center">
            <h1 className=" font-titulo text-2xl font-semibold ">
              Ángela Castro
            </h1>
          </div>
          <div className="flex items-center">
            {/* Botón de cerrar menú */}
            <HiX className="h-7 w-7 md:hidden" onClick={() => setOpen(!open)} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <ul className="flex flex-col items-center justify-center">
            <li className=" p-10 font-titulo text-textMenu font-medium">
              <Link
                className="rounded-md"
                href="/works"
                onClick={() => setOpen(!open)}
              >
                Work
              </Link>
            </li>
            <li className="p-10 font-titulo text-textMenu font-medium">
              <Link
                className="rounded-md"
                href="/about"
                onClick={() => setOpen(!open)}
              >
                About
              </Link>
            </li>
            <li className="p-10 font-titulo text-textMenu font-medium">
              <Link
                className="rounded-md"
                href="/contact"
                onClick={() => setOpen(!open)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-screen flex-row items-end justify-between px-10 py-5 ">
          <div className="flex flex-col">
            <div className="gap-0 font-texto text-sm font-medium">email</div>
            <Link
              className="font-titulo text-xl font-semibold"
              href="mailto:hello@angelasroom.com"
            >
              hello@angelasroom.com
            </Link>
          </div>
          <div>
            <Image src="/be.svg" width={40} height={40} alt="be" />
          </div>
        </div>
      </div>
    </nav>
  );
}
