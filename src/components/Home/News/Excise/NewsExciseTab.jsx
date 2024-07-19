import React from 'react'

const NewsExciseTab = () => {
    const pressReleases = [
        {
            date: "15 Jul 2024",
            title: "Press Release for auction of G-Sec-15.07.2024",
            size: "325.68 KB",
            fileUrl: "https://file-examples.com/storage/fe9f6f893066954d9aac3a2/2017/10/file-sample_150kB.pdf",
            pdfName: ""
        },
        {
            date: "08 Jul 2024",
            title: "Press Release for auction of G-Sec-08.07.2024",
            size: "325.71 KB",
            fileUrl: "https://file-examples.com/storage/fe9f6f893066954d9aac3a2/2017/10/file-sample_150kB.pdf",
            pdfName: ""
        },
        {
            date: "03 Jul 2023",
            title: "Press Release 8.40% GS 2024 Repayment",
            size: "476.14 KB",
            fileUrl: "https://file-examples.com/storage/fe9f6f893066954d9aac3a2/2017/10/file-sample_150kB.pdf",
            pdfName: ""
        },
        {
            date: "01 Jul 2025",
            title: "Press Release for auction of G-Sec-01.07.2024",
            size: "326.46 KB",
            fileUrl: "https://file-examples.com/storage/fe9f6f893066954d9aac3a2/2017/10/file-sample_150kB.pdf",
            pdfName: ""
        },
        {
            date: "28 Jun 2022",
            title: "Press Release for auction of G-Sec",
            size: "300.22 KB",
            fileUrl: "https://icseindia.org/document/sample.pdf",
            pdfName: ""
        }
    ];

    const handleDownload = (url, filename) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename); // Specify download attribute with filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="w-full">
            {pressReleases.map((item, index) => (
                <div key={index} className="border-y w-full border-gray-200 py-4">
                    <div className="flex items-center space-x-4 w-full">
                        <div className="bg-orange-500 dark:bg-orange-600 w-20 sm:w-16 h-14 text-white rounded-lg flex flex-col items-center justify-center">
                            <span className="text-sm md:text-base font-bold">{item.date.split(' ')[0]}</span>
                            <div>
                                <span className="text-xs mr-1">{item.date.split(' ')[1]}</span>
                                <span className="text-xs">{item.date.split(' ')[2]}</span>
                            </div>
                        </div>
                        <div className='w-full cursor-pointer'>
                            <div className="text-blue-500 text-xs sm:text-sm hover:text-black dark:hover:text-blue-800">{item.title}</div>
                            <div className='w-full flex justify-between items-end' >
                                <div className="text-gray-500 text-xs sm:text-sm">{item.size}</div>
                                <div className="flex text-xs sm:text-sm items-center gap-x-3">
                                    <button onClick={() => handleDownload(item.fileUrl, item.pdfName)} className='flex justify-between items-end gap-x-2 transition duration-200'>
                                        {/* <span className='text-gray-500 dark:text-slate-400 text-xs sm:text-sm'>Download</span> */}
                                        <svg className="w-6 text-gray-500 hover:text-gray-600 dark:hover:text-slate-200 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='pt-4'>
                <button type="button" className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white font-medium rounded-full text-sm px-5 py-2 text-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600">View all</button>
            </div>
        </div>
    )
}

export default NewsExciseTab
