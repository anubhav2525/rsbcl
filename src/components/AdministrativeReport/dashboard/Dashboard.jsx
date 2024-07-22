import React, { useContext } from 'react'
import CardSection from '../CardSection';
import { currentYear } from '../../../context/administrativeDashboard/CurrentYear'

const Dashboard = () => {
    const context = useContext(currentYear);
    return (
        <div className="p-4 w-full h-full overflow-y-auto">
            <h2 className="text-2xl text-slate-800 font-bold dark:text-white">Dashboard {context.year}</h2>
            <div className='flex justify-between items-end mt-3'>
                <h2 className="text-xl text-slate-800 font-medium dark:text-white">Sales</h2>
                <h4 className="text-sm text-red-600 font-medium mt-4">In BL</h4>
            </div>
            <CardSection />
            <h4 className="text-sm text-red-600 text-end font-medium mt-4">In CASE</h4>
            <CardSection />
            <h4 className="text-sm text-red-600 text-end font-medium mt-4">In DUTY</h4>
            <CardSection />
            <h4 className="text-xl text-slate-800 font-medium dark:text-white mt-10">Revenue</h4>
            <CardSection />
        </div>
    )
}

export default Dashboard
