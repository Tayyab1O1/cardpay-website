'use client';
import React, { useState, useEffect } from 'react';

function MyCarousel() {
    const [activeImage, setActiveImage] = useState(0);
    const images = [
        '/assets/partners/Finja.png',
        '/assets/partners/LUMS.png',
        '/assets/partners/paypro.png',
        '/assets/partners/meezan.png',
        '/assets/partners/bunkers.png',
        '/assets/partners/chopChop.png',
        '/assets/partners/Frooti.png',
        '/assets/partners/jamminJava.png',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            const Index = activeImage + 1;
            setActiveImage(Index);
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, [images]);


    const imageElement = (index) => {
        return (
            <div className='w-1/3 h-auto bg-white'>
                <div className='lg:hidden'>
                    <img
                        src={images[(activeImage + index) % 8]}
                        alt={`Image ${activeImage + 1}`}
                        style={{ maxWidth: '65px', maxHeight: '65px', width: 'auto', height: 'auto' }}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='lg:flex hidden'>
                    <img
                        src={images[(activeImage + index) % 8]}
                        alt={`Image ${activeImage + 1}`}
                        style={{ maxWidth: '50%', height: 'auto' }}
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>


        )
    }

    return (
        <div className='mt-6 lg:mt-20 lg:mb-20 lg:px-44'>
            <h1 className='text-blue-500 font-semibold text-3xl lg:text-6xl mb-4 text-left px-6'>Our Partners</h1>
            <div className='flex flex-row pl-6 lg:ml-36 lg:pl-0 lg:mt-8 '>
                {imageElement(0)}
                {imageElement(1)}
                {imageElement(2)}
            </div>
        </div>
    )

};

export default MyCarousel;
