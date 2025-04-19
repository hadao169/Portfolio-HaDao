const MobileMenu = ({ onCloseMenu, openMenu }) => {
  const menuOpen = openMenu ? "translate-x-0 " : "translate-x-[100%]";
  return (
    <ul
      className={`flex md:hidden flex-col items-start gap-4 py-20 px-[6%] fixed -right-6 top-0 w-[40%] z-50 h-screen transition duration-500 bg-amber-400 text-black ${menuOpen}`}>
      <div className="absolute right-6 top-6" onClick={onCloseMenu}>
        <i className="bx bx-x cursor-pointer text-3xl"></i>
      </div>

      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About me</a>
      </li>
      <li>
        <a href="#project">Project</a>
      </li>
      <li>
        <a href="#certificates">Certificates</a>
      </li>
      <li>
        <a href="#contact">Contact me</a>
      </li>
    </ul>
  );
};

export default MobileMenu;
