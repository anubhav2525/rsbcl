import React from 'react'

const SaveLoader = () => {
    return (

        <div class="relative  flex justify-center z-100 items-center w-full h-full">
            <div class='text-center p-10  bg-blue-50 dark:bg-slate-100 rounded-xl'>
                <div >
                    <div
                        class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-700 mx-auto "
                    ></div>
                    <h2 class="text-zinc-900 text-lg mt-4">Information process...</h2>
                    <p class="text-zinc-600 dark:text-zinc-400">
                        Please wait sometime..
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SaveLoader
