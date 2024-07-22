import React from 'react'
import { Outlet } from 'react-router-dom'
const SinglePage = () => {
    return (
        <div className='w-screen h-screen bg-white dark:bg-slate-900'>
            <Outlet />
        </div>
    )
}

export default SinglePage
