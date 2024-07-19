import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Management = () => {
    const [management, setManagement] = useState([]);
    const item = [];
    //api
    // useEffect(() => {
    //     axios.get("/api/v1/about-rsgsm/management") // Use the proxied URL
    //         .then((res) => {
    //             setManagement(res.data);
    //             // console.log('Response data:', res.data); // Log the response data
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error); // Log any errors
    //         });
    // }, []);

    return (
        <div className='md:w-[90%] mx-auto'>
            <h2 className="my-4 text-lg font-bold text-gray-800 dark:text-white">
                Management :
            </h2>

            <p className="my-4 text-xs sm:text-sm md:text-base text-justify text-gray-700 tracking-wide dark:text-gray-400">
                The State Government owns 99.97% shares of Rajasthan State Ganganagar
                Sugar Mills Limited (RSGSM). The Company is managed by the Board of
                Directors and the members of the Board are appointed by the Government
                of Rajasthan. <strong>Secretary, Finance (Revenue)</strong> is appointed
                ex-officio Director-in-Charge of the Company. At present, there are 10
                Directors on the Board of the Directors of the Company-
            </p>

            {/* management table here  */}
            <div className=" mx-auto rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-md">
                        <thead>
                            <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs lg:text-sm text-white">
                                <th className="py-2 px-4 border-x border-slate-400">Designation</th>
                                <th className="py-2 px-4 border-x border-slate-400">Status</th>
                                <th className="py-2 px-4 border-x border-slate-400">Office Telephone No.</th>
                                <th className="py-2 px-4">Official Address</th>
                            </tr>
                        </thead>
                        <tbody className='text-slate-800 dark:text-slate-300'>
                            <tr className='text-xs md:text-sm' >
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
    )
}

export default Management
