import React, { useContext, useState } from 'react'
import CardSection from '../CardSection'
import RevenueImfl from './imfl/RevenueImfl'
import RevenueRml from './rml/RevenueRml'
import RevenueBeer from './beer/RevenueBeer'
import RevenueCountryLiquor from "./countryLiquor/RevenueCountryLiquor"
import { currentYear } from '../../../context/administrativeDashboard/CurrentYear'

const RevenueTab = () => {

    // card
    const [category, setcategory] = useState("");
    const [cardname, setcardname] = useState("");

    const context = useContext(currentYear);
    return (
        <div className='p-4 w-full h-full overflow-y-aut0 overflow-x-auto sm:no-scrollbar'>
            <div className='flex justify-between items-end'>
                <h2 className="text-2xl text-slate-800 font-bold dark:text-white">Revenue</h2>
            </div>
            <CardSection year={context.year} />
            <div className='my-4 overflow-x-auto sm:no-scrollbar'>
                <RevenueBeer year={context.year} />
                <RevenueCountryLiquor year={context.year} />
                <RevenueImfl year={context.year} />
                <RevenueRml year={context.year} />
            </div>
        </div>
    )
}

export default RevenueTab
