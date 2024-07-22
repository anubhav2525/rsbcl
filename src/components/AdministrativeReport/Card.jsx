import React from 'react'

const Card = ({ price, percentage, category }) => {
  const isPositive = percentage >= 0;

  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:bg-slate-50 dark:bg-gradient-to-r dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 dark:hover:bg-gradient-to-br dark:border-0 dark:border-slate-700 bg-white p-3 transform transition duration-500 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-bold text-gray-600 dark:text-white uppercase tracking-wide">{category}</div>
        <div className={`text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? `+${percentage}%` : `${percentage}%`}
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-4">${price}</div>
      <div className="">
        <div className="flex items-center relative text-xs justify-end">
          <div className="text-gray-500 dark:text-slate-100">Updated just now</div>
          <span className="flex w-2 h-2 ml-2 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </div>
  )
}

export default Card
