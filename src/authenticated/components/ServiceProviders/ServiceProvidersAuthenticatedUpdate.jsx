import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import Alert from '../Popup/Alert'
import axios from 'axios'

const ServiceProvidersAuthenticatedUpdate = () => {
  const { register, formState: { errors, isSubmitting }, reset, handleSubmit, watch } = useForm();
  const [alertMsg, setAlertMsg] = useState({
    bgColor: "",
    textColor: "",
    crossHover: "",
    message: ""
  });
  const [previewData, setPreviewData] = useState(null);  // To store preview data

  const [isPreviewOpen, setIsPreviewOpen] = useState(false); // To toggle preview

  const [editState, seteditState] = useState(false);

  // Get the ID from the URL params
  const { id } = useParams();


  useEffect(() => {
    // Fetch the data using the ID from params when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/auth/services/id/${id}`);
        const data = response.data.data;
        reset({
          id: data.id,
          title: data.title,
          status: data.status,
          category: data.category,
          link: data.link,
          lastUpdate: data.lastUpdate,
        });
      } catch (error) {
        console.error("Error fetching services update", error);
      }
    };
    fetchData();
  }, [id, reset]);

  const onSubmit = async (data) => {
    await updateData(data);
  };

  const updateData = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('link', data.link);
    formData.append('category', data.category);
    formData.append('status', data.status);

    try {
      const response = await axios.put(`/api/v1/auth/services/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        setAlertMsg({
          bgColor: "bg-green-100",
          textColor: "text-green-800",
          crossHover: "hover:bg-green-200",
          message: response.data.message
        });
        reset(); // Reset the form on success
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
  };

  const handlePreview = () => {
    const data = {
      id: watch('id'),
      title: watch('title'),
      category: watch('category'),
      link: watch('link'),
      status: watch('status')
    };
    setPreviewData(data);
    setIsPreviewOpen(true);
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
        />
      }


      <div className='bg-white border-gray-200 rounded shadow px-2 py-3 dark:bg-gray-800'>
        <div className='flex justify-between items-center'>
          <div>
            <h5 className="text-xl px-3 font-bold dark:text-white">Update Notice: <span className='font-semibold ml-3 text-sm'>{id}</span></h5>
          </div>
          <div className='flex items-center gap-x-2'>
            <button type="button" onClick={() => seteditState(!editState)}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* form */}
        <div className='p-4'>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor="id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Id</label>
                <input
                  type="text"
                  id="id"
                  disabled
                  placeholder="Service ID"
                  {...register('id')}
                  className={`bg-gray-100 select-none border ${errors.id ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`}
                />
              </div>
              <div>
                <label
                  htmlFor="lastUpdate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last updated</label>
                <input
                  type="text"
                  id="lastUpdate"
                  disabled
                  placeholder="Last updateed"
                  {...register('lastUpdate')}
                  className={`bg-gray-200 border ${errors.lastUpdate ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`}
                />
              </div>


              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input
                  type="text"
                  id="title"
                  disabled={!editState}
                  placeholder="Service title"
                  {...register('title', {
                    required: "Title should be required", minLength: { value: 2, message: "Min charater 2" }, maxLength: { value: 100, message: "Max character 100" }
                  })}
                  className={`bg-gray-50 border ${errors.title ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Application name`} />
                {errors.title && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.title.message}</p>}
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>
                <select
                  id="category"
                  disabled={!editState}
                  {...register('category', { required: "Category required" })}
                  className={`bg-gray-50 border ${errors.department ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Application name`}>
                  <option defaultValue="LIQUOR">LIQUOR</option>
                  <option value="RETAIL">RETAIL</option>
                  <option value="PUBLIC">PUBLIC</option>
                </select>
                {errors.category && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.category.message}</p>}
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Status</label>
                <select
                  id="status"
                  disabled={!editState}
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
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notice document</label>
                <input
                  id="link"
                  disabled={!editState}
                  {...register('link', { required: "Link should be required" })}
                  type="text"
                  className={`bg-gray-50 border ${errors.link ? "border-red-500" : "border-gray-300 dark:border-gray-600"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Application name`}
                  placeholder='https://excise.rajasthan.gov.in/' />
                {errors.link && <p className="mt-2 text-end text-xs text-red-600 dark:text-red-400">{errors.link.message}</p>}
              </div>
            </div>
            <div className='mt-4 flex justify-end items-center gap-2'>
              {/* Preview Button */}
              <button type="button" onClick={handlePreview} className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Preview</button>
              {editState && < button disabled={isSubmitting} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
              }
            </div>
          </form>
        </div>
      </div >

      {/* Preview Modal */}
      {
        isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96">
              <h2 className="text-xl font-bold mb-4 dark:text-white">Preview services Update</h2>
              <p className="mb-2"><strong>Service Id:</strong> {previewData?.id}</p>
              <p className="mb-2"><strong>Title:</strong> {previewData?.title}</p>
              <p className="mb-2"><strong>Category:</strong> {previewData?.category}</p>
              <p className="mb-2"><strong>Status:</strong> {previewData?.status}</p>
              <p className="mb-2"><strong>Link:</strong> {previewData?.link}</p>
              <div className="flex justify-end gap-2">
                <button className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={() => setIsPreviewOpen(false)}>Close</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ServiceProvidersAuthenticatedUpdate

const SaveLoader = () => {
  return (
    <div className="flex py-8 flex-col items-center justify-center">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
      <div className='flex justify-center flex-col items-center'>
        <h2 className="text-zinc-900 dark:text-white mt-4">Updating, Wait a moment ...</h2>
      </div>
    </div>
  )
};