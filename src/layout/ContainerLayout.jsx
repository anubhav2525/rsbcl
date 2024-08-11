import React from 'react'
import { Outlet } from 'react-router-dom'

const ContainerLayout = () => {
    return (
        <div className='w-full h-full rounded-md'>
            <Outlet />
        </div>
    )
}

export default ContainerLayout
