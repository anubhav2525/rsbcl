import React, { useState } from 'react'
import Dashboard from './dashboard/Dashboard';
import SalesTab from './sales/SalesTab';
import RevenueTab from './revenue/RevenueTab';
import { currentYear } from '../../context/administrativeDashboard/CurrentYear';

const AdministrativeReport = () => {

  const [activeContainer, setActiveContainer] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [salesOption, setsalesOption] = useState(false);
  const [year, setYear] = useState(2024);

  return (
    <currentYear.Provider value={{ year, setYear }}>
      <div className="flex flex-col md:flex-row h-full  no-scrollbar overflow-y-auto">
        <div>
          {/* Mobile menu button */}
          <div className="md:hidden p-2">
            <button onClick={toggleSidebar} className="text-gray-700 dark:text-slate-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                className="w-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Sidebar */}
          <div className={`relative ${isOpen ? 'block' : 'hidden'} md:flex flex-col md:rounded-r-3xl bg-slate-50 bg-clip-border h-full dark:bg-slate-900 md:border-r-2 dark:border-r-slate-500 p-3 text-gray-700 shadow-2xl shadow-blue-gray-900/5 transition-transform md:transform-none`}>
            <div className="py-1 text-center">
              <h5 className="block font-sans text-slate-900 dark:text-white text-xl antialiased font-semibold tracking-normal text-blue-gray-900">
                Administration Report
              </h5>
            </div>

            <nav className="flex flex-col font-sans text-base font-normal text-blue-gray-700">
              <div className="overflow-hidden">
                <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                  {/* current year */}
                  <div
                    className="flex min-w-[240px] flex-col gap-y-2 px-3 py-2 font-sans text-base font-normal text-blue-gray-700">
                    <div className='my-2'>
                      <form className="max-w-sm mx-auto">
                        <label htmlFor="currentYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          <div className='flex justify-between items-end px-1'>
                            <div>Current year</div>
                            <div>{year}</div>
                          </div>
                        </label>
                        <select id="currentYear" onChange={(e) => setYear(e.target.value)} className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option value="2024">2024-2025</option>
                          <option value="2023">2023-2024</option>
                          <option value="2022">2022-2023</option>
                        </select>
                      </form>
                    </div>

                    {/* revenue button  */}
                    <div className='w-full '>
                      <button type="button" onClick={() => setActiveContainer(0)} className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-md shadow-lg text-base px-5 py-2">
                        <div className='flex gap-x-4 items-center'>
                          <div>
                            <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" />
                            </svg>
                          </div>
                          <div>Dashboard</div>
                        </div>
                      </button>
                    </div>

                    {/* sales button */}
                    <div className='w-full '>
                      <button type="button" onClick={() => setsalesOption(!salesOption)} className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-md shadow-lg text-base px-5 py-2">
                        <div className='flex justify-between items-center'>
                          <div className='flex gap-x-4 items-center'>
                            <div>
                              <svg className="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" />
                              </svg>
                            </div>
                            <div>Sales</div>
                          </div>
                          <div>
                            <svg className="w-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>

                    {
                      salesOption &&
                      <div className='flex justify-between items-center'>
                        <button type="button" onClick={() => setActiveContainer(1)} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-md text-sm px-5 py-2 text-center">BL</button>
                        <button type="button" onClick={() => setActiveContainer(2)} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-md text-sm px-5 py-2 text-center">CASE</button>
                        <button type="button" onClick={() => setActiveContainer(3)} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-md text-sm px-5 py-2 text-center">DUTY</button>
                      </div>
                    }

                    {/* revenue button  */}
                    <div className='w-full '>
                      <button type="button" onClick={() => setActiveContainer(4)} className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-md shadow-lg text-base px-5 py-2">
                        <div className='flex gap-x-4 items-center'>
                          <div>
                            <svg className="w-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                            </svg>
                          </div>
                          <div>Revenue</div>
                        </div>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className=' dark:bg-slate-900 bg-slate-50 w-full overflow-auto text-black dark:text-white'>
          {/* dashboard */}
          {activeContainer === 0 && (<Dashboard />)}

          {/* sales BL */}
          {activeContainer === 1 && (<SalesTab>BL</SalesTab>)}

          {/* sales CASE */}
          {activeContainer === 2 && (<SalesTab>CASE</SalesTab>)}

          {/* sales DUTY */}
          {activeContainer === 3 && (<SalesTab>DUTY</SalesTab>)}

          {/* Revenue */}
          {activeContainer === 4 && (<RevenueTab />)}
        </div>
      </div>
    </currentYear.Provider>
  );
};
export default AdministrativeReport;