const Footer = () => {
  return (
    <footer className="flex items-center justify-around gap-4 px-5 lg:px-[6%] xl:px[12%] py-8 bg-zinc-900 flex-col md:flex-row ">
      <div className="flex flex-col items-center justify-center gap-2 text-white">
        <h1 className="text-color text-[32px] font-semibold">Ha Dao</h1>
        <div className="w-auto flex items-center gap-2 text-[16px]">
          <i className="bx bxs-envelope"></i>
          <p>ThaiHa.Dao@seamk.fi</p>
        </div>
      </div>

      <form className="flex gap-2">
        <div className="flex px-2 py-2 border-2 border-gray-400 rounded-2xl transition duration-400 gap-4">
          <input
            placeholder="Leave your email here..."
            type="email"
            className="w-45 px-0.5 outline-none"
          />
          <button
            type="submit"
            className="bg-btn px-3 py-1 outline-none rounded-lg transition duration-300 cursor-pointer hover:opacity-80">
            Submit
          </button>
        </div>
      </form>

      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-4 text-[24px]">
          <a
            className="social-icon"
            href="https://github.com/hadao169"
            target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a
            className="social-icon"
            target="_blank"
            href="https://www.linkedin.com/in/ha-dao-a60a13297/">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            className="social-icon"
            href="https://www.instagram.com/thha1609/"
            target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
        <p className="text-lg">© 2025 Ha Dao</p>
      </div>
    </footer>
  );
};

export default Footer;
