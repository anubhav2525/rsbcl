import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../../../Loader/Spinner';

const RevenueBeer = ({ year }) => {

    // loader
    const [loading, setLoading] = useState(true);

    // api call    
    const [revenueBeer, setrevenueBeer] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`/api/v1/revenue/beer?year=${year}`) // Use the proxied URL
                setrevenueBeer(response.data)

            }
            catch (error) {
                console.error('Error:', error); // Log any errors
            }
            finally {
                setLoading(false);
            }
        }
        setTimeout(getData, 5000);

    }, [year])

    // console.log("revernue beer", year)
    // console.log(revenueBeer)

    // revenueBeer.forEach(data => {
    //     console.log(data)
    // });

    // total calculation 

    const [totalA, settotalA] = useState(0);
    const [totalB, settotalB] = useState(0);
    const [totalC, settotalC] = useState(0);
    const [totalD, settotalD] = useState(0);
    const [totalE, settotalE] = useState(0);
    const [totalF, settotalF] = useState(0);
    const [total, settotal] = useState(0);

    useEffect(() => {
        const totalcalculation = () => {
            let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, totalSum = 0;
            revenueBeer.forEach(item => {
                a += item.a;
                b += item.b;
                c += item.c;
                d += item.d;
                e += item.e;
                f += item.f;
                totalSum += item.total;
            })

            // round 2 digits
            a = parseFloat(a.toFixed(2));
            b = parseFloat(b.toFixed(2));
            c = parseFloat(c.toFixed(2));
            d = parseFloat(d.toFixed(2));
            e = parseFloat(e.toFixed(2));
            f = parseFloat(f.toFixed(2));
            totalSum = parseFloat(totalSum.toFixed(2));

            // updating in state
            settotalA(a)
            settotalB(b)
            settotalC(c)
            settotalD(d)
            settotalE(e)
            settotalF(f)
            settotal(totalSum)
        }
        totalcalculation()
    }, [revenueBeer]);


    return (
        <div className="flex flex-col my-4 p-2 bg-white dark:bg-slate-800 rounded-md shadow-xl">
            <div className='flex justify-between items-end px-2'>
                <h2 className="text-xl text-slate-800 font-bold dark:text-white">Beer</h2>
            </div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table
                            className="min-w-full text-left text-xs sm:text-sm font-light dark:text-white">
                            <thead
                                className="text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500">
                                <tr>
                                    <th className="px-3 py-2 border-l border-cyan-500">SN</th>
                                    <th className="px-3 py-2 border-x">District</th>
                                    <th className="px-3 py-2 text-center border-x ">
                                        <div className='flex items-center gap-x-1 flex-row-reverse'>
                                            <div>(A)</div>
                                            <div>Production in BL</div>
                                        </div>
                                    </th>
                                    <th className="px-3 py-2 text-center border-x">
                                        <div className='flex items-center gap-x-1 flex-row-reverse'>
                                            <div>(B)</div>
                                            <div>Sales in BL</div>
                                        </div>
                                    </th>
                                    <th className="px-3 py-2 text-center border-x">
                                        <div className='flex items-center gap-x-1 flex-row-reverse'>
                                            <div>(C)</div>
                                            <div>ED</div>
                                        </div>
                                    </th>
                                    <th className="px-3 py-2 text-center border-x">
                                        <div className='flex items-center gap-x-1 flex-row-reverse'>
                                            <div>(D)</div>
                                            <div>BLF</div>
                                        </div>
                                    </th>
                                    <th className="px-3 py-2 text-center border-x">
                                        <div className='flex items-center gap-x-1 flex-row-reverse'>
                                            <div>(E)</div>
                                            <div>Permit Fee</div>
                                        </div>
                                    </th>
                                    <th className="px-3 py-2 text-center border-x">
                                        <div className='flex items-center gap-x-1 flex-row-reverse'>
                                            <div>(F)</div>
                                            <div>Vend Fee</div>
                                        </div>
                                    </th>
                                    <th className="px-3 py-2 text-center border-x border-blue-500">
                                        <div className='flex items-center gap-x-1 flex-row-reverse'>
                                            <div>(C+D+E)</div>
                                            <div>Total</div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='w-full'>

                                {/* {
                                    loading &&
                                    <div className='w-full flex items-center justify-center'>
                                        <Spinner />
                                    </div>
                                } */}

                                {
                                    revenueBeer.map((item, index) => {
                                        return (
                                            <tr key={index}
                                                className="border-b border-neutral-200 transition duration-300 ease-in-out text-end hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                                <td className="whitespace-nowrap px-3 py-2 font-medium text-left border-x dark:border-slate-500">{index + 1}</td>
                                                <td className="whitespace-nowrap border-x px-3 py-2 text-left dark:border-slate-500">{item.district}</td>
                                                <td className="whitespace-nowrap px-3 py-2 border-x dark:border-slate-500">{item.a}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.b}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.c}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.d}</td>
                                                <td className="whitespace-nowrap px-3 py-2 dark:border-slate-500 border-x">{item.e}</td>
                                                <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{item.f}</td>
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
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalA}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 border-x px-3 py-2">{totalB}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 border-x px-3 py-2">{totalC}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 border-x px-3 py-2">{totalD}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalE}</td>
                                    <td className="whitespace-nowrap dark:border-slate-500 px-3 py-2 border-x">{totalF}</td>
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

export default RevenueBeer
