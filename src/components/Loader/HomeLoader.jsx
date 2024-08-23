import React from 'react'

const HomeLoader = () => {
    return (
        <div className="flex-col mt-4 gap-4 w-full flex items-center justify-center">
            <div
                className="w-12 h-12 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
            >
                <div
                    className="w-16 h-16 border-4 border-transparent text-blue-400 text-2xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                ></div>
            </div>
        </div>

    )
}

export default HomeLoader
