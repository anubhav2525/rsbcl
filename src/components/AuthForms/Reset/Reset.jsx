import React, { useState, useEffect, useRef } from 'react'
import { useForm } from "react-hook-form"
import Spinner from '../../Loader/Spinner';

const Reset = () => {
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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [receivedotp, setreceivedotp] = useState(111111)

  // otp input box handling and store in code useState
  const [otp, setOtp] = useState(Array(6).fill(''));

  // selecting values from  input boxes
  const inputsRef = useRef([]);
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === '') { // Accept only numeric input
      const newCode = [...otp];
      newCode[index] = value;
      setOtp(newCode);
      if (value.length === 1 && index < 5) {
        inputsRef.current[index + 1].focus();
      } else if (value.length === 0 && index > 0) {
        inputsRef.current[index - 1].focus();
      }

      // Check OTP validity as user types
      const codeInt = parseInt(newCode.join(''), 10);
      if (codeInt === receivedotp) {
        clearErrors('otp');
      } else if (codeInt.length === 6) {
        setError('otp', { type: 'manual', message: 'OTP not matched' });
      }
    }
  };

  // form validation using react-hook-form
  const { register, handleSubmit, setError, clearErrors, formState: { errors, isSubmitting }, reset } = useForm();

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
    const codeInt = parseInt(otp.join(''), 10);
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { type: 'manual', message: 'Password not matched' });
      return;
    }

    if (codeInt === receivedotp) {
      // send data to backend      
      console.log(data);
    } else {
      setError('otp', { type: 'manual', message: 'OTP not matched' });
      console.log('OTP is not matched', codeInt, receivedotp);
      return;
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

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset your account password
            </h1>
            <form className="space-y-3 md:space-y-3" onSubmit={handleSubmit(onSubmit)}>
              {/* password  */}
              <div>
                <div className="relative">
                  {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="New password"
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
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? showPasswordSvg : hidePasswordSvg}
                  </button>
                </div>
                {errors.password && <p className="mt-2 text-xs text-right text-red-500 dark:text-gray-400">{errors.password.message}</p>}
              </div>

              {/* confirm password  */}
              <div>
                <div className="relative">
                  {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-Type new password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    maxLength={45}
                    {...register('confirmPassword', {
                      required: 'Confirm password is required',
                      maxLength: { value: 40, message: 'Confirm password should be less than 30 characters' },
                      minLength: { value: 8, message: 'Confirm password should be more than 8 characters' }
                    })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 top-0 flex items-center px-3 text-gray-500 hover:text-gray-800 focus:outline-none"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? showPasswordSvg : hidePasswordSvg}
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-2 text-xs text-right text-red-500 dark:text-gray-400">{errors.confirmPassword.message}</p>}
              </div>

              <div>
                <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">One Time Password</label>
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
                {errors.otp && <p className="mt-2 text-xs text-right text-red-500 dark:text-gray-400">{errors.otp.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => {
                  console.log('clicked');
                }}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update</button>
            </form>
          </div>
        </div>
      </div >
    </section >
  )
}

export default Reset
