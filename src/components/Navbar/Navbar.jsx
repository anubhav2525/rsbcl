import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
    <nav className="bg-gradient-to-r from-blue-800 to-indigo-900 py-2 sm:py-3 px-3">
      {/* when change on nav bg color then also change in upper header  */}
      <div className="container sm:w-[90%] w-full px-4 sm:px-2 md:w-[80%] mx-auto flex items-center justify-between">

        <div>
          <Link to="/">
            <button>
              <svg className="w-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>

        <div className="hidden text-sm md:flex space-x-3">
          <NavElem />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? menuCross : menuBar}
          </button>
        </div>
      </div>

      {/* mobile menu  */}
      {
        isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-start justify-center text-xs px-2 space-y-2 mt-2">
              <NavElem />
            </div>
          </div>
        )
      }
    </nav >
  )
}

export default Navbar

const NavElem = () => {

  // about button
  const [activeAbout, setactiveAbout] = useState(false);
  const [activeAboutOption, setactiveAboutOption] = useState("");

  // directory button
  const [activeDirectory, setactiveDirectory] = useState(false);
  const [activeDirectoryOption, setactiveDirectoryOption] = useState("");

  // requirement button
  const [activeRequirement, setactiveRequirement] = useState(false);
  // const [activeRequirementOption, setactiveRequirementOption] = useState("");
  return (
    <>
      {/* about us */}
      <div className="relative">
        <button
          onClick={() => {
            setactiveAbout(!activeAbout);
            setactiveDirectory(false);
            setactiveRequirement(false);
          }}
          className="px-2 py-1 text-white cursor-pointer rounded-md group hover:bg-white transition duration-300 ease-in-out"
        >
          <span className="group-hover:text-black">About us</span>
        </button>
        {activeAbout && (
          <div className="absolute left-0 z-30 mt-5 w-40 bg-white rounded-md shadow-lg py-2">

            {/* excise */}
            <button onMouseOver={() => setactiveAboutOption("excise")} className="text-left w-full px-4 py-2 text-gray-800 hover:bg-gray-100">Excise</button>
            {activeAboutOption == "excise" && (
              <div className='absolute left-20 z-40 w-40 bg-white rounded-md shadow-lg py-2'>
                <Link to="/about-excise-introduction" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Introduction</Link>
                <Link to="/about-excise-organization" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Organisation Setup</Link>
              </div>
            )}

            {/* rsbcl */}
            <button onMouseOver={() => setactiveAboutOption("rsbcl")} className="text-left w-full px-4 py-2 text-gray-800 hover:bg-gray-100">RSBCL</button>
            {activeAboutOption == "rsbcl" && (
              <div className='absolute left-20 z-40 w-40 bg-white rounded-md shadow-lg py-2'>
                <Link to="/about-rsbcl-introduction" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Introduction</Link>
                {/* <Link to="/about-rsbcl-memorandom" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Memorandum of Association</Link> */}
                {/* <Link to="/about-rsbcl-organization" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Organiation Setup</Link> */}
                <Link to="/about-rsbcl-directors" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Board of Directors</Link>
              </div>
            )}

            {/* rsgsm */}
            <button onMouseOver={() => setactiveAboutOption("rsgsm")} className="text-left w-full px-4 py-2 text-gray-800 hover:bg-gray-100">RSGSM</button>
            {activeAboutOption == "rsgsm" && (
              <div className='absolute left-20 z-40 w-40 bg-white rounded-md shadow-lg py-2'>
                <Link to="/about-rsgsm" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Introduction</Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* directory */}
      <div className="relative">
        <button
          onClick={() => {
            setactiveAbout(false);
            setactiveDirectory(!activeDirectory);
            setactiveRequirement(false);
          }}
          className="px-2 py-1 text-white cursor-pointer rounded-md group hover:bg-white transition duration-300 ease-in-out"
        >
          <span className="group-hover:text-black">Directory</span>
        </button>
        {activeDirectory && (
          <div className="absolute left-0 z-30 mt-5 w-40 bg-white rounded-md shadow-lg py-2">
            {/* excise */}
            <button onMouseOver={() => setactiveDirectoryOption("excise")} className="text-left w-full px-4 py-2 text-gray-800 hover:bg-gray-100">Excise</button>
            {activeDirectoryOption == "excise" && (
              <div className='absolute left-20 z-40 w-40 bg-white rounded-md shadow-lg py-2'>
                <Link to="/directory-excise/head-office" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Head Office</Link>
                <Link to="/directory-excise/zone-office" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Zone Office</Link>
                <Link to="/directory-excise/deo-office" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">DEO Office</Link>
                <Link to="/directory-excise/circle-office" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Circle Office</Link>
              </div>
            )}

            <button onMouseOver={() => setactiveDirectoryOption("rsbcl")} className="text-left w-full px-4 py-2 text-gray-800 hover:bg-gray-100">RSBCL</button>

            {activeDirectoryOption == "rsbcl" && (
              <div className='absolute left-20 z-40 w-40 bg-white rounded-md shadow-lg py-2'>
                <Link to="/directory-rsbcl-head-office" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Head Office</Link>
                <Link to="/directory-rsbcl-depots" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">RSBCl Depots</Link>
              </div>
            )}

            <button onMouseOver={() => setactiveDirectoryOption("rsgsm")} className="text-left w-full px-4 py-2 text-gray-800 hover:bg-gray-100">RSGSM</button>

            {activeDirectoryOption == "rsgsm" && (
              <div className='absolute left-20 z-40 w-40 bg-white rounded-md shadow-lg py-2'>
                {/* <Link to="/directory-rsgsm-office" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Head Office</Link>
                <Link to="/directory-rsgsm-sugar-mill" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sugar Mill</Link> */}
                <Link to="/directory-rsgsm-reduction-center" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Reduction Centers</Link>
                {/* <Link to="/directory-rsbcl-depots" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">RSGSM Depots</Link> */}
              </div>
            )}
          </div>
        )}
      </div>

      {/* requirement */}
      {/* <div className="relative">
        <button
          onClick={() => {
            setactiveAbout(false);
            setactiveDirectory(false);
            setactiveRequirement(!activeRequirement);
          }}
          className="px-2 py-1 text-white cursor-pointer rounded-md group hover:bg-white transition duration-300 ease-in-out"
        >
          <span className="group-hover:text-black">Requirement</span>
        </button>
        {
          activeRequirement && (
            <div className="absolute left-0 z-30 mt-5 bg-white rounded-md shadow-lg py-2">
              <Link to="/requirement-rsgsm" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">RSGSM Requirement</Link>
            </div>
          )
        }
      </div> */}

      {/* administrative report  */}
      <Link to="/administrative-report" onClick={() => {
        setactiveAbout(false);
        setactiveDirectory(false);
        setactiveRequirement(false);
      }} className="px-2 py-1 text-white cursor-pointer rounded-md group hover:bg-white transition duration-300 ease-in-out">
        <span className="group-hover:text-black">Administrative Report</span>
      </Link>

      {/* contact */}
      <Link to="/contact" onClick={() => {
        setactiveAbout(false);
        setactiveDirectory(false);
        setactiveRequirement(false);
      }} className="px-2 py-1 text-white cursor-pointer rounded-md group hover:bg-white transition duration-300 ease-in-out">
        <span className="group-hover:text-black">Contact Us</span>
      </Link>

      {/* mobile app */}
      <Link to="/mobile-applications" onClick={() => {
        setactiveAbout(false);
        setactiveDirectory(false);
        setactiveRequirement(false);
      }} className="px-2 py-1 text-white cursor-pointer rounded-md group hover:bg-white transition duration-300 ease-in-out">
        <span className="group-hover:text-black">Mobile App</span>
      </Link>

      {/* Analytic dashboard  */}
      <Link to="/analytic-dashboard" onClick={() => {
        setactiveAbout(false);
        setactiveDirectory(false);
        setactiveRequirement(false);
      }} className="px-2 py-1 text-white cursor-pointer rounded-md group hover:bg-white transition duration-300 ease-in-out">
        <span className="group-hover:text-black">Analytic Dashboard</span>
      </Link>
    </>
  )
}
