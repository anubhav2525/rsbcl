import React from 'react'
import SugarDivision from "./Work/SugarDivision";
import Table from "./Work/Table"
import LiquorDivision from "./Work/LiquorDivision"
const Work = () => {
    return (
        <div className='md:w-[90%] my-4 mx-auto'>
            <h2 className="my-4 text-lg font-bold text-gray-800 dark:text-white">
                Works :
            </h2>

            <div className="my-4 text-xs sm:text-sm md:text-base text-justify text-gray-700 tracking-wide dark:text-gray-400 space-y-2">
                {/* sugar division  */}
                <div>Presently, the company has two divisions:-</div>

                {/* Sugar division */}
                <SugarDivision />

                {/* Sugar division table*/}
                <Table />

                <div className="my-4">
                    <div>The all three new products-</div>
                    <ul className="list-inside list-disc px-4">
                        <li>Brown Sugar(Gudia shakkar)</li>
                        <li>Jaggery</li>
                        <li>Jaggery Powder</li>
                    </ul>
                    <div>
                        are made in traditional process, without adding any chemical.
                    </div>
                </div>

                <div className='py-4'>
                    <div className="flex justify-center">
                        <img
                            src="https://excise.rajasthan.gov.in/Images/brown%20sugar.png"
                            alt=""
                            className="sm:h-64"
                        />
                    </div>
                </div>

                {/* liquior division */}
                <LiquorDivision />
            </div>
        </div>
    )
}

export default Work
