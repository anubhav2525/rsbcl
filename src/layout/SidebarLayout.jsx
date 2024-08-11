import React from 'react'
import Sidebar from '../authenticated/components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../authenticated/components/Header/Header'

const SidebarLayout = () => {
    return (
        <div className='max-h-screen overflow-y-scroll no-scrollbar bg-slate-50 dark:bg-slate-900'>
            <div className="flex flex-col md:flex-row h-full">
                <div className='h-full overflow-auto'>
                    <Sidebar />
                </div>
                <div className='flex-1 h-full overflow-auto text-black dark:text-white'>
                    <div className='w-full hidden md:flex'>
                        <Header />
                    </div>
                    <div className='w-full bg-slate-50 rounded-md dark:border-t dark:border-slate-500 dark:bg-slate-900 no-scrollbar overflow-auto max-h-[calc(100vh-4rem)]'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarLayout
