import React from 'react'
import Sidebar from '../authenticated/components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../authenticated/components/Header/Header'

const SidebarLayout = () => {
    return (
        <div className='max-h-screen overflow-y-scroll no-scrollbar'>
            <div className="flex flex-col md:flex-row h-full">
                <div className='h-full overflow-auto'>
                    <Sidebar />
                </div>
                <div className='flex-1 h-full overflow-auto text-black dark:text-white'>
                    <div className='w-full hidden md:flex'>
                        <Header />
                    </div>
                    <div className=' w-full bg-slate-50 dark:bg-slate-950 no-scrollbar overflow-auto max-h-[calc(100vh-3rem)]'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarLayout
