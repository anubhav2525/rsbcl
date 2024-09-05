import React from 'react'

const DirectoryExciseTable = ({ data }) => {
    return (
        <div className="mx-auto rounded-sm">
            <div className="relative overflow-x-auto rounded-sm">
                <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-sm">
                    <thead>
                        <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs lg:text-sm text-white">
                            <th className="py-2 px-4">Name of Officer/Minister</th>
                            <th className="py-2 px-4 border-x border-slate-400">Designation</th>
                            <th className="py-2 px-4 border-x border-slate-400">Mobile No.</th>
                            <th className="py-2 px-4 border-x border-slate-400">STD Code</th>
                            <th className="py-2 px-4 border-x border-slate-400">Office</th>
                            <th className="py-2 px-4 border-x border-slate-400">FAX No.</th>
                            <th className="py-2 px-4">Email</th>
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
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">{item.mobileNo == null ? "-" : item.mobileNo}</td>
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">{item.stdCode}</td>
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">{item.officeAddress}</td>
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">{item.faxNo}</td>
                                    <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">
                                        <a target="_self" className='text-black' href={`mailto:${item.email}`}>{item.email}</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DirectoryExciseTable
