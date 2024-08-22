import React from 'react'
import { useFormContext } from 'react-hook-form';

const DocumentDetail = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className="rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className='bg-white border-gray-200 rounded shadow px-2 py-3 dark:bg-gray-800'>
                <div className='flex justify-between items-center'>
                    <h5 className="text-xl px-3 font-bold dark:text-white">Documents</h5>
                    <div>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                        </svg>
                    </div>
                </div>

                {/* form inputs */}
                <div className='p-4'>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='w-full md:col-span-2'>
                            <div className='w-full gap-y-4 grid md:grid-cols-2 md:gap-x-4'>
                                <div>
                                    <label
                                        htmlFor="aadharNumber"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aadhar card number</label>
                                    <input
                                        type="number"
                                        id="aadharNumber"
                                        {...register('aadharNumber')}
                                        placeholder="1234-1234-1234"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {errors.aadharNumber && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.aadharNumber.message}</p>}
                                </div>
                                {/* <div>
                                    <label
                                        htmlFor="aadharDocumentUrl"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aadhar card document</label>
                                    <input
                                        id="aadharDocumentUrl"
                                        {...register('identificationInfo.aadharDocumentUrl')}
                                        type="file"
                                        className="flex bg-gray-50 border-gray-300 text-gray-900 h-10 w-full rounded-md border border-input  px-3 py-2 text-sm t file:border-0 file:bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-slate-400 file:text-gray-600 file:text-sm file:font-medium" />
                                    {errors.identificationInfo?.aadharDocumentUrl && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.identificationInfo.aadharDocumentUrl.message}</p>}
                                </div> */}


                                <div>
                                    <label
                                        htmlFor="pancardId"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pancard ID</label>
                                    <input
                                        type="text"
                                        id="pancardId"
                                        {...register('pancardId')}
                                        placeholder="AB12345678"                                        
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {errors.pancardId && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.pancardId.message}</p>}
                                </div>
                                {/* <div>
                                    <label
                                        htmlFor="pancardDocumentUrl"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pancard document</label>
                                    <input
                                        id="pancardDocumentUrl"
                                        {...register('identificationInfo.pancardDocumentUrl')}
                                        type="file"
                                        className="flex bg-gray-50 border-gray-300 text-gray-900 h-10 w-full rounded-md border border-input  px-3 py-2 text-sm t file:border-0 file:bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-slate-400 file:text-gray-600 file:text-sm file:font-medium" />
                                    {errors.identificationInfo?.pancardDocumentUrl && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.identificationInfo.pancardDocumentUrl.message}</p>}
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default DocumentDetail
