import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeLoader from '../../../Loader/HomeLoader';
import { useNavigate } from 'react-router-dom';

const NewsrsgsmTab = () => {

    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/v1/public/news-updates/latest-five/excise`);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching news update", error);
            } finally {
                setloading(false)
            }
        };

        fetchData();

    }, []);

    const handleDownload = (url, filename) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename || 'download.pdf'); // Fallback filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // navigation
    const navigate = useNavigate();

    const handleNavigate = () => {
        const data = {
            api: '/api/v1/public/news-updates',
            title: 'News',
            department: 'RSGSM',
            heading: 'News details'
        };
        navigate('/news', { state: data });
    };

    if (loading) {
        return <HomeLoader />
    }
    return (
        <div className="w-full">
            {
                data.length == 0 && <div className='w-full h-full flex py-8 font-bold border-t justify-center items-center'>No Content</div>
            }
            {data.map((item, index) => {
                const [year, month, day] = item.lastUpdate.split('-');
                return (
                    <div key={index} className="border-y w-full border-gray-200 py-4">
                        <div className="flex items-center space-x-4 w-full">
                            <div className="bg-orange-500 dark:bg-orange-600 w-20 sm:w-16 h-14 text-white rounded-lg flex flex-col items-center justify-center">
                                <span className="text-sm md:text-base font-bold">{day}</span>
                                <div>
                                    <span className="text-xs mr-1">{month}</span>
                                    <span className="text-xs">{year}</span>
                                </div>
                            </div>
                            <div className='w-full cursor-pointer'>
                                <div className="text-blue-500 text-xs sm:text-sm hover:text-black dark:hover:text-blue-800">{item.title}</div>
                                <div className='w-full flex justify-between items-end'>
                                    <div className="text-gray-500 text-xs sm:text-sm">{item.fileSize}</div>
                                    <div className="flex text-xs sm:text-sm items-center gap-x-3">
                                        <button onClick={() => handleDownload(item.documentLinkUrl, item.pdfName)} className='flex justify-between items-end gap-x-2 transition duration-200'>
                                            <svg className="w-6 text-gray-500 hover:text-gray-600 dark:hover:text-slate-200 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className='pt-4'>
                <button type="button" onClick={handleNavigate} className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white font-medium rounded-full text-sm px-5 py-2 text-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600">View all</button>
            </div>
        </div>
    )
}

export default NewsrsgsmTab
