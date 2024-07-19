import React from 'react'

const Footer = () => {
  return (
    <div className="p-4 border-t border-slate-300 bg-slate-100 dark:border-slate-700 lg:p-6 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl text-start">
        <div className='md:flex justify-between '>
          <a href="#" className="flex justify-start items-center text-2xl font-semibold text-gray-900 dark:text-white">
            Government of Rajasthan
          </a>
          <p className="my-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">Rajasthan State Beverages Corporation Limited (RSBCl)</p>
        </div>
        <ul className="flex flex-wrap justify-center text-xs items-center mb-4 text-gray-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
        </ul>
        <span className="text-xs text-gray-500 flex justify-center dark:text-gray-400">© 2024 Government of Rajasthan. All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Footer
