import React, { useContext } from 'react'
import CardSection from '../CardSection'
import SalesCountryLiquor from './CountryLiquor/SalesCountryLiquor'
import SalesBeer from './beer/SalesBeer'
import SalesRml from './rml/SalesRml'
import SalesImfl from './imfl/SalesImfl'
import { currentYear } from '../../../context/administrativeDashboard/CurrentYear'

const SalesTab = ({ children }) => {
    const context = useContext(currentYear);
    // console.log(context.year, context.category);

    return (
        <div className='p-4 w-full h-full overflow-y-auto  no-scrollbar'>
            <div className='flex justify-between items-end'>
                <h2 className="text-2xl text-slate-800 font-bold dark:text-white">Sales</h2>
                <div className="text-sm text-red-600 font-medium mt-4">In {children}</div>
            </div>

            <CardSection year={context.year} category={children} />

            <div className='my-4'>
                <SalesCountryLiquor year={context.year} category={children}>{children}</SalesCountryLiquor>
                <SalesBeer year={context.year} category={children}>{children}</SalesBeer>
                <SalesRml year={context.year} category={children}>{children}</SalesRml>
                <SalesImfl year={context.year} category={children}>{children}</SalesImfl>
            </div>
        </div>
    )
}

export default SalesTab
