import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Alert from "../Popup/Alert"

const MobileAppAdd = () => {
    // alert message design
    const [alertMsg, setAlertMsg] = useState({
        bgColor: "",
        textColor: "",
        crossHover: "",
        message: ""
    });

    // navigation    
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // This navigates back to the previous page
    };

    // form handling
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const saveData = async (data) => {
        const formData = new FormData();
        formData.append('appName', data.appName)
        formData.append('description', data.description)
        formData.append('link', data.link)
        formData.append('document', data.documentLink[0])
        formData.append('video', data.videoLink[0]);
        formData.append('applicationImage', data.applicationImage[0]);
        formData.append('suggestion', data.suggestion)
        formData.append('version', data.version)
        formData.append('status', data.status)

        try {
            const response = await axios.post("/api/v1/auth/mobile-app", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 201) {
                setAlertMsg({
                    bgColor: "bg-green-100",
                    textColor: "text-green-800",
                    crossHover: "hover:bg-green-200",
                    message: response.data.message
                });
                reset(); // Reset the form on success
            } else if (response.status === 208) {
                setAlertMsg({
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-800",
                    crossHover: "hover:bg-blue-200",
                    message: response.data.message
                });
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

    const onSubmit = async (data) => {
        await saveData(data);
    };

    return (
        <div className='w-full rounded-md md:px-4 py-3 px-2 dark:bg-slate-800'>
            {/* heading and close  */}
            <div className='mb-5 flex justify-between items-center '>
                <div>
                    <h3 className="md:text-2xl sm:text-xl text-lg font-medium dark:text-white text-slate-800">Register Mobile application</h3>
                </div>
                <div>
                    <button onClick={handleGoBack} type='button' className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium bg-slate-300 rounded-md dark:bg-slate-600 dark:text-white">
                        Close
                        <div className="inline-flex items-center p-1 ms-2 text-sm rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300">
                            <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

            {isSubmitting && <SaveLoader />}

            {alertMsg.message &&
                <Alert
                    bgColor={alertMsg.bgColor}
                    textColor={alertMsg.textColor}
                    crossHover={alertMsg.crossHover}
                    message={alertMsg.message}
                />
            }

            {/* form */}
            <form className='w-full p-2' onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor='appName' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Application Name</label>
                        <input type="text" id='appName'
                            {...register("appName", {
                                required: "App name cannot be empty",
                                minLength: { value: 1, message: "App name must be at least 1 character" },
                                maxLength: { value: 100, message: "App name cannot exceed 100 characters" }
                            })}
                            className={`bg-gray-50 border ${errors.appName ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Application name`} placeholder='Application name' />
                        {errors.appName && <p className="mt-2 text-end text-sm text-red-500 dark:text-red-400">{errors.appName.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='link' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Application Link</label>
                        <input type="text"
                            {...register("link", { required: "Application link cannot be empty" })}
                            id='link' className={`bg-gray-50 border ${errors.link ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Application name`} placeholder="Application download link" />
                        {errors.link && <p className="mt-2 text-end text-sm text-red-500 dark:text-red-400">{errors.link.message}</p>}
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor='version' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Application version</label>
                            <input type="text" id='version'
                                {...register("version", {
                                    required: "Version cannot be empty",
                                    minLength: { value: 1, message: "Version must be at least 1 character" },
                                    maxLength: { value: 50, message: "Version cannot exceed 50 characters" }
                                })}
                                className={`bg-gray-50 border ${errors.version ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Application name`} placeholder="V0.0.0" />
                            {errors.version && <p className="mt-2 text-end text-sm text-red-500 dark:text-red-400">{errors.version.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select id="status"
                                {...register("status")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option defaultValue="ACTIVE">ACTIVE</option>
                                <option value="REMOVED">REMOVED</option>
                                <option value="DELETED">DELETED</option>
                                <option value="INACTIVE">INACTIVE</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="grid w-full items-center gap-1.5">
                            <label htmlFor="documentLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload user manual</label>
                            <input id="documentLink"
                                {...register("documentLink", { required: "User manual cannot be empty" })}
                                type="file" className={`flex h-10 w-full rounded-md border-input bg-gray-50 border dark:text-white ${errors.documentLink ? "border-red-500" : "border-gray-300 dark:border-gray-600"}  dark:bg-gray-700  px-3 py-2 text-sm text-gray-500 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium`} />
                            {errors.documentLink && <p className="mt-2 text-end text-sm text-red-500 dark:text-red-400">{errors.documentLink.message}</p>}
                        </div>
                    </div>
                    <div>
                        <div className="grid w-full items-center gap-1.5">
                            <label htmlFor="videoLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload demo video</label>
                            <input id="videoLink"
                                {...register("videoLink", { required: "Video cannot be empty" })}
                                type="file" className={`flex h-10 w-full rounded-md  border-input bg-gray-50 border dark:text-white ${errors.videoLink ? "border-red-500" : "border-gray-300 dark:border-gray-600"}  dark:bg-gray-700  px-3 py-2 text-sm text-gray-500 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium`} />
                            {errors.videoLink && <p className="mt-2 text-end text-sm text-red-500 dark:text-red-400">{errors.videoLink.message}</p>}
                        </div>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="applicationImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload application image</label>
                        <input id="applicationImage"
                            {...register("applicationImage", { required: "Application image cannot be empty" })}
                            type="file" className={`flex h-10 w-full rounded-md  border-input bg-gray-50 border dark:text-white ${errors.applicationImage ? "border-red-500" : "border-gray-300 dark:border-gray-600"}  dark:bg-gray-700  px-3 py-2 text-sm text-gray-500 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium`} />
                        {errors.applicationImage && <p className="mt-2 text-end text-sm text-red-500 dark:text-red-400">{errors.applicationImage.message}</p>}
                    </div>
                </div>
                <div className='mb-6'>
                    <div className='mb-4'>
                        <label htmlFor='description' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea
                            {...register("description", {
                                required: "Description cannot be empty",
                                maxLength: { value: 255, message: "Description cannot exceed 255 characters" }
                            })}
                            id="description" rows="4" className={`bg-gray-50 border ${errors.description ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Application name`} placeholder="Write your thoughts here..."></textarea>
                        {errors.description && <p className="mt-2 text-end text-sm text-red-500 dark:text-red-400">{errors.description.message}</p>}
                    </div>

                    <button disabled={isSubmitting} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form >

        </div >
    )
}

export default MobileAppAdd

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
}