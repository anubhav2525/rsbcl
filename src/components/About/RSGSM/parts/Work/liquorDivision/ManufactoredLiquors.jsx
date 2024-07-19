import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ManufactoredLiquors = () => {
    // api
    const [liquors, setLiquors] = useState([]);
    // useEffect(() => {
    //     axios.get("/api/v1/about-rsgsm/liquors") // Use the proxied URL
    //         .then((res) => {
    //             setLiquors(res.data);
    //             console.log('Response data:', res.data); // Log the response data
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error); // Log any errors
    //         });
    // }, []);

    return (
        <div className="my-4">
            <div className=" mx-auto rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-md">
                        <caption className=" text-center py-3 font-semibold text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                            <p className=" text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                Sugar Cane Crushing, Sugar Production
                            </p>
                        </caption>
                        <thead>
                            <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs lg:text-sm text-white">
                                <th className="py-2 px-4 border-x border-slate-400">Year</th>
                                <th className="py-2 px-4 border-x border-slate-400">Cane Crushed (Lac Qtls.)</th>
                                <th className="py-2 px-4 border-x border-slate-400">Total no. of days in Crushing Season</th>
                                <th className="py-2 px-4 border-x border-slate-400">Recovery %</th>
                                <th className="py-2 px-4 border-x border-slate-400">Electricity Export (units)</th>
                            </tr>
                        </thead>
                        <tbody className='text-slate-800 dark:text-slate-300'>
                            <tr className='text-xs md:text-sm'>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">Ms.</td>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">Economic Adviser, DEA</td>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">Chairperson</td>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">23092500</td>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">23092500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManufactoredLiquors
