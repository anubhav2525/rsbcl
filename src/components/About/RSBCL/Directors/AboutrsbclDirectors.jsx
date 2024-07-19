import React from 'react'

const AboutrsbclDirectors = () => {
    return (
        <div className='w-full my-3 rounded-md mx-auto px-4 py-4 md:w-[80%] shadow-lg'>
            {/* breadcrumb */}
            <div className="flex mb-5 py-3" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">About</span>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">RSBCL</span>
                        </div>
                    </li>
                </ol>
            </div>

            {/* Heading  */}
            <h2 className="mb-4 text-2xl font-bold leading-none text-gray-600 md:text-3xl dark:text-slate-300 tracking-wide">RSBCL Board of Directors</h2>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />

            </div>
        </div>
    )
}

export default AboutrsbclDirectors


const BusinessCard = () => {
    return (
        <div
            className="relative block bg-gradient-to-r from-blue-100 overflow-hidden rounded-xl border border-gray-300 p-4 sm:p-6 lg:p-8"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        Anubhav
                    </h3>

                    <p className="mt-4 text-sm font-medium text-gray-600">By John Doe</p>
                </div>

                <div className="hidden sm:block sm:shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="size-24 hover:scale-125 duration-500 ease-in-out transition-all rounded-lg object-cover shadow-2xl"
                    />
                </div>
            </div>

            <div className="mt-4 space-y-2">
                <div className="text-sm font-medium text-gray-600">Address</div>
                <div className="text-xs text-pretty  text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, perferendis.</div>
            </div>


            <div className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col">
                    <div className="text-sm font-medium text-gray-600">Contact</div>
                    <div className="text-xs text-gray-500">31st June, 2021</div>
                </div>
            </div>
        </div>
    )
}



