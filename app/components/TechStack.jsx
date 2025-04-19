import { techStacks, techClassName } from "../../assets/techStack";

const TechStack = () => {
  return (
    <div className="hidden lg:flex w-full max-w-70 flex-col items-center gap-6 px-4 py-10 bg-[#312f2f9f] rounded-3xl z-20">
      {/* Title */}
      <h1 className="text-2xl font-bold text-white text-center">
        <i className="bx bxs-contact"></i> Connect With Me
      </h1>

      {/* Contact Card */}
      <div className="flex flex-col items-start text-white w-full max-w-[90%] px-6 py-6 gap-2 shadow-2xl rounded-2xl bg-[#312f2f9f] hover:scale-105 transition-transform duration-300 ease-in-out">
        <h3 className="text-[22px] font-semibold">Contact Info</h3>
        <a
          href="mailto:ThaiHa.Dao@seamk.fi"
          className="opacity-80 text-[16px] break-words">
          ThaiHa.Dao@seamk.fi
        </a>
        <span className="text-[16px]">Location: Finland</span>
        <span className="text-[16px]">GMT: +3</span>
        <div className="flex gap-4 mt-2">
          <a
            href="https://linkedin.com/in/ha-dao-6a53a2337"
            target="_blank"
            rel="noopener noreferrer"
            className="transition">
            <i className="bx bxl-linkedin-square text-4xl hover:text-blue-400 transition-all duration-500"></i>
          </a>
          <a
            href="https://github.com/hadao169"
            target="_blank"
            rel="noopener noreferrer"
            className="transition">
            <i className="bx bxl-github text-4xl hover:text-gray-500 transition-all duration-500"></i>
          </a>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="w-full max-w-[90%]">
        <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
        <ul className="flex flex-wrap justify-start gap-2">
          {techStacks.map((tech, index) => (
            <li key={index} className={techClassName}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
