import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HomeLoader from "../../Loader/HomeLoader"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ViewTableNewsActs = () => {
    const location = useLocation();

    // Access the object passed from the previous page
    const { api, title, department, heading } = location.state || {};

    // loader
    const [loading, setLoading] = useState(true);
    const [data, setdata] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalrecords, settotalrecords] = useState(0);

    // first time loading
    useEffect(() => {
        fetchData();
    }, [currentPage]);

    // api call    
    const fetchData = async () => {
        try {
            const response = await axios.get(api, {
                params: {
                    page: currentPage, // or just 'page' in shorthand ES6 syntax
                    size: 10  // or just 'size' in shorthand ES6 syntax
                }
            });

            if (response.status === 200) {
                setdata(response.data.data.content);  // Set the news state with the fetched data
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

    if (loading) {
        return <HomeLoader />
    }

    return (
        <div className='w-full my-3 rounded-md mx-auto px-4 py-4 md:w-[80%] shadow-lg'>
            {/* breadcrumb */}
            <div className="flex mb-5 py-3">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link to='/' className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{title}</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{department}</span>
                        </div>
                    </li>
                </ol>
            </div>

            {/* Heading  */}
            <h2 className="mb-4 text-2xl font-bold leading-none text-gray-600 md:text-3xl dark:text-slate-300 tracking-wide">{heading}</h2>

            {/* table */}
            <div className="bg-white dark:bg-slate-800 overflow-x-auto shadow-md sm:rounded-sm">
                <table className="w-full rounded-lg table-auto text-sm text-left">
                    <thead className="dark:bg-blue-700 bg-blue-700 text-gray-100 font-medium border-b">
                        <tr>
                            <th className="py-2 px-6">Title</th>
                            <th className="py-2 px-6">Description</th>
                            <th className="py-2 px-6">Department</th>
                            <th className="py-2 px-6">Doc</th>
                            <th className="py-2 px-6">Date</th>
                            <th className="py-2 px-6">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-slate-300 divide-y text-xs">
                        {
                            data.length == 0 && <tr>
                                <th colSpan={6} className='text-base text-center my-8'>No content</th>
                            </tr>
                        }
                        {
                            data.map((item, index) =>
                                <tr key={index}>
                                    <td className="px-6 py-3 whitespace-nowrap">{item.title}</td>
                                    <td className="px-6 py-3">{item.description}</td>
                                    <td className="px-6 py-3 whitespace-nowrap uppercase">{item.department}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        <a target="_blank" href={item.documentLinkUrl}>
                                            <svg className="w-6 h-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
                                            </svg>
                                        </a>
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">{item.lastUpdate}</td>
                                    <td className='px-6 py-3'>
                                        {item.newsStatus === 'Active' && <span className="bg-green-600 text-white text-xs font-medium me-2 px-3 py-0.5 rounded dark:bg-green-700 dark:text-white">
                                            {item.newsStatus}
                                        </span>}
                                        {item.newsStatus === 'In-active' && <span className="bg-yellow-600 text-white text-xs font-medium me-2 px-3 py-0.5 rounded dark:bg-yellow-700 dark:text-white">
                                            {item.newsStatus}
                                        </span>}
                                        {item.newsStatus === 'Removed' && <span className="bg-red-600 text-white text-xs font-medium me-2 px-3 py-0.5 rounded dark:bg-red-700 dark:text-white">
                                            {item.newsStatus}
                                        </span>}
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>

            {/* pagination */}

            {
                data.length == 0 ? "" :
                    <div className="mt-4 text-gray-600 md:px-0">
                        <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
                            <button
                                onClick={goToPreviousPage}
                                disabled={currentPage === 0}
                                className="px-3 py-1 border bg-white rounded-lg duration-150 hover:bg-gray-100"
                            >
                                Previous
                            </button>
                            <div className='text-black dark:text-white font-normal'>
                                <span className='hidden sm:inline'>Total records: {totalrecords} ||</span> Page {currentPage + 1} of {totalPages}
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
        </div >

    )
}

export default ViewTableNewsActs
