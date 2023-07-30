'use client';
import React, { useEffect, useState } from 'react';

const YouTubeVideo = ({ closeModal }) => {

    const [screenHeight, setScreenHeight] = useState(0);
    const [screenWidth,setScreenWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setScreenHeight(window.innerHeight);
            setScreenWidth(window.innerWidth);
        };

        // Initial call to set the screen width and height on mount
        handleResize();
        console.log(screenHeight);
        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenHeight]);


    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded text-black relative">
                <div className='w-screen'>
                    <a
                        className=" text-gray-800 "
                        onClick={closeModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /> </svg>
                    </a>
                </div>
                <iframe
                    height={screenHeight * 2 / 3}
                    width={screenWidth}
                    src="https://www.youtube.com/embed/tOpx-aOqqJk?autoplay=1"
                    title="YouTube video player"
                    allowFullScreen
                ></iframe>
            </div>
        </div>

    );
};

export default YouTubeVideo;


// {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/tOpx-aOqqJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}