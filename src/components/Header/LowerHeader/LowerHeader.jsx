import React from 'react'

const LowerHeader = () => {
    return (
        <div className="flex items-center justify-between py-3 px-4 w-full sm:w-[90%] sm:mx-auto md:w-[80%] md:mx-auto bg-white">
            {/* Left Section with Emblem and Text  */}
            <div className="flex items-center space-x-4">
                <div className='space-y-2'>
                    <img src="https://pbs.twimg.com/profile_images/1226809871649001472/sSOTfL0L_400x400.jpg" alt="Emblem" className="h-20" />
                    <p className="text-sm">सत्यमेव जयते</p>
                </div>
                <div className="text-black">
                    <h1 className="text-xl font-bold">आर्थिक कार्य विभाग</h1>
                    <h2 className="text-lg">DEPARTMENT OF</h2>
                    <h2 className="font-bold text-2xl">Excise</h2>
                </div>
            </div>
            {/* Right Section with G20 Logo */}
            <div className='hidden sm:flex'>
                <img src="https://excise.rajasthan.gov.in/image/mainLogo.png" alt="G20 Logo" className="h-20" />
            </div>
        </div >
    )
}

export default LowerHeader
