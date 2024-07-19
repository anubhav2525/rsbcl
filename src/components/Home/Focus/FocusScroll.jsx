import React, { useRef, useEffect } from 'react'

const FocusScroll = () => {
    const listRef = useRef(null);

    useEffect(() => {
        const scrollContainer = listRef.current;

        let isScrolling = true;
        const scrollSpeed = 1; // Adjust scroll speed here

        const scroll = () => {
            if (scrollContainer) {
                scrollContainer.scrollTop += scrollSpeed;
                if (
                    scrollContainer.scrollTop + scrollContainer.clientHeight >=
                    scrollContainer.scrollHeight
                ) {
                    scrollContainer.scrollTop = 0;
                }
            }
            if (isScrolling) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);

        return () => {
            isScrolling = false;
        };
    }, []);

    const items = [
        {
            name: "Lorem ipsum dolor sit.",
            link: ""
        },
        {
            name: "Lorem ipsum dolor sit amet.",
            link: ""
        },
        {
            name: "Lorem ipsum dolor sit amet. lorem dsf sdf ",
            link: ""
        },
        {
            name: "Lorem ipsum dolor sit amet. lorem dsf sdf ",
            link: ""
        },
        {
            name: "Lorem ipsum dolor sit amet. lorem dsf sdf ",
            link: ""
        },
        {
            name: "Lorem ipsum dolor sit amet. lorem dsf sdf ",
            link: ""
        },
        {
            name: "Lorem ipsum dolor sit amet. lorem dsf sdf ",
            link: ""
        },
        {
            name: "Lorem ipsum dolor sit amet. lorem dsf sdf ",
            link: ""
        },
        {
            name: "Lorem ipsum dolor sit amet. lorem dsf sdf ",
            link: ""
        },
        {
            name: "Lorem ipsum dolor sit amet. lorem dsf sdf ",
            link: ""
        },
        {
            name: "Lorem ipsum dolor sit amet. lorem dsf sdf ",
            link: ""
        },
    ]

    return (
        <div className="w-full sm:mt-16 border-t">
            <div
                ref={listRef}
                className="max-h-96 overflow-hidden h-full"
            >
                <ul className="divide-y divide-gray-200">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="py-4 px-2 text-center"
                        >
                            <div className='flex gap-x-2 cursor-pointer items-center justify-start text-sm'>
                                <div>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                                    </svg>
                                </div>
                                <div className="text-blue-500 text-xs sm:text-sm hover:text-black dark:hover:text-blue-800">{item.name}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FocusScroll
