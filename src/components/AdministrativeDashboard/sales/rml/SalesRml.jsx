import React from 'react'

const SalesRml = ({children}) => {
    return (
        <div className="flex flex-col my-4 p-2 bg-white dark:bg-slate-800 rounded-md shadow-xl">
            <div className='flex justify-between items-end px-2'>
                <h2 className="text-xl text-slate-800 font-bold dark:text-white">Rajasthan Manufactured Liquor</h2>
                <div className="text-sm text-red-600 font-medium mt-4">In {children}</div>
            </div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table
                            className="min-w-full text-left text-sm font-light dark:text-white">
                            <thead
                                className="text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500">
                                <tr>
                                    <th className="px-3 py-2 border-l border-cyan-500 ">SN</th>
                                    <th className="px-3 py-2 border-x">District</th>
                                    <th className="px-3 py-2 text-end border-x ">Whisky</th>
                                    <th className="px-3 py-2 text-end border-x">Rum</th>
                                    <th className="px-3 py-2 text-end border-x">Vodka</th>
                                    <th className="px-3 py-2 text-end border-x">Gin</th>
                                    <th className="px-3 py-2 text-end  border-x border-blue-500">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    className="border-b border-neutral-200 transition duration-300 ease-in-out text-end hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                    <td className="whitespace-nowrap px-3 py-2 font-medium text-left border-x dark:border-slate-500">1</td>
                                    <td className="whitespace-nowrap border-x px-3 py-2 text-left dark:border-slate-500">12121212</td>
                                    <td className="whitespace-nowrap px-3 py-2 border-x dark:border-slate-500">121212121</td>
                                    <td className="whitespace-nowrap px-3 py-2 border-x dark:border-slate-500">121212121</td>
                                    <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">1212121212</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">12121212121</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">212121212</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr
                                    className="border-b border-neutral-200 transition duration-300 ease-in-out font-bold text-yellow-500 hover:bg-neutral-100 text-end dark:border-white/10 dark:hover:bg-neutral-600">
                                    <td className="whitespace-nowrap text-center border-x px-3 py-2 dark:border-slate-500" colSpan={2}>Total</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">Otto</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">Otto</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 border-x px-3 py-2">@mdo</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">Otto</td>
                                    <td className="whitespace-nowrap border-r px-3 dark:border-slate-500 py-2">@mdo</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesRml
