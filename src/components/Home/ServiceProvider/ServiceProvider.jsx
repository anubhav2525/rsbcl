import React from 'react'

const ServiceProvider = () => {
    const link1 = [
        "Aid, Accounts & Audit Division",
        "Administration & Coordination Division",
    ];

    const link2 = [
        "Aid, Accounts & Audit Division",
        "Administration & Coordination Division",
        "Aid, Accounts & Audit Division",
        "Administration & Coordination Division",
        "Aid, Accounts & Audit Division",
        "Administration & Coordination Division",
    ];

    const link3 = [
        "Aid, Accounts & Audit Division",
        "Administration & Coordination Division",
        "Aid, Accounts & Audit Division",
        "Administration & Coordination Division",
        "Aid, Accounts & Audit Division",
        "Administration & Coordination Division",
        "Aid, Accounts & Audit Division",
        "Administration & Coordination Division",
        "Aid, Accounts & Audit Division",
        "Administration & Coordination Division",
        "Aid, Accounts & Audit Division",
        "Administration & Coordination Division",
    ];

    const buttons = [
        {
            label: "About us", color: "bg-orange-500", svg: <svg className="w-9 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z" clipRule="evenodd" />
            </svg>
        },
        {
            label: "Contact us ", color: "bg-green-500", svg: <svg className="w-9 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 8v-2h7v2H4Zm0 2v2h7v-2H4Zm9 2h7v-2h-7v2Zm7-4v-2h-7v2h7Z" clipRule="evenodd" />
            </svg>
        },
        {
            label: "Administrator Dashboard", color: "bg-blue-500", svg: <svg className="w-9 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 2c-.178 0-.356.013-.492.022l-.074.005a1 1 0 0 0-.934.998V11a1 1 0 0 0 1 1h7.975a1 1 0 0 0 .998-.934l.005-.074A7.04 7.04 0 0 0 22 10.5 8.5 8.5 0 0 0 13.5 2Z" />
                <path d="M11 6.025a1 1 0 0 0-1.065-.998 8.5 8.5 0 1 0 9.038 9.039A1 1 0 0 0 17.975 13H11V6.025Z" />
            </svg>
        },
        {
            label: "Directory ", color: "bg-orange-600", svg: <svg className="w-9 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clipRule="evenodd" />
            </svg>
        }
    ];

    return (
        <div className='w-full bg-slate-100 dark:bg-slate-800'>
            <div className='w-[90%] sm:w-[80%] p-4 flex justify-center gap-x-4 items-center mx-auto'>
                <span>
                    <svg className="w-8 sm:w-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clipRule="evenodd" />
                    </svg>
                </span>
                <h2 className="text-xl my-4 sm:text-3xl font-bold dark:text-white">Service Providers</h2>
            </div>
            <div className='py-4 px-3 w-full sm:w-[90%] mx-auto grid grid-cols-1 gap-y-4 sm:gap-x-4 sm:grid-cols-3'>
                <div className='col-span-2'>
                    <div className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg">
                        <div>
                            <h2 className="text-xl text-slate-800 dark:text-slate-300 font-bold mb-4">Liquor & beer supplier</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {link1.map((linkname, index) => (
                                    <div className='flex gap-x-3' key={index}>
                                        <span>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                                            </svg>
                                        </span>
                                        <a href="#" target="_blank" key={index} className="text-blue-500 text-xs md:text-sm hover:underline">{linkname}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='my-6'>
                            <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-300">Liquor & beer supplier</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {link2.map((division, index) => (
                                    <div className='flex gap-x-3' key={index}>
                                        <span>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                                            </svg>
                                        </span>
                                        <a href="#" target='_blank' key={index} className="text-blue-500 text-xs md:text-sm hover:underline">{division}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <div className='mt-6'>
                            <button type="button" className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white font-medium rounded-full text-sm px-5 py-2 text-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600">View all</button>
                        </div> */}
                    </div>
                </div>
                {/* buttons */}
                <div className='w-full'>
                    <div className="grid grid-cols-1 gap-y-4 mt-6 sm:mt-0">
                        {buttons.map((button, index) => (
                            <button key={index} className={`${button.color} w-full flex justify-between items-center text-white text-start text-xl font-bold py-2 h-16 px-4 rounded-md shadow-xl hover:opacity-80`}>
                                <div>{button.label}</div>
                                <div>{button.svg}</div>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceProvider
