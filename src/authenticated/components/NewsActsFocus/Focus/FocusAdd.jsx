import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Alert from '../../Popup/Alert'

const FocusAdd = () => {
  const { register, formState: { errors, isSubmitting }, reset, handleSubmit } = useForm();

  // alert message design
  const [alertMsg, setAlertMsg] = useState({
    bgColor: "",
    textColor: "",
    crossHover: "",
    message: ""
  });

  // onsubmit btn
  const onSubmit = async (data) => {
    await saveData(data);
  };

  // savedata in form state and api post request
  const saveData = async (data) => {
    const formData = new FormData();
    formData.append('link', data.link);
    formData.append('status', data.status);
    formData.append('title', data.title);

    try {
      const response = await axios.post("/api/v1/auth/inFocus", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        setAlertMsg({
          bgColor: "bg-green-100",
          textColor: "text-green-800",
          crossHover: "hover:bg-green-200",
          message: response.data.message
        });
        reset(); // Reset the form on success
      } else if (response.status === 208) {
        setAlertMsg({
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
          crossHover: "hover:bg-blue-200",
          message: response.data.message
        });
      } else {
        setAlertMsg({
          bgColor: "bg-red-100",
          textColor: "text-red-800",
          crossHover: "hover:bg-red-200",
          message: response.data.message
        });
      }
    } catch (error) {
      const status = error.response ? error.response.status : null;
      let errorMsg = "An error occurred: " + error.message;

      if (status === 400) {
        errorMsg = "Bad request. Please check the form data.";
      } else if (status === 500) {
        errorMsg = "Internal server error. Please try again later.";
      }

      setAlertMsg({
        bgColor: "bg-red-100",
        textColor: "text-red-800",
        crossHover: "hover:bg-red-200",
        message: errorMsg
      });
    }
  }

  // navigation    
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // This navigates back to the previous page
  };

  return (
    <div className='px-2 py-3'>
      {isSubmitting && <SaveLoader />}

      {alertMsg.message &&
        <Alert
          bgColor={alertMsg.bgColor}
          textColor={alertMsg.textColor}
          crossHover={alertMsg.crossHover}
          message={alertMsg.message}
        />}
      <div className='bg-white border-gray-200 rounded shadow px-2 py-3  dark:bg-gray-800'>
        <div className='flex justify-between items-center'>
          <div>
            <h5 className="text-xl px-3 font-bold dark:text-white">Add new Focus</h5>
          </div>
          <div>
            <button onClick={handleGoBack} type='button' className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium bg-slate-300 rounded-md dark:bg-slate-600 dark:text-white">
              Close
              <div className="inline-flex items-center p-1 ms-2 text-sm rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300">
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* form */}
        <div className='p-4'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>

              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Service title"
                  {...register('title', {
                    required: "Title should be required", minLength: { value: 2, message: "Min charater 2" }, maxLength: { value: 100, message: "Max character 100" }
                  })}
                  className={`bg-gray-50 border ${errors.title ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Application name`} />
                {errors.title && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.title.message}</p>}
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Status</label>
                <select
                  id="status"
                  {...register('status', { required: "Status required" })}
                  className={`bg-gray-50 border ${errors.status ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Application name`}>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="REMOVED">REMOVED</option>
                  <option value="DELETED">DELETED</option>
                  <option value="INACTIVE">INACTIVE</option>
                </select>
                {errors.status && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.status.message}</p>}
              </div>
              <div>
                <label
                  htmlFor="link"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                <input
                  id="link"
                  {...register('link', { required: "Link should be required" })}
                  type="text"
                  className={`bg-gray-50 border ${errors.link ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Application name`}
                  placeholder='https://excise.rajasthan.gov.in/' />
                {errors.link && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.link.message}</p>}
              </div>
            </div>
            <div className='mt-4 flex justify-end items-center'>
              <button disabled={isSubmitting} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FocusAdd

const SaveLoader = () => {
  return (
    <div className="flex py-8 flex-col items-center justify-center">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
      <div className='flex justify-center flex-col items-center'>
        <h2 className="text-zinc-900 dark:text-white mt-4">Saving, Wait a moment ...</h2>
      </div>
    </div>
  )
}