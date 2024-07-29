import React, { useState } from 'react'
import Avatar from './components/Avatar/Avatar';
import Header from './components/Header/Header';
import SalesPage from "./components/Sales/SalesPage";
import RevenuePage from "./components/Revenue/RevenuePage";
import RequirementPage from "./components/Requirement/Requirement";
import ProductionPage from "./components/Production/ProductionPage";
import MobileAppPage from "./components/MobileApp/MobileApp";
import Dashboard from "./components/Dashboard/Dashboard";

const FullPage = () => {

    const [activeContainer, setActiveContainer] = useState(0);

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [department, setdepartment] = useState("excise");

    const [dashboard, setdashboard] = useState(true);
    const [sales, setsales] = useState(false);
    // const [revenue, setrevenue] = useState(false);
    // const [production, setproduction] = useState(false);
    const [employee, setemployee] = useState(false);
    const [mobileApp, setmobileApp] = useState(false);
    const [requirement, setrequirement] = useState(false);
    const [contact, setcontact] = useState(false);
    const [about, setabout] = useState(false);

    return (
        <div className="flex flex-col md:flex-row h-full no-scrollbar overflow-y-auto">
            <div>
                {/* Mobile menu button */}
                <div className="md:hidden p-2">
                    <div className='flex justify-between'>
                        <button onClick={toggleSidebar} className="text-gray-700 dark:text-slate-300 focus:outline-none">
                            {
                                isOpen ?
                                    <svg className="w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        className="w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                            }
                        </button>
                        <div>
                            <div>
                                {/* profile */}
                                <Avatar />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className={`relative ${isOpen ? 'block' : 'hidden'} md:flex h-full no-scrollbar flex-col bg-white bg-clip-border overflow-y-auto dark:bg-slate-900 dark:border-r-slate-500 p-3  text-gray-700 transition-transform md:transform-none`}>
                    <div className="py-1">
                        <h5 className="block px-3 font-sans text-slate-900 dark:text-white text-xl antialiased font-semibold tracking-normal text-blue-gray-900 capitalize">
                            {department}
                        </h5>
                    </div>

                    <nav className="flex flex-col font-sans text-base font-normal text-blue-gray-700">
                        <div className="overflow-hidden">
                            <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">

                                <div
                                    className="flex min-w-[200px] flex-col gap-y-2 px-1 py-2 font-sans text-xs md:text-sm font-normal text-blue-gray-700">

                                    {/* dashboard button  */}
                                    <div className='w-full '>
                                        <button type="button" onClick={() => {
                                            setActiveContainer(0)
                                            setdashboard(true)
                                            setsales(false)
                                            // setrevenue(false)
                                            // setproduction(false)
                                            // setemployee(false)
                                            // setmobileApp(false)
                                            // setrequirement(false)
                                            // setcontact(false)
                                            // setabout(false)
                                        }}
                                            className={`w-full font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  rounded-md ease-in-out hover:shadow transition-all dark:text-white hover:text-white px-2 py-2 ${dashboard ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white rounded-md shadow" : ""}`}>
                                            <div className='flex gap-x-2 items-center'>
                                                <div>
                                                    <svg class="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" />
                                                    </svg>
                                                </div>
                                                <div>Dashboard</div>
                                            </div>
                                        </button>
                                    </div>


                                    {/* sales button */}
                                    <div className='w-full '>
                                        <button type="button"
                                            onClick={() => {
                                                setsales(true)
                                                setdashboard(false)
                                                // setrevenue(false)
                                                // setproduction(false)
                                                // setemployee(false)
                                                // setmobileApp(false)
                                                // setrequirement(false)
                                                // setcontact(false)
                                                // setabout(false)
                                            }}
                                            className={`w-full font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:text-white rounded-md ease-in-out hover:shadow transition-all hover:text-white px-2 py-2 ${(activeContainer === 1 || activeContainer === 2 || activeContainer === 3) ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white rounded-md shadow" : ""}`}>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex gap-x-2 items-center'>
                                                    <div>
                                                        <svg class="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                                                        </svg>
                                                    </div>
                                                    <div>Sales</div>
                                                </div>
                                                <svg class="w-4 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="m19 9-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>

                                    {
                                        sales &&
                                        <div className='flex justify-between w-full items-center'>
                                            <button type="button"
                                                onClick={() => setActiveContainer(1)}
                                                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-md text-sm p-2 px-3 text-center">BL</button>
                                            <button type="button"
                                                onClick={() => setActiveContainer(2)}
                                                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-md text-sm p-2 px-3 text-center">CASE</button>
                                            <button type="button"
                                                onClick={() => setActiveContainer(3)}
                                                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-md text-sm p-2 px-3 text-center">DUTY</button>
                                        </div>
                                    }


                                    {/* revenue button  */}
                                    <div className='w-full'>
                                        <button type="button"
                                            onClick={() => {
                                                setActiveContainer(4)
                                                setsales(false)
                                                setdashboard(false)
                                                // setdashboard(false)
                                                // setrevenue(false)
                                                // setproduction(false)
                                                // setemployee(false)
                                                // setmobileApp(false)
                                                // setrequirement(false)
                                                // setcontact(false)
                                                // setabout(false)

                                            }} className={`w-full font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:text-white rounded-md ease-in-out hover:shadow transition-all hover:text-white px-2 py-2 ${activeContainer === 4 ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white rounded-md shadow" : ""}`}>
                                            <div className='flex gap-x-2 items-center'>
                                                <div>
                                                    <svg class="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 3v4a1 1 0 0 1-1 1H5m4 10v-2m3 2v-6m3 6v-3m4-11v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
                                                    </svg>
                                                </div>
                                                <div>Revenue</div>
                                            </div>
                                        </button>
                                    </div>


                                    {/* Production button */}
                                    {/* <div className='w-full'>
                                        <button type="button" onClick={() => setActiveContainer(3)} className={`w-full font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:text-white rounded-md ease-in-out hover:shadow transition-all hover:text-white px-2 py-2 ${activeContainer === 3 ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white rounded-md shadow" : ""}`}>
                                            <div className='flex gap-x-2 items-center'>
                                                <div>
                                                    <svg class="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                                                    </svg>
                                                </div>
                                                <div>Production</div>
                                            </div>
                                        </button>
                                    </div> */}

                                    {/* Employee button */}
                                    <div className='w-full '>
                                        <button type="button"
                                            onClick={() => {
                                                setActiveContainer(5)
                                                setsales(false)
                                                setdashboard(false)
                                            }} className={`w-full font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:text-white rounded-md ease-in-out hover:shadow transition-all hover:text-white px-2 py-2  ${activeContainer === 5 ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white rounded-md shadow" : ""}`}>
                                            <div className='flex gap-x-2 items-center'>
                                                <div>
                                                    <svg class="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                                    </svg>
                                                </div>
                                                <div>Employee</div>
                                            </div>
                                        </button>
                                    </div>

                                    {/* Mobile App  */}
                                    <div className='w-full '>
                                        <button type="button"
                                            onClick={() => {
                                                setActiveContainer(6)
                                                setsales(false)
                                                setdashboard(false)
                                            }} className={`w-full font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:text-white rounded-md ease-in-out hover:shadow transition-all hover:text-white px-2 py-2 ${activeContainer === 6 ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white rounded-md shadow" : ""}`}>
                                            <div className='flex gap-x-2 items-center'>
                                                <div>
                                                    <svg class="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z" />
                                                    </svg>

                                                </div>
                                                <div>Mobile App</div>
                                            </div>
                                        </button>
                                    </div>

                                    {/* requirement button */}
                                    <div className='w-full '>
                                        <button type="button"
                                            onClick={() => {
                                                setActiveContainer(7)
                                                setsales(false)
                                                setdashboard(false)
                                            }}
                                            className={`w-full font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:text-white rounded-md ease-in-out hover:shadow transition-all hover:text-white px-2 py-2  ${activeContainer === 7 ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white rounded-md shadow" : ""}`}>
                                            <div className='flex gap-x-2 items-center'>
                                                <div>
                                                    <svg class="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
                                                    </svg>

                                                </div>
                                                <div>Requirement</div>
                                            </div>
                                        </button>
                                    </div>

                                    {/* contact us button */}
                                    <div className='w-full '>
                                        <button type="button"
                                            onClick={() => {
                                                setActiveContainer(8)
                                                setsales(false)
                                                setdashboard(false)
                                            }}
                                            className={`w-full font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:text-white rounded-md ease-in-out hover:shadow transition-all hover:text-white px-2 py-2  ${activeContainer === 8 ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white rounded-md shadow" : ""}`}>
                                            <div className='flex gap-x-2 items-center'>
                                                <div>
                                                    <svg class="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                                    </svg>

                                                </div>
                                                <div>Contact us</div>
                                            </div>
                                        </button>
                                    </div>

                                    {/* About us */}
                                    <div className='w-full '>
                                        <button type="button"
                                            onClick={() => {
                                                setActiveContainer(9)
                                                setdashboard(false)
                                                setsales(false)
                                            }} className={`w-full font-medium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:text-white rounded-md ease-in-out hover:shadow transition-all hover:text-white px-2 py-2  ${activeContainer === 9 ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white rounded-md shadow" : ""}`}>
                                            <div className='flex gap-x-2 items-center'>
                                                <div>
                                                    <svg class="w-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                    </svg>
                                                </div>
                                                <div>About us</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div >

            <div className='w-full overflow-auto text-black dark:text-white no-scrollbar'>
                <div className='w-full hidden md:flex'>
                    <Header />
                </div>
                <div className='p-2 bg-slate-50 dark:bg-slate-950 rounded-xl'>
                    {activeContainer === 0 && <Dashboard />}

                    {activeContainer === 1 && <SalesPage />}
                    {activeContainer === 2 && <div>container 2</div>}
                    {activeContainer === 3 && <div>container 3</div>}
                    {activeContainer === 4 && <div><RevenuePage /></div>}
                    {activeContainer === 5 && <div>container 5</div>}
                    {activeContainer === 6 && <div>container 6</div>}
                    {activeContainer === 7 && <div>container 7</div>}
                    {activeContainer === 8 && <div>container 8</div>}
                    {activeContainer === 9 && <div>container 9</div>}
                </div>
            </div>
        </div >
    )
}

export default FullPage
