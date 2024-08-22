import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import BasicDetail from './Forms/BasicDetail';
import DocumentDetail from './Forms/DocumentDetail';
import EducationDetail from './Forms/EducationDetail';
import WorkDetail from './Forms/WorkDetail';
import EmploymentHistory from './Forms/EmploymentHistory';

import BasicDetailSchema from "./validationSchema/BasicDetailSchema";
import DocumentSchema from "./validationSchema/DocumentSchema";
import EducationSchema from "./validationSchema/EducationSchema";
import WorkDetailSchema from "./validationSchema/WorkDetailSchema";
import EmploymentHistorySchema from './validationSchema/EmploymentHistorySchema';

const EmployeeAdd = () => {
    const [image, setImage] = useState('https://via.placeholder.com/150');
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        <BasicDetail />,
        <DocumentDetail />,
        <EducationDetail />,
        <EmploymentHistory />,
        <WorkDetail />,
    ];

    const schemas = [
        BasicDetailSchema,
        DocumentSchema,
        EducationSchema,
        EmploymentHistorySchema,
        WorkDetailSchema,
    ];

    const methods = useForm({
        resolver: yupResolver(schemas[currentStep]),
        mode: 'onSubmit',
    });

    const { handleSubmit, trigger, getValues, formState: { errors } } = methods;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // const nextStep = async () => {
    //     const result = await trigger();
    //     if (result && currentStep < steps.length - 1) {
    //         setCurrentStep((prev) => prev + 1);
    //     }
    // };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    // // Final submission handling
    // const onSubmit = (data) => {
    //     console.log("Final submission data:", data);
    //     // You can now send the data to the backend.
    // };

    // handling form
    const [formData, setFormData] = useState({});
    const nextStep = async () => {
        const isStepValid = await trigger(); // Validate the current step
        if (isStepValid) {
            const currentStepData = getValues(); // Get the data of the current step
            setFormData(prevData => ({
                ...prevData,
                ...currentStepData // Merge with previous data
            }));
            if (currentStep < steps.length - 1) {
                setCurrentStep(prev => prev + 1); // Move to the next step
            }
        }
    };
    const onSubmit = (data) => {
        console.log("btn submit")
        const finalData = { ...formData, ...data }; // Combine all data
        console.log("Final submission data:", finalData);
        // Handle the final submission (e.g., send to the backend)
    };
    return (
        <div className='w-full h-full'>
            <div className="px-4 py-2">
                <div className="items-start justify-between py-3 border-b dark:border-slate-600 md:flex">
                    <h3 className="text-gray-800 dark:text-slate-200 text-2xl font-bold">Employee Details</h3>
                </div>
            </div>

            <div className="p-1 px-4 w-full h-full">
                <div className='h-full w-full'>
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:flex-row gap-x-3 h-full w-full'>
                            <div>
                                <div className='w-full flex justify-center items-center'>
                                    <div className='flex relative justify-center items-center p-1 rounded-full w-32 h-32 md:h-44 md:w-44 bg-white dark:bg-slate-800'>
                                        <img src={image} alt="Profile" className='rounded-full' />
                                        <button type="button" className='absolute top-2 -right-4 md:right-4 z-10'>
                                            <svg className="w-7 h-7 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className='hidden md:flex mt-4'>
                                    <ol className="space-y-4 w-60">
                                        {['Basic', 'Document', 'Education', 'Employment history', 'Work details'].map((label, index) => (
                                            <li key={index}>
                                                <div className={`border rounded-sm w-full text-start font-medium ${currentStep === index ? 'text-blue-700 dark:text-blue-800 dark:border-blue-800 border-blue-700' : 'text-black dark:border-slate-600 dark:text-slate-200'}`}>
                                                    <div className="flex w-full px-4 py-2 items-center justify-between">
                                                        <div>{label}</div>
                                                        <div>
                                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>

                            <div className='h-full mt-4 md:mt-0 w-full'>
                                <div className='h-full w-full space-y-4'>
                                    {steps[currentStep]}
                                    {/* <BasicDetail />
                                    <DocumentDetail />
                                    <EducationDetail />
                                    <EmploymentHistory />
                                    <WorkDetail />

                                    <div>
                                        <button type="submit">Save</button>
                                    </div> */}



                                </div>

                                <div className='mt-2 flex items-center justify-between'>
                                    {currentStep > 0 && <button type="button" onClick={prevStep} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                                        <svg className="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                        Previous
                                    </button>}
                                    {currentStep < steps.length - 1 && <button type="button" onClick={nextStep} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                                        Next
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>}
                                    {currentStep === steps.length - 1 && <button type="submit" className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">Save</button>}
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default EmployeeAdd;
