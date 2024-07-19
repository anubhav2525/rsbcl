import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FuturePlans = () => {
    // api
    const [furutePlans, setFuturePlans] = useState([]);
    // useEffect(() => {
    //     axios.get("/api/v1/about-rsgsm/future-plans") // Use the proxied URL
    //         .then((res) => {
    //             setFuturePlans(res.data);
    //             console.log('Response data:', res.data); // Log the response data
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error); // Log any errors
    //         });
    // }, []);

    return (
        <div className="my-4 md:w-[90%] mx-auto">
            <h2 className="my-2 text-lg font-bold text-gray-800 dark:text-white">
                Future Plans :
            </h2>

            <p className="my-2 text-xs sm:text-sm md:text-base text-justify text-gray-700 tracking-wide dark:text-gray-400">
                Rajasthan State Ganganagar Sugar Mills Limited (RSGSM) has its own vision to grow and diverse its sectors. This involves Information Technology (IT) Integration, Human Resource Advancement, Process Automation and Infrastructure Upgradation to the optimal and ideal stage.
            </p>

            <p className="my-2 text-xs sm:text-sm md:text-base text-justify text-gray-700 tracking-wide dark:text-gray-400">
                Rajasthan State Ganganagar Sugar Mills Limited (RSGSM) has reserved the rights of follwing Brand Names as Trade Mark
            </p>


            {/* future plans table  */}
            <div className="mx-auto rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 dark:shadow-lg text-left rounded-md">
                        <thead>
                            <tr className="w-full bg-blue-700 dark:bg-blue-600 text-xs lg:text-sm text-white">
                                <th className="py-2 px-4 border-x border-slate-400">Name</th>
                                <th className="py-2 px-4 border-x border-slate-400">Designation</th>
                            </tr>
                        </thead>
                        <tbody className='text-slate-800 dark:text-slate-300'>
                            <tr className='text-xs md:text-sm'>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">Ms. Chandni Raina</td>
                                <td className="border border-slate-200 dark:border-slate-400 py-2 px-4">Economic Adviser, DEA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="my-2 text-xs sm:text-sm md:text-base text-justify text-gray-700 tracking-wide dark:text-gray-400">Some other names with geographical identity is in due process of rights. In future, RSGSM also intends to enter in Healthcare Products and promote Self-Help Groups (SHGs) in their own way.</p>

            <p className="my-2 text-xs sm:text-sm md:text-base text-justify text-gray-700 tracking-wide dark:text-gray-400">In Infrastructure Upgradation there is plan of <strong>Integrated Reduction Centre & Depot Centre (IRDC), Integrated Modern and Model Depots (IMMD)</strong> and Improvement of Traditional Distilleries in its heritage premises.</p>

            <div className="my-4 flex justify-center">
                <img src="https://excise.rajasthan.gov.in/Images/Reduction%20center.png" alt="" className="sm:h-64" />
            </div>

            <p className="my-2 text-xs sm:text-sm md:text-base text-justify text-gray-700 tracking-wide dark:text-gray-400">Rajasthan State Ganganagar Sugar Mills Limited (RSGSM) always welcomes ideas to improve its products and process. It also facilitates the development partners and stakeholders in its legal and permissible framework.</p>
        </div>
    )
}

export default FuturePlans
