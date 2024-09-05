import React from 'react'

const DirectoryrsbclTable = ({ data }) => {
    return (
        <div className="mx-auto rounded-lg p-2">
            <div className="relative overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-md">
                    <thead>
                        <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs lg:text-sm text-white">
                            <th className="py-2 px-4 border-x border-slate-400">Name</th>
                            <th className="py-2 px-4 border-x border-slate-400">Designation</th>
                            <th className="py-2 px-4 border-x border-slate-400">Email</th>
                            <th className="py-2 px-4 border-x border-slate-400">Phone number</th>
                            <th className="py-2 px-4">Mobile number</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-800 dark:text-slate-300'>
                        {
                            data.length == 0 && <tr>
                                <th colSpan={6} className='text-base text-center py-8'>No content</th>
                            </tr>
                        }
                        {
                            data.map((item, index) => (
                                <tr className='text-xs md:text-sm' key={index}>
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">{item.sno}. {item.name}</td>
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">{item.designation}</td>
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">{item.email}</td>
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">{item.phoneNo}</td>
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">{item.mobileNo}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DirectoryrsbclTable
