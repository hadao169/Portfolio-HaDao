"use client";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = ({ toggleThem }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  let theme = darkTheme ? "bg-zinc-900" : "bg-[#F1F1F1]";
  return (
    <nav
      className={
        `w-full fixed flex items-center justify-between px-5 lg:px-[6%] xl:px[12%] py-4 z-50 ${theme} sm:text-sm ` +
        (isScroll ? " bg-zinc-700 opacity-100 backdrop-blur-lg shadow-sm" : "")
      }>
      <h1 className="text-4xl font-semibold text-white">Ha Dao</h1>

      <ul
        className={`hidden md:flex md:text-[14px] lg:text-lg font-semibold md:gap-5 lg:gap-9 bg-zinc-800 rounded-4xl px-6 py-1.5 transition-all ${
          isScroll ? "bg-zinc-700 shadow-sm opacity-100" : ""
        } ease-in-out duration-300`}>
        <li>
          <a href="#home" className="hover:opacity-65 duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:opacity-65 duration-300">
            About me
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:opacity-65 duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#certificates" className="hover:opacity-65 duration-300">
            Certificates
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:opacity-80">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex items-center transition-all z-20 ">
        <div className="flex items-center gap-x-3">
          <button
            className="cursor-pointer hover:opacity-[70%] duration-300 border-none"
            onClick={() => setDarkTheme((prev) => !prev)}>
            <i
              className={`bx ${
                darkTheme ? "bxs-sun text-amber-400" : "bxs-moon text-blue-300"
              } text-2xl`}></i>
          </button>
          <button
            className="md:hidden cursor-pointer hover:opacity-[60%] duration-600"
            onClick={() => setOpenMenu(true)}>
            <i className="bx bx-menu text-2xl "></i>
          </button>
        </div>
        <div className="hidden group md:flex items-center justify-center gap-x-2 bg-btn rounded-4xl px-5 py-2 ml-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-ou transform ">
          <a
            href="#/contact"
            className="text-white font font-semibold  transition-transform duration-300 ease-in-out md:text-[14px] lg:text-lg">
            Connect
          </a>
          <i className="bx bx-right-top-arrow-circle text-2xl text-white transition-colors duration-300 ease-in-out"></i>
        </div>
      </div>

      <MobileMenu onCloseMenu={() => setOpenMenu(false)} openMenu={openMenu} />
    </nav>
  );
};

export default Navbar;
