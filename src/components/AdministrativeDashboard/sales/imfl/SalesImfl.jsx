import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SalesImfl = ({ children, year, category }) => {
    // api call    
    const [salesimfl, setSalesimfl] = useState([]);
    useEffect(() => {
        axios.get(`/api/v1/sales/iml?year=${year}&category=${category}`) // Use the proxied URL
            .then((res) => {
                setSalesimfl(res.data);
                // console.log('Response data:', res.data); // Log the response data
            })
            .catch((error) => {
                console.error('Error:', error); // Log any errors
            });
    }, [year]);

    // console.log("salesImfl", year, category, children)
    // console.log(salesimfl)

    // salesimfl.forEach(data => {
    //     console.log(data)
    // });
    return (
        <div className="flex flex-col my-4 p-2 bg-white dark:bg-slate-800 rounded-md overflow-x-auto no-scrollbar shadow-xl">
            <div className='flex justify-between items-end px-2'>
                <h2 className="text-xl text-slate-800 font-bold dark:text-white">Indian-Made Foreign Liquor</h2>
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
                                    <th className="px-3 py-2 border-l  border-cyan-500 ">SN</th>
                                    <th className="px-3 py-2 border-x">District</th>
                                    <th className="px-3 py-2 text-end border-x ">Whisky</th>
                                    <th className="px-3 py-2 text-end border-x">Rum</th>
                                    <th className="px-3 py-2 text-end border-x">Vodka</th>
                                    <th className="px-3 py-2 text-end border-x">Gin</th>
                                    <th className="px-3 py-2 text-end border-x">Wine</th>
                                    <th className="px-3 py-2 text-end border-x">Heritage</th>
                                    <th className="px-3 py-2 text-end border-x">Brandy</th>
                                    <th className="px-3 py-2 text-end border-x">RTD</th>
                                    <th className="px-3 py-2 text-end border-x">Scotch</th>
                                    <th className="px-3 py-2 text-end border-x">Other</th>
                                    <th className="px-3 py-2 text-end  border-x border-blue-500">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    salesimfl.map((item, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className="border-b border-neutral-200 transition duration-300 ease-in-out text-end hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                                <td className="whitespace-nowrap px-3 py-2 font-medium text-left border-x dark:border-slate-500">{index + 1}</td>
                                                <td className="whitespace-nowrap border-x px-3 py-2 text-left dark:border-slate-500">{item.district}</td>
                                                <td className="whitespace-nowrap px-3 py-2 border-x dark:border-slate-500">{item.whisky}</td>
                                                <td className="whitespace-nowrap px-3 py-2  dark:border-slate-500 border-x">{item.rum}</td>
                                                <td className="whitespace-nowrap px-3 py-2  dark:border-slate-500 border-x">{item.vodka}</td>
                                                <td className="whitespace-nowrap px-3 py-2  dark:border-slate-500 border-x">{item.gin}</td>
                                                <td className="whitespace-nowrap px-3 py-2  dark:border-slate-500 border-x">{item.wine}</td>
                                                <td className="whitespace-nowrap px-3 py-2  dark:border-slate-500 border-x">{item.heritage}</td>
                                                <td className="whitespace-nowrap px-3 py-2  dark:border-slate-500 border-x">{item.brandy}</td>
                                                <td className="whitespace-nowrap px-3 py-2  dark:border-slate-500 border-x">{item.rtd}</td>
                                                <td className="whitespace-nowrap px-3 py-2  dark:border-slate-500 border-x">{item.scotch}</td>
                                                <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{item.other}</td>
                                                <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{item.total}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr
                                    className="border-b border-neutral-200 transition duration-300 ease-in-out font-bold text-yellow-500 hover:bg-neutral-100 text-end dark:border-white/10 dark:hover:bg-neutral-600">
                                    <td className="whitespace-nowrap text-center border-x px-3 py-2 dark:border-slate-500" colSpan={2}>Total</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">Otto</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">Otto</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">Otto</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">Otto</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">Otto</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">Otto</td>
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

export default SalesImfl
