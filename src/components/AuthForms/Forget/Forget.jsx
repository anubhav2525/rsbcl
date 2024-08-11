import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Spinner from '../../Loader/Spinner';

const Forget = () => {
  // navigartion    
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This navigates back to the previous page
  };

  // useForm
  const { register, handleSubmit, setError, formState: { errors, isSubmitting }, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    reset();
  };
  
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
            <div className='space-y-2'>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Forget your account password
              </h1>

              <p className=" text-xs font-semibold text-gray-900 dark:text-white">If your account is found then we sent and email to your registered email address.</p>
            </div>
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

              <div className=''>
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

              <div className="flex items-center justify-end">
                <Link to="/auth/login" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Try to login again ?</Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => console.log('clicked')}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
            </form>
          </div>
        </div>
      </div >
    </section >
  )
}

export default Forget
