import React, { useState } from 'react'

const UpperHeader = () => {
    const moon =
        <svg className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clipRule="evenodd" />
        </svg>;

    const sun =
        <svg className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clipRule="evenodd" />
        </svg>;

    const [darkMode, setDarkMode] = useState(false);
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
                    <button className="text-white px-2 border-x border-slate-500">
                        {/* SVG for theme */}
                        {darkMode ? sun : moon}
                    </button>
                    <button className="text-white px-2 border-r border-slate-500">
                        {/* SVG for notification icon */}
                        <svg className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                        </svg>
                    </button>
                    <button className="text-white px-2 border-r border-slate-500">
                        {/* SVG for search icon */}
                        <svg className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>
                    <button type="button" className="text-white font-medium rounded-lg text-xs sm:text-sm px-2 py-2 text-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600">Login</button>
                </div>
            </div>
        </div>
    )
}

export default UpperHeader
