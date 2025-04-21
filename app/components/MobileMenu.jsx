import navItems from "@/app/assets/navBarLink";
import Link from "next/link";

const MobileMenu = ({ onCloseMenu, openMenu }) => {
  const menuOpen = openMenu ? "translate-x-0 " : "translate-x-[100%]";
  return (
    <ul
      className={`flex md:hidden flex-col items-start gap-4 py-20 px-[6%] fixed -right-6 top-0 w-[50%] z-50 h-screen transition duration-500 bg-[#1f0606] ${menuOpen}`}>
      <div className="absolute right-6 top-6" onClick={onCloseMenu}>
        <i className="bx bx-x cursor-pointer text-3xl"></i>
      </div>
      {navItems.map((item, index) => (
        <li key={index} className="text-[18px]">
          <Link
            href={item.href}
            className="hover:opacity-80 duration-300"
            onClick={onCloseMenu}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
