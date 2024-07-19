import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuBar = <svg className="w-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
  </svg>;

  const menuCross = <svg className="w-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
  </svg>;

  return (
    <nav className=" bg-gradient-to-r from-blue-800 to-indigo-900 py-2 sm:py-3 px-3">
      {/* when change on nav bg color then also change in upper header  */}
      <div className="container sm:w-[90%] w-full px-4 sm:px-2 md:w-[80%] mx-auto flex items-center justify-between">
        <div className="text-white ">
          <svg className="w-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="hidden text-sm md:flex space-x-4">
          <button className="text-white">About us</button>
          <button className="text-white">Divisions</button>
          <button className="text-white">Document</button>
          <button className="text-white">RTI</button>
          <button className="text-white">Acts and Rules</button>
          <button className="text-white">Business & Citizen</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? menuCross : menuBar}
          </button>
        </div>
      </div>

      {/* mobile menu  */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-start justify-center text-xs px-2 space-y-2 mt-2">
            <button className="text-white">About us</button>
            <button className="text-white">Dire</button>
            <button className="text-white">Document</button>
            <button className="text-white">RTI</button>
            <button className="text-white">Acts and Rules</button>
            <button className="text-white">Business & Citizen</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
