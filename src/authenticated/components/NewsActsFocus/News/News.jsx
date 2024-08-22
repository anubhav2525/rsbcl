import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../../../components/Loader/Spinner';
import Alert from '../../Popup/Alert';
import NewsDelete from './NewsDelete/NewsDelete';

const News = () => {
  // alert message
  const [alertMsg, setAlertMsg] = useState({
    bgColor: "",
    textColor: "",
    crossHover: "",
    message: ""
  });

  // loader
  const [loading, setLoading] = useState(true);

  // filter options
  const [filterOption, setfilterOption] = useState(false);

  const [deleteModal, setdeleteModal] = useState(false); // Manage modal state
  const [deleteId, setDeleteId] = useState(null); // delete modal
  const [news, setnews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalrecords, settotalrecords] = useState(0);

  // http error response
  const handleErrorResponse = (status, data) => {
    switch (status) {
      case 400:
        setAlertMsg({
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
          crossHover: "hover:bg-blue-200",
          message: data.message
        });
        break;
      case 401:
        console.log('Unauthorized:', data.message);
        setAlertMsg({
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
          crossHover: "hover:bg-blue-200",
          message: data.message || "Unauthorized you are not allowed to access these resources"
        });
        break;
      case 500:
        console.log('Server Error:', data.message);
        setAlertMsg({
          bgColor: "bg-red-100",
          textColor: "text-red-600",
          crossHover: "hover:bg-red-200",
          message: "Internal server error 500" || data.message
        });
        break;
      case 404:
        console.log('Not Found:', data.message);
        setAlertMsg({
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
          crossHover: "hover:bg-blue-200",
          message: data.message
        });
        break;
      default:
        console.log('Unexpected Error:', data.message);
        setAlertMsg({
          bgColor: "bg-red-100",
          textColor: "text-red-800",
          crossHover: "hover:bg-red-200",
          message: data.message
        });
    }
  };

  // first time loading
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  // api call    
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/v1/public/news-updates', {
        params: {
          page: currentPage, // or just 'page' in shorthand ES6 syntax
          size: 10  // or just 'size' in shorthand ES6 syntax
        }
      });

      if (response.status === 200) {
        // TODO: not saved in usestate
        console.log('Success:', response.data.message);
        setnews(response.data.data.content);  // Set the news state with the fetched data

        setTotalPages(response.data.data.totalPages);

        settotalrecords(response.data.data.totalElements)
        console.log('Fetched news:', response.data.data.content); // Log the fetched news data
        console.log('usestate : ', news)
      } else {
        handleErrorResponse(response.status, response.data);
      }
    } catch (error) {
      if (error.response) {
        handleErrorResponse(error.response.status, error.response.data);
      } else if (error.request) {
        console.log('No response received:', error.request);
        setAlertMsg({
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
          crossHover: "hover:bg-blue-200",
          message: error.message
        });
      } else {
        console.log('Error:', error.message);
        setAlertMsg({
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
          crossHover: "hover:bg-blue-200",
          message: error.message
        });
      }
    } finally {
      setLoading(false);  // Stop the loader once the request is done
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // handling delete 
  const openDeleteModal = (id) => {
    setdeleteModal(true);  // Open modal
    setDeleteId(id);       // Store the ID of the item to be deleted
  };

  if (loading) {
    return <Spinner />
  }
  return (
    <div className='h-full w-full p-4 md:px-2 '>
      <div className="mb-4">
        <h3 className="text-gray-800 dark:text-white text-2xl font-bold">
          News updates
          <span class="bg-blue-100 ms-3 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{totalrecords}</span>
        </h3>
      </div>

      <div className='mb-3 w-full grid grid-cols-1 md:grid-cols-3 gap-2'>
        <div className='h-8'>
          <form className='w-full h-full flex justify-between items-end gap-1'>
            {/* search icon  */}
            <div className='w-full h-full'>
              <div className="relative flex items-center w-full h-full rounded border dark:border-slate-600  border-slate-300 focus-within:shadow-lg bg-white dark:bg-slate-700 overflow-hidden">
                <div className="grid place-items-center h-full w-8 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  className="peer h-full w-full outline-none text-sm dark:text-white dark:bg-slate-700 text-gray-700 px-2"
                  type="text"
                  placeholder="Search with app name.." />
              </div>
            </div>
            {/* submit button  */}
            <div className='h-full'>
              <button type="submit" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 px-2 h-full">
                <div className="grid place-items-center px-2 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>
        <div className='flex justify-end items-center gap-x-1 col-span-2'>
          {/* add button  */}
          <div>
            <Link to="/authenticated/news/add" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full text-xs flex justify-between items-center gap-x-2">
              <div>
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14m-7 7V5" />
                </svg>
              </div>
              <div>
                Add
              </div>
            </Link>
          </div>
          {/* Refresh button */}
          <div>
            <button type="button" onClick={fetchData} className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full text-xs flex justify-between items-center gap-x-2">
              <div>
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
                </svg>

              </div>
              <div>
                Refresh
              </div>
            </button>
          </div>
          {/* filterOption */}
          <div className=''>
            <button type="button" onClick={() => setfilterOption(!filterOption)} className="bg-gradient-to-r relative text-xs from-blue-500 via-blue-600 to-blue-700 text-white rounded shadow-md hover:opacity-90 py-2 px-3 h-full flex justify-between items-center gap-x-2">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" />
              </svg>
              <div>
                Filter
              </div>
            </button>

            {filterOption &&
              <div className="z-10 absolute right-3 mt-4 w-48 bg-slate-50 divide-y divide-gray-100 rounded-md shadow dark:bg-gray-700 dark:divide-gray-600">
                {/* <!-- Dropdown menu --> */}
                <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="checkbox-item-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input checked id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="checkbox-item-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="checkbox-item-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                    </div>
                  </li>
                </ul>
              </div>
            }
          </div>
        </div>
      </div>

      <div>
        {alertMsg.message &&
          <Alert
            bgColor={alertMsg.bgColor}
            textColor={alertMsg.textColor}
            crossHover={alertMsg.crossHover}
            message={alertMsg.message}
          />
        }
      </div>

      <div>
        <div className="bg-white dark:bg-slate-800 overflow-x-auto shadow-md sm:rounded-md">
          <table className="w-full rounded-lg table-auto text-sm text-left">
            <thead className="dark:bg-blue-700 bg-blue-700 text-gray-100 font-medium border-b">
              <tr>
                <th className="py-2 px-6">Title</th>
                <th className="py-2 px-6">Description</th>
                <th className="py-2 px-6">Department</th>
                <th className="py-2 px-6">Update</th>
                <th className="py-2 px-6">Doc</th>
                <th className="py-2 px-6">Status</th>
                <th className="py-2 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-slate-300 divide-y text-xs">
              {
                news.map((item, index) =>
                  <tr key={index}>
                    <td className="px-6 py-3 whitespace-nowrap">{item.title}</td>
                    <td className="px-6 py-3">{item.description}</td>
                    <td className="px-6 py-3 whitespace-nowrap uppercase">{item.department}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{item.lastUpdate}</td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <a target="_blank" href={item.documentLinkUrl}>
                        <svg className="w-6 h-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
                        </svg>
                      </a>
                    </td>
                    <td className='px-6 py-3'>
                      {item.newsStatus === 'Active' && <span className="bg-green-600 text-white text-xs font-medium me-2 px-3 py-0.5 rounded dark:bg-green-700 dark:text-white">
                        {item.newsStatus}
                      </span>}
                      {item.newsStatus === 'In-active' && <span className="bg-yellow-600 text-white text-xs font-medium me-2 px-3 py-0.5 rounded dark:bg-yellow-700 dark:text-white">
                        {item.newsStatus}
                      </span>}
                      {item.newsStatus === 'Removed' && <span className="bg-red-600 text-white text-xs font-medium me-2 px-3 py-0.5 rounded dark:bg-red-700 dark:text-white">
                        {item.newsStatus}
                      </span>}
                    </td>
                    <td className="flex py-2 justify-between items-center">
                      <Link to={`/authenticated/news/update/id/${item.id}`} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-100 rounded-md">
                        <svg className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                        </svg>

                      </Link>
                      <button
                        type="button"
                        onClick={() => openDeleteModal(item.id)}  // Pass the id of the news item
                        className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-100 rounded-md">
                        <svg className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                        </svg>

                      </button>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 px-4 text-gray-600 md:px-0">
          <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 0}
              className="px-3 py-1 border bg-white rounded-lg duration-150 hover:bg-gray-100"
            >
              Previous
            </button>
            <div className='text-black dark:text-white'>
              Page {currentPage + 1} of {totalPages}
            </div>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1}
              className="px-3 py-1 border bg-white rounded-lg duration-150 hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {deleteModal && (
        <NewsDelete
          fetchData={fetchData}
          setdeleteModal={setdeleteModal}
          id={deleteId}
          setAlertMsg={setAlertMsg}
        />
      )}
    </div>
  )
}

export default News
