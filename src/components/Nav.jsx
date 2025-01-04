import React from "react";
import { HiPencil } from "react-icons/hi2";

function Nav() {
  const data = [
    { title: "WHAT WE DO" },
    { title: "CASES" },
    { title: "OUTCOMES" },
    { title: "ABOUT" },
  ];

  return (
    <div className="w-full md:px-[5vw]">
      <div className="border-b  border-gray-400 flex justify-between items-center py-2 md:py-3">
        {/* Logo */}
        <h1 className="text-[5vw] sm:text-3xl font-bold">MEDIAFY.</h1>
        
        {/* Navigation Items */}
        <div className="flex gap-4 md:gap-10 items-center">
          {/* Hide Navigation Items on Mobile */}
          <div className="hidden md:flex gap-4 md:gap-10 items-center">
            {data.map((item) => (
              <h4
                key={item.title}
                className="text-sm md:text-[1vw] font-bold cursor-pointer transition-all hover:text-[#0DA24D] active:text-white"
              >
                {item.title}
              </h4>
            ))}
          </div>

          {/* Always Show Let's Talk Button */}
          <h4 className="bg-[#0DA34E]  flex items-center gap-2 md:gap-5 px-1 py-1 md:px-4 md:py-2 rounded-full text-[3vw] md:text-[1vw] font-bold cursor-pointer transition-all hover:scale-105 active:scale-100">
            LET'S TALK <HiPencil />
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Nav;
