import workExperiences from "@/app/assets/workExperience";

const WorkExperience = () => {
  return (
    <div
      id="work"
      className="w-full flex flex-col items-center gap-10 p-4 md:p-8 scroll-mt-25">
      <h1 className="text-4xl font-bold self-center mb-6 tracking-tight">
        Work Experience
      </h1>

      <div className="w-full max-w-5xl flex flex-col gap-8">
        {workExperiences.map((exp, index) => (
          <div
            key={index}
            className="group w-full flex flex-col md:flex-row items-start gap-6 md:gap-10 bg-[#312f2f9f] p-6 md:p-8 rounded-3xl shadow-lg border border-transparent hover:border-white/10 hover:-translate-y-1 hover:bg-[#3b38389f] transition-all duration-300 ease-out">
            <div className="md:w-1/3 flex flex-col shrink-0">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-3">
                {exp.period}
              </p>
              <h2 className="text-2xl font-bold text-white mb-1">{exp.role}</h2>
              <h3 className="text-lg text-gray-300 font-medium">
                {exp.company}
              </h3>
            </div>
            <div className="md:w-2/3 text-gray-200">
              {Array.isArray(exp.description) ? (
                <ul className="list-disc list-outside ml-4 text-[16px] leading-relaxed flex flex-col gap-3">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="pl-1">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[16px] leading-relaxed">{exp.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://www.linkedin.com/in/ha-dao-a60a13297/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 self-center font-semibold px-6 py-3 bg-btn text-white rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
        View more on LinkedIn
      </a>
    </div>
  );
};

export default WorkExperience;
