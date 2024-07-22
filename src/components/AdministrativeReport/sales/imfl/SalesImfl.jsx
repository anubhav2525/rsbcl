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

    // total calculation 
    const [totalWhisky, settotalWhisky] = useState(0);
    const [totalRum, settotalRum] = useState(0);
    const [totalVodka, settotalVodka] = useState(0);
    const [totalgin, settotalgin] = useState(0);
    const [totalWine, settotalWine] = useState(0);
    const [totalheritage, settotalheritage] = useState(0);
    const [totalBrandy, settotalBrandy] = useState(0);
    const [totalrtd, settotalrtd] = useState(0);
    const [totalScotch, settotalScotch] = useState(0);
    const [totalOther, settotalOther] = useState(0);
    const [total, settotal] = useState(0);

    useEffect(() => {
        const totalcalculation = () => {
            let whisky = 0, rum = 0, vodka = 0, gin = 0, wine = 0, heritage = 0, brandy = 0, rtd = 0, scotch = 0, others = 0, totalSum = 0;
            salesimfl.forEach(item => {
                whisky += item.whisky;
                rum += item.rum;
                vodka += item.vodka;
                gin += item.vodka;
                wine += item.wine;
                heritage += item.heritage;
                brandy += item.brandy;
                rtd += item.rtd;
                scotch += item.scotch;
                others += item.other;
                totalSum += item.total;
            })

            // round 2 digits
            whisky = parseFloat(whisky.toFixed(2));
            rum = parseFloat(rum.toFixed(2));
            vodka = parseFloat(vodka.toFixed(2));
            gin = parseFloat(gin.toFixed(2));
            wine = parseFloat(wine.toFixed(2));
            heritage = parseFloat(heritage.toFixed(2));
            brandy = parseFloat(brandy.toFixed(2));
            rtd = parseFloat(rtd.toFixed(2));
            scotch = parseFloat(scotch.toFixed(2));
            others = parseFloat(others.toFixed(2));
            totalSum = parseFloat(totalSum.toFixed(2));

            // updating in state
            settotalBrandy(brandy)
            settotalWhisky(whisky)
            settotalOther(others)
            settotalRum(rum)
            settotalVodka(vodka)
            settotalgin(gin)
            settotalWine(wine)
            settotalrtd(rtd)
            settotalheritage(heritage)
            settotalScotch(scotch)
            settotal(totalSum)
        }
        totalcalculation()
    }, [salesimfl]);

    return (
        <div className="flex flex-col my-4 p-2 bg-white dark:bg-slate-800 rounded-md overflow-x-auto sm:no-scrollbar shadow-xl">
            <div className='flex justify-between items-end px-2'>
                <h2 className="text-xl text-slate-800 font-bold dark:text-white">Indian-Made Foreign Liquor</h2>
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
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.rum}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.vodka}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.gin}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.wine}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.heritage}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.brandy}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.rtd}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.scotch}</td>
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
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalWhisky}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalRum}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalVodka}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalgin}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalWine}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalheritage}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalBrandy}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalrtd}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalScotch}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalOther}</td>
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

export default SalesImfl
