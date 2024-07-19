import React, { useState, useEffect } from 'react'
import axios from 'axios';

const TechnologicalEnhancement = () => {
    // /api/v1/about-rsgsm/imes
    // api
    const [imes, setImes] = useState([]);

    // useEffect(() => {
    //     axios.get("/api/v1/about-rsgsm/imes") // Use the proxied URL
    //         .then((res) => {
    //             setImes(res.data);
    //             console.log('Response data:', res.data); // Log the response data
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error); // Log any errors
    //         });
    // }, []);
    return (
        <div className='md:w-[90%] mx-auto'>
            <div className="my-4">
                <h2 className="my-2 text-lg font-bold text-gray-800 dark:text-white">
                    Technological Enhancement in RSGSM :
                </h2>

                <p className="my-2 text-xs sm:text-sm md:text-base text-justify text-gray-700 tracking-wide dark:text-gray-400">
                    <strong>To Provide seamless and unified IT system to Excise Department, Rajasthan State Ganganagar Sugar Mills Limited (RSGSM) and Rajasthan State Beverages Corporation Limited (RSBCL), an Integrated Excise Management System (IEMS)</strong> is being developed. This will be based on modern architecture and IT tools. It includes its Departments and Co-working Corporations, Concerned Institutions & Organisations, Internal Divisions and Sections, Development Partners and Stakeholders.
                </p>

                <p className="my-2 text-xs sm:text-sm md:text-base text-justify text-gray-700 tracking-wide dark:text-gray-400">Some of the details of <strong>Integrated Excise Management System (IEMS)</strong> are as follows-</p>

                <div className="mt-4 flex justify-center">
                    <img src="https://excise.rajasthan.gov.in/Images/IEMS.png" className="sm:h-64" alt="" />
                </div>

                <div className="mx-auto rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-md">
                            <thead>
                                <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs lg:text-sm text-white">
                                    <th className="py-2 px-4 border-x border-slate-400">Name</th>
                                    <th className="py-2 px-4 border-x border-slate-400">Designation</th>
                                    <th className="py-2 px-4 border-x border-slate-400">Status</th>
                                    <th className="py-2 px-4 border-x border-slate-400">Office Telephone No.</th>
                                    <th className="py-2 px-4">Official Address</th>
                                </tr>
                            </thead>
                            <tbody className='text-slate-800 dark:text-slate-300'>                          <tr className='text-xs md:text-sm'>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">Ms. Chandni Raina</td>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">Economic Adviser, DEA</td>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">Chairperson</td>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">23092500</td>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">R.No. 40-A, North Block, New Delhi-1.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologicalEnhancement
