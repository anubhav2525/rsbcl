import React, { useState } from 'react'
import axios from 'axios'

const NewsDelete = ({ setdeleteModal, deleteModal, id, setAlertMsg, fetchData }) => {
    const [removedStatus, setremovedStatus] = useState(false);
    const [msg, setMsg] = useState("");

    const handleDeleteRecordById = async () => {
        try {
            const response = await axios.delete(`/api/v1/auth/news-updates/id/${id}`);
            if (response.status === 200) {
                setMsg(response.data.message);
                setremovedStatus(true);
                console.log(response.status)
                console.log(response.data.message)
            }
            else if (response.status === 404) {
                setAlertMsg({
                    bgColor: "bg-red-100",
                    textColor: "text-red-800",
                    crossHover: "hover:bg-red-200",
                    message: response.data.message
                });
                console.log(response.status)
                console.log(response.data.message)
            }
        } catch (error) {
            const status = error.response ? error.response.status : null;
            let errorMsg = "An error occurred: " + error.message;

            if (status === 400) {
                errorMsg = "Bad request. Please check the form data.";
            } else if (status === 500) {
                errorMsg = "Internal server error. Please try again later.";
            }

            setAlertMsg({
                bgColor: "bg-red-100",
                textColor: "text-red-800",
                crossHover: "hover:bg-red-200",
                message: errorMsg
            });
        }
    }

    return (
        <div className="overflow-y-auto overflow-x-hidden fixed z-40 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" onClick={() => setdeleteModal(!deleteModal)} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        {
                            removedStatus ?
                                <AfterRemove
                                    msg={msg}
                                    setdeleteModal={setdeleteModal}
                                    fetchData={fetchData} /> :
                                <BeforeRemove
                                    id={id}
                                    handleDeleteRecordById={handleDeleteRecordById}
                                    deleteModal={deleteModal}
                                    setdeleteModal={setdeleteModal} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
const BeforeRemove = ({ handleDeleteRecordById, setdeleteModal, deleteModal, id }) => {
    return (
        <div>
            <div>
                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-100">Are you sure you want to delete this app?</h3>
                <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-200">Notice id: {id}</p>
                <button onClick={handleDeleteRecordById} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Yes, I'm sure
                </button>
                <button type="button" onClick={() => setdeleteModal(!deleteModal)} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
            </div>
        </div>
    )
}

const AfterRemove = ({ msg, fetchData, setdeleteModal }) => {
    const handlerefreshAfterDelete = () => {
        fetchData();
        setdeleteModal(false);
    }

    return (
        <div>
            <div>
                <div>
                    <div
                        className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full"
                    >
                        <svg
                            viewBox="0 0 48 48"
                            className='h-10 w-10'
                            y="0px"
                            x="0px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                y2="37.081"
                                y1="10.918"
                                x2="10.918"
                                x1="37.081"
                                id="SVGID_1__8tZkVc2cOjdg_gr1"
                            >
                                <stop stopColor="#60fea4" offset="0"></stop>
                                <stop stopColor="#6afeaa" offset=".033"></stop>
                                <stop stopColor="#97fec4" offset=".197"></stop>
                                <stop stopColor="#bdffd9" offset=".362"></stop>
                                <stop stopColor="#daffea" offset=".525"></stop>
                                <stop stopColor="#eefff5" offset=".687"></stop>
                                <stop stopColorr="#fbfffd" offset=".846"></stop>
                                <stop stopColor="#fff" offset="1"></stop>
                            </linearGradient>
                            <circle
                                fill="url(#SVGID_1__8tZkVc2cOjdg_gr1)"
                                r="18.5"
                                cy="24"
                                cx="24"
                            ></circle>
                            <path
                                d="M35.401,38.773C32.248,41.21,28.293,42.66,24,42.66C13.695,42.66,5.34,34.305,5.34,24	c0-2.648,0.551-5.167,1.546-7.448"
                                strokeWidth="3"
                                strokeMiterlimit="10"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                stroke="#10e36c"
                                fill="none"
                            ></path>
                            <path
                                d="M12.077,9.646C15.31,6.957,19.466,5.34,24,5.34c10.305,0,18.66,8.354,18.66,18.66	c0,2.309-0.419,4.52-1.186,6.561"
                                strokeWidth="3"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="#10e36c"
                                fill="none"
                            ></path>
                            <polyline
                                points="16.5,23.5 21.5,28.5 32,18"
                                strokeWidth="3"
                                strokeMiterlimit="10"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                stroke="#10e36c"
                                fill="none"
                            ></polyline>
                        </svg>
                    </div>
                </div>
                <h3 className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">{msg}</h3>
                <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">Please do a refrest to stay updated</p>
                <button onClick={handlerefreshAfterDelete} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Okay
                </button>
            </div>
        </div>
    )
}

export default NewsDelete
