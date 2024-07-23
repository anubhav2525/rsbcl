import React from 'react'
import SalesShortcut from './SalesShortcut'
import SalesSearch from './SalesSearch';
import SalesAdd from "./SalesAdd"

const SalesPage = () => {
   

    return (
        <div className='w-full overflow-auto no-scrollbar'>
            {/* <SalesSearch />*/}
            <SalesAdd />
            <SalesShortcut />
        </div>
    )
}

export default SalesPage
