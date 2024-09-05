import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Alert from '../Popup/Alert'
import Spinner from '../../../components/Loader/Spinner'
import ContactUsDelete from './ContactUsDelete'

const ContactPage = () => {
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

    const [deleteModal, setdeleteModal] = useState(false); // Manage modal state
    const [deleteId, setDeleteId] = useState(null); // delete modal
    const [office, setoffice] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalrecords, settotalrecords] = useState(0);
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
                setAlertMsg({
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-800",
                    crossHover: "hover:bg-blue-200",
                    message: data.message || "Unauthorized you are not allowed to access these resources"
                });
                break;
            case 500:
                setAlertMsg({
                    bgColor: "bg-red-100",
                    textColor: "text-red-600",
                    crossHover: "hover:bg-red-200",
                    message: "Internal server error 500" || data.message
                });
                break;
            case 404:
                setAlertMsg({
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-800",
                    crossHover: "hover:bg-blue-200",
                    message: data.message
                });
                break;
            default:
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
    }, [currentPage]);

    // api call    
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/v1/public/contacts', {
                params: {
                    page: currentPage, // or just 'page' in shorthand ES6 syntax
                    size: 10  // or just 'size' in shorthand ES6 syntax
                }
            });

            if (response.status === 200) {
                setoffice(response.data.data.content);
                setTotalPages(response.data.data.totalPages);
                settotalrecords(response.data.data.totalElements)
            } else {
                handleErrorResponse(response.status, response.data);
            }
        } catch (error) {
            if (error.response) {
                handleErrorResponse(error.response.status, error.response.data);
            } else if (error.request) {
                setAlertMsg({
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-800",
                    crossHover: "hover:bg-blue-200",
                    message: error.message
                });
            } else {
                setAlertMsg({
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-800",
                    crossHover: "hover:bg-blue-200",
                    message: error.message
                });
            }
        } finally {
            setLoading(false);  // Stop the loader once the request is done
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

    // handling delete 
    const openDeleteModal = (id) => {
        setdeleteModal(true);  // Open modal
        setDeleteId(id);       // Store the ID of the item to be deleted
    };

    if (loading) return <Spinner />

    return (
        <div className='h-full w-full p-4 md:px-2'>
            <div className="mb-4">
                <h3 className="text-gray-800 dark:text-white text-2xl font-bold">
                    Contact us address
                    <span className="bg-blue-100 ms-3 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{totalrecords}</span>
                </h3>
            </div>

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
                        <Link to="/authenticated/contact/add" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full text-xs flex justify-between items-center gap-x-2">
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
            </div>

            <div>
                <div className="bg-transparent dark:bg-slate-800 overflow-x-auto shadow-sm rounded-sm">
                    <table className="w-full rounded-lg table-auto text-sm text-left">
                        <thead className="dark:bg-blue-700 bg-blue-700 text-gray-100 font-medium border-b">
                            <tr>
                                <th className="py-2 px-6">Name</th>
                                <th className="py-2 px-6">Designation</th>
                                <th className="py-2 px-6">Mobile no.</th>
                                <th className="py-2 px-6">STD code</th>
                                <th className="py-2 px-6">Office address</th>
                                <th className="py-2 px-6">FAX no.</th>
                                <th className="py-2 px-6">Email</th>
                                <th className="py-2 px-6">last Update</th>
                                <th className="py-2 px-6"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 dark:text-slate-300 divide-y text-xs">

                            {office.length == 0 &&
                                <tr>
                                    <th colSpan={7}>
                                        <div className='flex text-base justify-center items-center py-8 text-center w-full'>No Content</div>
                                    </th>
                                </tr>
                            }

                            {
                                office.map((item, index) =>
                                    <tr key={index}>
                                        <td className="px-6 py-3 font-bold whitespace-nowrap capitalize">{item.sno}. {item.name}</td>
                                        <td className="px-6 py-3 capitalize">{item.designation}</td>
                                        <td className="px-6 py-3">{item.mobileNo}</td>
                                        <td className="px-6 py-3">{item.stdCode}</td>
                                        <td className="px-6 py-3">{item.officeAddress}</td>
                                        <td className="px-6 py-3">{item.faxNO}</td>
                                        <td className="px-6 py-3">{item.email}</td>
                                        <td className="px-6 py-3">{item.lastUpdate}</td>
                                        <td className="flex py-2 justify-end items-center">
                                            <Link to={`/authenticated/directory-excise-head-office/update/id/${item.id}`} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-100 rounded-md">
                                                <svg className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                </svg>
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => openDeleteModal(item.id)}  // Pass the id of the news item
                                                className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-100 rounded-md">
                                                <svg className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>

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
                            Page {currentPage + 1} of {totalPages}
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
            </div>

            {deleteModal && (
                <ContactUsDelete
                    fetchData={fetchData}
                    setdeleteModal={setdeleteModal}
                    deleteModal={deleteModal}
                    id={deleteId}
                    setAlertMsg={setAlertMsg}
                />
            )}
        </div>
    )
}

export default ContactPage
