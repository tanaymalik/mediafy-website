import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'


function App() {
  return (
    <div className='min-h-[100vh] w-full  relative px-2 md:px-6 md:py-3 bg-[#111111] font-[lay grotesk] text-[#fff]'>
      <Nav/>
      <Hero/>  
      <Page1/> 
      <Page2/> 
      <Page3/> 
      <Page4/>
    </div>
  )
}

export default App