import React from 'react'

const Alert = ({ bgColor, textColor, crossHover, message, children }) => {

    return (
        <div className={`flex items-center justify-between p-2 px-4 mb-4 ${bgColor} rounded-lg ${textColor}`}>
            <div className='flex items-center'>
                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">{children}</span>
                <div className="ms-3 text-sm font-medium">
                    {message}
                </div>
            </div>
        </div>
    );
};

export default Alert
