import React from "react";

function Page2() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-6 px-4 md:-mt-0 -mt-12 md:gap-10">
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold text-center">
        Why Choose Us?
      </h1>

      {/* Content Section */}
      <div className=" flex flex-col md:gap-10 gap-5 items-center text-center justify-center w-full sm:w-[80%] md:w-[70%] font-thin text-sm sm:text-base md:text-[1.6vw]">
        <h2 className="font-medium text-[4vw] sm:text-xl md:text-2xl">
          WE’RE NOT JUST ANY OTHER CONTENT AGENCY
        </h2>
        <p className="text-center">
          Unlike most agencies and video editors, we specialize in delivering
          tangible results with the content we help you create.
        </p>
        <h4>
          Within just 90 days, we guarantee we will build you a content
          ecosystem that brings you AT LEAST 10 qualified sales calls every
          single month.
        </h4>
        <h4>And if we don’t, you get a FULL refund.</h4>
        <h4>
          We handle everything A-Z from strategy & scripting to editing & SEO,
          so you can focus on the real needle-moving tasks in your business.
        </h4>
        <h4>
          Whether it’s YouTube, Instagram, Twitter, or LinkedIn, we’re here to
          ensure you can and WILL reach your content goals.
        </h4>
      </div>
    </div>
  );
}

export default Page2;
