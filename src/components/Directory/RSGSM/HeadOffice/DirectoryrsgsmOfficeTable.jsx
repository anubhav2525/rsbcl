import React from 'react'

const DirectoryrsgsmOfficeTable = ({ data }) => {
    return (
        <div className=" mx-auto rounded-sm p-2">
            <div className="relative overflow-x-auto rounded-sm">
                <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-sm">
                    <thead>
                        <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs whitespace-nowrap lg:text-sm text-white">
                            <th className="py-2 px-4 whitespace-nowrap">Name</th>
                            <th className="py-2 px-4 border-x whitespace-nowrap border-slate-400">Designation</th>
                            <th className="py-2 px-4 border-x whitespace-nowrap border-slate-400">Status</th>
                            <th className="py-2 px-4 whitespace-nowrap border-x border-slate-400">Office Telephone No.</th>
                            <th className="py-2 px-4">Official Address</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-800 dark:text-slate-300'>
                        {
                            data.length == 0 && <tr>
                                <th colSpan={5} className='text-base text-center py-8'>No content</th>
                            </tr>
                        }
                        {
                            data.map(item => (
                                <tr className='text-xs md:text-sm' key={item.id}>
                                    <td className="border border-slate-200 whitespace-nowrap dark:border-slate-400 py-2 px-4">{item.id}. {item.name}</td>
                                    <td className="border whitespace-nowrap border-slate-200 dark:border-slate-400 py-2 px-4">Economic Adviser, DEA</td>
                                    <td className="border whitespace-nowrap border-slate-200 dark:border-slate-400 py-2 px-4">Chairperson</td>
                                    <td className="border whitespace-nowrap border-slate-200 dark:border-slate-400 py-2 px-4">23092500</td>
                                    <td className="border whitespace-nowrap border-slate-200 dark:border-slate-400 py-2 px-4">R.No. 40-A, North Block, New Delhi-1.</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DirectoryrsgsmOfficeTable
