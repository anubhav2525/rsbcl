import React from 'react'

const DirectoryrsgsmOfficeTable = ({ data }) => {
    return (
        <div className=" mx-auto rounded-lg p-2">
            <div className="relative overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-md">
                    <thead>
                        <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs whitespace-nowrap lg:text-sm text-white">
                            <th className="py-2 px-4 border-x hidden whitespace-nowrap md:block border-slate-400"></th>
                            <th className="py-2 px-4 border-x whitespace-nowrap border-slate-400">Name</th>
                            <th className="py-2 px-4 border-x whitespace-nowrap border-slate-400">Designation</th>
                            <th className="py-2 px-4 border-x whitespace-nowrap border-slate-400">Status</th>
                            <th className="py-2 px-4 whitespace-nowrap border-x border-slate-400">Office Telephone No.</th>
                            <th className="py-2 px-4">Official Address</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-800 dark:text-slate-300'>
                        {
                            data.map(item => (
                                <tr className='text-xs md:text-sm' key={item.id}>
                                    <td className='border hidden md:flex border-slate-200 dark:border-slate-400 py-2 px-4  justify-center items-center'>
                                        <img className="w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_1280.png" alt="user image" />
                                    </td>
                                    <td className="border border-slate-200 whitespace-nowrap dark:border-slate-400 py-2 px-4">{item.id}. Ms. Chandni Raina</td>
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
