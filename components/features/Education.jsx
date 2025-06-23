const Education = () => {
  return (
    <div className="hidden lg:flex w-full max-w-70 flex-col items-center gap-6 px-4 py-10 bg-[#312f2f9f] rounded-3xl z-20">
      <h2 className="text-2xl font-bold text-center flex items-center gap-2">
        <i className="bx bx-book-open"></i>
        Education
      </h2>
      <div className="flex flex-col items-start w-full max-w-[90%] px-6 py-6 gap-2 shadow-2xl rounded-2xl bg-[#312f2f9f] hover:scale-105 transition-transform duration-300 ease-in-out">
        <h3 className="text-[20px] font-semibold ">
          SeAMK - Seinajoki University of Applied Sciences
        </h3>
        <p className="text-[17px]">Bachelor of Automation Engineering</p>
        <p className="text-[16px]">2023 - 2027</p>
        <p className="text-[16px]">Credits: 160/240 ECTS</p>
        <span>GPA: 4.53/5</span>
      </div>
    </div>
  );
};

export default Education;
