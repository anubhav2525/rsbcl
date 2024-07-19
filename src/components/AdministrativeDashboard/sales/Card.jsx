import React from 'react'

const Card = ({ price, percentage, category }) => {
  const isPositive = percentage >= 0;

  return (
    <div className="rounded-lg border-2 overflow-hidden shadow-lg bg-white p-4 transform transition duration-500 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{category}</div>
        <div className={`text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? `+${percentage}%` : `${percentage}%`}
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-4">${price}</div>
      <div className="">
        <div className="flex items-center relative text-xs justify-end">
          <div className="text-gray-500">Updated just now</div>
          <span class="flex w-2 h-2 ml-2 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </div>
  )
}

export default Card
