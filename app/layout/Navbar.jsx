"use client";
import { useState, useEffect } from "react";
import MobileMenu from "../components/MobileMenu";
import Link from "next/link";
import navItems from "@/app/assets/navBarLink";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={
          `w-full fixed flex items-center justify-between px-5 lg:px-[6%] xl:px[12%] py-4 z-50 sm:text-sm` +
          (isScroll ? " bg-zinc-900 opacity-90 backdrop-blur-lg shadow-sm" : "")
        }>
        <Link href="/" className="duration-300">
          <h1 className="text-4xl font-semibold text-white">Ha Dao</h1>
        </Link>
        <ul
          className={`hidden md:flex md:text-[14px] lg:text-lg font-semibold md:gap-5 lg:gap-9 rounded-4xl px-6 py-1.5 transition-all ${
            isScroll ? "bg-zinc-700" : ""
          } ease-in-out duration-300`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:opacity-80 hover:text-amber-400 duration-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center transition-all z-20 ">
          <div className="flex items-center gap-x-3">
            <button
              className="cursor-pointer hover:opacity-[70%] duration-300 border-none"
              onClick={() => setDarkTheme((prev) => !prev)}></button>
            <button
              className="md:hidden cursor-pointer hover:opacity-[60%] duration-600"
              onClick={() => setOpenMenu(true)}>
              <i className="bx bx-menu text-2xl "></i>
            </button>
          </div>
          <div className="hidden group md:flex items-center justify-center gap-x-2 bg-btn rounded-4xl px-5 py-2 ml-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-ou transform ">
            <Link
              href="#contact"
              className="text-white font font-semibold transition-transform duration-300 ease-in-out md:text-[14px] lg:text-lg">
              Connect
            </Link>
            <i className="bx bx-right-top-arrow-circle text-2xl text-white transition-colors duration-300 ease-in-out"></i>
          </div>
        </div>
      </nav>
      <MobileMenu onCloseMenu={() => setOpenMenu(false)} openMenu={openMenu} />
    </div>
  );
};

export default Navbar;
