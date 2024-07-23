import React from 'react'
import { Link } from 'react-router-dom';
import DarkButton from '../../DarkButton/DarkButton';

const UpperHeader = () => {

    return (
        <div className=" bg-gradient-to-r from-blue-800 to-indigo-900 py-2">
            {/* when change on header bg color then also change in nav  */}
            <div className='flex items-center sm:justify-between justify-end sm:max-w-6xl px-5 md:max-w-7xl mx-auto'>
                <div className=" items-center space-x-4 hidden sm:flex">
                    <div className="text-white flex flex-col items-end text-xs px-3 border-r">
                        <p>भारत सरकार</p>
                        <p>GOVERNMENT OF INDIA</p>
                    </div>
                    <div className="text-white text-xs">
                        <p>आबकारी विभाग</p>
                        <p>Excise Department</p>
                    </div>
                </div>
                <div className="flex items-center justify-end space-x-1">
                    {/* SVG Icons */}
                    <DarkButton classes="border-slate-500 text-white " width="w-5" />
                    <button className="text-white px-2 border-x border-slate-500" type="button">
                        {/* SVG for notification icon */}
                        <svg className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                        </svg>
                    </button>
                    <button className="text-white px-2 border-r border-slate-500" type='button'>
                        {/* SVG for search icon */}
                        <svg className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>
                    <Link to="/auth/login">
                        <button type="button" className="text-white cursor-pointer rounded-md font-medium text-xs sm:text-sm px-2 py-1 hover:font-normal transition duration-300 ease-in-out text-center hover:bg-white hover:text-black">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpperHeader
