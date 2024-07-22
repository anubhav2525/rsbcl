import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Spinner from '../../Loader/Spinner';

const Login = () => {
    // navigartion    
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // This navigates back to the previous page
    };

    // svg for passwordbox
    const hidePasswordSvg = (
        <svg
            className="w-6 h-6 text-gray-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                fillRule="evenodd"
                d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
            />
        </svg>
    );

    const showPasswordSvg = (
        <svg
            className="w-6 h-6 text-gray-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z" />
            <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
            <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
        </svg>
    );

    // password show or hide code
    const [showPassword, setShowPassword] = useState(false);

    // captcha stored
    const [captcha, setCaptcha] = useState(0);

    // generating captcha 6 digits
    const generateCaptcha = () => {
        let captcha = 0;
        for (let i = 0; i < 6; i++) {
            captcha += Math.floor(Math.random() * 90000);
        }
        setCaptcha(captcha);
    };

    // onload captcha generation
    useEffect(() => {
        generateCaptcha();
    }, []);

    // captcha input box handling and store in code useState
    const [code, setCode] = useState(Array(6).fill(''));

    // selecting values from  input boxes
    const inputsRef = useRef([]);
    const handleInputChange = (e, index) => {
        const { value } = e.target;
        if (/^[0-9]$/.test(value) || value === '') { // Accept only numeric input
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
            if (value.length === 1 && index < 5) {
                inputsRef.current[index + 1].focus();
            } else if (value.length === 0 && index > 0) {
                inputsRef.current[index - 1].focus();
            }
        }
    };

    // form validation using react-hook-form
    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, reset } = useForm();

    // delay some seconds
    const delay = async (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, d * 1000);
        })
    }

    const onSubmit = async (data) => {
        await delay(3)

        // Check if the code array is null or empty
        if (!code || code.length === 0) {
            setError('captcha', { type: 'manual', message: 'Captcha is required' });
            return;
        }

        // convert the code into integer and compare to captcha
        const codeInt = parseInt(code.join(''));
        if (codeInt == captcha) {
            console.log(data)
        }
        else {
            // alert("Captcha is not matched")
            setError('captcha', { type: 'manual', message: 'Captcha not matched' });
            generateCaptcha();
            console.log("Captcha is not matched", codeInt, captcha);
            console.log(errors.captcha);
        }
        reset();
    };
    // console.log(captcha, codeInt)        

    return (
        <section className="bg-gray-50 w-full h-full dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {isSubmitting ?
                    <div className='w-full my-3'>
                        <Spinner />
                    </div>
                    : ""}
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    {/* go to previous  */}
                    <div className=" mt-3 ml-3">
                        <button type="button" onClick={handleGoBack} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700">
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                            </svg>
                            <span className="sr-only">Icon description</span>
                        </button>
                    </div>

                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-3 md:space-y-3" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                {/* <label for="userid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" maxLength={35}
                                    // validations
                                    {...register('userid', {
                                        required: 'User ID is required',
                                        maxLength: { value: 30, message: 'User ID should be less than 30 characters' },
                                        minLength: { value: 7, message: 'User ID should be more than 7 characters' }
                                    })}
                                />
                                {errors.userid && <p className="mt-2  text-xs text-right text-red-500 dark:text-gray-400">{errors.userid.message}</p>}
                            </div>
                            <div>
                                <div className="relative">
                                    {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="*********"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        maxLength={45}
                                        {...register('password', {
                                            required: 'Password is required',
                                            maxLength: { value: 40, message: 'Password should be less than 30 characters' },
                                            minLength: { value: 8, message: 'Password should be more than 8 characters' }
                                        })}
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 top-0 flex items-center px-3 text-gray-500 hover:text-gray-800 focus:outline-none"
                                        onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
                                    >
                                        {showPassword ? showPasswordSvg : hidePasswordSvg}
                                    </button>
                                </div>
                                {errors.password && <p className="mt-2 text-xs text-right text-red-500 dark:text-gray-400">{errors.password.message}</p>}
                            </div>
                            <div>
                                {/* <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label> */}
                                <select
                                    {...register('department', {
                                        required: 'Department is required',
                                    })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option >Choose Department</option>
                                    <option value="excise">Excise</option>
                                    <option value="rsbcl">RSBCL</option>
                                    <option value="rsgsm">RSGSM</option>
                                </select>
                                {errors.department && <p className="mt-2 text-xs  text-right text-red-500 dark:text-gray-400">{errors.department.message}</p>}
                            </div>

                            <div>
                                {/* <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Captcha</label> */}
                                <div className='flex gap-x-2'>
                                    <input type="text" disabled value={captcha} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <button type='button' onClick={generateCaptcha}>
                                        <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="captcha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter the captcha</label>
                                <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
                                    {[...Array(6)].map((_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`code-${index + 1}`} className="sr-only">{`Code ${index + 1}`}</label>
                                            <input
                                                type="number"
                                                maxLength={1}
                                                id={`code-${index + 1}`}
                                                ref={el => inputsRef.current[index] = el}
                                                className="block w-9 h-9 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-center px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                onChange={(e) => handleInputChange(e, index, e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {errors.captcha && <p className="mt-2 text-xs text-right text-red-500 dark:text-gray-400">{errors.captcha.message}</p>}
                            </div>

                            <div className="flex items-center justify-end">
                                <Link to="/auth/forget" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                onClick={() => console.log('clicked')}
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        </form>
                    </div>
                </div>
            </div >
        </section >
    )
}


export default Login
