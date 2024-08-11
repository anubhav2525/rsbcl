import React, { useState } from 'react'
import Avatar from '../Avatar/Avatar';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='h-full'>
            {/* Mobile menu button */}
            <div className="md:hidden p-2 ">
                <div className='flex justify-between'>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-slate-300 focus:outline-none">
                        {
                            isOpen ?
                                <svg className="w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    className="w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                        }
                    </button>
                    <div>
                        <div>
                            {/* profile */}
                            <Avatar />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <aside className={`relative ${isOpen ? 'block' : 'hidden'} md:flex  sm:min-h-screen no-scrollbar flex-col bg-white bg-clip-border overflow-y-auto dark:bg-slate-900  px-3 text-gray-700 transition-transform md:transform-none`}>
                <div className="py-1">
                    <h5 className="block px-3 font-sans text-slate-900 dark:text-white text-xl antialiased font-semibold tracking-normal text-blue-gray-900 capitalize">
                        {/* {department} */}
                        excise
                    </h5>
                </div>

                <nav className="flex flex-col w-full font-sans text-base font-normal text-blue-gray-700">
                    <div className="overflow-y-auto h-full">
                        <div className="block w-full h-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                            <div className="flex h-full min-w-[200px] max-w-[240px] overflow-y-auto flex-col gap-y-2 px-1 py-2 font-sans text-xs md:text-sm font-normal text-blue-gray-700">

                                {/* dashboard button  */}
                                <div className='w-full'>
                                    <NavLink
                                        to='/authenticated/dashboard'
                                        className={({ isActive }) =>
                                            `w-full block font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-md ease-in-out hover:shadow transition-all dark:text-white hover:text-white px-2 py-2 ${isActive
                                                ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-md shadow"
                                                : ""
                                            }`
                                        }
                                    >
                                        <div className='flex gap-x-2 items-center'>
                                            <div>
                                                <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" />
                                                </svg>
                                            </div>
                                            <div>Dashboard</div>
                                        </div>
                                    </NavLink>
                                </div>

                                {/* sales button */}
                                <div className='w-full'>
                                    <NavLink
                                        to='/authenticated/sales'
                                        className={({ isActive }) =>
                                            `w-full block font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-md ease-in-out hover:shadow transition-all dark:text-white hover:text-white px-2 py-2 ${isActive
                                                ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-md shadow"
                                                : ""
                                            }`
                                        }
                                    >
                                        <div className='flex justify-between items-center'>
                                            <div className='flex gap-x-2 items-center'>
                                                <div>
                                                    <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                                                    </svg>
                                                </div>
                                                <div>Sales</div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>

                                {/* revenue button  */}
                                <div className='w-full'>
                                    <NavLink
                                        to='/authenticated/revenue'
                                        className={({ isActive }) =>
                                            `w-full block font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-md ease-in-out hover:shadow transition-all dark:text-white hover:text-white px-2 py-2 ${isActive
                                                ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-md shadow"
                                                : ""
                                            }`
                                        }
                                    >
                                        <div className='flex gap-x-2 items-center'>
                                            <div>
                                                <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 3v4a1 1 0 0 1-1 1H5m4 10v-2m3 2v-6m3 6v-3m4-11v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
                                                </svg>
                                            </div>
                                            <div>Revenue</div>
                                        </div>
                                    </NavLink>
                                </div>

                                {/* Employee button */}
                                <div className='w-full'>
                                    <NavLink
                                        to='/authenticated/employee'
                                        className={({ isActive }) =>
                                            `w-full block font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-md ease-in-out hover:shadow transition-all dark:text-white hover:text-white px-2 py-2 ${isActive
                                                ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-md shadow"
                                                : ""
                                            }`
                                        }
                                    >
                                        <div className='flex gap-x-2 items-center'>
                                            <div>
                                                <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                                </svg>
                                            </div>
                                            <div>Employee</div>
                                        </div>
                                    </NavLink>
                                </div>

                                {/* Mobile App  */}
                                <div className='w-full'>
                                    <NavLink
                                        to='/authenticated/mobile-app'
                                        className={({ isActive }) =>
                                            `w-full block font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-md ease-in-out hover:shadow transition-all dark:text-white hover:text-white px-2 py-2 ${isActive
                                                ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-md shadow"
                                                : ""
                                            }`
                                        }
                                    >
                                        <div className='flex gap-x-2 items-center'>
                                            <div>
                                                <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z" />
                                                </svg>

                                            </div>
                                            <div>Mobile App</div>
                                        </div>
                                    </NavLink>
                                </div>

                                {/* requirement button */}
                                <div className='w-full '>
                                    <NavLink
                                        to='/authenticated/requirement'
                                        className={({ isActive }) =>
                                            `w-full block font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-md ease-in-out hover:shadow transition-all dark:text-white hover:text-white px-2 py-2 ${isActive
                                                ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-md shadow"
                                                : ""
                                            }`
                                        }
                                    >
                                        <div className='flex gap-x-2 items-center'>
                                            <div>
                                                <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
                                                </svg>

                                            </div>
                                            <div>Requirement</div>
                                        </div>
                                    </NavLink>
                                </div>

                                {/* contact us button */}
                                <div className='w-full'>
                                    <NavLink
                                        to='/authenticated/contact'
                                        className={({ isActive }) =>
                                            `w-full block font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-md ease-in-out hover:shadow transition-all dark:text-white hover:text-white px-2 py-2 ${isActive
                                                ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-md shadow"
                                                : ""
                                            }`
                                        }
                                    >
                                        <div className='flex gap-x-2 items-center'>
                                            <div>
                                                <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                                </svg>
                                            </div>
                                            <div>Contact us</div>
                                        </div>
                                    </NavLink>
                                </div>

                                {/* About us */}
                                <div className='w-full '>
                                    <NavLink
                                        to='/authenticated/about'
                                        className={({ isActive }) =>
                                            `w-full block font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-md ease-in-out hover:shadow transition-all dark:text-white hover:text-white px-2 py-2 ${isActive
                                                ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-md shadow"
                                                : ""
                                            }`
                                        }
                                    >
                                        <div className='flex gap-x-2 items-center'>
                                            <div>
                                                <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </div>
                                            <div>About us</div>
                                        </div>
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </aside >
        </div >
    )
}

export default Sidebar
