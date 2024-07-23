import React from 'react'
import Avatar from '../Avatar/Avatar'
import DarkButton from '../../../components/DarkButton/DarkButton'

const Header = () => {
    return (
        <div className="py-2 bg-white dark:bg-slate-900 w-full px-4 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold dark:text-white">Goverment of Rajasthan</h3>
            </div>
            <div className='flex gap-3'>
                <DarkButton classes="text-slate-950 dark:text-white shadow-inner shadow-stone-100 border-white hover:bg-slate-50 rounded-lg border dark:border-slate-800 dark:shadow-slate-800 dark:shadow-m dark:shadow-inner dark:hover:bg-slate-950 p-2 " width="w-6" />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
