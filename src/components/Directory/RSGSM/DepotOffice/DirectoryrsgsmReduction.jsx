import React, { useState, useEffect } from 'react'
import DirectoryrsgsmReductionTable from './DirectoryrsgsmReductionTable'
import axios from 'axios'
import Spinner from '../../../Loader/Spinner'
import { Link } from 'react-router-dom'

const DirectoryrsgsmReduction = () => {
    // loader
    const [loading, setLoading] = useState(true);

    // api
    const [rcName, setrcName] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalrecords, settotalrecords] = useState(0);

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    // api call    
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/v1/public/directory/rsgsm-reductionCenters', {
                params: {
                    page: currentPage,
                    size: 10
                }
            });

            if (response.status === 200) {
                setrcName(response.data.data.content);  // Set the news state with the fetched data
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
        return <Spinner />;
    }

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
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Directory</span>
                        </div>
                    </li>

                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">RSGSM Reduction</span>
                        </div>
                    </li>

                </ol>
            </div>

            {/* Heading  */}
            <h2 className="mb-4 text-2xl font-extrabold leading-none text-gray-600 md:text-3xl dark:text-slate-300 tracking-wide">RSGSM Reduction Center</h2>
            <DirectoryrsgsmReductionTable data={rcName} />

            {/* pagination */}
            {
                rcName.length == 0 ? "" :
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
    )
}

export default DirectoryrsgsmReduction
