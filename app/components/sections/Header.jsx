"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const fullText = "Hello, I'm Ha Dao";

  useEffect(() => {
    let index = 0;

    const interval1 = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > 5) {
        clearInterval(interval1);

        let index2 = 6;
        const interval2 = setInterval(() => {
          setText2(fullText.substring(5, index2));
          index2++;

          if (index2 > fullText.length) {
            clearInterval(interval2);
          }
        }, 100); // Faster animation for second part
      }
    }, 100); // Faster and smoother typing for first part

    return () => clearInterval(interval1); // Cleanup first interval
  }, []);

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center text-center gap-6 px-4 pt-30 pb-10 z-40">
      <img
        src="/images/profile.png"
        className="w-40 h-40 rounded-full object-cover"
      />
      <h2 className="flex items-center gap-2 text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
        <span className="text-color">{text}</span>
        {text2} <i className="bx bx-male-sign text-xl sm:text-2xl"></i>
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
    </div>
  );
};

export default Header;
