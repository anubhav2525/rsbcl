import React, { useState } from 'react'
import { statesAndCities, countries } from "../../StaticArray/States"
import { useFormContext } from 'react-hook-form';

const ContactInfoBasic = () => {
    // city and state
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);

    const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        setCities(statesAndCities[state] || []);
    };

    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='bg-white mt-4 border-gray-200 rounded shadow px-2 py-3 dark:bg-gray-800'>
            <div className='flex justify-between items-center'>
                <h5 className="text-xl px-3 font-bold dark:text-white">Contact details</h5>
                <div>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                    </svg>
                </div>
            </div>

            {/* form inputs  */}
            <div className='p-4'>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div >
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email')}
                            placeholder="john.doe@company.com"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.email && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label
                            htmlFor="phoneNumber"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                </svg>
                            </div>
                            <input
                                type="tel"
                                id="phoneNumber"
                                placeholder="123-456-7890"
                                {...register('phoneNumber')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        {errors.phoneNumber && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.phoneNumber.message}</p>}
                    </div>
                    <div>
                        <label
                            htmlFor="emergencyContact"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Emergency contact</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                </svg>
                            </div>
                            <input
                                type="number"
                                id="emergencyContact"
                                {...register('emergencyContact')}
                                placeholder="123-456-7890"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        {errors.emergencyContact && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.emergencyContact.message}</p>}
                    </div>
                    <div className='md:col-span-3'>
                        <label
                            htmlFor="streetAddress"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street address</label>
                        <input
                            type="text"
                            id="streetAddress"
                            placeholder="Local address, landmark"
                            {...register('address.streetAddress')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.address?.streetAddress && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.address.streetAddress.message}</p>}
                    </div>
                    <div className='md:col-span-3'>
                        <div className='w-full grid md:grid-cols-4 gap-3'>
                            <div>
                                <label
                                    htmlFor="state"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                                <select
                                    id="state"
                                    {...register('address.state')}
                                    value={selectedState}
                                    onChange={handleStateChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option disabled>Choose a state</option>
                                    {Object.keys(statesAndCities).map((state) => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                                {errors.address?.state && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.address.state.message}</p>}
                            </div>
                            <div className={`${selectedState ? '' : 'hidden'}`}>
                                <label
                                    htmlFor="city"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                <select
                                    id="city"
                                    {...register('address.city')}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option disabled >Choose a city</option>
                                    {cities.length > 0 ? cities.map((city) => (
                                        <option key={city} value={city}>{city}</option>
                                    )) : <option value="" disabled>No cities available</option>}
                                </select>
                                {errors.address?.city && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.address.city.message}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="pincode"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pincode</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="number"
                                        id="pincode"
                                        {...register('address.pincode')}
                                        placeholder="123456"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                {errors.address?.pincode && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.address.pincode.message}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="country"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                <select
                                    id="country"
                                    {...register('address.country')}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Choose a country</option>
                                    {countries.map((country) => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                                {errors.address?.country && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.address.country.message}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfoBasic
