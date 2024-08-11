import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileAppDelete from './MobileAppDelete';

const MobileAppCard = ({ props, setAlertMsg, fetchData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dotIcon, setdotIcon] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const hideModal = () => {
        setIsModalOpen(false);
    };

    // extract date
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
    };

    return (
        <div className=" cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <div className='w-full'>
                    <div className='relative w-full h-48'>
                        <img className="rounded-t-md w-full bg-neutral-200 h-full object-cover" src={props.applicationImageLink} alt="app-image" />
                        <button onClick={() => setdotIcon(!dotIcon)} className="absolute top-1 right-1 inline-flex items-center p-2 text-xs font-medium text-center  bg-transparent rounded-lg text-white hover:text-black hover:bg-slate-50/40" type="button">
                            <svg className={`w-4 h-4 ${props.applicationImageLink == null ? "text-black" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                        </button>

                        {/* <!-- Dropdown menu --> */}
                        {
                            dotIcon && <div className="z-10 absolute top-10 right-3 rounded-md shadow bg-white/80">
                                <ul className="py-2 w-24 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <Link to={`/authenticated/mobile-app/edit/id/${props.id}`} className="block p-2 hover:bg-gray-100 text-xs dark:hover:bg-gray-600 dark:hover:text-white">
                                            <div className='flex items-center gap-x-2'>
                                                <div><svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                </svg>
                                                </div>
                                                <div>Edit</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='w-full'>
                                        <button
                                            onClick={() => setdeleteModal(!deleteModal)}
                                            type="button"
                                            className="w-full block p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-xs">
                                            <div className='flex items-center gap-x-2'>
                                                <div><svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                                </svg>
                                                </div>
                                                <div>Delete</div>
                                            </div></button>
                                    </li>
                                </ul>
                            </div>
                        }

                        <div className="absolute right-1 bottom-1">
                            {
                                props.status ? <div className="bg-green-500 hover:bg-green-600 text-white text-xs font-normal py-1 px-3 rounded-md">Active</div> : <div className="bg-red-500 hover:bg-red-600 text-white text-xs font-normal py-1 px-3 rounded-md">In-active</div>
                            }
                        </div>
                    </div>
                </div>

                <div className="px-3 pt-4 pb-2">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.appName}</h5>
                    <p className="mb-2 text-xs font-normal text-gray-700 dark:text-gray-400">{props.description}</p>

                    <div className='w-full my-4 grid grid-cols-1 text-sm gap-y-2'>
                        {/* <div className='flex justify-between items-center'>
                        <div className='font-bold'>Suggestion : </div>
                        <div className='text-xs'>{props.suggestion}</div>
                    </div> */}
                        <div className='flex justify-between items-center'>
                            <div className='font-bold'>Version : </div>
                            <div className='text-xs'>{props.version}</div>
                        </div>
                    </div>

                    <div className='w-full my-4 text-sm'>
                        <div className='flex gap-x-4 col-span-3 justify-between items-center'>
                            <div className='font-bold'>Last update : </div>
                            <div className='text-xs'>{formatDate(props.lastUpdate)}</div>
                        </div>

                    </div>

                    <div className='w-full grid grid-cols-2 gap-x-4 text-xs my-2'>
                        <div>
                            <a href={props.documentLink} target="_blank" className="bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white text-sm font-normal block py-2 px-4 text-center w-full rounded-md">View document</a>
                        </div>
                        <div>
                            <button onClick={showModal} className="bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white text-sm font-normal block py-2 px-4 w-full text-center rounded-md">View video</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
                    <div className="relative p-2 w-full max-w-4xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Video Modal
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={hideModal}>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 space-y-4">
                                <video src={props.videoLink} className='h-96 w-full' controls></video>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {
                deleteModal && <MobileAppDelete
                    fetchData={fetchData}
                    setdeleteModal={setdeleteModal}
                    deleteModal={deleteModal}
                    id={props.id}
                    // alertMsg={alertMsg}
                    setAlertMsg={setAlertMsg}
                />
            }
        </div>
    );
}

export default MobileAppCard;
