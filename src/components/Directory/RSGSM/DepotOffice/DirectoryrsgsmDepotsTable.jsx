import React from 'react'

const DirectoryrsgsmDepotsTable = ({data}) => {
    return (
        <div className=" mx-auto rounded-lg p-2">
            <div className="relative overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-md">
                    <thead>
                        <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs lg:text-sm text-white">
                            <th className="py-2 px-4 border-x border-slate-400">RC Name</th>
                            <th className="py-2 px-4 border-x border-slate-400">Email address</th>

                        </tr>
                    </thead>
                    <tbody className='text-slate-800 dark:text-slate-300'>
                        {
                            data.map((item, index) => (
                                <tr className='text-xs md:text-sm' key={index}>
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">{index + 1}. {item.rcName}</td>
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">{item.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DirectoryrsgsmDepotsTable
