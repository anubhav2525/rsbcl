import React from 'react'
import CardSection from '../sales/CardSection'
import RevenueImfl from './imfl/RevenueImfl'
import RevenueRml from './rml/RevenueRml'
import RevenueBeer from './beer/RevenueBeer'
import RevenueCountryLiquor from "./countryLiquor/RevenueCountryLiquor"

const RevenueTab = () => {
    return (
        <div className='p-4 w-full h-full overflow-y-auto'>
            <div className='flex justify-between items-end'>
            <h2 className="text-2xl text-slate-800 font-bold dark:text-white">Revenue</h2>
            </div>
            <CardSection />
            <div className='my-4'>
                <RevenueImfl />
                <RevenueRml />
                <RevenueCountryLiquor />
                <RevenueBeer />
            </div>
        </div>
    )
}

export default RevenueTab
