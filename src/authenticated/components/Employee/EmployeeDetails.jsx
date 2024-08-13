import React, { useState } from 'react';
import { statesAndCities, countries } from '../StaticArray/States';
import { useParams } from 'react-router-dom';
const EmployeeDetails = () => {
    // city and state
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);

    const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        setCities(statesAndCities[state] || []);
    };

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

    // form buttons
    const [basic, setBasic] = useState(true)
    const [document, setdocument] = useState(false);
    const [education, seteducation] = useState(false);
    const [workDetail, setworkDetail] = useState(false);

    const handleBasic = () => {
        setBasic(true)
        setworkDetail(false)
        setdocument(false)
        seteducation(false)
    }
    const handleDocument = () => {
        setdocument(true)
        setBasic(false)
        setworkDetail(false)
        seteducation(false)
    }
    const handleWorkDetail = () => {
        setworkDetail(true)
        setBasic(false)
        setdocument(false)
        seteducation(false)
    }

    const handleEducation = () => {
        seteducation(true)
        setBasic(false)
        setworkDetail(false)
        setdocument(false)
    }

    // education section 
    const [educations, setEducations] = useState([{ institutionName: '', degree: '', year: '', documentUrl: null }]);

    const addEducation = () => {
        setEducations([...educations, { institutionName: '', degree: '', year: '', documentUrl: null }]);
    };

    const handleChange = (index, event) => {
        const newEducations = educations.map((education, i) => {
            if (i === index) {
                return { ...education, [event.target.name]: event.target.value };
            }
            return education;
        });
        setEducations(newEducations);
    };

    const handleDelete = (index) => {
        setEducations(educations.filter((_, i) => i !== index));
    };

    // handle job skills
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectChange = (event) => {
        const options = event.target.options;
        const selectedValues = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);
        setSelectedItems(prevSelectedItems => {
            const newItems = selectedValues.filter(value => !prevSelectedItems.includes(value));
            return [...prevSelectedItems, ...newItems];
        });
    };

    const handleRemoveItem = (itemToRemove) => {
        setSelectedItems(selectedItems.filter(item => item !== itemToRemove));
    };


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
                        <form className='flex flex-col md:flex-row gap-x-3 h-full w-full'>
                            <div>
                                <div className='w-full flex justify-center items-center'>
                                    <div className='flex relative justify-center items-center p-1 rounded-full w-32 h-32 md:h-44 md:w-44 bg-white dark:bg-slate-800'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9Q0T-uwogA2Gflw8y-JIPmrOwjPDjDulF-s_GucYIKagv0U7aGVczHnDPHnE8z6toco&usqp=CAU" alt="" className='rounded-full' />
                                        <button type="button" className='absolute top-2 -right-4 md:right-4 z-10'>
                                            <svg className="w-7 h-7 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='hidden sm:flex mt-4'>
                                    <ol className="space-y-4 w-60">
                                        <li>
                                            <div className={`border transition-all dark:text-slate-200 delay-100 rounded-md w-full text-start dark:border-slate-600 text-black font-medium ${basic ? "text-blue-700 dark:text-blue-800 dark:border-blue-800 border-blue-700" : ""
                                                }`} type="button">
                                                <div className='flex w-full px-4 py-2 items-center justify-between '>
                                                    <div>Basic</div>
                                                    <div>
                                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={`border transition-all dark:text-slate-200 delay-100 rounded-md w-full text-start dark:border-slate-600 text-black font-medium ${document ? "text-blue-700 dark:text-blue-800 dark:border-blue-800 border-blue-700" : ""
                                                }`} type="button">
                                                <div className='flex w-full px-4 py-2 items-center justify-between '>
                                                    <div>Document</div>
                                                    <div>
                                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={`border transition-all dark:text-slate-200 delay-100 rounded-md w-full text-start dark:border-slate-600 text-black font-medium ${education ? "text-blue-700 dark:text-blue-800 dark:border-blue-800 border-blue-700" : ""
                                                }`} type="button">
                                                <div className='flex w-full px-4 py-2 items-center justify-between '>
                                                    <div>Education</div>
                                                    <div>
                                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={`border transition-all dark:text-slate-200 delay-100 rounded-md w-full text-start dark:border-slate-600 text-black font-medium ${workDetail ? "text-blue-700 dark:text-blue-800 dark:border-blue-800 border-blue-700" : ""
                                                }`} type="button">
                                                <div className='flex w-full px-4 py-2 items-center justify-between '>
                                                    <div>Work details</div>
                                                    <div>
                                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
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
                                    <div >
                                        {
                                            basic &&
                                            <div className="rounded-lg bg-gray-50 dark:bg-gray-900">
                                                {/* personal details */}
                                                <div className='bg-white border-gray-200 rounded-lg shadow px-2 py-4 dark:bg-gray-800'>
                                                    <div className='flex justify-between items-center'>
                                                        <h5 className="text-xl px-3 font-bold dark:text-white">Personal details</h5>
                                                        <div>
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='p-4'>
                                                        <div className=''>
                                                            <div>
                                                                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                                                                    <div>
                                                                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                                                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                                                    </div>
                                                                    <div>
                                                                        <label htmlFor="middle_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                                                                        <input type="text" id="middle_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deo" required />
                                                                    </div>
                                                                    <div>
                                                                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                                                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                                                    </div>
                                                                    <div>
                                                                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Gender</label>
                                                                        <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                            <option>Choose a gender</option>
                                                                            <option value="Male">Male</option>
                                                                            <option value="Female">Female</option>
                                                                            <option value="Other">Other</option>
                                                                        </select>
                                                                    </div>
                                                                    <div>
                                                                        <label htmlFor="marital" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marital status</label>
                                                                        <select id="marital" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                            <option >Choose a marital status</option>
                                                                            <option value="Male">Married</option>
                                                                            <option value="Single">Single</option>
                                                                            <option value="Widowed">Widowed</option>
                                                                            <option value="Divorced">Divorced</option>
                                                                            <option value="Separated">Separated</option>
                                                                        </select>
                                                                    </div>
                                                                    <div>
                                                                        <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                                                                        <div className="relative">
                                                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                                                </svg>
                                                                            </div>
                                                                            <input id="dob" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* contact details */}
                                                <div className='bg-white mt-4 border-gray-200 rounded-lg shadow px-2 py-4 dark:bg-gray-800'>
                                                    <div className='flex justify-between items-center'>
                                                        <h5 className="text-xl px-3 font-bold dark:text-white">Contact details</h5>
                                                        <div>
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <div className='p-4'>
                                                        <div>
                                                            <div>
                                                                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                                                                    <div >
                                                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                                                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                                                                    </div>
                                                                    <div>
                                                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                                                        <div className="relative">
                                                                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                                                                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                                                                </svg>
                                                                            </div>
                                                                            <input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <label htmlFor="emergency-phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Emergency contact</label>
                                                                        <div className="relative">
                                                                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                                                                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                                                                </svg>
                                                                            </div>
                                                                            <input type="text" id="emergency-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                                                                        </div>
                                                                    </div>
                                                                    <div className='md:col-span-3'>
                                                                        <label htmlFor="streetAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street address</label>
                                                                        <input type="text" id="streetAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                                                                    </div>
                                                                    <div className='md:col-span-3'>
                                                                        <div className='w-full grid md:grid-cols-4 gap-3'>
                                                                            <div>
                                                                                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                                                                                <select
                                                                                    id="states"
                                                                                    value={selectedState}
                                                                                    onChange={handleStateChange}
                                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                                >
                                                                                    <option disabled>Choose a state</option>
                                                                                    {Object.keys(statesAndCities).map((state) => (
                                                                                        <option key={state} value={state}>{state}</option>
                                                                                    ))}
                                                                                </select>
                                                                            </div>
                                                                            <div className={`${selectedState ? '' : 'hidden'}`}>
                                                                                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                                                                <select
                                                                                    id="city"
                                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                                >
                                                                                    {cities.length > 0 ? cities.map((city) => (
                                                                                        <option key={city} value={city}>{city}</option>
                                                                                    )) : <option value="" disabled>No cities available</option>}
                                                                                </select>
                                                                            </div>
                                                                            <div>
                                                                                <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pincode</label>
                                                                                <div className="relative">
                                                                                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                                                            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                    <input type="text" id="pincode" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" pattern="^\d{5}(-\d{4})?$" required />
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                                                                <select id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                                    <option>Choose a country</option>
                                                                                    {countries.map((country) => (
                                                                                        <option key={country} value={country}>{country}</option>
                                                                                    ))}
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='mt-3 flex justify-end items-center'>
                                                    <button type="button" onClick={handleDocument} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                                                        <div className='flex justify-center items-center gap-2'>
                                                            <div>Next</div>
                                                            <div>
                                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                        {
                                            document &&
                                            <div className="rounded-lg bg-gray-50 dark:bg-gray-900">
                                                <div className='bg-white border-gray-200 rounded-lg shadow px-2 py-4 dark:bg-gray-800'>
                                                    <div className='flex justify-between items-center'>
                                                        <h5 className="text-xl px-3 font-bold dark:text-white">Documents</h5>
                                                        <div>
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <div className='p-4'>
                                                        <div className=''>
                                                            <div>
                                                                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                                    <div className='w-full md:col-span-2'>
                                                                        <div className='w-full gap-y-4 grid md:grid-cols-2 md:gap-x-4'>
                                                                            <div>
                                                                                <label htmlFor="aadharCard" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aadhar card number</label>
                                                                                <input type="number" id="aadharCard" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="90210" required />
                                                                            </div>
                                                                            <div>
                                                                                <label htmlFor="aadharCardDocument" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aadhar card document</label>
                                                                                <input id="aadharCardDocument" type="file" className="flex bg-gray-50 border-gray-300 text-gray-900 h-10 w-full rounded-md border border-input  px-3 py-2 text-sm t file:border-0 file:bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-slate-400 file:text-gray-600 file:text-sm file:font-medium" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='w-full md:col-span-2'>
                                                                        <div className='w-full gap-y-4 grid md:grid-cols-2 md:gap-x-4'>
                                                                            <div>
                                                                                <label htmlFor="pancard" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pancard ID</label>
                                                                                <input type="number" id="number-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="90210" required />
                                                                            </div>
                                                                            <div>
                                                                                <label for="pancardDocument" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pancard document</label>
                                                                                <input id="pancardDocument" type="file" className="flex bg-gray-50 border-gray-300 text-gray-900 h-10 w-full rounded-md border border-input  px-3 py-2 text-sm t file:border-0 file:bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-slate-400 file:text-gray-600 file:text-sm file:font-medium" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-3 flex justify-between items-center'>
                                                    <button type="button" onClick={handleBasic} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                                                        <div className='flex justify-center items-center gap-2'>
                                                            <div>
                                                                <svg class="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                    <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                                </svg>
                                                            </div>
                                                            <div>Previous</div>
                                                        </div>
                                                    </button>
                                                    <button type="button" onClick={handleEducation} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                                                        <div className='flex justify-center items-center gap-2'>
                                                            <div>Next</div>
                                                            <div>
                                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                        {
                                            education &&
                                            <div className="rounded-lg bg-gray-50 dark:bg-gray-900">
                                                <div className='bg-white border-gray-200 rounded-lg shadow px-2 py-4 dark:bg-gray-800'>
                                                    <div className='flex justify-between items-center'>
                                                        <h5 className="text-xl px-3 font-bold dark:text-white">Education</h5>
                                                        <div className='flex justify-end items-center'>
                                                            <button
                                                                type="button"
                                                                onClick={addEducation}
                                                                className="bg-blue-500 text-xs text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
                                                            >
                                                                Add More
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className='p-4'>
                                                        <div className=''>
                                                            <div>
                                                                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                                    <div className='w-full md:col-span-2'>
                                                                        {educations.map((education, index) => (
                                                                            <div key={index} className='w-full border-b-2 mb-2'>
                                                                                <div className='flex items-center justify-between'>
                                                                                    <div className='font-bold dark:text-white'>Education {index + 1}</div>
                                                                                    <button
                                                                                        type="button"
                                                                                        onClick={() => handleDelete(index)}
                                                                                        className="bg-red-500 text-xs text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
                                                                                    >
                                                                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                                                            <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd" />
                                                                                        </svg>

                                                                                    </button>
                                                                                </div>
                                                                                <div className='w-full gap-y-4 grid md:grid-cols-2 md:gap-x-4 mb-4'>
                                                                                    <div>
                                                                                        <label htmlFor={`institution-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Institution</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            id={`institution-${index}`}
                                                                                            name="institution"
                                                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                                            value={education.institution}
                                                                                            onChange={(e) => handleChange(index, e)}
                                                                                            placeholder="Institution Name"
                                                                                            required
                                                                                        />
                                                                                    </div>
                                                                                    <div>
                                                                                        <label htmlFor={`degree-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Degree</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            id={`degree-${index}`}
                                                                                            name="degree"
                                                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                                            value={education.degree}
                                                                                            onChange={(e) => handleChange(index, e)}
                                                                                            placeholder="Degree"
                                                                                            required
                                                                                        />
                                                                                    </div>
                                                                                    <div>
                                                                                        <label htmlFor={`year-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            id={`year-${index}`}
                                                                                            name="year"
                                                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                                            value={education.year}
                                                                                            onChange={(e) => handleChange(index, e)}
                                                                                            placeholder="Year"
                                                                                            required
                                                                                        />
                                                                                    </div>
                                                                                    <div>
                                                                                        <label htmlFor={`documentUrl-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Document pdf</label>
                                                                                        <input
                                                                                            type="file"
                                                                                            id={`documentUrl-${index}`} value={education.year}
                                                                                            onChange={(e) => handleChange(index, e)} className="flex bg-gray-50 border-gray-300 text-gray-900 h-10 w-full rounded-md border border-input  px-3 py-2 text-sm t file:border-0 file:bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-slate-400 file:text-gray-600 file:text-sm file:font-medium" />
                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                        ))}

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-3 flex justify-between items-center'>
                                                    <button type="button" onClick={handleDocument} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                                                        <div className='flex justify-center items-center gap-2'>
                                                            <div>
                                                                <svg class="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                                </svg>
                                                            </div>
                                                            <div>Previous</div>
                                                        </div>
                                                    </button>
                                                    <button type="button" onClick={handleWorkDetail} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                                                        <div className='flex justify-center items-center gap-2'>
                                                            <div>Next</div>
                                                            <div>
                                                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        }{
                                            workDetail && <div className="rounded-lg bg-gray-50 dark:bg-gray-900">
                                                <div className='bg-white border-gray-200 rounded-lg shadow px-2 py-4 dark:bg-gray-800'>
                                                    <div className='flex justify-between items-center'>
                                                        <h5 className="text-xl px-3 font-bold dark:text-white">Job details</h5>
                                                        <div>
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <div className='p-4'>
                                                        <div className=''>
                                                            <div>
                                                                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                                    <div className='w-full md:col-span-2'>
                                                                        <div className='w-full gap-y-4 grid md:grid-cols-2 md:gap-x-4'>
                                                                            <div>
                                                                                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
                                                                                <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                                    <option>Choose a gender</option>
                                                                                    <option value="Male">Male</option>
                                                                                    <option value="Female">Female</option>
                                                                                    <option value="Other">Other</option>
                                                                                </select>
                                                                            </div>
                                                                            <div>
                                                                                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                                                                                <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                                    <option>Choose a gender</option>
                                                                                    <option value="Male">Male</option>
                                                                                    <option value="Female">Female</option>
                                                                                    <option value="Other">Other</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className='w-full md:col-span-2'>
                                                                        <div className='w-full gap-y-4 grid md:grid-cols-2 md:gap-x-4'>
                                                                            <div>
                                                                                <label htmlFor="pancard" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                                    Username
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    id="number-input"
                                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                                    placeholder="90210"
                                                                                    required
                                                                                />
                                                                                <div>
                                                                                    <div>
                                                                                        <label htmlFor="pancard" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                                            Pancard ID
                                                                                        </label>
                                                                                        <input
                                                                                            type="number"
                                                                                            id="number-input"
                                                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                                            placeholder="90210"
                                                                                            required
                                                                                        />

                                                                                        <div className="mt-4">
                                                                                            <label htmlFor="select-items" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                                                Select Items
                                                                                            </label>
                                                                                            <select
                                                                                                id="select-items"
                                                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                                                                                onChange={handleSelectChange}
                                                                                            >
                                                                                                <option>Choose options</option>
                                                                                                <option value="item2">Item 2</option>
                                                                                                <option value="item3">Item 3</option>
                                                                                                <option value="item4">Item 4</option>
                                                                                                <option value="item5">Item 5</option>
                                                                                                <option value="item6">Item 6</option>
                                                                                                <option value="item7">Item 7</option>
                                                                                                <option value="item8">Item 8</option>
                                                                                                <option value="item9">Item 9</option>
                                                                                                <option value="item10">Item 10</option>
                                                                                            </select>
                                                                                        </div>

                                                                                        <div className="mt-4">
                                                                                            <h2 className="text-sm font-medium text-gray-900 dark:text-white">Skills:</h2>
                                                                                            <ul className="list-disc gap-3 flex flex-wrap items-center gap-x-3 text-sm text-gray-900 dark:text-white">
                                                                                                {selectedItems.map((item, index) => (
                                                                                                    <li key={index} className="flex gap-2 items-center">
                                                                                                        {item}
                                                                                                        <button
                                                                                                            onClick={() => handleRemoveItem(item)}
                                                                                                            className="ml-2"
                                                                                                        >
                                                                                                            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                                                            </svg>

                                                                                                        </button>
                                                                                                    </li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <label for="pancardDocument" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pancard document</label>
                                                                                <input id="pancardDocument" type="file" className="flex bg-gray-50 border-gray-300 text-gray-900 h-10 w-full rounded-md border border-input  px-3 py-2 text-sm t file:border-0 file:bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-slate-400 file:text-gray-600 file:text-sm file:font-medium" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-3 flex justify-between items-center'>
                                                    <button type="button" onClick={handleBasic} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                                                        <div className='flex justify-center items-center gap-2'>
                                                            <div>
                                                                <svg class="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                    <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                                </svg>
                                                            </div>
                                                            <div>Previous</div>
                                                        </div>
                                                    </button>
                                                    <button type="button" onClick={handleEducation} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
                                                        <div className='flex justify-center items-center gap-2'>
                                                            <div>Next</div>
                                                            <div>
                                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                    </div>

                                </div>

                                {/* form fields */}
                                <div className=''>

                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default EmployeeDetails


