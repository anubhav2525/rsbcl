import React from 'react'
import CardSection from './CardSection'
import SalesCountryLiquor from './CountryLiquor/SalesCountryLiquor'
import SalesBeer from './beer/SalesBeer'
import SalesRml from './rml/SalesRml'
import SalesImfl from './imfl/SalesImfl'

const SalesTab = ({ children }) => {
    return (
        <div className='p-4 w-full h-full overflow-y-auto'>
            <div className='flex justify-between items-end'>
                <h2 className="text-2xl text-slate-800 font-bold dark:text-white">Sales</h2>
                <div className="text-sm text-red-600 font-medium mt-4">In {children}</div>
            </div>
            <CardSection />

            <div className='my-4'>
                <SalesCountryLiquor>{children}</SalesCountryLiquor>
                <SalesBeer>{children}</SalesBeer>
                <SalesRml>{children}</SalesRml>
                <SalesImfl>{children}</SalesImfl>
            </div>

        </div>
    )
}

export default SalesTab
