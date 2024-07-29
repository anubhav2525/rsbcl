import React from 'react'

const RevenueList = () => {
    return (
        <div class="relative overflow-x-auto shadow-md bg-slate-100 dark:bg-slate-900">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-white capitalize from-blue-500 via-blue-600 to-blue-700 bg-gradient-to-br  rounded-md ease-in-out hover:shadow transition-all">
                    <tr>
                        <th scope="col" class="px-3 py-2">

                        </th>
                        <th scope="col" class="px-3 py-2">
                            Product name
                        </th>
                        <th scope="col" class="px-3 py-2">
                            Color
                        </th>
                        <th scope="col" class="px-3 py-2">
                            Category
                        </th>
                        <th scope="col" class="px-3 py-2">
                            Price
                        </th>
                        <th scope="col" class="px-3 py-2">
                            Action
                        </th>
                        <th scope="col" class="px-3 py-2">
                            Price
                        </th>
                        <th scope="col" class="px-3 py-2">
                            Action
                        </th>
                        <th scope="col" class="px-3 py-2">
                            Price
                        </th>
                        <th scope="col" class="px-3 py-2">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1
                        </th>
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            AirTag
                        </th>
                        <td class="px-6 py-2">
                            Silver
                        </td>
                        <td class="px-6 py-2">
                            Accessories
                        </td>
                        <td class="px-6 py-2">
                            $29
                        </td>
                        <td class="px-6 py-2">
                            $29
                        </td>
                        <td class="px-6 py-2">
                            $29
                        </td>
                        <td class="px-6 py-2">
                            $29
                        </td>
                        <td class="px-6 py-2">
                            $29
                        </td>

                        <td class="px-6 py-2">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav className='flex justify-end items-center py-2 px-3'>
                <a href="">View more</a>
            </nav>

            {/* <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between p-4" aria-label="Table navigation">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav> */}
        </div>
    )
}

export default RevenueList
