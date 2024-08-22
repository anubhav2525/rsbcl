import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router-dom';

// forms
import BasicDetail from './Forms/BasicDetail';
import DocumentDetail from './Forms/DocumentDetail';
import EducationDetail from './Forms/EducationDetail';
import WorkDetail from './Forms/WorkDetail';
import EmploymentHistory from './Forms/EmploymentHistory';

// validation schema files
import BasicDetailSchema from "./validationSchema/BasicDetailSchema";
import DocumentSchema from "./validationSchema/DocumentSchema";
import EducationSchema from "./validationSchema/EducationSchema";
import WorkDetailSchema from "./validationSchema/WorkDetailSchema";
import EmploymentHistorySchema from './validationSchema/EmploymentHistorySchema';

const EmployeeDetails = () => {
    const { id } = useParams();
    const [image, setImage] = useState('https://via.placeholder.com/150');

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

    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        <BasicDetail />,
        <DocumentDetail />,
        <EducationDetail />,
        <EmploymentHistory />,
        <WorkDetail />,
    ];

    // validation schema
    const schemas = [
        BasicDetailSchema,
        DocumentSchema,
        EducationSchema,
        EmploymentHistorySchema,
        WorkDetailSchema,
    ];

    const methods = useForm({
        resolver: yupResolver(schemas[currentStep])
    });

    const { handleSubmit, trigger, reset, getValues } = methods;
    const nextStep = async () => {
        const result = await trigger();
        if (result) {
            console.log(getValues()); // Print form inputs for the current step
            if (currentStep < steps.length - 1) {
                setCurrentStep(prev => prev + 1);
                reset(getValues()); // Retain form data between steps
            }
        }
        // console.log("next clicked")
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const onSubmit = async (data) => {
        console.log("Form submit")
        const result = await trigger();
        if (result) {
            console.log(getValues());
            // Here you can send the data to the backend
        };

        // Collecting the data from all steps
        const finalData = getValues(); // this will have the data of all the steps
        console.log('Final form data:', finalData);
        console.log('Final data:', data);
    }

    return (
        <div className='w-full h-full'>
            {/* heading */}
            <div className="px-4 py-2">
                <div className="items-start justify-between py-3 border-b dark:border-slate-600 md:flex">
                    <div className="">
                        <h3 className="text-gray-800 dark:text-slate-200 text-2xl font-bold">
                            Employee Details
                        </h3>
                    </div>
                </div>
            </div>

            {/* content */}
            <div className="p-1 px-4 w-full h-full">
                <div className='h-full w-full'>
                    <div className='h-full w-full'>
                        <FormProvider {...methods}>
                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:flex-row gap-x-3 h-full w-full'>
                                <div>
                                    <div className='w-full flex justify-center items-center'>
                                        <div className='flex relative justify-center items-center p-1 rounded-full w-32 h-32 md:h-44 md:w-44 bg-white dark:bg-slate-800'>
                                            <img src={image} alt="" className='rounded-full' />
                                            <button type="button" className='absolute top-2 -right-4 md:right-4 z-10'>
                                                <svg className="w-7 h-7 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className='hidden md:flex mt-4'>
                                        <ol className="space-y-4 w-60">
                                            <li>
                                                <div className={`border transition-all delay-100 rounded-sm w-full text-start font-medium ${currentStep === 0 ? "text-blue-700 dark:text-blue-800 dark:border-blue-800 border-blue-700" : "text-black dark:border-slate-600 dark:text-slate-200"
                                                    }`} >
                                                    <div className='flex w-full px-4 py-2 items-center justify-between '>
                                                        <div>Basic</div>
                                                        <div>
                                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className={`border transition-all delay-100 rounded-sm w-full text-start font-medium ${currentStep === 1 ? "text-blue-700 dark:text-blue-800 dark:border-blue-800 border-blue-700" : "text-black dark:border-slate-600 dark:text-slate-200"
                                                    }`} >
                                                    <div className='flex w-full px-4 py-2 items-center justify-between '>
                                                        <div>Document</div>
                                                        <div>
                                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className={`border transition-all delay-100 rounded-sm w-full text-start font-medium ${currentStep === 2 ? "text-blue-700 dark:text-blue-800 dark:border-blue-800 border-blue-700" : "text-black dark:border-slate-600 dark:text-slate-200"
                                                    }`} >
                                                    <div className='flex w-full px-4 py-2 items-center justify-between '>
                                                        <div>Education</div>
                                                        <div>
                                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className={`border transition-all delay-100 rounded-sm w-full text-start font-medium ${currentStep === 3 ? "text-blue-700 dark:text-blue-800 dark:border-blue-800 border-blue-700" : "text-black dark:border-slate-600 dark:text-slate-200"
                                                    }`} >
                                                    <div className='flex w-full px-4 py-2 items-center justify-between '>
                                                        <div>Experience</div>
                                                        <div>
                                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className={`border transition-all delay-100 rounded-sm w-full text-start font-medium ${currentStep === 4 ? "text-blue-700 dark:text-blue-800 dark:border-blue-800 border-blue-700" : "text-black dark:border-slate-600 dark:text-slate-200"
                                                    }`} >
                                                    <div className='flex w-full px-4 py-2 items-center justify-between'>
                                                        <div>Work details</div>
                                                        <div>
                                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div className='h-full mt-4 md:mt-0 w-full'>
                                    {/* links */}
                                    <div className='h-full w-full'>
                                        {steps[currentStep]}
                                    </div>

                                    <div className='mt-2 flex items-center justify-between'>
                                        {currentStep > 0 && <button type="button" onClick={prevStep} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                                            <div className='flex justify-center items-center gap-2'>
                                                <div>
                                                    <svg className="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                    </svg>
                                                </div>
                                                <div>Previous</div>
                                            </div>
                                        </button>}
                                        {currentStep < steps.length - 1 && <button type="button" onClick={nextStep} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                                            <div className='flex justify-center items-center gap-2'>
                                                <div>Next</div>
                                                <div>
                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </button>}
                                        {currentStep === steps.length - 1 && <button
                                            type="submit"
                                            className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">Submit</button>}
                                    </div>
                                </div>
                            </form>
                        </FormProvider>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default EmployeeDetails