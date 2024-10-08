import React from 'react'
import { table, contentIntro } from "../../static_data/Excise/Excise"
const AboutExciseIntroduction = () => {
    return (
        <div className='w-full my-3 rounded-md mx-auto px-4 py-4 md:w-[80%] shadow-lg'>
            {/* breadcrumb */}
            <div className="flex mb-5 py-3">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">About</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Excise</span>
                        </div>
                    </li>
                </ol>
            </div>

            {/* Heading  */}
            <h2 className="mb-4 text-2xl font-bold leading-none text-gray-600 md:text-3xl dark:text-slate-300 tracking-wide">Excise Introduction</h2>
            {
                contentIntro.map((item, index) => <p className='py-2 text-xs md:text-sm text-left sm:px-4 text-gray-700 dark:text-gray-300'>{item.content}</p>)
            }

            {/* lists */}

            <h4 className="my-4 text-sm font-medium leading-none text-gray-600 dark:text-slate-300 tracking-wide">Excise Commissioner & Ex- Office Prohibition Commissioner and M.D., R.S.B.C.L., Rajasthan</h4>
            <ul className="py-2 text-xs md:text-sm text-left sm:px-4 text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                {
                    table.map((item, index) => <li key={index}>{item.content}</li>)
                }
            </ul>
        </div>
    )
}

export default AboutExciseIntroduction
