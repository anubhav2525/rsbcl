import React from 'react'
import NewsTabMenu from "./News/NewsTabMenu";
import ActTabMenu from './ActPolicies/ActTabMenu';
import FocusScroll from './Focus/FocusScroll';

const InformationSection = () => {
    return (
        <div className='w-full mt-4 sm:w-[95%] px-2 md:px-4 py-4 mx-auto shadow-x'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-6 md:grid-cols-8 px-2'>
                <div className='sm:col-span-3 md:col-span-3 border-b sm:border-b-0 sm:border-r border-slate-400 px-4 my-4 sm:my-2'>
                    <div>
                        <div className='flex items-center gap-x-3'>
                            <span>
                                <svg className="sm:w-8 w-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <h2 className='sm:text-2xl text-xl font-medium text-slate-700 dark:text-white'>News</h2>
                        </div>
                    </div>
                    <NewsTabMenu />
                </div>
                <div className='sm:col-span-3 md:col-span-3 border-b sm:border-b-0 sm:border-r border-slate-400 px-4 my-4 sm:my-2'>
                    <div>
                        <div className='flex items-center gap-x-3'>
                            <span>
                                <svg className="sm:w-8 w-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <h2 className='sm:text-2xl flex text-xl font-medium text-slate-700 dark:text-white'>Acts, Policies {" "}<span className='hidden md:flex'> & Documents</span></h2>
                        </div>
                    </div>
                    <ActTabMenu />
                </div>
                <div className='sm:col-span-5 md:col-span-2 px-4 my-4 sm:my-2'>
                    <div>
                        <div className='flex items-center gap-x-3'>
                            <span>
                                <svg className="sm:w-8 w-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <h2 className='sm:text-2xl text-xl font-medium text-slate-700 dark:text-white'>In Focus</h2>
                        </div>
                    </div>
                    <div className='my-4 w-full'>
                        <FocusScroll />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationSection
