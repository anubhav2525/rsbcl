import React, { useState } from 'react'
import NewsExciseTab from './Excise/NewsExciseTab';
import NewsrsbclTab from './RSBCL/NewsrsbclTab';
import NewsrsgsmTab from './RSGSM/NewsrsgsmTab';

const NewsTabMenu = () => {
    const [activenews, setactivenews] = useState(<NewsExciseTab />);
    const [activeTab, setactiveTab] = useState("excise");

    return (
        <div>
            <div className='w-full flex items-center justify-between my-3'>
                <div className="w-full">
                    <ul className="w-full flex justify-between text-sm font-bold">
                        <li>
                            <button
                                type="button"
                                className={`inline-block px-2 py-2 border-y-2 rounded-md  ${activeTab === "excise" ? "text-blue-600 border-blue-600 dark:text-blue-700 dark:border-blue-600" : "text-slate-800 dark:text-slate-300 border-slate-500 hover:text-blue-600 hover:border-blue-500 dark:hover:text-blue-600 dark:hover:border-blue-600"}`}
                                onClick={() => {
                                    setactivenews(<NewsExciseTab />)
                                    setactiveTab("excise")
                                }}>
                                Excise
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={`inline-block px-2 py-2 border-y-2 rounded-md  ${activeTab === "rsbcl" ? "text-blue-600 border-blue-600 dark:text-blue-700 dark:border-blue-600" : "text-slate-800 dark:text-slate-300 border-slate-500 hover:text-blue-600 hover:border-blue-500 dark:hover:text-blue-600 dark:hover:border-blue-600"}`}
                                onClick={() => {
                                    setactivenews(<NewsrsbclTab />)
                                    setactiveTab("rsbcl")
                                }}>
                                RSBCL
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={`inline-block px-2 py-2 border-y-2 rounded-md  ${activeTab === "rsgsm" ? "text-blue-600 border-blue-600 dark:text-blue-700 dark:border-blue-600" : "text-slate-800 dark:text-slate-300 border-slate-500 hover:text-blue-600 hover:border-blue-500 dark:hover:text-blue-600 dark:hover:border-blue-600"}`}
                                onClick={() => {
                                    setactivenews(<NewsrsgsmTab />)
                                    setactiveTab("rsgsm")
                                }}>
                                RSGSM
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='my-4'>
                {activenews}
            </div>

        </div>
    )
}

export default NewsTabMenu
