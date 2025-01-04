import React from 'react'
import analytics1 from '../assets/analytics1.jpg'
import analytics2 from '../assets/analytics2.jpg'
import analytics3 from '../assets/analytics3.jpg'
function Page4() {
  return (
    <div className="w-full min-h-screen px-6 md:px-14 py-12 md:mt-20  text-white">
    {/* Header Section */}
    <div className="w-full flex flex-col gap-6 md:flex-col md:justify-between md:items-center">
      <div className="border border-white rounded-full text-base md:text-2xl font-semibold w-max px-4 py-2 cursor-pointer">
        Projects
      </div>
      <h1 className="text-4xl md:text-6xl font-semibold">Analytics Portfolio</h1>
    </div>

    {/* Image Section */}
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
      <img
        src={analytics1} // Replace with your image URL
        alt="Analytics Screenshot 1"
        className="w-[90%] md:w-[30%] rounded-lg shadow-md"
      />
      <img
        src={analytics2} // Replace with your image URL
        alt="Analytics Screenshot 2"
        className="w-[90%] md:w-[30%] rounded-lg shadow-md"
      />
      
    </div>
  </div>
  )
}

export default Page4