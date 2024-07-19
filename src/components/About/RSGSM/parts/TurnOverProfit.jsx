import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TurnOverProfit = () => {
    // api
    const [profitLoss, setProfitLoss] = useState([]);
    // useEffect(() => {
    //     axios.get("/api/v1/about-rsgsm/turnover-profit") // Use the proxied URL
    //         .then((res) => {
    //             setProfitLoss(res.data);
    //             console.log('Response data:', res.data); // Log the response data
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error); // Log any errors
    //         });
    // }, []);
    return (
        <div className='my-4 md:w-[90%] mx-auto'>
            {/* Rajasthan Heritage Liquor */}
            <h2 className="my-2 text-lg font-bold text-gray-800 dark:text-white">
                Over All Revenue, Turn Over & Profit :
            </h2>

            <p className="my-2 text-xs sm:text-sm md:text-base text-justify text-gray-700 tracking-wide dark:text-gray-400">
                RSGSM has played a vital role in safeguarding the excise revenue of the State Government by way of successful implementation of the Excise Policy and has earned reasonable rate of return on the investments made.
            </p>

            <p className="my-2 text-xs sm:text-sm md:text-base text-justify text-gray-700 tracking-wide dark:text-gray-400">
                Some Details of Turn Over & Profit are as follows-
            </p>

            {/* turnover ptofit table */}
            <div className=" mx-auto rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-md">
                        <thead>
                            <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs lg:text-sm text-white">                              
                                <th className="py-2 px-4 border-x border-slate-400">Status</th>
                                <th className="py-2 px-4 border-x border-slate-400">Office Telephone No.</th>
                                <th className="py-2 px-4">Official Address</th>
                            </tr>
                        </thead>
                        <tbody className='text-slate-800 dark:text-slate-300'>
                            <tr className='text-xs md:text-sm'>                              
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

export default TurnOverProfit
