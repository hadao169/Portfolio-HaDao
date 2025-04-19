const Header = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center text-center gap-6 px-4 pt-30 pb-10 z-40">
      <img
        src="/images/profile.png"
        className="w-40 h-40 rounded-full object-cover"
      />
      <h2 className="flex items-center gap-2 text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
        <span className="text-color">Hello</span>, I'm Ha Dao{" "}
        <i className="bx bx-male-sign text-xl sm:text-2xl"></i>
      </h2>

      <div className="flex flex-col items-center gap-2 px-4">
        <p className="text-[18px] font-semibold sm:text-[20px] md:text-2xl">
          Bachelor of Automation Engineering | Dive into Software Development
        </p>

        <p className="text-[16px] md:text-lg md:max-w-[60%] text-white px-10">
          Passionate about engineering innovation, problem-solving and currently
          expanding my skills in software development.
        </p>
      </div>

      <a
        href="/Ha_Dao_Resume.pdf"
        className="px-4 py-[10px] bg-btn text-white rounded-2xl hover:bg-amber-400 hover:opacity-80 transition-transform duration-300 hover:scale-105 inline-flex items-center gap-2 text-[16px] md:text-[18px]"
        download>
        My resume <i className="bx bx-download text-2xl"></i>
      </a>
    </div>
  );
};

export default Header;
