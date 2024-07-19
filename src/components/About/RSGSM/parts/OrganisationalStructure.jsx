import React from 'react'

const OrganisationalStructure = () => {
    return (
        <div className='md:w-[90%] my-4 mx-auto'>
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                Organisational Structure :
            </h2>
            <div className="my-4 flex flex-col justify-center items-center space-y-2">
                <img src="https://excise.rajasthan.gov.in/Images/DIC.png" alt="" className="sm:h-64 md:h-80" />
                <p className="text-slate-700 dark:text-slate-200 tracking-wide sm:text-sm md:text-base text-center text-xs">
                    It has total more than 1000 working staff, having long experience.
                </p>
            </div>
        </div>
    )
}

export default OrganisationalStructure
