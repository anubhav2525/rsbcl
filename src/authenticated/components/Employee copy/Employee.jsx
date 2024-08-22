import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Alert from '../Popup/Alert'
import Spinner from '../../../components/Loader/Spinner'
import EmployeeCard from './EmployeeCard'

const Employee = () => {

    const tableItems = [
        {
            id: 1,
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Liam James",
            email: "liamjames@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Software engineer",
            salary: "$100K"
        },
        {
            id: 2,
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Product designer",
            salary: "$90K"
        },
        {
            id: 3,
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Front-end developer",
            salary: "$80K"
        },
        {
            id: 4,
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Laravel engineer",
            salary: "$120K"
        },
        {
            id: 5,
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Open source manager",
            salary: "$75K"
        },
    ]

    const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10",])
    const [currentPage, setCurrentPage] = useState("1")

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
    const [employees, setemployees] = useState([]);

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
    }


    // api call    
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/v1/auth/employee');
            if (response.status === 200) {
                console.log('Success:', response.data.message);
                setApps(response.data.data);
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

    // first time loading
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // if (loading) {
    //     return <Spinner />
    // }

    return (
        <div className='h-full w-full p-4 md:px-2 '>
            <div className="mb-4">
                <h3 className="text-gray-800 text-2xl font-bold">
                    Employee
                    <span class="bg-blue-100 ms-3 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Default</span>
                </h3>

            </div>
            <div className='mb-3 w-full grid grid-cols-1 md:grid-cols-3 gap-2'>

                <div className='h-8'>
                    <form className='w-full h-full flex justify-between items-end gap-1'>
                        <div className='w-full h-full'>
                            <div className="relative flex items-center w-full h-full rounded border dark:border-slate-600 border-slate-300 focus-within:shadow-lg bg-white dark:bg-slate-700 overflow-hidden">
                                <div className="grid place-items-center h-full w-8 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    className="peer h-full w-full outline-none text-sm dark:text-white dark:bg-slate-700 text-gray-700 px-2"
                                    type="text"
                                    placeholder="Search with employee name.." />
                            </div>
                        </div>

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

                    <div>
                        <Link to="/authenticated/employee/add" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full text-xs  flex justify-between items-center gap-x-2">
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
                            <div className="z-10 absolute right-3 mt-4  bg-slate-50 divide-y divide-gray-100 rounded-md shadow dark:bg-gray-700 dark:divide-gray-600">

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
                        employees.map((item, index) => <EmployeeCard fetchData={fetchData} alertMsg={alertMsg} setAlertMsg={setAlertMsg} props={item} key={index} />)
                    }
                </div>
            </div>
            <div className=" overflow-x-auto shadow-md sm:rounded-sm">
                <table className="w-full rounded-md table-auto text-sm text-left">
                    <thead className="bg-gray-50 dark:bg-slate-800 dark:text-white text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Employee</th>
                            <th className="py-3 px-6">Contact</th>
                            <th className="py-3 px-6">Position</th>
                            <th className="py-3 px-6">Role</th>
                            <th className="py-3 px-6">Username</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-slate-300 divide-y">
                        {
                            tableItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block dark:text-slate-100 text-gray-700 text-sm font-medium">{item.name}</span>
                                            <span className="block text-gray-700 dark:text-slate-400 text-xs">{item.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.phone_nimber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <Link to={`/authenticated/employee/details/id/${item.id}`} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            View
                                        </Link>
                                        <button type="button" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className=" mt-4 px-4 text-gray-600 md:px-3">
                <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
                    <a href="javascript:void(0)" className="px-4 py-2 border bg-white rounded-lg duration-150 hover:bg-gray-100">Previous</a>
                    <div>
                        Page {currentPage} of {pages.length}
                    </div>
                    <a href="javascript:void(0)" className="px-4 py-2 border bg-white rounded-lg duration-150 hover:bg-gray-100">Next</a>
                </div>
            </div>
        </div>
    )
}

export default Employee
