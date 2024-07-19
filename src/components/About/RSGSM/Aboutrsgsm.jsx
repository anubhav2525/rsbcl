import React from 'react'
import BreadCrumb from './parts/BreadCrumb'
import History from './parts/History'
import Objectives from './parts/Objectives'
import Management from './parts/Management'
import OrganisationalStructure from './parts/OrganisationalStructure'
import Work from './parts/Work'
import RajasthanHeritageLiquor from "./parts/RajasthanHeritageLiquor"
import TurnOverProfit from './parts/TurnOverProfit'
import CsrActivities from './parts/CsrActivities'
import TechnologicalEnhancement from './parts/TechnologicalEnhancement'
import FuturePlans from "./parts/FuturePlans";

const Aboutrsgsm = () => {
    return (
        <div className='w-full rounded-md mx-auto px-4 pb-4 md:w-[80%] shadow-lg dark:shadow-xl dark:shadow-slate-700'>
            {/* breadcrumb */}
            <BreadCrumb />

            {/* history */}
            <History />

            {/* objectives */}
            <Objectives />

            {/* management  */}
            <Management />

            {/* organisational Structure */}
            <OrganisationalStructure />

            {/* work */}
            <Work />

            {/* Rajasthan Heritage Liquor */}
            <RajasthanHeritageLiquor />

            {/* TurnOverProfit */}
            <TurnOverProfit />

            {/* CsrActivities */}
            <CsrActivities />

            {/* Technological Enhancement */}
            <TechnologicalEnhancement />

            {/* Future Plans */}
            <FuturePlans />
        </div>
    )
}

export default Aboutrsgsm
