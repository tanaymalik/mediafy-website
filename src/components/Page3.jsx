import React from 'react';
import { MdArrowOutward } from "react-icons/md";

function Page3() {
  return (
    <div className="w-full min-h-screen px-6 md:px-14 py-6 mt-40 md:mt-20">
      {/* Header Section */}
      <div className="w-full h-auto md:h-[40%] flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <div className="border rounded-full text-xl md:text-4xl font-semibold md:w-[15vw] mx-auto md:mx-0 flex justify-center items-center py-1 px-3 cursor-pointer">
            Projects
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Short Form <br /> Portfolio
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <p className="tracking-tight text-sm md:text-base">
            Video Optimized For Every Platform! <br /> Name a platform, We handle it!
          </p>
          <button className="bg-[#0DA34E] text-white font-semibold py-2  px-4 md:py-3 md:px-2  justify-center rounded-full flex items-center space-x-2 transition-all hover:scale-105 active:scale-95">
            <span className='text-[3.5vw] md:text-[1vw]'>FREE CONSULTATION</span>
            <MdArrowOutward className='text-[3.5vw] md:text-[1vw]' />
          </button>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-10 md:mt-20">
        <div className="w-[100%] md:w-[25%] h-[60vw] md:h-[30vw] bg-[#FFFFFF40] bg-opacity-50 rounded-2xl shadow-lg"></div>
        <div className="w-[100%] md:w-[35%] h-[70vw] md:h-[40vw] bg-[#FFFFFF40] bg-opacity-50 rounded-2xl shadow-lg"></div>
        <div className="w-[100%] md:w-[25%] h-[60vw] md:h-[30vw] bg-[#FFFFFF40] bg-opacity-50 rounded-2xl shadow-lg"></div>
      </div>
    </div>
  );
}

export default Page3;
