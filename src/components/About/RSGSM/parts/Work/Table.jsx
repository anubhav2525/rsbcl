import React from 'react'
import SugarCaneTable from "./sugarDivision/SugarCaneTable";
import FinanceTable from "./sugarDivision/FinanceTable";
import ProfitLossTable from "./sugarDivision/ProfitLossTable"
const Table = () => {
    return (
        <div className="my-4">
            {/* sugar cane table */}
            <SugarCaneTable />

            <div className="grid md:grid-cols-2 overflow-x-auto gap-4 mt-4">
                {/* financial table */}
                <FinanceTable />

                {/* profit los table */}
                <ProfitLossTable />
            </div>
        </div>
    )
}

export default Table
