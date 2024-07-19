import React from 'react'

const SalesTable = () => {
    return (
        <div>
            <div className="mx-auto rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-md">
                        <caption className=" text-center py-3 font-semibold text-gray-900 bg-slate-50 dark:text-white dark:bg-gray-800">
                            <p className=" text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                Sugar Cane Crushing, Sugar Production, Rectified Spirit
                                Production & Electricity Generation
                            </p>
                        </caption>
                        <thead>
                            <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs lg:text-sm text-white">
                                <th className="py-2 px-4 border-x border-slate-400">Name</th>
                                <th className="py-2 px-4 border-x border-slate-400">Designation</th>
                                <th className="py-2 px-4 border-x border-slate-400">Status</th>
                                <th className="py-2 px-4 border-x border-slate-400">Office Telephone No.</th>
                                <th className="py-2 px-4">Official Address</th>
                            </tr>
                        </thead>
                        <tbody className='text-slate-800 dark:text-slate-300'>
                            <tr className='text-xs md:text-sm'>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4"> Ms. Chandni Raina</td>
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

export default SalesTable
