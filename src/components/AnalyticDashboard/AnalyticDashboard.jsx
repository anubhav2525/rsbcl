import React from 'react'
import { Link } from 'react-router-dom'
const AnalyticDashboard = () => {
    return (
        <div className='w-full my-3 rounded-md mx-auto px-4 py-4 md:w-[80%]'>
            {/* breadcrumb */}
            <div className="flex mb-5 py-3">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link to='/' className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Analytic Dashboard</span>
                        </div>
                    </li>

                </ol>
            </div>

            {/* Heading  */}
            <h2 className="mb-4 text-2xl font-bold leading-none text-gray-600 md:text-3xl dark:text-slate-300 tracking-wide">Analytic Dashboard</h2>


            <p className="text-base my-6 font-normal text-gray-900 dark:text-white">The different links provided to serve some services.</p>


            <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <a href='' className=" bg-gradient-to-r from-blue-800 to-indigo-900 py-2 font-medium rounded text-sm px-5 text-white text-center">Liquor Sales Analysis</a>
                <a href='' className=" bg-gradient-to-r from-blue-800 to-indigo-900 py-2 font-medium rounded text-sm px-5 text-white text-center">Liquor Revenue Analysis</a>
                <a href='' className=" bg-gradient-to-r from-blue-800 to-indigo-900 py-2 font-medium rounded text-sm px-5 text-white text-center">Liquor Production Analysis</a>
                <a href='' className=" bg-gradient-to-r from-blue-800 to-indigo-900 py-2 font-medium rounded text-sm px-5 text-white text-center">Liquor Supply Analysis</a>
                <a href='' className=" bg-gradient-to-r from-blue-800 to-indigo-900 py-2 font-medium rounded text-sm px-5 text-white text-center">Shop Sale Analysis</a>
            </div>

        </div>
    )
}

export default AnalyticDashboard
