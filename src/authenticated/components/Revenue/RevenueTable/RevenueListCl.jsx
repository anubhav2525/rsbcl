import React, { useState, useEffect } from 'react';

const RevenueListCl = ({ data }) => {
    return (
        <div className="relative overflow-x-auto shadow-md bg-slate-100 dark:bg-slate-900">
            <h5 className="text-xl font-bold dark:text-white py-4 px-2">Revenue CL</h5>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white capitalize from-blue-500 via-blue-600 to-blue-700 bg-gradient-to-br  rounded-md ease-in-out hover:shadow transition-all">
                    <tr>
                        <th scope="col" className="px-3 py-2"></th>
                        <th scope="col" className="px-3 py-2">District</th>
                        <th scope="col" className="px-3 py-2">Total(A)</th>
                        <th scope="col" className="px-3 py-2">Total(B)</th>
                        <th scope="col" className="px-3 py-2">Total(C)</th>
                        <th scope="col" className="px-3 py-2">Total(D)</th>
                        <th scope="col" className="px-3 py-2">Total(E)</th>
                        <th scope="col" className="px-3 py-2">Total</th>
                        <th scope="col" className="px-3 py-2">Last Update</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-3 py-2">{index + 1}</th>
                            <td className="px-3 py-2">{item.district}</td>
                            <td className="px-3 py-2">{item.a}</td>
                            <td className="px-3 py-2">{item.b}</td>
                            <td className="px-3 py-2">{item.c}</td>
                            <td className="px-3 py-2">{item.d}</td>
                            <td className="px-3 py-2">{item.e}</td>
                            <td className="px-3 py-2">{item.total}</td>
                            <td className="px-3 py-2">{item._id?.date ? <LastUpdate date={item._id.date} /> : 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const LastUpdate = ({ date }) => {
    const [lastUpdate, setLastUpdate] = useState('');

    useEffect(() => {
        const dateObj = new Date(date);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setLastUpdate(dateObj.toLocaleDateString(undefined, options));
    }, [date]);

    return <div>{lastUpdate}</div>;
};

export default RevenueListCl
