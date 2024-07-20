import React, { useState, useEffect } from 'react'
import axios from 'axios';

const SalesCountryLiquor = ({ children, year, category }) => {
    // api call    
    const [salescl, setsalescl] = useState([]);
    useEffect(() => {
        axios.get(`/api/v1/sales/countryLiquor?year=${year}&category=${category}`) // Use the proxied URL
            .then((res) => {
                setsalescl(res.data);
                // console.log('Response data:', res.data); // Log the response data
            })
            .catch((error) => {
                console.error('Error:', error); // Log any errors
            });
    }, [year]);

    // console.log("salesCL", year, category, children)
    // console.log(salesData)

    // salesData.forEach(data => {
    //     console.log(data)
    // });

    // total calculation 
    const [totalUP40, settotalUP40] = useState(0);
    const [totalUP50, settotalUP50] = useState(0);
    const [totalUP5, settotalUP5] = useState(0);
    const [total, settotal] = useState(0);

    useEffect(() => {
        const totalcalculation = () => {
            let up40 = 0, up50 = 0, up5 = 0, totalSum = 0;
            salescl.forEach(item => {
                up40 += item.up40;
                up50 += item.up50;
                up5 += item.up5;
                totalSum += item.total;
            })

            // round 2 digits
            up40 = parseFloat(up40.toFixed(2));
            up50 = parseFloat(up50.toFixed(2));
            up5 = parseFloat(up5.toFixed(2));
            totalSum = parseFloat(totalSum.toFixed(2));

            // updating in state
            settotalUP40(up40)
            settotalUP50(up50)
            settotalUP5(up5)
            settotal(totalSum)
        }
        totalcalculation()
    }, [salescl]);

    return (
        <div className="flex flex-col my-4 p-2 bg-white dark:bg-slate-800 overflow-x-auto sm:no-scrollbar rounded-md shadow-xl">
            <div className='flex justify-between items-end px-2'>
                <h2 className="text-xl text-slate-800 font-bold dark:text-white">Country Liquor</h2>
                <div className="text-sm text-red-600 font-medium mt-4">In {children}</div>
            </div>

            <div className="overflow-x-auto sm:no-scrollbar sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table
                            className="min-w-full text-left text-sm font-light dark:text-white">
                            <thead
                                className="text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500">
                                <tr>
                                    <th className="px-3 py-2 border-l border-cyan-500 ">SN</th>
                                    <th className="px-3 py-2 border-x">District</th>
                                    <th className="px-3 py-2 text-end border-x ">40 UP</th>
                                    <th className="px-3 py-2 text-end border-x">50 UP</th>
                                    <th className="px-3 py-2 text-end border-x">5 UP</th>
                                    <th className="px-3 py-2 text-end border-x border-blue-500">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    salescl.map((item, index) => {
                                        return (
                                            <tr key={index}
                                                className="border-b border-neutral-200 transition duration-300 ease-in-out text-end hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                                <td className="whitespace-nowrap px-3 py-2 font-medium text-left border-x dark:border-slate-500">{index + 1}</td>
                                                <td className="whitespace-nowrap border-x px-3 py-2 text-left dark:border-slate-500">{item.district}</td>
                                                <td className="whitespace-nowrap px-3 py-2 border-x dark:border-slate-500">{item.up40}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.up50}</td>
                                                <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{item.up5}</td>
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
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalUP40}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 border-x px-3 py-2">{totalUP50}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalUP5}</td>
                                    <td className="whitespace-nowrap border-r px-3 dark:border-slate-500 py-2">{total}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesCountryLiquor
