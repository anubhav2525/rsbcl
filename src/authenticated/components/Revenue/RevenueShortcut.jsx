import React, { useState } from 'react'

const RevenueShortcut = () => {
    const [isActive, setisActive] = useState(false);
    return (
        <div className="fixed bottom-3 right-3 md:bottom-4 md:right-6 flex flex-col items-end">
            {isActive && (
                <div className="absolute z-10 bottom-3 right-16 inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm  dark:bg-gray-700">
                    Add
                    <div className=''></div>
                </div>
            )}
            <button
                onClick={() => setisActive(!isActive)}
                className="p-4 from-blue-500 via-blue-600 to-blue-700 bg-gradient-to-br text-white hover:text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
            >
                <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                </svg>
            </button>
        </div>
    )
}

export default RevenueShortcut
