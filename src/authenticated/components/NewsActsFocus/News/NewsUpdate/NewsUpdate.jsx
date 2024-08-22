import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Alert from '../../../Popup/Alert';
import axios from 'axios';

const NewsUpdate = () => {
    const { register, formState: { errors, isSubmitting }, reset, handleSubmit, watch } = useForm();
    const [alertMsg, setAlertMsg] = useState({
        bgColor: "",
        textColor: "",
        crossHover: "",
        message: ""
    });
    const [previewData, setPreviewData] = useState(null);  // To store preview data
    const [isPreviewOpen, setIsPreviewOpen] = useState(false); // To toggle preview
    const [editState, seteditState] = useState(false);
    // Get the ID from the URL params
    const { id } = useParams();

    useEffect(() => {
        // Fetch the data using the ID from params when the component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/v1/auth/news-updates/id/${id}`);
                const data = response.data.data;
                reset({
                    title: data.title,
                    description: data.description,
                    department: data.department,
                    newsStatus: data.newsStatus,
                });
            } catch (error) {
                console.error("Error fetching news update", error);
            }
        };
        fetchData();
    }, [id, reset]);

    const onSubmit = async (data) => {
        await updateData(data);
    };

    const updateData = async (data) => {
        const formData = new FormData();
        formData.append('jsonData', JSON.stringify({
            title: data.title,
            description: data.description,
            department: data.department,
            newsStatus: data.newsStatus,
        }));

        if (data.document && data.document.length > 0) {
            formData.append('document', data.document[0]);
        }

        try {
            const response = await axios.put(`/api/v1/auth/news-updates/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                setAlertMsg({
                    bgColor: "bg-green-100",
                    textColor: "text-green-800",
                    crossHover: "hover:bg-green-200",
                    message: response.data.message
                });
                reset(); // Reset the form on success
            } else {
                setAlertMsg({
                    bgColor: "bg-red-100",
                    textColor: "text-red-800",
                    crossHover: "hover:bg-red-200",
                    message: response.data.message
                });
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
    };

    const handlePreview = () => {
        const data = {
            title: watch('title'),
            description: watch('description'),
            department: watch('department'),
            document: watch('document')
        };
        setPreviewData(data);
        setIsPreviewOpen(true);
    };

    return (
        <div className='px-2 py-3'>
            {isSubmitting && <SaveLoader />}

            {alertMsg.message &&
                <Alert
                    bgColor={alertMsg.bgColor}
                    textColor={alertMsg.textColor}
                    crossHover={alertMsg.crossHover}
                    message={alertMsg.message}
                />
            }

            <div className='bg-white border-gray-200 rounded shadow px-2 py-3 dark:bg-gray-800'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h5 className="text-xl px-3 font-bold dark:text-white">Update Notice: {id}</h5>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <button type="button" onClick={() => seteditState(!editState)}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* form */}
                <div className='p-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label
                                    htmlFor="title"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    disabled={!editState}
                                    placeholder="Notice title"
                                    {...register('title', {
                                        required: "Title is required",
                                        minLength: { value: 2, message: "Minimum 2 characters" },
                                        maxLength: { value: 100, message: "Maximum 100 characters" }
                                    })}
                                    className={`bg-gray-50 border ${errors.title ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`}
                                />
                                {errors.title && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.title.message}</p>}
                            </div>

                            <div>
                                <label
                                    htmlFor="department"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Department</label>
                                <select
                                    id="department"
                                    disabled={!editState}
                                    {...register('department', { required: "Department is required" })}
                                    className={`bg-gray-50 border ${errors.department ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`}
                                >
                                    <option value="EXCISE">EXCISE</option>
                                    <option value="RSBCL">RSBCL</option>
                                    <option value="RSGSM">RSGSM</option>
                                </select>
                                {errors.department && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.department.message}</p>}
                            </div>

                            <div>
                                <label
                                    htmlFor="newsStatus"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Department</label>
                                <select
                                    id="newsStatus"
                                    disabled={!editState}
                                    {...register('newsStatus', { required: "Status is required" })}
                                    className={`bg-gray-50 border ${errors.newsStatus ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`}
                                >
                                    <option value="Active">Active</option>
                                    <option value="In-active">In-active</option>
                                    <option value="Removed">Removed</option>
                                </select>
                                {errors.newsStatus && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.newsStatus.message}</p>}
                            </div>

                            <div>
                                <label
                                    htmlFor="document"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Update Document (Optional)</label>
                                <input
                                    id="document"
                                    type="file"
                                    disabled={!editState}
                                    {...register('document')}
                                    className="flex bg-gray-50 border-gray-300 text-gray-900 h-10 w-full rounded-md border border-input px-3 py-2 text-sm file:border-0 file:bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-slate-400 file:text-gray-600 file:text-sm file:font-medium"
                                />
                                {errors.document && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.document.message}</p>}
                            </div>

                            <div className='md:col-span-2'>
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea
                                    id="description"
                                    disabled={!editState}
                                    placeholder="Description"
                                    {...register('description', {
                                        required: "Description is required",
                                        minLength: { value: 5, message: "Minimum 5 characters" },
                                        maxLength: { value: 300, message: "Maximum 300 characters" }
                                    })}
                                    className={`bg-gray-50 border ${errors.description ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`}
                                />
                                {errors.description && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.description.message}</p>}
                            </div>
                        </div>

                        <div className='mt-4 flex justify-end items-center gap-2'>
                            {/* Preview Button */}
                            <button type="button" onClick={handlePreview} className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Preview</button>
                            {editState && < button disabled={isSubmitting} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                            }
                        </div>
                    </form>
                </div>
            </div >

            {/* Preview Modal */}
            {
                isPreviewOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96">
                            <h2 className="text-xl font-bold mb-4 dark:text-white">Preview News Update</h2>
                            <p className="mb-2"><strong>Title:</strong> {previewData?.title}</p>
                            <p className="mb-2"><strong>Department:</strong> {previewData?.department}</p>
                            <p className="mb-2"><strong>Description:</strong> {previewData?.description}</p>
                            {previewData?.document && (
                                <p className="mb-2"><strong>Document:</strong> {previewData.document[0]?.name}</p>
                            )}
                            <div className="flex justify-end gap-2">
                                <button className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={() => setIsPreviewOpen(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default NewsUpdate;

const SaveLoader = () => {
    return (
        <div className="flex py-8 flex-col items-center justify-center">
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h2 className="text-zinc-900 dark:text-white mt-4">Saving, Wait a moment ...</h2>
            </div>
        </div>
    )
};
