import React, { useState } from 'react';

const ContactCard = ({ props }) => {
    const [data, setData] = useState(props);
    console.log(data);

    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl shadow-lg p-6 flex justify-start items-start">
            <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-4">{data.branch}</h2>
                <div className="flex items-center mb-2">
                    <svg className="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                    </svg>
                    <span className='ml-3'>{data.address}</span>
                </div>

                <div className="flex items-center mb-2">
                    <svg className="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                    </svg>
                    <span className='ml-3 flex flex-col'>
                        {data.contactNo.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </span>
                </div>

                <div className="flex items-center mb-2">
                    <svg className="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                        <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                    </svg>
                    <span className='ml-3'>{data.email}</span>
                </div>

                <div className="flex items-center mb-2">
                    <svg className="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4a1 1 0 0 1-1 1H9Z" clipRule="evenodd" />
                    </svg>
                    <span className='ml-3'>{data.faxNo}</span>
                </div>
            </div>
            <div className="hidden md:flex flex-shrink-0 align-bottom ml-4">
                <img src={data.imageLink} alt={data.branch} className="w-20 h-20 lg:w-40 lg:h-40 object-cover rounded-2xl" />
            </div>
        </div>
    );
}

export default ContactCard;
