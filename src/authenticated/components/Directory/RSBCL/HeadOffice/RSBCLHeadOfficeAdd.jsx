import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Alert from '../../../Popup/Alert'

const RSBCLHeadOfficeAdd = () => {
    const { register, formState: { errors, isSubmitting }, reset, handleSubmit } = useForm();

    // alert message design
    const [alertMsg, setAlertMsg] = useState({
        bgColor: "",
        textColor: "",
        crossHover: "",
        message: ""
    });

    // onsubmit btn
    const onSubmit = async (data) => {
        await saveData(data);
    };

    // savedata in form state and api post request
    const saveData = async (data) => {
        const formData = new FormData();
        formData.append('sno', data.sno);
        formData.append('name', data.name);
        formData.append('designation', data.designation);
        formData.append('mobileNo', data.mobileNo);
        formData.append('phoneNo', data.phoneNo);
        formData.append('email', data.email);

        try {
            const response = await axios.post("/api/v1/auth/directory/rsbcl-office", formData, {
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
    }

    // navigation    
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // This navigates back to the previous page
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
                />}

            <div className='bg-white border-gray-200 rounded shadow px-2 py-3  dark:bg-gray-800'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h5 className="text-xl px-3 font-bold dark:text-white">Add new directory rsbcl: Head Office</h5>
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

                {/* form */}
                <div className='p-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {/* Serial Number */}
                            <div>
                                <label
                                    htmlFor="sno"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Serial number</label>
                                <input
                                    type="number"
                                    id="sno"
                                    placeholder="1"
                                    {...register('sno')}
                                    className={`bg-gray-50 border ${errors.sno ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                />
                                {errors.sno && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.sno.message}</p>}
                            </div>

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter name"
                                    {...register('name', {
                                        required: "Name is required",
                                        minLength: { value: 10, message: "Name must be at least 10 characters" },
                                        maxLength: { value: 50, message: "Name must be at most 50 characters" }
                                    })}
                                    className={`bg-gray-50 border ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                />
                                {errors.name && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.name.message}</p>}
                            </div>

                            {/* Designation */}
                            <div>
                                <label
                                    htmlFor="designation"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
                                <input
                                    type="text"
                                    id="designation"
                                    placeholder="Enter designation"
                                    {...register('designation',
                                        {
                                            required: "Designation is required",
                                            minLength: { value: 2, message: "Min length 2 characters" },
                                            maxLength: { value: 40, message: "Max 40 characters" }
                                        }
                                    )}
                                    className={`bg-gray-50 border ${errors.designation ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                />
                                {errors.designation && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.designation.message}</p>}
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label
                                    htmlFor="mobileNo"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                                <input
                                    type="number"
                                    id="mobileNo"
                                    placeholder="Enter mobile number"
                                    {...register('mobileNo', {
                                        required: "Mobile number is required",
                                        minLength: { value: 10, message: "Mobile number must be at least 10 digits" }
                                    })}
                                    className={`bg-gray-50 border ${errors.mobileNo ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                />
                                {errors.mobileNo && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.mobileNo.message}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter email"
                                    {...register('email', {
                                        required: "Email is required",
                                        minLength: { value: 10, message: "Email must be at least 10 characters" },
                                        maxLength: { value: 50, message: "Email must be at most 50 characters" }
                                    })}
                                    className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                />
                                {errors.email && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.email.message}</p>}
                            </div>

                        </div>

                        <div className='mt-4 flex justify-end items-center'>
                            <button disabled={isSubmitting} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RSBCLHeadOfficeAdd

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