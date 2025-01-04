import React from "react";

function Hero() {
  return (
    <div className="min-h-screen  flex flex-col  justify-center items-center px-4 md:px-0">
      <div className="flex flex-col justify-center items-center  text-center -mt-28">
        <h4 className="lg:my-4 sm:border border-gray-400 rounded-full md:px-4 text-[3.5vw]   md:text-[1.3vw] font-semibold">
          For Businesses, Agency Owners and Almost anybody seeking Growth
        </h4>
        <h1 className="lg:my-8 font-bold  text-[5.5vw] sm:text-3xl md:text-[4vw] lg:text-[5.5vw] mt-6 md:mt-8 tracking-tighter">
          Evergreen Content that gets you{" "}
        </h1>
        <h1 className="font-bold  text-[5.5vw] sm:text-3xl md:text-[4vw] lg:text-[5.5vw] md:mt-4 tracking-tighter">
          clients even while You Sleep.
        </h1>
      </div>
      <div className="w-full h-[12vw] sm:h-[10vw] md:h-[7vw] flex items-center justify-center">
        <h4 className="text-[3.6vw] sm:text-lg md:text-[1.4vw] mt-4 font-semibold">
          Ready to Boost your Business with{" "}
          <span className="text-[#17ca64]">Content</span>?
        </h4>
      </div>
      <div className="w-[90%] md:w-[40%] overflow-hidden relative whitespace-nowrap mt-8">
        <div className="animate-marquee flex items-center">
          {[
            "forbes",
            "adweek",
            "pmi",
            "wf",
            "rd",
            "webby",
          ].map((imgName, idx) => (
            <img
              key={imgName + idx}
              className="w-8 h-4 sm:w-[6vw] sm:h-[6vw] md:w-[4vw] md:h-[4vw] md:mx-4 mx-2"
              src={`https://lazarev.kiev.ua/la24/${imgName}.svg`}
              alt={imgName}
            />
          ))}
          {[
            "forbes",
            "adweek",
            "pmi",
            "wf",
            "rd",
            "webby",
          ].map((imgName, idx) => (
            <img
              key={imgName + "dup" + idx}
              className="w-8 h-4 sm:w-[6vw] sm:h-[6vw] md:w-[4vw] md:h-[4vw] md:mx-4 mx-2"
              src={`https://lazarev.kiev.ua/la24/${imgName}.svg`}
              alt={imgName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
