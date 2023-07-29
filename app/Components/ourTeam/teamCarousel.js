'use client';
import React, { useState, useEffect } from 'react';

function TeamCarousel() {
    const [activeImage, setActiveImage] = useState(0);
    const images = [
        '/assets/interns/Talha.jpeg',
        '/assets/interns/Zain.jpeg',
        '/assets/interns/Zainab.jpeg',
        '/assets/interns/Shaheer.png',
        '/assets/interns/Moaz.jpg',
        '/assets/interns/Aaiza.jpeg',
        '/assets/interns/Ibrahim.jpeg',
        '/assets/interns/Vaneeza.png',
    ];
    const names = [
        'Talha Hussain',
        'Zain Ali khokhar',
        'Zainab Ali',
        'Shaheer Ahmed',
        'Moaz Malik',
        'Aaiza Faisal',
        'Ibrahim Shahryar',
        'Vaneeza Liaqat',
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            const Index = activeImage + 1;
            setActiveImage(Index);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, [images]);


    const imageElement = () => {
        return (
            <div className='w-full h-auto bg-base-100 flex flex-row'>
                <img
                    src={images[(activeImage) % images.length]}
                    alt={`Image ${activeImage + 1}`}
                    className='w-full h-full object-cover rounded-3xl '
                />
            </div>


        )
    }

    const increaseActiveImage = () => {
        const index = activeImage + 1;
        setActiveImage(index);
    }

    const decreaseActiveImage = () => {
        const index = activeImage - 1;
        setActiveImage(index);
    }


    return (
        <div>
            <h1 className='text-2xl text-gray-700 text-left font-semibold mb-2 px-4 mt-8'>Our Visionaries</h1>
            <div className="card w-screen bg-base-100 rounded-none shadow-xl">
                <figure className="px-1 pt-16 space-x-1">
                    <a onClick={decreaseActiveImage} className="btn btn-circle">❮</a>
                    {imageElement()}
                    <a onClick={increaseActiveImage} className="btn btn-circle">❯</a>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-serif">{names[(activeImage) % images.length]}</h2>
                </div>
            </div>
        </div>
    )

};

export default TeamCarousel;