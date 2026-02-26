import {
  techStacks,
  techClassName,
  automationTechs,
} from "@/app/assets/techStack.js";

const TechStack = () => {
  return (
    <div className="hidden lg:flex w-full max-w-80 flex-col items-center gap-8 px-5 py-10 bg-[#312f2f9f] rounded-3xl border border-white/5 z-20 shadow-2xl">
      {/* Title */}
      <h1 className="text-2xl font-bold text-white text-center flex items-center gap-2 uppercase tracking-tighter">
        <i className="bx bxs-terminal text-amber-400"></i> Engineering
      </h1>

      {/* Contact Card */}
      <div className="flex flex-col items-start text-white w-full px-5 py-6 gap-3 rounded-2xl bg-[#3b38389f] border border-white/5 hover:border-amber-400/30 transition-all duration-300">
        <h3 className="text-lg font-bold border-b border-white/10 w-full pb-2 mb-1 text-gray-200 uppercase tracking-wide">
          Contact Info
        </h3>
        <div className="flex flex-col gap-2">
          <a
            href="mailto:ThaiHa.Dao@seamk.fi"
            className="text-[14px] hover:text-amber-400 transition-colors break-all flex items-center gap-2">
            <i className="bx bx-envelope text-lg"></i> ThaiHa.Dao@seamk.fi
          </a>
          <span className="text-[14px] flex items-center gap-2 text-gray-400">
            <i className="bx bx-map text-lg"></i> Seinäjoki, Finland
          </span>
        </div>

        <div className="flex gap-4 mt-2 pt-3 border-t border-white/10 w-full">
          <a
            href="https://linkedin.com/in/ha-dao-6a53a2337"
            target="_blank"
            rel="noopener noreferrer">
            <i className="bx bxl-linkedin-square text-3xl hover:text-blue-400 transition-all"></i>
          </a>
          <a
            href="https://github.com/hadao169"
            target="_blank"
            rel="noopener noreferrer">
            <i className="bx bxl-github text-3xl hover:text-gray-400 transition-all"></i>
          </a>
        </div>
      </div>

      {/* Skills Sections */}
      <div className="w-full space-y-8">
        {/* Nhóm 1: Core Robotics */}
        <div>
          <h3 className="text-[16px] font-bold text-amber-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
            <i className="bx bxs-chip"></i> Core Robotics
          </h3>
          <ul className="flex flex-wrap justify-start gap-2">
            {["ROS 2", "C++", "Python", "Sensors Integration"].map((tech) => (
              <li
                key={tech}
                className={`${techClassName} border border-amber-400/40 bg-amber-400/10 text-white font-bold`}>
                {tech}
              </li>
            ))}
            {automationTechs
              .filter(
                (t) =>
                  ![
                    "ROS 2",
                    "C++",
                    "Python",
                    "Sensors Integration",
                    "Microcontrollers",
                    "PLC",
                    "System Calibration",
                  ].includes(t),
              )
              .map((tech, index) => (
                <li key={index} className={techClassName}>
                  {tech}
                </li>
              ))}
          </ul>
        </div>

        {/* Nhóm 2: Control & Hardware */}
        <div>
          <h3 className="text-[16px] font-bold text-amber-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
            <i className="bx bx-unite"></i> Control & Hardware
          </h3>
          <ul className="flex flex-wrap justify-start gap-2">
            {["Microcontrollers", "PLC", "System Calibration"].map((tech) => (
              <li
                key={tech}
                className={`${techClassName} border border-amber-400/40 bg-amber-400/10 text-white font-bold`}>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Nhóm 3: Supporting Software - ĐÃ ĐỒNG BỘ STYLE */}
        <div className="pt-6 border-t border-white/10">
          <h3 className="text-[16px] font-bold text-gray-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
            <i className="bx bx-code-curly"></i> Supporting Tech
          </h3>
          <ul className="flex flex-wrap justify-start gap-2">
            {techStacks.map((tech, index) => (
              <li
                key={index}
                className={`${techClassName} border border-white/10 bg-white/5 text-gray-300 font-medium hover:bg-white/10 transition-colors`}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
