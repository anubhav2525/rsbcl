import React, { useState } from 'react'

const Dashboard = () => {
    const [popUp, setpopUp] = useState(true);

    return (
        <div>
            {popUp &&
                <div className="flex md:hidden fixed top-14 z-50 justify-between py-3 px-4 w-full bg-gray-50 items-center dark:border-gray-700 dark:bg-gray-800">
                    Open in desktop for better view
                    <button type="button" onClick={() => setpopUp(!popUp)} className="flex items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            }

        </div>
    )
}

export default Dashboard
