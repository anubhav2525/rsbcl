import React from 'react';
import { useFormContext } from 'react-hook-form';

const PersonalInfoBasic = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='bg-white border-gray-200 rounded shadow px-2 py-3 dark:bg-gray-800'>
            <div className='flex justify-between items-center'>
                <h5 className="text-xl px-3 font-bold dark:text-white">Personal details</h5>
                <div>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                    </svg>
                </div>
            </div>

            {/* form inputs  */}
            <div className='p-4'>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="John"
                            {...register('personalInfo.firstName')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" maxLength={40} />
                        {errors.personalInfo?.firstName && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.personalInfo.firstName.message}</p>}
                    </div>
                    <div>
                        <label
                            htmlFor="middleName"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                        <input
                            type="text"
                            id="middleName"
                            placeholder="Deo"
                            {...register('personalInfo.middleName')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.personalInfo?.middleName && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.personalInfo.middleName.message}</p>}
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Doe"
                            {...register('personalInfo.lastName')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.personalInfo?.lastName && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.personalInfo.lastName.message}</p>}
                    </div>
                    <div>
                        <label
                            htmlFor="gender"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Gender</label>
                        <select
                            id="gender"
                            {...register('personalInfo.gender')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option disabled>Choose a gender</option>
                            <option defaultValue="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.personalInfo?.gender && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.personalInfo.gender.message}</p>}
                    </div>
                    <div>
                        <label
                            htmlFor="maritalStatus"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marital status</label>
                        <select
                            id="maritalStatus"
                            {...register('personalInfo.maritalStatus')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option disabled>Choose a marital status</option>
                            <option defaultValue="Single">Single</option>
                            <option value="Male">Married</option>
                            <option value="Widowed">Widowed</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Separated">Separated</option>
                        </select>
                        {errors.personalInfo?.maritalStatus && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.personalInfo.maritalStatus.message}</p>}
                    </div>
                    <div>
                        <label
                            htmlFor="dateOfBirth"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input
                                id="dateOfBirth"
                                type="date"
                                {...register('personalInfo.dateOfBirth')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        {errors.personalInfo?.dateOfBirth && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.personalInfo.dateOfBirth.message}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfoBasic
