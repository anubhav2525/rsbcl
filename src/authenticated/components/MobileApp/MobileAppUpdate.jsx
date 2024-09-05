import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Alert from '../Popup/Alert';
import SaveLoader from '../../../components/Loader/SaveLoader';

const MobileAppUpdate = () => {
    const [alertMsg, setAlertMsg] = useState({
        bgColor: '',
        textColor: '',
        crossHover: '',
        message: ''
    });

    const { id } = useParams(); // Get the ID from the URL
    const navigate = useNavigate();

    const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, reset } = useForm();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/v1/auth/mobile-app/id/${id}`);
                const data = response.data;

                // Populate the form with fetched data
                setValue('appName', data.appName);
                setValue('link', data.link);
                setValue('version', data.version);
                setValue('status', data.status);
                setValue('description', data.description);
                // other data may include URLs for existing files (e.g., documentLink, videoLink, applicationImage)
            } catch (error) {
                setAlertMsg({
                    bgColor: 'bg-red-100',
                    textColor: 'text-red-800',
                    crossHover: 'hover:bg-red-200',
                    message: `Error fetching data: ${error.message}`
                });
            }
        };

        fetchData();
    }, [id, setValue]);

    const updateData = async (data) => {
        const formData = new FormData();
        formData.append('jsonData', JSON.stringify({
            appName: data.appName,
            link: data.link,
            version: data.version,
            status: data.status,
            description: data.description
        }));
        if (data.documentLink.length > 0) {
            formData.append('document', data.documentLink[0]);
        }
        if (data.videoLink.length > 0) {
            formData.append('video', data.videoLink[0]);
        }
        if (data.applicationImage.length > 0) {
            formData.append('applicationImage', data.applicationImage[0]);
        }

        try {
            const response = await axios.put(`/api/v1/auth/mobile-app/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                setAlertMsg({
                    bgColor: 'bg-green-100',
                    textColor: 'text-green-800',
                    crossHover: 'hover:bg-green-200',
                    message: response.data.message
                });
            } else {
                setAlertMsg({
                    bgColor: 'bg-red-100',
                    textColor: 'text-red-800',
                    crossHover: 'hover:bg-red-200',
                    message: response.data.message
                });
            }
        } catch (error) {
            const status = error.response ? error.response.status : null;
            let errorMsg = `An error occurred: ${error.message}`;

            if (status === 400) {
                errorMsg = 'Bad request. Please check the form data.';
            } else if (status === 500) {
                errorMsg = 'Internal server error. Please try again later.';
            }

            setAlertMsg({
                bgColor: 'bg-red-100',
                textColor: 'text-red-800',
                crossHover: 'hover:bg-red-200',
                message: errorMsg
            });
        }
    };

    const onSubmit = async (data) => {
        await updateData(data);
    };

    return (
        <div className='w-full rounded-md md:px-4 py-3 px-2 dark:bg-slate-800'>
            <div className='mb-5 flex justify-between items-center'>
                <div>
                    <h3 className="md:text-2xl sm:text-xl text-lg font-medium dark:text-white text-slate-800">Update Mobile Application</h3>
                </div>
                <div>
                    <button onClick={() => navigate(-1)} type='button' className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium bg-slate-300 rounded-md dark:bg-slate-600 dark:text-white">
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

            <form className='w-full p-2' onSubmit={handleSubmit(onSubmit)}>
            

                <button disabled={isSubmitting} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Update</button>
            </form>
        </div>
    );
};

export default MobileAppUpdate;
