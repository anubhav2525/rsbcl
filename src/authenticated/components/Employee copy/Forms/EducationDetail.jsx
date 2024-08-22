import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';

const EducationDetail = () => {
    const { register, control, formState: { errors } } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'educations'
    });

    return (
        <div>
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className='bg-white border-gray-200 rounded shadow px-2 py-3 dark:bg-gray-800'>
                    <div className='flex justify-between items-center'>
                        <h5 className="text-xl px-3 font-bold dark:text-white">Education</h5>
                        <div className='flex justify-end items-center'>
                            <button
                                type="button"
                                onClick={() => append({ institutionName: '', degree: '', year: '' })}
                                className="bg-blue-500 text-xs text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
                            >
                                Add More
                            </button>
                        </div>
                    </div>

                    <div className='p-4'>
                        <div className='w-full'>
                            {fields.map((item, index) => (
                                <div key={item.id} className='w-full border-t-2 pt-2 mb-2'>
                                    <div className='flex items-center justify-between'>
                                        <div className='font-bold dark:text-white'>Education {index + 1}</div>
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
                                    <div className='w-full gap-y-4 grid md:grid-cols-2 md:gap-x-4'>
                                        <div>
                                            <label
                                                htmlFor={`educations[${index}].institutionName`}
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Institution name</label>
                                            <input
                                                type="text"
                                                id={`educations[${index}].institutionName`}
                                                {...register(`educations[${index}].institutionName`)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            {errors.educations?.[index]?.institutionName && (
                                                <p className="text-red-500 text-xs italic">
                                                    {errors.educations[index].institutionName.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor={`educations[${index}].degree`}
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Degree</label>
                                            <input
                                                type="text"
                                                id={`educations[${index}].degree`}
                                                {...register(`educations[${index}].degree`)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            {errors.educations?.[index]?.degree && (
                                                <p className="text-red-500 text-xs italic">
                                                    {errors.educations[index].degree.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor={`educations[${index}].year`}
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                                            <input
                                                type="text"
                                                id={`educations[${index}].year`}
                                                maxLength={4}
                                                {...register(`educations[${index}].year`)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            {errors.educations?.[index]?.year && (
                                                <p className="text-red-500 text-xs italic">
                                                    {errors.educations[index].year.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationDetail;
