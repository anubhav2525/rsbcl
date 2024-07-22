import React, { useState, useEffect } from 'react'
import axios from 'axios';

const SalesRml = ({ children, year, category }) => {
    // api call    
    const [salesrml, setSalesrml] = useState([]);
    useEffect(() => {
        axios.get(`/api/v1/sales/rml?year=${year}&category=${category}`) // Use the proxied URL
            .then((res) => {
                setSalesrml(res.data);
                // console.log('Response data:', res.data); // Log the response data
            })
            .catch((error) => {
                console.error('Error:', error); // Log any errors
            });
    }, [year]);

    // console.log("salesrml", year, category, children)
    // console.log(salesrml)

    // salesrml.forEach(data => {
    //     console.log(data)
    // });


    // total calculation 
    const [totalWhisky, settotalWhisky] = useState(0);
    const [totalRum, settotalRum] = useState(0);
    const [totalVodka, settotalVodka] = useState(0);
    const [totalgin, settotalgin] = useState(0);
    const [total, settotal] = useState(0);

    useEffect(() => {
        const totalcalculation = () => {
            let whisky = 0, rum = 0, vodka = 0, gin = 0, totalSum = 0;
            salesrml.forEach(item => {
                whisky += item.whisky;
                rum += item.rum;
                vodka += item.vodka;
                gin += item.vodka;
                totalSum += item.total;
            })

            // round 2 digits
            whisky = parseFloat(whisky.toFixed(2));
            rum = parseFloat(rum.toFixed(2));
            vodka = parseFloat(vodka.toFixed(2));
            gin = parseFloat(gin.toFixed(2));
            totalSum = parseFloat(totalSum.toFixed(2));

            // updating in state
            settotalWhisky(whisky)
            settotalRum(rum)
            settotalVodka(vodka)
            settotalgin(gin)
            settotal(totalSum)
        }
        totalcalculation()
    }, [salesrml]);


    return (
        <div className="flex flex-col my-4 p-2 bg-white dark:bg-slate-800 overflow-x-auto sm:no-scrollbar rounded-md shadow-xl">
            <div className='flex justify-between items-end px-2'>
                <h2 className="text-xl text-slate-800 font-bold dark:text-white">Rajasthan Manufactured Liquor</h2>
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
                                    <th className="px-3 py-2 border-l border-cyan-500">SN</th>
                                    <th className="px-3 py-2 border-x">District</th>
                                    <th className="px-3 py-2 text-end border-x ">Whisky</th>
                                    <th className="px-3 py-2 text-end border-x">Rum</th>
                                    <th className="px-3 py-2 text-end border-x">Vodka</th>
                                    <th className="px-3 py-2 text-end border-x">Gin</th>
                                    <th className="px-3 py-2 text-end  border-x border-blue-500">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    salesrml.map((item, index) => {
                                        return (
                                            <tr key={index}
                                                className="border-b border-neutral-200 transition duration-300 ease-in-out text-end hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                                <td className="whitespace-nowrap px-3 py-2 font-medium text-left border-x dark:border-slate-500">{index + 1}</td>
                                                <td className="whitespace-nowrap border-x px-3 py-2 text-left dark:border-slate-500">{item.district}</td>
                                                <td className="whitespace-nowrap px-3 py-2 border-x dark:border-slate-500">{item.whisky}</td>
                                                <td className="whitespace-nowrap px-3 py-2 border-x dark:border-slate-500">{item.rum}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.vodka}</td>
                                                <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{item.gin}</td>
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
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalWhisky}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalRum}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalVodka}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalgin}</td>
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

export default SalesRml
