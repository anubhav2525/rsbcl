import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from "../Loader/Spinner"

const MobileApplications = () => {
    // loader
    const [loading, setLoading] = useState(true);

    // api
    const [mobileApps, setmobileApps] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalrecords, settotalrecords] = useState(0);

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    // api call    
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/v1/public/mobile-apps-lists', {
                params: {
                    page: currentPage,
                    size: 10
                }
            });

            if (response.status === 200) {
                setmobileApps(response.data.data.content);
                setTotalPages(response.data.data.totalPages);
                settotalrecords(response.data.data.totalElements)
            } else {
                handleErrorResponse(response.status, response.data);
            }
        } catch (error) {
            if (error.response) {
                handleErrorResponse(error.response.status, error.response.data);
            } else if (error.request) {
                console.log('No response received:', error.request);

            } else {
                console.log('Error:', error.message);
            }
        } finally {
            setLoading(false);  // Stop the loader once the request is done
        }
    };

    // http error response
    const handleErrorResponse = (status, data) => {
        switch (status) {
            case 400:
                console.log(data.message)
                break;
            case 401:
                console.log('Unauthorized:', data.message);
                break;
            case 500:
                console.log('Server Error:', data.message);
                break;
            case 404:
                console.log('Not Found:', data.message);
                break;
            default:
                console.log('Unexpected Error:', data.message);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) return <Spinner />;

    return (
        <div className="w-full mx-auto px-4 py-4 md:w-[90%]">
            {/* breadcrumb */}
            <div className="flex mb-5 py-3" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link to='/' className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Mobile Apps</span>
                        </div>
                    </li>
                </ol>
            </div>

            {/* Heading  */}
            <h2 className="mb-4 text-2xl font-extrabold leading-none text-gray-600 md:text-3xl dark:text-slate-300 tracking-wide">Mobile applications</h2>

            <div className="rounded-sm">
                <div className="relative overflow-x-auto rounded-sm">
                    <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-sm">
                        <thead>
                            <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs whitespace-nowrap lg:text-sm text-white">
                                <th className="py-2 px-4 whitespace-nowrap">App name</th>
                                <th className="py-2 px-4 border-x whitespace-nowrap border-slate-400">Version</th>
                                <th className="py-2 px-4 border-x whitespace-nowrap border-slate-400">Description</th>
                                <th className="py-2 px-4 border-x whitespace-nowrap border-slate-400">Download App</th>
                                <th className="py-2 px-4 border-x border-slate-400">User Manual</th>
                                <th className="py-2 px-4 border-x border-slate-400">Demo Video</th>
                                <th className="py-2 px-4">Suggestions</th>
                            </tr>
                        </thead>
                        <tbody className='text-slate-800 dark:text-slate-300'>
                            {
                                mobileApps.length == 0 && <tr>
                                    <th colSpan={7} className='text-base px-32 md:px-0 md:text-center py-8'>No content</th>
                                </tr>
                            }
                            {
                                mobileApps.map((item, index) => (
                                    <tr className='text-xs md:text-sm' key={index}>
                                        <td className="border border-slate-200 font-bold whitespace-nowrap capitalize dark:border-slate-400 py-2 px-4">{index + 1}. {item.appName}</td>
                                        <td className="border border-slate-200 whitespace-nowrap dark:border-slate-400 py-2 px-4">{item.version}</td>
                                        <td className="border whitespace-nowrap border-slate-200 capitalize dark:border-slate-400 py-2 px-4">{item.description}</td>
                                        <td className="border  border-slate-200 dark:border-slate-400 py-2 px-4">
                                            <a target="_blank" href={item.link}>
                                                <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl rounded-md text-sm px-5 py-2 text-center">Download</button>
                                            </a>
                                        </td>
                                        <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">
                                            <a target="_blank" href={item.documentLink}>
                                                <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white font-medium rounded-md text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
                                                    </svg>
                                                </button>
                                            </a>
                                        </td>
                                        <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">
                                            <a target="_blank" href={item.videoLink}>
                                                <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white font-medium rounded-md text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                                    <svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
                                                    </svg>
                                                </button>
                                            </a>
                                        </td>
                                        <td className="border whitespace-nowrap border-slate-200 dark:border-slate-400 py-2 px-4">{item.suggestion}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                {/* pagination */}
                {
                    mobileApps.length == 0 ? "" :
                        <div className="mt-4 px-4 text-gray-600 md:px-0">
                            <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
                                <button
                                    onClick={goToPreviousPage}
                                    disabled={currentPage === 0}
                                    className="px-3 py-1 border bg-white rounded-lg duration-150 hover:bg-gray-100"
                                >
                                    Previous
                                </button>
                                <div className='text-black dark:text-white'>
                                    Total records: {totalrecords} || Page {currentPage + 1} of {totalPages}
                                </div>
                                <button
                                    onClick={goToNextPage}
                                    disabled={currentPage === totalPages - 1}
                                    className="px-3 py-1 border bg-white rounded-lg duration-150 hover:bg-gray-100"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default MobileApplications

