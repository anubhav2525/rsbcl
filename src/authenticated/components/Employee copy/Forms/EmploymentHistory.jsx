import React from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form';

const EmploymentHistory = () => {
    const { register, control, formState: { errors } } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'employmentHistory'
    });
    return (
        <div className="rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className='bg-white border-gray-200 rounded shadow px-2 py-3 dark:bg-gray-800'>
                <div className='flex justify-between items-center'>
                    <h5 className="text-xl px-3 font-bold dark:text-white">Experience</h5>
                    <div className='flex justify-end items-center'>
                        <button
                            type="button"
                            onClick={() => append({ jobTitle: '', companyName: '', yearOfExperience: '', endDate: '', startDate: '' })}
                            className="bg-blue-500 text-xs text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
                        >
                            Add More
                        </button>
                    </div>
                </div>

                {/* form inputs */}
                <div className='p-4'>
                    <div className='w-full'>
                        {fields.map((item, index) => (
                            <div key={item.id} className='w-full border-t-2 pt-2 mb-2'>
                                <div className='flex items-center justify-between'>
                                    <div className='font-bold dark:text-white'>Experience {index + 1}</div>
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="bg-red-500 text-xs text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className='w-full gap-y-4 grid md:grid-cols-2 md:gap-x-4 mb-4'>
                                    <div>
                                        <label
                                            htmlFor={`employmentHistory[${index}].jobTitle`}
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job title</label>
                                        <input
                                            type="text"
                                            {...register(`employmentHistory[${index}].jobTitle`)}
                                            id={`employmentHistory[${index}].jobTitle`}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        {errors.employmentHistory?.[index]?.jobTitle && (
                                            <p className="text-red-500 text-xs italic">
                                                {errors.employmentHistory[index].jobTitle.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor={`employmentHistory[${index}].companyName`}
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company name</label>
                                        <input
                                            type="text"
                                            id={`employmentHistory[${index}].companyName`}
                                            {...register(`employmentHistory[${index}].companyName`)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        {errors.employmentHistory?.[index]?.companyName && (
                                            <p className="text-red-500 text-xs italic">
                                                {errors.employmentHistory[index].companyName.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className='md:col-span-2'>
                                        <div className="grid gap-y-4 md:grid-cols-3 md:gap-y-0 md:gap-x-4">
                                            <div>
                                                <label
                                                    htmlFor={`employmentHistory[${index}].yearOfExperience`}
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year of experience</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id={`employmentHistory[${index}].yearOfExperience`}
                                                        {...register(`employmentHistory[${index}].yearOfExperience`)}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1 yrs"
                                                    />
                                                </div>
                                                {errors.employmentHistory?.[index]?.yearOfExperience && (
                                                    <p className="text-red-500 text-xs italic">
                                                        {errors.employmentHistory[index].yearOfExperience.message}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor={`employmentHistory[${index}].startDate`}
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start date</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        id={`employmentHistory[${index}].startDate`}
                                                        type="month"
                                                        {...register(`employmentHistory[${index}].startDate`)}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                </div>
                                                {errors.employmentHistory?.[index]?.startDate && (
                                                    <p className="text-red-500 text-xs italic">
                                                        {errors.employmentHistory[index].startDate.message}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor={`employmentHistory[${index}].endDate`}
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End date</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        id={`employmentHistory[${index}].endDate`}
                                                        {...register(`employmentHistory[${index}].endDate`)}
                                                        type="month"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                </div>
                                                {errors.employmentHistory?.[index]?.endDate && (
                                                    <p className="text-red-500 text-xs italic">
                                                        {errors.employmentHistory[index].endDate.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmploymentHistory
