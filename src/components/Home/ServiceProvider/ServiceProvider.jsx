import React, { useState, useEffect } from 'react'
import axios from 'axios';
import HomeLoader from '../../Loader/HomeLoader';
import { useNavigate } from 'react-router-dom';

const ServiceProvider = () => {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/v1/public/services-lists`);
                setData(response.data.data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching services", error);
            }
            finally {
                setloading(false)
            }
        };
        fetchData();
    }, []);

    if (loading) return <HomeLoader />

    return (
        <div className='w-full bg-slate-100 dark:bg-slate-800'>
            <div className='w-[90%] sm:w-[80%] p-4 flex justify-center gap-x-4 items-center mx-auto'>
                <span>
                    <svg className="w-8 sm:w-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clipRule="evenodd" />
                    </svg>
                </span>
                <h2 className="text-xl my-4 sm:text-3xl font-bold dark:text-white">Service Providers</h2>
            </div>
            <div className=' w-full flex flex-col gap-4'>
                <div className="bg-white dark:bg-gray-900 p-5 sm:px-16">
                    <div>                    
                        <h2 className="text-xl text-slate-800 dark:text-slate-300 font-bold mb-4">Liquor & beer supplier</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.filter(item => item.category === "LIQUOR").map((item, index) => (
                                <div className='flex gap-x-3' key={index}>
                                    <span>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                                        </svg>
                                    </span>
                                    <a href={item.link} target="_blank" className="text-blue-500 text-xs md:text-sm hover:underline">{item.title}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="text-xl text-slate-800 dark:text-slate-300 capitalize font-bold mb-4">RETAIL SHOP & BAR LICENSEES</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.filter(item => item.category === "RETAIL").map((item, index) => (
                                <div className='flex gap-x-3' key={index}>
                                    <span>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                                        </svg>
                                    </span>
                                    <a href={item.link} target="_blank" className="text-blue-500 text-xs md:text-sm hover:underline">{item.title}</a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl text-slate-800 dark:text-slate-300 font-bold mb-4">Public</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.filter(item => item.category === "PUBLIC").map((item, index) => (
                                <div className='flex gap-x-3' key={index}>
                                    <span>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                                        </svg>
                                    </span>
                                    <a href={item.link} target="_blank" className="text-blue-500 text-xs md:text-sm hover:underline">{item.title}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceProvider
