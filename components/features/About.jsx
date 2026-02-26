import { techStacks, techClassName } from "@/app/assets/techStack";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center gap-10 p-4 md:p-8 scroll-mt-25">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16 z-50">
        {/* Profile Image */}
        <div className="shrink-0 group">
          <img
            src="/images/about.png"
            alt="Ha Dao - Automation Engineer"
            className="w-56 h-56 md:w-80 md:h-80 rounded-[2rem] object-cover shadow-2xl border border-white/10 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-amber-500/10"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left tracking-tight text-white">
            About Me
          </h1>

          <div className="flex flex-col gap-4 text-gray-300 text-[16px] md:text-[18px] leading-relaxed text-center md:text-left">
            <p>
              I'm a final-year{" "}
              <span className="text-white font-medium">
                Automation Engineering
              </span>{" "}
              student and{" "}
              <span className="text-white font-medium">
                Mobile Robotics Intern
              </span>{" "}
              with a focus on{" "}
              <span className="text-white font-medium">Embedded Systems</span>.
            </p>
            <p>
              Currently, I'm gaining hands-on experience in hardware-software
              integration through the{" "}
              <span className="text-amber-400">UGV Panther</span> project,
              working with ROS 2 and various sensor technologies. I'm a
              proactive learner, passionate about building functional and
              efficient autonomous solutions.
            </p>
          </div>

          <a
            href="/CV_software_engineer_HaDao.pdf"
            className="mt-2 px-8 py-3 bg-btn text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 inline-flex items-center gap-2"
            download="CV_HaDao_Automation_Robotics">
            Download CV <i className="bx bx-download text-xl"></i>
          </a>
        </div>
      </div>

      {/* Mobile Tech Stack */}
      <div className="lg:hidden w-full max-w-5xl bg-[#312f2f9f] rounded-3xl p-6 shadow-lg border border-white/5 mt-4">
        <h2 className="text-2xl font-bold text-white tracking-wide mb-6 flex items-center gap-3">
          Technical Skills
          <span className="h-[2px] w-12 bg-amber-400 rounded-full"></span>
        </h2>
        <ul className="flex flex-wrap justify-start gap-3">
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

export default About;
