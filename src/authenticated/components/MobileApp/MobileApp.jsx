import React, { useEffect, useState } from 'react'
import MobileAppCard from './MobileAppCard'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../../components/Loader/Spinner';
import Alert from '../Popup/Alert';

const MobileApp = () => {
    // alert message
    const [alertMsg, setAlertMsg] = useState({
        bgColor: "",
        textColor: "",
        crossHover: "",
        message: ""
    });

    // loader
    const [loading, setLoading] = useState(true);

    // filter options
    const [filterOption, setfilterOption] = useState(false);
    const [apps, setApps] = useState([]);

    // http error response
    const handleErrorResponse = (status, data) => {
        switch (status) {
            case 400:
                setAlertMsg({
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-800",
                    crossHover: "hover:bg-blue-200",
                    message: data.message
                });
                break;
            case 401:
                console.log('Unauthorized:', data.message);
                setAlertMsg({
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-800",
                    crossHover: "hover:bg-blue-200",
                    message: data.message || "Unauthorized you are not allowed to access these resources"
                });
                break;
            case 500:
                console.log('Server Error:', data.message);
                setAlertMsg({
                    bgColor: "bg-red-100",
                    textColor: "text-red-600",
                    crossHover: "hover:bg-red-200",
                    message: "Internal server error 500" || data.message
                });
                break;
            case 404:
                console.log('Not Found:', data.message);
                setAlertMsg({
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-800",
                    crossHover: "hover:bg-blue-200",
                    message: data.message
                });
                break;
            default:
                console.log('Unexpected Error:', data.message);
                setAlertMsg({
                    bgColor: "bg-red-100",
                    textColor: "text-red-800",
                    crossHover: "hover:bg-red-200",
                    message: data.message
                });
        }
    };

    // first time loading
    useEffect(() => {
        fetchData();
    }, []);

    // api call    
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/v1/public/mobile-apps');
            if (response.status === 200) {
                console.log('Success:', response.data.message);                
                setApps(response.data.data);
                console.log(response.data.data);
            } else {
                handleErrorResponse(response.status, response.data);
            }
        } catch (error) {
            if (error.response) {
                handleErrorResponse(error.response.status, error.response.data);
            } else if (error.request) {
                console.log('No response received:', error.request);
                setAlertMsg({
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-800",
                    crossHover: "hover:bg-blue-200",
                    message: error.message
                });
            } else {
                console.log('Error:', error.message);
                setAlertMsg({
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-800",
                    crossHover: "hover:bg-blue-200",
                    message: error.message
                });
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Spinner />

    return (
        <div className='h-full w-full p-4 md:px-2 '>
            <div className='mb-3 w-full grid grid-cols-1 md:grid-cols-3 gap-2'>
                <div className='h-8'>
                    <form className='w-full h-full flex justify-between items-end gap-1'>
                        {/* search icon  */}
                        <div className='w-full h-full'>
                            <div className="relative flex items-center w-full h-full rounded border dark:border-slate-600  border-slate-300 focus-within:shadow-lg bg-white dark:bg-slate-700 overflow-hidden">
                                <div className="grid place-items-center h-full w-8 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    className="peer h-full w-full outline-none text-sm dark:text-white dark:bg-slate-700 text-gray-700 px-2"
                                    type="text"
                                    placeholder="Search with app name.." />
                            </div>
                        </div>
                        {/* submit button  */}
                        <div className='h-full'>
                            <button type="submit" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 px-2 h-full">
                                <div className="grid place-items-center px-2 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex justify-end items-center gap-x-1 col-span-2'>
                    {/* add button  */}
                    <div>
                        <Link to="/authenticated/mobile-app/add" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full text-xs flex justify-between items-center gap-x-2">
                            <div>
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14m-7 7V5" />
                                </svg>
                            </div>
                            <div>
                                Add
                            </div>
                        </Link>
                    </div>
                    {/* Refresh button */}
                    <div>
                        <button type="button" onClick={fetchData} className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full text-xs flex justify-between items-center gap-x-2">
                            <div>
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
                                </svg>

                            </div>
                            <div>
                                Refresh
                            </div>
                        </button>
                    </div>
                    {/* filterOption */}
                    <div className=''>
                        <button type="button" onClick={() => setfilterOption(!filterOption)} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" />
                            </svg>
                            <div>
                                Filter
                            </div>
                        </button>

                        {filterOption &&
                            <div className="z-10 absolute right-3 mt-4 w-48 bg-slate-50 divide-y divide-gray-100 rounded-md shadow dark:bg-gray-700 dark:divide-gray-600">
                                {/* <!-- Dropdown menu --> */}
                                <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <div className="flex items-center">
                                            <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="checkbox-item-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <input checked id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="checkbox-item-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="checkbox-item-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div>
                {alertMsg.message &&
                    <Alert
                        bgColor={alertMsg.bgColor}
                        textColor={alertMsg.textColor}
                        crossHover={alertMsg.crossHover}
                        message={alertMsg.message}
                    />
                }
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        apps.map((item, index) => <MobileAppCard fetchData={fetchData} alertMsg={alertMsg} setAlertMsg={setAlertMsg} props={item} key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default MobileApp
