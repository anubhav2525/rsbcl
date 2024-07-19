import React from 'react'
import CardSection from '../sales/CardSection'

const Dashboard = () => {
    return (
        <div className="p-4 w-full">
            <h2 class="text-2xl text-slate-800 font-bold dark:text-white">Dashboard</h2>
            <h2 class="text-xl text-slate-800 font-medium dark:text-white mt-10">Sales</h2>
            <h2 class="text-sm text-red-600 font-medium mt-4">In BL</h2>
            <CardSection />
            <h2 class="text-sm text-red-600 font-medium mt-4">In CASE</h2>
            <CardSection />
            <h2 class="text-sm text-red-600 font-medium mt-4">In DUTY</h2>
            <CardSection />

            <h2 class="text-xl text-slate-800 font-medium dark:text-white mt-10">Revenue</h2>
            <CardSection />
        </div>
    )
}

export default Dashboard
